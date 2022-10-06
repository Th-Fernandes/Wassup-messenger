import { Box, Text, Button } from "@skynexui/components";
import theme from "assets/theme/index.json";
import {Envelope} from "phosphor-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  emailModal: Dispatch<SetStateAction<boolean>>
}

export function EmailConfirm({emailModal}:Props) {

  return (
    <Box
      styleSheet={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors["bg-dark-200"],
        zIndex: 99,
        width: "100vw",
        height: "100vh"
      }}
    >
      <Box
        as="article"
        styleSheet={{
          backgroundColor: theme.colors["bg-dark"],
          width: "min(90%, 80rem)",
          minHeight: "20rem",
          padding: {xs: ".8rem", md: "1.6rem", xl: "3.2rem"},
          textAlign: "center",
        }}
      >
        <Envelope size={96} weight="fill" />
        

        <Text
          as="h2"
          styleSheet={{
            font: " 3.2rem 'Lexend Deca', sans-serif",
            lineHeight: "2.5rem",
            marginBlock: "1.2rem"
          }}
        >
          Seu cadastro está quase pronto
        </Text>

        <Text
          styleSheet={{font: " 1.4rem'Lexend Deca', sans-serif", marginBottom: "1.2rem"}}>
            Verifique por favor seu e-mail e confirme seu cadastro para 
            liberar o acesso a sua conta
        </Text>

        <Button
          label="voltar ao menu principal"
          onClick={() => {
            emailModal(false);
          }}
        />
      </Box>
    </Box>
  );
}