import { Box } from '@skynexui/components';
import {fullDefaultSection} from "common/styles/defaultSection"
import SignAction from "components/SignAction/SignAction"
import React, { useEffect } from 'react';
import {supabase} from "common/utils/supabaseClient"

export default function Login() {

  useEffect(() => {
    const session = supabase.auth.session()
    console.log(session)
  }, [])

  return (
    <main>
      <Box
      as="section"
      styleSheet={{
        ...fullDefaultSection,
        display: 'flex'
      }}
     >
       <SignAction />
     </Box>
    </main>
  )
}