import { GlobeHemisphereEast, } from "phosphor-react";
import theme from "assets/theme/index.json";

export function ChatHeader() {

  return (
    <header 
      className="h-[11.75vh] bg-dark-bg-200 flex items-center px-4 md:px-6 lg:px-16 gap-6"  
    >
      <GlobeHemisphereEast size={73} color={theme.colors.input} weight="fill" />
      <h1 className="text-2xl">Global Chat</h1>
    </header>
  );
}