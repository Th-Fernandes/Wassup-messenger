import Messages from "./Messages/Messages";
import {ChatHeader} from "./ChatHeader";

export interface ChatProps {
  closeLogoutModal: () => void
}

export function Chat() {
  return (
    <section className="h-screen">
      <div>
        <ChatHeader/>
        <Messages />
      </div>
    </section>
  );
}