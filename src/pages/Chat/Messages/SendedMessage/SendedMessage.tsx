import { UserCircle } from "phosphor-react";

interface Props {
  messageData: {
    message: string;
    username: string;
    created_at: string;
  }
}

export default function SendedMessage({messageData}: Props) {
  return(
    <li className="my-8 flex flex-col items-end">
      <div className="bg-brand max-w-[350px] text-base pt-4 pb-7 px-6 mb-3 rounded-3xl rounded-br-none ">
        {messageData.message}
      </div>
      <div className="flex items-end gap-2 text-light-txt-200 text-sm">
        <span>{messageData.username}</span>
        <UserCircle size={32}  weight="fill" />
      </div>
    </li>
  );
}