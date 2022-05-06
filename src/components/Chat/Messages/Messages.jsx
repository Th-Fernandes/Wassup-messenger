import { useEffect, useState } from 'react';
import { supabase } from '../../../common/utils/supabaseClient';
import { Box} from '@skynexui/components';
import colors from "../../../common/colors.json"
import ReceivedMessage from './ReceivedMessage/ReceivedMessage';
import SendedMessage from './SendedMessage/SendedMessage';

import { SendMessageForm } from './SendMessageForm';

export default function Messages() {
  const [messages, setMessages] = useState([])
  const [onSendMessage, setOnSendMessage] = useState(false)
  const [inputMessage, setInputMessage] = useState('')


  const [sessionId, setSessionId] = useState()

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

   }, [onSendMessage])




  useEffect(() => {
    const session = supabase.auth.session()
    session ? setSessionId(session.user.id) : console.error('não foi possível pegar os dados da sessão.')
   }, [])


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

      <SendMessageForm 
        onSendMessage={setOnSendMessage} 
        onWriteMessage={setInputMessage}
        writtenMessage={inputMessage}/>
    </>

  )
}