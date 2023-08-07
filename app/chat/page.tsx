"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "hooks/useAuth";

import { Chat } from "./components/chat";
import { SignOutDialog } from "./components/SignOutDialog";


export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    const hasSession = auth.getSession() === null ? false : true;

    if (!hasSession) {
      router.push("/");
    }

  }, []);

  return (
    <main>
      <Chat />
      <SignOutDialog />
    </main>
  );
}
