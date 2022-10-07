/* 
  1: ele deve ficar desabilitado quando os inputs estão vazios
  2: ele deve fazer um loading quando a ação do banco está rolando
*/

export function SubmitButton() {
  return (
    <button
      type="submit"
      className="w-full bg-brand rounded-2xl h-[45px] mt-8 text-light-txt-100 font-medium text-lg"
    >
      Entrar
    </button>
  );
}