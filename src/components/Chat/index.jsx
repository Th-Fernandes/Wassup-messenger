import { useRouter } from "next/router";

import { Box } from '@skynexui/components';
import Messages from './Messages/Messages';
import {ChatHeader} from "./ChatHeader"

export  function Chat({closeLogoutModal}) {
  return (
    <Box styleSheet={{ height: { xs: '95%', md: '98%', lg: '100%' } }} >
      <ChatHeader closeLogoutModal={closeLogoutModal} />
      <Messages />
    </Box>
  )
}