"use client";

import { useState } from "react";
import { AsideInfo } from "./_components/AsideInfo";
import { SignActionForm } from "./_components/SignActionForm";
import { SignUpConfirmationDialog } from "./_components/SignUpConfirmationDialog";
import { signUpModalContext } from "./_providers/signUpModalProvider";

export function LoginPage() {
  const [isEmailModalOpened, setIsEmailModalOpened] = useState<boolean>(false);

  return (
    <main>
      <signUpModalContext.Provider value={{
        isEmailModalOpened,
        setIsEmailModalOpened
      }}>
        <section className="flex max-w-[1440px] h-screen mx-auto">
          <AsideInfo />
          <SignActionForm />
        </section>
        <SignUpConfirmationDialog/>
      </signUpModalContext.Provider>
    </main>
  );
}