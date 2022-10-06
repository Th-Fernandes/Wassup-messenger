import { useEffect, useState } from "react";
import { supabase } from "utils/supabaseClient";
import { supabaseAuthActions } from "helpers/supabase-auth-actions";
import ReceivedMessage from "./ReceivedMessage/ReceivedMessage";
import SendedMessage from "./SendedMessage/SendedMessage";
import { LogOutMessage } from "./LogOutMessage";
import { useDatabase } from "hooks/useDatabase";
import { MessagesTable } from "types/MessagesTable";

export function Messages() {
  const [messages, setMessages] = useState<MessagesTable[]>([]);
  const [sessionId, setSessionId] = useState();
  const database = useDatabase();

  useEffect(() => {
    supabaseAuthActions.getSessionInfo({
      hasSession: session => {
        setSessionId(session.user.id);
        console.log(session.user.user_metadata.username);
      },
      hasNotSession: () => { throw new Error("não foi possível pegar os dados da sessão."); }
    });

  }, []);


  useEffect(() => {
    if(messages.length === 0 || !messages) {
      database
        .readAll
        .from("messages")
        .then((messages) =>messages && setMessages(messages));
    }

    supabase
      .from("messages")
      .on("INSERT", payload => {
        setMessages(messages => [ ...messages, payload.new]);
      })
      .subscribe();
  }, []);

  return (
    <div className=" overflow-auto  bg-dark-bg-400">
      <ul className=" px-4 md:px-6 lg:px-16 pb-7">
        {
          messages &&
          messages.map((data, index) => (
            data.message !== null
              ? data.session_id === sessionId
                ? <SendedMessage messageData={data} key={index + "-SD"} />
                : <ReceivedMessage messageData={data} key={index + "-RC"} />
              
              : <LogOutMessage username={data.username} />
          ))
        }
      </ul>
    </div>
  );
}