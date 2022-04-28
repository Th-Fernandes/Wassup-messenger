import Chat from "components/Chat/Chat.jsx";
import { Box } from '@skynexui/components';
import {defaultSection} from "common/styles/defaultSection"
import { useEffect } from "react";
import { supabase } from "common/utils/supabaseClient";
import {useRouter} from "next/router"
 

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const session = supabase.auth.session()
    
    if(!session) router.push('/')
  } ,[])

  return (
    <main>
     <Box
      as="section"
      styleSheet={defaultSection}
     >
        <Chat />
     </Box>
    </main>
  )
}
