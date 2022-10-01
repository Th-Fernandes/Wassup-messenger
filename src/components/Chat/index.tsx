import { Box } from "@skynexui/components";
import Messages from "./Messages/Messages";
import {ChatHeader} from "./ChatHeader";

export interface ChatProps {
  closeLogoutModal: () => void
}

export  function Chat({closeLogoutModal}: ChatProps) {
  return (
    <Box styleSheet={{ height: { xs: "95%", md: "98%", lg: "100%" } }} >
      <ChatHeader closeLogoutModal={closeLogoutModal} />
      <Messages />
    </Box>
  );
}