interface Props {
  username: string
}

export function LogOutMessage({ username }:Props) {
  return (
    <li
      style={{ marginBottom: "1.2rem", textAlign: "center", fontSize: "1.2rem" }}
    >
      {username} saiu.
    </li>
  );
}