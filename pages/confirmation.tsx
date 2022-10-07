import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";

export default function Confirmation() {
  const router = useRouter();

  return (
    <main className="bg-brand min-h-screen">
      <Dialog.Root open>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-dark-bg-300/50 flex items-center justify-center">
          <Dialog.Content>
            <div className="bg-dark-bg-300 rounded-2xl min-h-[200px] max-w-md p-4 flex flex-col justify-between">
              <div className="text-light-txt-100">
                <h2 className="text-2xl text-center mb-4">Cadastro feito!</h2>
                <p className="text-base">
                  Tudo certo! o acesso a sua conta já foi liberado. Venha experimentar
                  o mensageiro roxo :)
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Dialog.Close
                  onClick={() => router.push("/")} 
                  className="h-10 w-[200px]  rounded-lg bg-brand">
                  Utilizar o App
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>

      </Dialog.Root>
    </main>
  );
}