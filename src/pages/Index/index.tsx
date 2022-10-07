import { AsideInfo } from "./AsideInfo";
import { SignTypeToggle } from "./SignTypeToggle";

export function SignActionPage() {
  return (
    <section className="flex max-w-[1440px] h-screen mx-auto">
      <AsideInfo />
      <SignTypeToggle/>
    </section>
  );
}