import { useDatabase } from "hooks/useDatabase";
import { useEffect } from "react";

export default function A() {
  const { insert } = useDatabase();

  useEffect(() => {
    insert({
      username: "test121212",
      message: "hello world",
      session_id: "123"
    })
      .from("messages");
  }, []);
  return (
    <></>
  );
}