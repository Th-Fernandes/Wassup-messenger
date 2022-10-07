import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface Props {
  recieve: ReactNode;
  children: ReactNode;
}

export function DefaultDialog({recieve, children}:Props) {
  return (
    <Dialog.Root>
      {recieve}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-dark-bg-300/50 flex items-center justify-center">
          <Dialog.Content>
            {children}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}