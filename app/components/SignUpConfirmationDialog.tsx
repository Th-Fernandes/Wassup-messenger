import {Dialog} from "components/radix/Dialog";
import { useContext } from "react";
import { signUpModalContext } from "../signUpModalProvider";

export function SignUpConfirmationDialog() {
  const theme = useContext(signUpModalContext);

  return (
    <Dialog.Basis open={theme?.isEmailModalOpened} onOpenChange={theme?.setIsEmailModalOpened}>
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
            <Dialog.Close onClick={() => theme?.setIsEmailModalOpened(false)} className="h-10 w-[200px]  rounded-lg bg-brand">
                    Entendido!
            </Dialog.Close>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Basis>
  );
}