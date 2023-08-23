"use client";

import { ChatPage } from "./_components/chat";
import { SignOutDialog } from "./_components/SignOutDialog";
import { useRedirectNonAuthorizedUser } from "./_hooks/useRedirectNonAuthorizedUser";

export default function HomePage() {
  useRedirectNonAuthorizedUser();

  return (
    <main>
      <ChatPage />
      <SignOutDialog />
    </main>
  );
}
