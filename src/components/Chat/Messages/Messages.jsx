import { useEffect, useState } from 'react';
import { supabase } from '../../../common/utils/supabaseClient';
import {supabaseAuthActions} from "../../../helpers/supabase-auth-actions";
import { supabaseDatabaseActions } from '../../../helpers/supabase-database-actions';
import colors from "../../../common/colors.json";

import { Box} from '@skynexui/components';
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
         addMessage(response.new)
        })
        .subscribe()
        return mySubscription
    }   

    if(inputMessage) { 
      supabaseDatabaseActions.insert({
        inTable: 'messages',
        createRow: [{ 
          username: 'jato', 
          message: inputMessage, 
          session_id: sessionId
        }],
        thenDo: () => setInputMessage('')
      })    
    }  

    insertRealTime(newMessage => {
      setMessages(oldMessages => [...oldMessages, newMessage])
    })

    supabaseDatabaseActions.readAll({
      inTable: 'messages',
      thenDo: (data) => setMessages(data)  
    })
   }, [onSendMessage])



  useEffect(() => {
    supabaseAuthActions.getSessionInfo({
      hasSession: session => setSessionId(session.user.id),
      hasNotSession: () => { throw new Error('não foi possível pegar os dados da sessão.') }
    })
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