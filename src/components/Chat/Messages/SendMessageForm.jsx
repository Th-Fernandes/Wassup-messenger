import {useState} from 'react'
import { Box, Image, TextField } from '@skynexui/components';
import sendIcon from "../../../../public/send-message.svg";

export function SendMessageForm({onSendMessage, onWriteMessage, writtenMessage}) {
  
  

  function handleInputValue(element) {
    const inputValue = element.target.value
    console.log(inputValue)
    onWriteMessage(inputValue)
  }

  function handleSubmitMessage(event) {
    event.preventDefault()
    if(writtenMessage) onSendMessage(test => !test)
  }



  return (
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
        onKeyPress={(event) => { if (event.key === 'Enter') handleSubmitMessage(event) }}
        onChange={element => handleInputValue(element)}
        rounded='full'
        value={writtenMessage}
        styleSheet={{
          width: '90%',
          minHeight: '100%',
          maxHeight: '50rem',
          overflowY: 'auto',

        }}
        autoComplete="off"
      />

      <button style={{ marginTop: '-0.5rem' }}>
        <Image
          src={sendIcon.src}
          styleSheet={{ cursor: 'pointer' }}
        />
      </button>
    </Box>
  )
}