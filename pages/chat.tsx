import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabaseAuthActions } from "helpers/supabase-auth-actions";
import { useState } from "react";
import { Chat } from "pages/Chat";
import { LogoutModal } from "components/DefaultModal/LogoutModal";


export default function Home() {
  const [isLogoutModalOpened, setIsLogoutModalOpened] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const router = useRouter();

  function handleToggleModalState() {
    setIsLogoutModalOpened(actualState => !actualState);
  }

  useEffect(() => {
    supabaseAuthActions.getSessionInfo({
      hasSession: () => { },
      hasNotSession: () => router.push("/")
    });

  }, []);

  return (
    <main>
      <Chat/>

      {
        isLogoutModalOpened &&
        <LogoutModal
          closeLogoutModal={handleToggleModalState}
          isSigningOut={setIsSigningOut}
          signOutState={isSigningOut}
        />
      }

    </main>
  );
}
