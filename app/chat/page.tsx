"use client";

import { Chat } from "./components/chat";
import { SignOutDialog } from "./components/SignOutDialog";
import { useRedirectNonAuthorizedUser } from "./hooks/useRedirectNonAuthorizedUser";


export default function Home() {
  useRedirectNonAuthorizedUser();

  return (
    <main>
      <Chat />
      <SignOutDialog />
    </main>
  );
}
