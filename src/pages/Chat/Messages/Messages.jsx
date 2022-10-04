import { useEffect, useState } from "react";
import { supabase } from "common/utils/supabaseClient";
import { supabaseAuthActions } from "helpers/supabase-auth-actions";
import { supabaseDatabaseActions } from "helpers/supabase-database-actions";

import ReceivedMessage from "./ReceivedMessage/ReceivedMessage";
import SendedMessage from "./SendedMessage/SendedMessage";
import { SendMessageForm } from "./SendMessageForm";
import { LogOutMessage } from "./LogOutMessage";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [onSendMessage, setOnSendMessage] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [sessionId, setSessionId] = useState();
  const [userData, setUserData] = useState();


  useEffect(() => {
    supabaseAuthActions.getSessionInfo({
      hasSession: session => {
        setSessionId(session.user.id);
        setUserData(session.user.user_metadata);
        console.log(session.user.user_metadata.username);
      },
      hasNotSession: () => { throw new Error("não foi possível pegar os dados da sessão."); }
    });

  }, []);

  useEffect(() => {
    function insertRealTime(addMessage) {
      const mySubscription = supabase
        .from("messages")
        .on("*", response => {
          addMessage(response.new);
        })
        .subscribe();

      return mySubscription;
    }

    if (inputMessage) {
      supabaseDatabaseActions.insert({
        inTable: "messages",
        createRow: [{
          username: userData.username,
          message: inputMessage,
          session_id: sessionId
        }],
        thenDo: () => setInputMessage("")
      });
    }

    insertRealTime(newMessage => {
      setMessages(oldMessages => [...oldMessages, newMessage]);
    });

    supabaseDatabaseActions.readAll({
      inTable: "messages",
      thenDo: (data) => setMessages(data)
    });
  }, [onSendMessage]);

  return (
    <div className="overflow-y-scroll max-h-[88.25vh] bg-dark-bg-400">
      <ul className="mb-12 px-4 md:px-6 lg:px-16">
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

      <SendMessageForm
        onSendMessage={setOnSendMessage}
        onWriteMessage={setInputMessage}
        writtenMessage={inputMessage} 
      />
    </div>
  );
}