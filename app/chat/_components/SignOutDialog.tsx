import { Dialog } from "components/radix/Dialog";
import { useRouter } from "next/navigation";
import { supabase } from "utils/supabaseClient";


export function SignOutDialog() {
  const router = useRouter();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) console.error(error);
    router.push("/");
  }

  return (
    <Dialog.Basis>    
      <Dialog.Content>
        <div className="bg-dark-bg-300 text-light-txt-100 rounded-2xl min-h-[200px] p-4 flex flex-col justify-between ">
          <div>
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
      </Dialog.Content>
    </Dialog.Basis>
  );
}