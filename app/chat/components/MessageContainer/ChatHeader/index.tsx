import { GlobeHemisphereEast, } from "phosphor-react";

export function ChatHeader() {

  return (
    <header 
      className=" bg-dark-bg-200 flex items-center px-4 md:px-6 lg:px-16 gap-6"  
    >
      <GlobeHemisphereEast size={73} className="text-light-txt-100" weight="fill" />
      <h1 className="text-2xl text-light-txt-100">Global Chat</h1>
    </header>
  );
}