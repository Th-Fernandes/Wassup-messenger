import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabaseAuthActions } from "../src/helpers/supabase-auth-actions";
import {useState} from "react";

import { Box } from '@skynexui/components';
import { defaultSection } from "../src/common/styles/defaultSection"
import { Chat } from "../src/components/Chat/Chat.jsx";
import {LogoutModal} from "../src/components/DefaultModal/LogoutModal"


export default function Home() {
  const [isLogoutModalOpened, setIsLogoutModalOpened] = useState(false)
  const router = useRouter()

  async function handleSignOut() {
    supabaseAuthActions.signOut({
      onError: errorMessage => console.error(errorMessage),
      thenDo: () => router.push('/')
    })
  } 

  function handleToggleModalState() {
    setIsLogoutModalOpened(actualState => !actualState)
  }

  useEffect(() => {
    supabaseAuthActions.getSessionInfo({
      hasSession: null,
      hasNotSession: () => router.push('/')
    })
  }, [])

  return (
    <main>
      <Box
        as="section"
        styleSheet={defaultSection}
      >
        < Chat closeLogoutModal={handleToggleModalState} />
        
        {
          isLogoutModalOpened &&
          <LogoutModal
            signOut={handleSignOut}
            closeModal={handleToggleModalState}
          />
        }
      </Box>
    </main>
  )
}
