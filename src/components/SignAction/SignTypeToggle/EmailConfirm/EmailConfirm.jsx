import { Box, Image, Text, Button } from "@skynexui/components";
import colors from "../../../../common/colors.json"
import emailIcon from "../../../../../public/email-icon.svg"
import {useRouter} from "next/router"

export default function EmailConfirm({emailModal}) {
  const router = useRouter()

  return (
    <Box
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
        as="article"
        styleSheet={{
          backgroundColor: colors.neutrals['black-300'],
          width: "min(90%, 80rem)",
          minHeight: '20rem',
          padding: {xs: '.8rem', md: '1.6rem', xl: '3.2rem'},
          textAlign: 'center',
        }}
      >
        <Image
          src={emailIcon.src}
          styleSheet={{
            backgroundColor: colors.neutrals['white-500'], 
            borderRadius: '0.8rem',
            margin: '0 auto',
            width: '12rem',
          }}
        />

        <Text
          as="h2"
          styleSheet={{
            fontFamily: "'Lexend Deca', sans-serif",
            marginTop: '1.2rem'
          }}
        >
          Seu cadastro está quase pronto
        </Text>

        <Text
        styleSheet={{fontFamily: "'Lexend Deca', sans-serif", marginBottom: '1.2rem'}}>
          Verifique por favor seu e-mail e confirme seu cadastro para 
          liberar o acesso a sua conta
        </Text>

        <Button
          label="voltar ao menu principal"
          onClick={() => {
            emailModal(false)
            router.push('/')
          }}
        />
      </Box>
    </Box>
  )
}