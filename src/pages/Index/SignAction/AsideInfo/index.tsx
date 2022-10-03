import { NextImage } from "components/Next/Image";

export function AsideInfo() {
  return (
    <aside className="hidden lg:flex flex-col justify-between items-center py-32 w-[36.85%]  bg-brand-hover">
      <div className="text-light-txt-100  text-center">
        <NextImage 
          className="block mx-auto" 
          src="/wassup-logo.svg" 
          alt="logo" 
          width={256}
          height={256}
        />

        <h2 className="text-4xl font-bold mb-2">Wassup Messenger</h2>
        <p >O seu mensageiro. Simples, Rápido e fácil.</p>
      </div>

      <div className="text-light-txt-100">
        <NextImage 
          className="block mx-auto" 
          src="/qrcode-asset.png" 
          alt="escaneie o QRcode para baixar o aplicativo" 
          width={180} height={180}
        />
        <p className="text-sm text-light-txt-200 mt-2">Experimente nossa versão mobile</p>
      </div>
    </aside>
  );
}