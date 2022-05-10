import { useEffect, useState } from "react"
import { supabaseAuthActions } from "../../../helpers/supabase-auth-actions"

export function LogOutMessage({username}) {


  useEffect(() => {
    // supabaseAuthActions.getSessionInfo({
    //   hasSession: session => setUsername(session.user.user_metadata.username)
    // })
  }, [])

  return (
    <>

        <li
          style={{ marginBottom: '1.2rem', textAlign: 'center', fontSize: '1.2rem' }}
        >
          {username} saiu.
        </li>

    </>
  )
}