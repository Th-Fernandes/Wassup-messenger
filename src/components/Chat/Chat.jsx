import { Box, Text } from '@skynexui/components';
import Messages from './Messages/Messages';

export default function Chat() {
  return (
    <Box
      styleSheet={{ height: '100%'}}
    >
      <Box as='header' >
        <Text as="h1"
            styleSheet={{
              fontFamily: "'Lexend Deca', sans-serif",
              fontSize: {sm: '1.8rem', md: '2.4rem'},
              width: '100%',
            }} 
          >
            WASSUP MESSENGER
        </Text>
      </Box>
      
      <Messages/>


    </Box>
  )
}