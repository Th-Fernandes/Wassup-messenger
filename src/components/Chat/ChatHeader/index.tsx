import { useState } from "react";

import { Box, Text } from "@skynexui/components";
import { List } from "phosphor-react";
import colors from "../../../common/colors.json";
import type { ChatProps } from "..";

export function ChatHeader({closeLogoutModal}:ChatProps) {
  const [isConfigOpened, setIsConfigOpened] = useState(false);

  return (
    <Box as='header'
      styleSheet={{ display: "flex", alignItems: "center" }}
    >

      <Text as="h1"
        styleSheet={{
          fontFamily: "'Lexend Deca', sans-serif",
          fontSize: { sm: "1.8rem", md: "2.4rem" },
          width: "100%",
        }}
      >
          WASSUP MESSENGER
      </Text>

      <button
        style={{ backgroundColor: "transparent" }}
        onClick={() => setIsConfigOpened(oldState => !oldState)}
        onBlur={() => isConfigOpened ? setIsConfigOpened(false) : null}
      >
        <List size={56} weight="fill" color="#fff" />

        <Box
          as='ul'

          styleSheet={{
            position: "fixed",
            right: { xs: "1%", md: "3%", xl: " 10%" },
            backgroundColor: colors.neutrals["black-200"],
            width: "30rem"
          }}
        >
          {
            isConfigOpened &&
              <>
                <li>Perfil</li>
                <li onClick={closeLogoutModal}>sair da conta</li>
              </>
          }
        </Box>
      </button>
    </Box>
  );
}