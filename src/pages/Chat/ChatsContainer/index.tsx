import { GlobeHemisphereEast } from "phosphor-react";
import { Menu } from "./Menu";


export function ChatsContainer() {
  return (
    <aside className="bg-brand w-[36.80%] max-w-[365px] p-8">
      <Menu/>

      <ul className="mt-14">
        <li className="h-24 border-brand-border border rounded-2xl ">
          <button className="flex items-center gap-3  text-left h-full w-full px-4">
            <GlobeHemisphereEast size={64} weight="fill" />
            <span>
              <h2 className="text-lg">GlobalChat</h2>
              <p className="text-sm text-light-txt-200">Clique para participar</p>
            </span>
          </button>
        </li>
      </ul>
    </aside>
  );
}