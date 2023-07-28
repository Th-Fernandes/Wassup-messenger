import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface Props {
  setIsEmailModalOpened: any;
  isEmailModalOpened: any;
  children: ReactNode
}

export function SignUpConfirmationDialog({ isEmailModalOpened, setIsEmailModalOpened, children }:Props) {
  return (
    <Dialog.Root onOpenChange={setIsEmailModalOpened} open={isEmailModalOpened}>
      {children}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-dark-bg-300/50 flex items-center justify-center">
          <Dialog.Content>
            <div className="bg-dark-bg-300 rounded-2xl min-h-[200px] max-w-md p-4 flex flex-col justify-between">
              <div className="text-light-txt-100">
                <h2 className="text-2xl text-center mb-4">Falta pouco!</h2>
                <p className="text-base">
                    Falta apenas um passo para liberarmos o acesso a sua conta: Precisamos 
                    que você confirme o cadastro no seu e-mail.
                </p>
              </div>

              <div className="flex justify-center mt-4">
                <Dialog.Close className="h-10 w-[200px]  rounded-lg bg-brand">
                    Entendido!
                </Dialog.Close>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}