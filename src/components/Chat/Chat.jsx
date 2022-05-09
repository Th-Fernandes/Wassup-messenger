import { useState } from 'react';
import { useRouter } from "next/router";
import {supabaseAuthActions} from "../../helpers/supabase-auth-actions"

import { Box } from '@skynexui/components';
import { LogoutModal } from "./Messages/LogoutModal/LogoutModal"
// import { LogoutModal } from "../DefaultModal/LogoutModal"
import Messages from './Messages/Messages';
import {ChatHeader} from "./ChatHeader"

export  function Chat({closeLogoutModal}) {
  const router = useRouter()

  return (
    <Box styleSheet={{ height: { xs: '95%', md: '98%', lg: '100%' } }} >
      <ChatHeader closeLogoutModal={closeLogoutModal} />
      <Messages />
    </Box>
  )
}