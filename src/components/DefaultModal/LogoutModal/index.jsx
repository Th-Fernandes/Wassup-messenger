import { useEffect, useState } from "react";
import { supabaseAuthActions} from "../../../helpers/supabase-auth-actions";
import { supabaseDatabaseActions } from "../../../helpers/supabase-database-actions";
import { useRouter } from "next/router";
import colors from "../../../common/colors.json";

import { DefaultModal } from "../DefaultModal";
import { Box, Button } from '@skynexui/components';

export function LogoutModal({ closeLogoutModal, isSigningOut, signOutState }) {
  const [sessionId, setSessionId] = useState()
  const [userData, setUserData] = useState()
  const router = useRouter()

  function handleSignOut() {
    supabaseAuthActions.signOut({
      onError: errorMessage => console.error(errorMessage),
      thenDo: () => {
        isSigningOut(true)
        router.push('/')
      }
    })
  } 

  useEffect(() => {
    const getSessionId = supabaseAuthActions.getSessionInfo({
      hasSession: session => {
        setSessionId(session.user.id)
        setUserData(session.user.user_metadata)
        console.log(session.user.user_metadata)
      },
      hasNotSession: () => console.log('deu rim :(((')
    })
  }, [])

  useEffect(() => {
    console.log(sessionId)
    if(signOutState) {
      const insertGetOutMessage = supabaseDatabaseActions.insert({
        inTable: 'messages',
        createRow: [{username: userData.username , message: null, session_id: sessionId}],
        thenDo: (data) => console.log('worked a lot')
      })
    }
  }, [signOutState])

  return (
    <DefaultModal>
      <Box styleSheet={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '4rem' }}>Deseja mesmo sair?</h2>
        <p style={{ fontSize: '2.5rem' }}>você confirma que deseja sair de sua conta?</p>

        <ul style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
          <li>
            <Button
              buttonColors={{
                contrastColor: '#ffffff',
              }}
              label='cancelar'
              onClick={() => closeLogoutModal()}
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
              styleSheet={{ width: '10rem', fontWeight: 'bold' }}
            />
          </li>
        </ul>
      </Box>
    </DefaultModal>
  )
}