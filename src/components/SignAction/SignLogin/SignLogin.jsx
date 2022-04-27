import { Text, Box, TextField, Button } from "@skynexui/components"
import colors from "common/colors.json";
import { useState } from "react";

export default function SignLogin () {
  const [sign, setSign] = useState('login')

  return (
    <Box
      as='form' 
      styleSheet={{
        flexGrow: 1, 
        padding: {sm: "0.8rem" ,md: '1.6rem', lg: '3.2rem'},
        textAlign: 'center',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}  
      action=""
    >
      <fieldset style={{border: 'none'}} >
        <Text 
          as='legend'
          styleSheet={{fontSize: '6rem', fontFamily: "'Lexend Deca', sans-serif",}}
        >
          {sign === 'login' ? 'LOGIN' : 'CRIAR CONTA' }
        </Text>

        <TextField
          placeholder="seu email"
          type='email'
          rounded="full"
          styleSheet={{
            width: '35rem',
            marginTop: '1.5rem',
            margin: '0 auto'
          }}

        />
        <TextField
          placeholder="sua senha"
          type='password'
          rounded="full"
          styleSheet={{
            width: '35rem',
            marginTop: '1.5rem',
            margin: '0 auto'
          }}
        />

        <Button 
          buttonColors={{
            contrastColor: '#FFFFFF',
            mainColor: colors.primary['purple'],
          }}
          variant="secondary"
          type="submit"
          label="Entrar"
          fullWidth={true}
          rounded="full"
          colorVariant="secondary"
          styleSheet={{
            font: " 2rem 'Lexend Deca', sans-serif",
            display: 'block',
            maxWidth: '35rem',
            margin: '1.5rem auto 0 '
          }}
        />

        <small style={{fontSize: '1.6rem', marginTop: '1.2rem', display: 'block'}}>
          Não possui conta? 
            <span
              onClick={() => { sign == 'login' ? setSign('signIn') : setSign('login')}} 
              style={{
                textDecoration: 'underline', 
                margin: '0 0.5rem',
                color: colors.primary['purple'],
                cursor: 'pointer',
              }}

            >clique aqui</span> 
          para criar!
        </small>
      </fieldset>
    </Box>
  )
}