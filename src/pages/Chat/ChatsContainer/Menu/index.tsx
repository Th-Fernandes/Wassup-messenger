import { DotsThreeCircleVertical, Sun, UserCircle } from "phosphor-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export function Menu() {
  const [isOptionsOpened, setIsOptionsOpened] = useState<boolean>(false);

  return (
    <>
      <header className="grid grid-cols-2">
        <div className="flex gap-3">
          <button className="w-8">
            <UserCircle size={32} />
          </button>
          <button
            onClick={() => setIsOptionsOpened((state: boolean) => !state)}
            className="w-8"
          >
            <DotsThreeCircleVertical size={32} />
          </button>
        </div>
        <button className="justify-self-end">
          <Sun size={32} />
        </button>
      </header>

      {
        isOptionsOpened &&
        <div className="mt-8 border border-brand-border rounded-2xl p-4 text-center">
          <ul>
            <li>
              <button>Perfil</button>
            </li>
            <li>
              <Dialog.Trigger asChild>
                <button>Sair</button>
              </Dialog.Trigger>
            </li>
          </ul>
        </div>
      }
    </>
  );
}