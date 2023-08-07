"use client";


import { AsideInfo } from "./components/AsideInfo";
import { SignActionForm } from "./components/SignActionForm";
import { createContext, useState } from "react";
import { SignUpConfirmationDialog } from "./components/SignUpConfirmationDialog";

export const ThemeContext = createContext<Theme | null>(null);

interface Theme {
  isEmailModalOpened: any,
  setIsEmailModalOpened: any
}

export default function LoginPage() {
  const [isEmailModalOpened, setIsEmailModalOpened] = useState<boolean>(false);

  return (
    <main>
      <ThemeContext.Provider value={{
        isEmailModalOpened,
        setIsEmailModalOpened
      }}>
        <section className="flex max-w-[1440px] h-screen mx-auto">
          <AsideInfo />
          <SignActionForm />
        </section>
        <SignUpConfirmationDialog/>
      </ThemeContext.Provider>
    </main>
  );
}