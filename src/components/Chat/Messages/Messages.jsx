import { Box, Text, Image, TextField, Button } from '@skynexui/components';
import colors from "../../../common/colors.json"
import ReceivedMessage from './ReceivedMessage/ReceivedMessage';
import SendedMessage from './SendedMessage/SendedMessage';
import sendIcon from "../../../../public/send-message.svg"
import { supabase } from '../../../common/utils/supabaseClient';
import { useEffect, useState } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [submitMessage, setSubmitMessage] = useState(false)
  const [sessionId, setSessionId] = useState()

  function handleInputValue(element) {
    const inputValue = element.target.value 
    console.log(inputValue)
    setInputMessage(inputValue)
  }

  function handleSubmitMessage(event) {
    event.preventDefault()
    if(inputMessage) setSubmitMessage(test => !test)
  }

  useEffect(() => {
    const session = supabase.auth.session()
    session ? setSessionId(session.user.id) : console.error('não foi possível pegar os dados da sessão.')
   }, [])


  useEffect(() => {
    function insertRealTime (addMessage) {
      const mySubscription = supabase
        .from('messages')
        .on('*', response => {
          console.log(response.new)
         addMessage(response.new)
        })
        .subscribe()

        return mySubscription
    }

    async function fetchMessages() {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('id', { ascending: true })    
        setMessages( data)  
    }

    if(inputMessage) {
      async function createMessage() {
        const { data, error } = await supabase
          .from('messages')
          .insert([
            { username: 'jato', message: inputMessage, session_id: sessionId}           
        ])
        setInputMessage('')
      }
      createMessage()      
    }  
    fetchMessages()
    insertRealTime(newMessage => {
      console.log(newMessage)
      setMessages(oldMessages => [...oldMessages, newMessage])
    })

    setTimeout(() => {
      const chat = document.querySelector("#chatBox")
      window.document.querySelector('#chatBox').scrollTo(0, chat.scrollHeight) 
    }, 200)

   }, [submitMessage])

  return (
    <>
      <Box
        id="chatBox"
        styleSheet={{
          backgroundColor: colors.neutrals['black-300'],
          padding: '1.6rem',
          margin: {xs: '0.8rem', sm: 0},
          marginTop: '1.2rem',
          borderRadius: '0.8rem',
          height: { xs: '95%', md: '95%' },
          overflowY: 'scroll',
          scrollBehavior: 'smooth'
        }}
      >
        <Box 
          as='ul'
          styleSheet={{paddingBottom: '4rem'}}
        >
          {
            messages &&
            messages.map((data, index) => {
              if(data.session_id === sessionId) {
                return <SendedMessage messageData={data} key={index + '-SD'} />
                
              } else {
                return <ReceivedMessage messageData={data} key={index + '-RC'}  />
              }
            })
          }
        </Box>
      </Box>

      <Box
        as='form'
        onSubmit={event => {
          console.log(event)
          handleSubmitMessage(event) 
        }}
        styleSheet={{
          position: 'relative',
          top: '-70px',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          padding: '0 2.5rem'
        }}
      >

        <TextField
          type='textarea'
          placeholder='digite sua mensagem aqui'
          onKeyPress={(event) => {if(event.key ==='Enter') handleSubmitMessage(event)}}
          onChange={element => handleInputValue(element)}
          rounded='full'
          value={inputMessage}
          styleSheet={{ 
            width: '90%', 
            minHeight: '100%',
            maxHeight: '50rem',
            overflowY: 'auto',
            
          }}
          autoComplete="off"
        />
        
        <button style={{marginTop: '-0.5rem'}}>
        <Image
          src={sendIcon.src}
          styleSheet={{ cursor: 'pointer' }}
        />
        </button>
      </Box>
    </>

  )
}