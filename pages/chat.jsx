import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabaseAuthActions } from "../src/helpers/supabase-auth-actions";
import { supabaseDatabaseActions } from "../src/helpers/supabase-Database-actions";
import {useState} from "react";

import { Box } from '@skynexui/components';
import { defaultSection } from "../src/common/styles/defaultSection"
import { Chat } from "../src/components/Chat/index.jsx";
import { LogoutModal } from "../src/components/DefaultModal/LogoutModal"


export default function Home() {
  const [isLogoutModalOpened, setIsLogoutModalOpened] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [sessionId, setSessionId] = useState('')
  const router = useRouter()

  function handleToggleModalState() {
    setIsLogoutModalOpened(actualState => !actualState)
  }

  useEffect(() => {
    const redirectBySession = supabaseAuthActions.getSessionInfo({
      hasSession: (session) => setSessionId(session.user.id),
      hasNotSession: () => router.push('/')
    })

  }, [])

  return (
    <main>
      <Box
        as="section"
        styleSheet={defaultSection}
      >
        <Chat 
          closeLogoutModal={handleToggleModalState}  
        />
        
        {
          isLogoutModalOpened &&
          <LogoutModal 
            closeLogoutModal={handleToggleModalState}  
            isSigningOut={setIsSigningOut}
            signOutState={isSigningOut}
          />
        }
      </Box>
    </main>
  )
}
