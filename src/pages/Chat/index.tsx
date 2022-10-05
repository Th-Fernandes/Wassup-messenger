import {Messages} from "./Messages/messages";
import {ChatHeader} from "./ChatHeader";
import { DotsThreeCircleVertical, Sun, UserCircle } from "phosphor-react";
import { SendMessageForm } from "./Messages/SendMessageForm";

export interface ChatProps {
  closeLogoutModal: () => void
}

export function Chat() {
  return (
    <section className="h-screen flex max-w-[1440px] mx-auto">
      <div className="bg-brand w-[36.80%] max-w-[365px] py-8">
        <header className="flex">
          <button>
            <UserCircle size={32} />
          </button>
          <button>
            <DotsThreeCircleVertical size={32} />
          </button>
          <button>
            <Sun size={32} />
          </button>
        </header>
      </div>

      <div className="flex-grow flex flex-col relative">
        <ChatHeader/>
        <Messages />
        <SendMessageForm/>
      </div>
    </section>
  );
}