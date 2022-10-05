import { PaperPlaneTilt } from "phosphor-react";
import theme from "assets/theme/index.json";
import { ChangeEvent, useState } from "react";
import { supabaseDatabaseActions } from "helpers/supabase-database-actions";
import { supabase } from "common/utils/supabaseClient";

export function SendMessageForm() {
  const [message, setMessage] = useState<string>("");

  function handleGetMessageValue(event: ChangeEvent<HTMLInputElement>) {
    const messageContent = event.target.value;
    setMessage(messageContent);
  }

  function handleSubmitMessageToDatabase(event) {
    event.preventDefault();

    const {user} = supabase.auth.session();

    supabaseDatabaseActions.insert({
      inTable: "messages",
      createRow: {message, session_id: user.id, username: user.user_metadata.username },
      thenDo: () => {}
    });

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

