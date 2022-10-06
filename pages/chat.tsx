import { useEffect } from "react";
import { useRouter } from "next/router";
import { supabaseAuthActions } from "helpers/supabase-auth-actions";
import { Chat } from "pages/Chat";
import * as Dialog  from "@radix-ui/react-dialog";
import { supabase } from "common/utils/supabaseClient";


export default function Home() {
  const router = useRouter();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if(error) console.error(error);
    router.push("/");
  }

  useEffect(() => {
    supabaseAuthActions.getSessionInfo({
      hasSession: () => { },
      hasNotSession: () => router.push("/")
    });

  }, []);

  return (
    <main>
      <Dialog.Root>
        <Chat/>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-20 bg-dark-bg-300/50 flex items-center justify-center">
            <Dialog.Content>
              <div className="bg-light-txt-100 rounded-2xl min-h-[200px] p-4 flex flex-col justify-between ">
                <div className="text-dark-bg-400">
                  <h2 className="text-2xl text-center mb-4">Tem certeza que deseja sair?</h2>
                  <p className="text-base">
                    Você está prestes a desconectar de sua conta. É essa ação que deseja 
                    realizar?
                  </p>
                </div>

                <div className="flex justify-between">
                  <Dialog.Close>
                    <button className="w-[200px] h-10 rounded-lg bg-error">Cancelar</button>
                  </Dialog.Close>
                  <button 
                    onClick={handleSignOut}
                    className="w-[200px] h-10 rounded-lg bg-light-txt-200 text-dark-bg-200"
                  >
                    Sair
                  </button>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
