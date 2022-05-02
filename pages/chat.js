import { Box } from '@skynexui/components';
import { useEffect } from "react";
import Chat from "../src/components/Chat/Chat.jsx";
import {defaultSection} from "../src/common/styles/defaultSection"
import { supabase } from "../src/common/utils/supabaseClient";
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
