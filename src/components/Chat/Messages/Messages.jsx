import { Box, Text, Image, TextField } from '@skynexui/components';
import colors from "../../../common/colors.json"
import RecievedMessage from './ReceivedMessage/ReceivedMessage';
import SendedMessage from './SendedMessage/SendedMessage';
import sendIcon from "../../../../public/send-message.svg"
import { supabase } from '../../../common/utils/supabaseClient';
import { useEffect, useState } from 'react';

/*
  - estilização de minhas msgs [x]

  - condicional para conferir se a msg é minha ou não
    1: pegar o id da session do path da supabase[x]
    2: inserior esse dado no obj da msg que vai ser inserida no database[x]
    3: fazer um ternario pra conferir se o id da sessao atual coincide com o do obj da msg
      a - se coicidir, imprimir o estilo a direira
      b - se n, imprimir o estilo a esquerda
*/

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
          marginTop: '1.2rem',
          borderRadius: '0.8rem',
          height: { xs: '95%', md: '95%' },
          overflowY: 'scroll',
          scrollBehavior: 'smooth'
        }}
      >
        <Box as='ul'
        >
          {
            messages &&
            messages.map((data, index) => {
              if(data.session_id === sessionId) {
                return <SendedMessage messageData={data} key={index + '-SD'} />
                
              } else {
                return <RecievedMessage messageData={data} key={index + '-RC'}  />
              }
            })
          }
        </Box>
      </Box>

      <Box
        as='form'
        onSubmit={event => handleSubmitMessage(event) }
        styleSheet={{
          position: 'relative',
          top: '-45px',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2.5rem'
        }}
      >

        <TextField
          onChange={element => handleInputValue(element)}
          rounded='full'
          value={inputMessage}
          styleSheet={{ width: '90%' }}
          autoComplete="off"
        />
        <Image
          src={sendIcon.src}
          styleSheet={{ cursor: 'pointer' }}
        />
      </Box>
    </>

  )
}