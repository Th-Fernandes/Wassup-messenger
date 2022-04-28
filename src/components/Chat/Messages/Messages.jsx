import { Box, Text, Image, TextField } from '@skynexui/components';
import colors from "common/colors.json"
import unknowIcon from "../../../../public/unknown-user.jpg"
import sendIcon from "../../../../public/send-message.svg"
import { supabase } from 'common/utils/supabaseClient';
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react';

export default function Messages() {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [submitMessage, setSubmitMessage] = useState(false)

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

    function insertRealTime (addMessage) {
      const mySubscription = supabase
        .from('messages')
        .on('INSERT', response => {
         addMessage(response.new)
        })
        .subscribe()

        return mySubscription
    }

    async function fetchMessages() {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('id', { ascending: false })    
        setMessages(data)   
    }

    if(inputMessage) {
      async function createMessage() {
        const { data, error } = await supabase
          .from('messages')
          .insert([
            { username: 'jato', message: inputMessage}           
        ])
        setInputMessage('')
     
      }

     

      
      createMessage()      
    }

    insertRealTime(newMessage => {
      console.log(newMessage)
      setMessages(oldMessages => [...oldMessages, newMessage])
    })
    fetchMessages()
    
    
    
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
        }}
      >
        <Box as='ul'
        >
          {
            messages &&
            messages.map((el, index) => (
              <li
                style={{ margin: '3rem 0' }}
                key={index}
              >
                <Box
                  styleSheet={{
                    backgroundColor: colors.neutrals['black-200'],
                    maxWidth: '50rem',
                    padding: '1.6rem 0.8rem',
                    borderRadius: '1.6rem 1.6rem 1.6rem 0'
                  }}
                >
                  {el.message}
                </Box>
                <Box
                  styleSheet={{
                    display: 'flex', alignItems: 'center',
                    marginTop: '1rem'
                  }}
                >
                  <Image
                    src={unknowIcon.src}
                    styleSheet={{ width: '2.5rem' }}
                  />
                  <span style={{ marginLeft: '0.5rem' }}>{el.username}</span>
                  <span style={{ marginLeft: '0.5rem', color: colors.neutrals['white-500'] }}>
                    {el.created_at}
                  </span>

                </Box>
              </li>
            ))
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