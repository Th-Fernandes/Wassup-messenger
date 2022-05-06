import { Box, Text, Button } from "@skynexui/components";
import colors from "../../../../common/colors.json"
import {Envelope, CircleNotch} from 'phosphor-react'
import {useRouter} from "next/router"

export default function EmailConfirm({emailModal}) {
  const router = useRouter()

  return (
    <Box
    id="emailModal"
      onClick={(event) => { event.target.id === 'emailModal' ? emailModal(false) : ''}}
      styleSheet={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.neutrals['black-modal-bg'],
        zIndex: 99,
        width: '100vw',
        height: '100vh'
      }}
    >
      <Box
        onBlur={() => emailModal(false)}
        as="article"
        styleSheet={{
          backgroundColor: colors.neutrals['black-300'],
          width: "min(90%, 80rem)",
          minHeight: '20rem',
          padding: {xs: '.8rem', md: '1.6rem', xl: '3.2rem'},
          textAlign: 'center',
        }}
      >
        <Envelope size={96} weight="fill" />
        

        <Text
          as="h2"
          styleSheet={{
            font: " 3.2rem 'Lexend Deca', sans-serif",
            lineHeight: '2.5rem',
            marginBlock: '1.2rem'
          }}
        >
          Seu cadastro está quase pronto
        </Text>

        <Text
          styleSheet={{font: " 1.4rem'Lexend Deca', sans-serif", marginBottom: '1.2rem'}}>
            Verifique por favor seu e-mail e confirme seu cadastro para 
            liberar o acesso a sua conta
        </Text>

        <Button
          buttonColors={{
            mainColor: colors.primary.purple
          }}
          label="voltar ao menu principal"
          onClick={() => {
            emailModal(false)
            //router.push('/')
          }}
        />
      </Box>
    </Box>
  )
}