import { PaperPlaneTilt } from "phosphor-react";
import theme from "assets/theme/index.json";
import { ChangeEvent, FormEvent, useState } from "react";
import { supabase } from "utils/supabaseClient";
import { useDatabase } from "hooks/useDatabase";

export function SendMessageForm() {
  const [message, setMessage] = useState<string>("");
  const database = useDatabase();

  function handleGetMessageValue(event: ChangeEvent<HTMLInputElement>) {
    const messageContent = event.target.value;
    setMessage(messageContent);
  }

  function handleSubmitMessageToDatabase(event:FormEvent<HTMLFormElement | HTMLInputElement>) {
    event.preventDefault();

    const {user} = supabase.auth.session();

    database
      .insert({message, session_id: user.id, username: user.user_metadata.username })
      .from("messages");

    setMessage("");
  }

  return (
    <form
      onSubmit={event => handleSubmitMessageToDatabase(event)}
      className="w-full flex justify-center gap-4 overflow-hidden bg-dark-bg-400 flex-grow items-end absolute bottom-0 right-0 left-0"  >
      <input
        onKeyPress={(event) => { if (event.key === "Enter") handleSubmitMessageToDatabase(event); }}
        onChange={element => handleGetMessageValue(element)}
        value={message}
        className="block bg-dark-bg-300 h-[48px] max-w-[720px] w-3/4 rounded-[32px] px-4 resize-none" 
      />
      <button className="rounded-full bg-brand w-12 h-12 flex items-center justify-center hover:bg-brand-hover">
        <PaperPlaneTilt size={32} color={theme.colors.input} weight="fill" />
      </button>
    </form>
  );
}
