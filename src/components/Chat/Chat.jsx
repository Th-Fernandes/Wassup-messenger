import { Box, Text, Button } from '@skynexui/components';
import Messages from './Messages/Messages';
import colors from "../../common/colors.json"
import { useRouter } from "next/router"
import { supabase } from '../../common/utils/supabaseClient';
import { DefaultModal } from '../../components/DefaultModal/DefaultModal';
import { LogoutModal } from "./Messages/LogoutModal/LogoutModal"
import { useState } from 'react';
import { List } from 'phosphor-react';

export default function Chat() {
  const [isLogoutModalOpened, setIsLogoutModalOpened] = useState(false)
  const [isConfigOpened, setIsConfigOpened] = useState(false)
  const router = useRouter()

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut()

    if (!error) router.push('/')
    console.error(error)
  }

  return (
    <Box styleSheet={{ height: { xs: '95%', md: '98%', lg: '100%' } }} >
      {
        isLogoutModalOpened &&
        <LogoutModal
          SignOut={handleSignOut}
          closeModal={() => setIsLogoutModalOpened(actualState => !actualState)}
        />
      }

      <Box as='header'
        styleSheet={{ display: 'flex' }}
      >

        <Text as="h1"
          styleSheet={{
            fontFamily: "'Lexend Deca', sans-serif",
            fontSize: { sm: '1.8rem', md: '2.4rem' },
            width: '100%',
          }}
        >
          WASSUP MESSENGER
        </Text>

        <button
          style={{ backgroundColor: 'transparent' }}
          onClick={() => setIsConfigOpened(oldState => !oldState)}
          onBlur={() => isConfigOpened ? setIsConfigOpened(false) : null}
        >
          <List size={56} weight="fill" color="#fff" />

          <Box
            as='ul'

            styleSheet={{
              position: 'fixed',
              right: { xs: '1%', md: '3%', xl: ' 10%' },
              backgroundColor: colors.neutrals["black-200"],
              width: '30rem'
            }}
          >
            {
              isConfigOpened &&
              <>
                <li>Perfil</li>
                <li onClick={() => setIsLogoutModalOpened(true)}>sair da conta</li>
              </>
            }
          </Box>
        </button>
      </Box>

      <Messages />
    </Box>
  )
}