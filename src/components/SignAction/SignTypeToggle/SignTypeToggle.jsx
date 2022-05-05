import { useEffect, useState } from "react";
import { supabase } from "../../../common/utils/supabaseClient";
import { useRouter } from "next/router";
import { Text, Box, TextField} from "@skynexui/components"
import colors from "../../../common/colors.json";
import { SubmitButton } from "./SubmitButton/SubmitButton";
import { FooterSignMessage } from "./FooterSignMessage/FooterSignMessage";


export default function SignLogin({ emailModal }) {
  const [sign, setSign] = useState('login')
  const [inputData, setInputData] = useState({ email: '', password: '', username: '' })
  const [authError, setAuthError] = useState(null)
  const router = useRouter()


  function handleGetInput(input, dataType) {
    const userData = input.target.value
    setInputData(latestState => ({ ...latestState, [dataType]: userData }))
  }

  async function handleSignIn() {
    const { error: signInError } = await supabase.auth.signIn(inputData)
    if (signInError) {
      setAuthError(signInError.message)
      return
    }
    router.push('/chat')
  }


  async function handleSignUp() {
    const { user, session, error: signUpError } = await supabase.auth.signUp(inputData)
    if (signUpError) {
      setAuthError(signUpError.message)
    } else {
      emailModal(true)
      setSign('login')
      setInputData({ email: '', password: '' })
    }
  }
  
  useEffect(() => {
    const session = supabase.auth.session()
    if (session) router.push('/chat')
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
        padding: { sm: "0.8rem", md: '1.6rem', lg: '3.2rem' },
        textAlign: 'center',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}
    >
      <fieldset style={{ border: 'none', maxWidth: '3.5rem' }} >
        <Text
          as='legend'
          styleSheet={{
            fontSize: { xs: '4rem', md: '7rem' },
            fontFamily: "'Lexend Deca', sans-serif",
            animation: '1.2s fadeIn',
          }}
        >
          {sign === 'login' ? 'LOGIN' : 'CRIAR CONTA'}
        </Text>

        {authError &&
          <span
            style={{ color: colors.primary["red-error"], fontSize: 'clamp(12px, 14px, 16px)', lineHeight: '1.5' }}
          >
            {authError}
          </span>}


        <Box styleSheet={{ width: { xs: '90%', sm: '35rem' }, margin: '0 auto' }}>
          {
            sign === 'signUp' &&
            <TextField
              onChange={el => handleGetInput(el, 'username')}
              placeholder="seu username"
              type='text'
              rounded="full"
              styleSheet={{
                width: '100%',
                marginTop: '1.5rem',
                margin: '0 auto',

              }}
              value={inputData.username}
            />
          }

          <TextField
            onChange={el => handleGetInput(el, 'email')}
            placeholder="seu email"
            type='email'
            rounded="full"
            styleSheet={{
              width: '100%',
              marginTop: '1.5rem',
              margin: '0 auto',

            }}
            value={inputData.email}
          />
          <TextField
            onChange={el => handleGetInput(el, 'password')}
            placeholder="sua senha"
            type='password'
            rounded="full"
            styleSheet={{
              marginTop: '1.5rem',
              margin: '0 auto'
            }}
            value={inputData.password}
          />

        </Box>

        <SubmitButton/>

        {
          sign == 'login'
            ? 
              <FooterSignMessage
                variant='loginVariant'
                changeSignType={setSign}
                selectedSignType={sign}
              />
            : 
              <FooterSignMessage
                variant='signUpVariant'
                changeSignType={setSign}
                selectedSignType={sign}
              />   
        }
      </fieldset>
    </Box>
  )
}