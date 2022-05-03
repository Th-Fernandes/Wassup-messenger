import { Box, Text, Button } from '@skynexui/components';
import Messages from './Messages/Messages';
import colors from "../../common/colors.json"
import { useRouter } from "next/router"
import { supabase } from '../../common/utils/supabaseClient';
import { DefaultModal } from '../../components/DefaultModal/DefaultModal';
import { useState } from 'react';
import { List } from 'phosphor-react';

export default function Chat() {
  const [logoutModal, setLogoutModal] = useState(false)
  const [isConfigOpened, setIsConfigOpened] = useState(false)
  const router = useRouter()


  async function handleSignOut() {
    const { error } = await supabase.auth.signOut()

    if (!error) router.push('/')
    console.log(error)
  }

  return (
    <Box
      styleSheet={{ height: {xs: '95%', md: '98%', lg: '100%'} }}
    >
      {
          logoutModal &&
          <DefaultModal>
            <Box styleSheet={{ textAlign: 'center' }}>
              <h2 style={{fontSize: '4rem'}}>Deseja mesmo sair?</h2>
              <p style={{fontSize: '2.5rem'}}>você confirma que deseja sair de sua conta?</p>

              <ul style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
                <li> 
                  <Button 
                    buttonColors={{
                      contrastColor: '#ffffff',
                    }}
                    label='cancelar'
                    onClick={() => setLogoutModal(false)}
                    styleSheet={{ 
                    backgroundColor: colors.neutrals['white-100'], 
                    color: colors.neutrals['black-500'],
                    width: '15rem',
                    fontWeight: 'bold'
                  }}
                  />
                    
                </li>
                <li> 
                  <Button 
                    label='sair'
                    onClick={() => handleSignOut()}
                    styleSheet={{width: '10rem', fontWeight: 'bold'}}
                  />
                    
                  
                  </li>
              </ul>
            </Box>
          </DefaultModal>
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
          style={{backgroundColor: 'transparent'}} 
          onClick={() => setIsConfigOpened(oldState => !oldState)}
          onBlur={() => isConfigOpened ? setIsConfigOpened(false) : null}
        >
          <List size={56} weight="fill" color="#fff"   />

          <Box
            as='ul'
            
            styleSheet={{
              position: 'fixed',
              right: {xs: '1%', md: '3%', xl:' 10%'},
              backgroundColor: colors.neutrals["black-200"],
              width: '30rem'
            }}
          >
            {
              isConfigOpened &&
              <>
                <li>Perfil</li>
                <li onClick={() => setLogoutModal(true)}>sair da conta</li>
              </>
            }
          </Box>
        </button>
        
      
      </Box>

      <Messages />
    </Box>
  )
}