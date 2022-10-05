import { Messages } from "./MessageContainer/Messages/messages";
import { ChatHeader } from "./MessageContainer/ChatHeader";
import { DotsThreeCircleVertical, GlobeHemisphereEast, Sun, UserCircle } from "phosphor-react";
import { SendMessageForm } from "./MessageContainer/SendMessageForm";

export interface ChatProps {
  closeLogoutModal: () => void
}

export function Chat() {
  return (
    <section className="h-screen flex max-w-[1440px] mx-auto">
      <aside className="bg-brand w-[36.80%] max-w-[365px] p-8">
        <header className="grid grid-cols-2">
          <div className="flex gap-3">
            <button className="w-8">
              <UserCircle size={32} />
            </button>
            <button className="w-8">
              <DotsThreeCircleVertical size={32} />
            </button>
          </div>
          <button className="justify-self-end">
            <Sun size={32} />
          </button>
        </header>

        <ul className="mt-14    ">
          <li className="h-24 border-brand-border border rounded-2xl ">
            <button className="flex items-center gap-3  text-left h-full w-full px-4">
              <GlobeHemisphereEast size={64} weight="fill" />  
              <span>
                <h2 className="text-lg">GlobalChat</h2>
                <p className="text-sm text-light-txt-200">Clique para participar</p>
              </span>
            </button>
          </li>     
        </ul>
      </aside>

      <div className="flex-grow flex flex-col relative">
        <ChatHeader />
        <Messages />
        <SendMessageForm />
      </div>
    </section>
  );
}