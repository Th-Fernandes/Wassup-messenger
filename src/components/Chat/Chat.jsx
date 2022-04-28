import { Box, Text, Button } from '@skynexui/components';
import Messages from './Messages/Messages';
import colors from "common/colors.json"
import {useRouter} from "next/router"
import { supabase } from 'common/utils/supabaseClient';

export default function Chat() {
  const router = useRouter()

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut()

    if(!error) router.push('/')
    console.log(error)
  }

  return (
    <Box
      styleSheet={{ height: '100%'}}
    >
      <Box as='header'
        styleSheet={{ display: 'flex'}}
      >
        <Text as="h1"
            styleSheet={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: {sm: '1.8rem', md: '2.4rem'},
              width: '100%',
            }} 
          >
            WASSUP MESSENGER
        </Text>
        <Button 
          iconName="arrowRight"  
          buttonColors={{
            contrastColor: '#FFFFFF',
            mainColor: colors.primary['purple'],
          }}
          onClick={() => handleSignOut()}
        />
      </Box>
      
      <Messages/>


    </Box>
  )
}