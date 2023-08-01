"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Chat } from "./components/chat";
import * as Dialog from "@radix-ui/react-dialog";
import { supabase } from "utils/supabaseClient";
import { useAuth } from "hooks/useAuth";
import { DefaultDialog } from "components/radix/Dialog";


export default function Home() {
  const router = useRouter();
  const auth = useAuth();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) console.error(error);
    router.push("/");
  }

  useEffect(() => {
    const hasSession = auth.getSession() === null ? false : true;

    if (!hasSession) {
      router.push("/");
    }

  }, []);

  return (
    <main>
      <DefaultDialog recieve={<Chat />}>
        <div className="bg-light-txt-100 rounded-2xl min-h-[200px] p-4 flex flex-col justify-between">
          <div className="text-dark-bg-400">
            <h2 className="text-2xl text-center mb-4">Tem certeza que deseja sair?</h2>
            <p className="text-base">
              Você está prestes a desconectar de sua conta. É essa ação que deseja
              realizar?
            </p>
          </div>

          <div className="flex justify-between">
            <Dialog.Close className="h-10 w-[200px]  rounded-lg bg-light-txt-200 text-dark-bg-200">
              Cancelar 
            </Dialog.Close>
            <button
              onClick={handleSignOut}
              className="w-[200px] h-10 rounded-lg bg-error"
            >
              Sair
            </button>
          </div>
        </div>
      </DefaultDialog>
    </main>
  );
}
