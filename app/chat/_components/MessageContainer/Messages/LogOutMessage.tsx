interface Props {
  username: string
}

export function LogOutMessage({ username }:Props) {
  return (
    <li
      className="text-light-txt-100 text-center text-base mb-4"
    >
      {username} saiu.
    </li>
  );
}