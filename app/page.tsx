"use client";


import { AsideInfo } from "./components/AsideInfo";
import { SignActionForm } from "./components/SignActionForm";
import { useState } from "react";
import { SignUpConfirmationDialog } from "./components/SignUpConfirmationDialog";
import { signUpModalContext } from "./signUpModalProvider";

export default function LoginPage() {
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