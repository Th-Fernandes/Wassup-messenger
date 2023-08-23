import { ChatsContainer } from "./ChatsContainer";
import { ChatHeader } from "./MessageContainer/ChatHeader";
import { Messages } from "./MessageContainer/Messages";
import { SendMessageForm } from "./MessageContainer/SendMessageForm";

export function ChatPage() {
  return (
    <section className="h-screen flex max-w-[1440px] mx-auto">
      <ChatsContainer />

      <div className="flex-grow flex flex-col relative">
        <ChatHeader />
        <Messages />
        <SendMessageForm />
      </div>
    </section>
  );
}