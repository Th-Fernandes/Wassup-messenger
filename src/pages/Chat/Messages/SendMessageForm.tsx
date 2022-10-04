// import { Box, TextField } from "@skynexui/components";
import { PaperPlaneTilt } from "phosphor-react";
import theme from "assets/theme/index.json";

interface Props {
  onSendMessage,
  onWriteMessage,
  writtenMessage
}

export function SendMessageForm({ onSendMessage, onWriteMessage, writtenMessage }: Props) {

  function handleInputValue(element) {
    const inputValue = element.target.value;
    onWriteMessage(inputValue);
  }

  function handleSubmitMessage(event) {
    event.preventDefault();
    if (writtenMessage) onSendMessage(test => !test);
  }

  return (
    <form
      onSubmit={event => handleSubmitMessage(event)}
      className="fixed bottom-8 w-full flex justify-center gap-4 " >
      <input 
        onKeyPress={(event) => { if (event.key === "Enter") handleSubmitMessage(event); }}
        onChange={element => handleInputValue(element)}
        value={writtenMessage}
        type="text" 
        className="block bg-dark-bg-300 h-12 max-w-[720px] w-3/4 rounded-[32px] px-4" 
      />
      <button className="rounded-full bg-brand w-12 h-12 flex items-center justify-center hover:bg-brand-hover">
        <PaperPlaneTilt size={32} color={theme.colors.input} weight="fill" />
      </button>
    </form>
  );
}

/* 
<Box
      as='form'
      // onSubmit={event => {
      //   console.log(event);
      //   handleSubmitMessage(event);
      // }}
      styleSheet={{
        position: "relative",
        top: "-85px",
        zIndex: 999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        padding: "0 2.5rem"
      }}
    >

      <TextField
        type='textarea'
        placeholder='digite sua mensagem aqui'
        onKeyPress={(event) => { if (event.key === "Enter") handleSubmitMessage(event); }}
        onChange={element => handleInputValue(element)}
        rounded='full'
        value={writtenMessage}
        styleSheet={{
          width: "85%",
          minHeight: "100%",
          maxHeight: "50rem",
          overflowY: "auto",

        }}
        name=""
        // autoComplete="off"
      />

      <button style={{ marginTop: "-0.5rem", padding: "0.5rem", borderRadius: "50%" }}>
        <SmileySticker size={50}  weight="fill" />
      </button>

      <button style={{ marginTop: "-0.5rem", padding: "0.5rem",borderRadius: "50%" }}>
        <PaperPlaneRight size={50} weight="fill" />
      </button>
    </Box>
*/