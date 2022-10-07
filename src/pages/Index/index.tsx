import { Dispatch, SetStateAction } from "react";
import { AsideInfo } from "./AsideInfo";
import { SignTypeToggle } from "./SignTypeToggle";

interface Props {
  setIsEmailModalOpened: Dispatch<SetStateAction<boolean>>
}

export function SignActionPage({setIsEmailModalOpened}:Props) {
  return (
    <section className="flex max-w-[1440px] h-screen mx-auto">
      <AsideInfo />
      <SignTypeToggle setIsEmailModalOpened={setIsEmailModalOpened}/>
    </section>
  );
}