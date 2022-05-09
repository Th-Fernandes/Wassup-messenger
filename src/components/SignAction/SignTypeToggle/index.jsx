import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabaseAuthActions } from "../../../helpers/supabase-auth-actions";
import colors from "../../../common/colors.json";

import { Text, Box, TextField } from "@skynexui/components"
import { SubmitButton } from "./SubmitButton";
import { FooterSignMessage } from "./FooterSignMessage";
import { Loading } from "../../Loading";


export function SignTypeToggle({ emailModal }) {
  const [sign, setSign] = useState('login')
  const [inputData, setInputData] = useState({ email: '', password: '', username: '' })
  const [onLoading, setOnLoading] = useState(false)
  const [authError, setAuthError] = useState(null)
  const router = useRouter()

  function handleGetInput(input, dataType) {
    const userData = input.target.value
    setInputData(latestState => ({ ...latestState, [dataType]: userData }))
  }

  async function handleSignIn() {
    setOnLoading(true)

    supabaseAuthActions.signIn({
      ...inputData,
      onError: signInErrorMessage => setAuthError(signInErrorMessage),
      thenDo: () => {
        router.push('/chat')
        setOnLoading(false)
      }
    })
  }


  async function handleSignUp() {
    setOnLoading(true)

    supabaseAuthActions.signUp({
      ...inputData,
      onError: signUpErrorMessage => setAuthError(signUpErrorMessage),
      thenDo: () => {
        emailModal(true)
        setSign('login')
        setInputData({ email: '', password: '' })
        setOnLoading(false)
      }
    })

  }

  useEffect(() => {
    supabaseAuthActions.getSessionInfo({
      hasSession: () => router.push('/chat')
    })
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
          {
            onLoading
              ? <Loading />
              : sign === 'login'
                ? 'LOGIN'
                : 'CRIAR CONTA'
          }
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

        <SubmitButton />

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