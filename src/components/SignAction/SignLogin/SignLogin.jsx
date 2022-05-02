import { Text, Box, TextField, Button } from "@skynexui/components"
import colors from "common/colors.json";
import { useEffect, useState } from "react";
import { supabase } from "common/utils/supabaseClient";
import { useRouter } from "next/router";


export default function SignLogin ({emailModal}) {
  const [sign, setSign] = useState('login')
  const [inputData, setInputData] = useState({email: '', password: '', username: 'dot'})
  const [authError, setAuthError] = useState()
  const router = useRouter()

  
  function handleGetInput(input, dataType) {
    const userData = input.target.value 

    setInputData( latestState => ({ ...latestState, [dataType]: userData}))
    console.log(inputData)
  }
  
  async function handleSignIn()  {
    const { error: signInError } = await supabase.auth.signIn(inputData)
    if (signInError) {
      setAuthError(signInError.message)
      console.error(signInError.message)
      return 
    }
  
    router.push('/chat')
  }

  async function handleSignUp() {
    const {user, session, error: signUpError } = await supabase.auth.signUp(inputData)
    if (signUpError) {
      console.log(signUpError)
      setAuthError(signUpError.message)
    } else {
      emailModal(true)
      setSign('login')
      setInputData({email: '', password: ''})
    }

  }

  useEffect(() => {
    const session = supabase.auth.session()
    
    if(session) router.push('/chat')
  }, [])

  return (
    <Box
      as='form' 
      onSubmit={(event) => {
        event.preventDefault()
        sign == 'login' ? handleSignIn() : handleSignUp()
      }}
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

        {authError && 
          <span 
          style={{color: colors.primary["red-error"] , fontSize: 'clamp(12px, 14px, 16px)'}}
          >
            {authError}
          </span>}


        <TextField
          onChange={el => handleGetInput(el, 'email')}
          placeholder="seu email"
          type='email'
          rounded="full"
          styleSheet={{
            width: '35rem',
            marginTop: '1.5rem',
            margin: '0 auto'
          }}
          value={inputData.email}

        />
        <TextField
          onChange={el => handleGetInput(el, 'password')}     
          placeholder="sua senha"
          type='password'
          rounded="full"
          styleSheet={{
            width: '35rem',
            marginTop: '1.5rem',
            margin: '0 auto'
          }}
          value={inputData.password}
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
        {
          sign == 'login'
            ? (
              <small style={{fontSize: '1.6rem', marginTop: '1.2rem', display: 'block'}}>
              Não possui conta? 
                <span
                  onClick={() => { sign == 'login' ? setSign('signUp') : setSign('login')}} 
                  style={{
                    textDecoration: 'underline', 
                    margin: '0 0.5rem',
                    color: colors.primary['purple'],
                    cursor: 'pointer',
                  }}
                >
                  clique aqui
                </span> 
              para criar!
            </small>
            )

            : (
              <small style={{fontSize: '1.6rem', marginTop: '1.2rem', display: 'block'}}>
              Já possui conta? 
                <span
                  onClick={() => { sign == 'login' ? setSign('signUp') : setSign('login')}} 
                  style={{
                    textDecoration: 'underline', 
                    margin: '0 0.5rem',
                    color: colors.primary['purple'],
                    cursor: 'pointer',
                  }}
                >
                  clique aqui
                </span> 
              para fazer login!
            </small>
            )
        }
      </fieldset>
    </Box>
  )
}