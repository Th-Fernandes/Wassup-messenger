"use client";


import { AsideInfo } from "./components/AsideInfo";
import { SignActionForm } from "./components/SignActionForm";
import { useState } from "react";
import { SignUpConfirmationDialog } from "./components/SignUpConfirmationDialog";

export default function LoginPage() {
  const [isEmailModalOpened, setIsEmailModalOpened] = useState<boolean>(false);

  return (
    <main>
      <SignUpConfirmationDialog setIsEmailModalOpened={setIsEmailModalOpened} isEmailModalOpened={isEmailModalOpened}>
        <section className="flex max-w-[1440px] h-screen mx-auto">
          <AsideInfo />
          <SignActionForm setIsEmailModalOpened={setIsEmailModalOpened}/>
        </section>
      </SignUpConfirmationDialog>
    </main>
  );
}