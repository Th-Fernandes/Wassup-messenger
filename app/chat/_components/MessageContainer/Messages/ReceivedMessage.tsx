import {UserCircle} from "phosphor-react";
import type { MessagesTable } from "types/MessagesTable";

interface Props {
  messageData:MessagesTable
}


export default function ReceivedMessage({messageData}:Props) {
  function handleMessageTime(messageDate) {
    //o dado recebido como argumento é como isso: 2022-05-02T18:37:53.961699+00:00;
    const divideInfo = messageDate.split("T");
    const getHour = divideInfo[1].split(".");

    return getHour[0];
  }

  return (
    <li className="my-8">
      <div className="inline-block bg-dark-bg-100 max-w-[350px] text-base pt-4 pb-7 px-6 mb-3 rounded-3xl rounded-bl-none text-light-txt-100 ">
        {messageData.message}
      </div>
      <div className="flex items-end gap-2 text-light-txt-200 text-sm">
        <UserCircle size={32}  weight="fill" />
        <span>{messageData.username}</span>
        <span>
          { handleMessageTime(messageData.created_at) }
        </span>
      </div>
    </li>
  );
}