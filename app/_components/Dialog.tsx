import * as PrimitiveDialog from "@radix-ui/react-dialog";
import {  ReactNode } from "react";

interface Props extends PrimitiveDialog.DialogProps {
  children: ReactNode,
}

export const Dialog = {
  Basis: DialogBasis,
  Trigger: PrimitiveDialog.Trigger,
  Content: PrimitiveDialog.Content,
  Close: PrimitiveDialog.Close
};

function DialogBasis({children, open}: Props) {
  return (
    <PrimitiveDialog.Root open={open}>
      <PrimitiveDialog.Portal>
        <PrimitiveDialog.Overlay className="fixed inset-0 z-20 bg-dark-bg-300/50 flex items-center justify-center">
          {children}
        </PrimitiveDialog.Overlay>
      </PrimitiveDialog.Portal>
    </PrimitiveDialog.Root>
  );
}