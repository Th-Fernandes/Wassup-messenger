import { useState } from "react";
import { AsideInfo } from "./AsideInfo";
import { SignTypeToggle } from "./SignTypeToggle";
import { EmailConfirm } from "./SignTypeToggle/EmailConfirm";

export function SignAction() {
  const [emailModal, setEmailModal] = useState(false);

  return (
    <>
      {emailModal && <EmailConfirm emailModal={setEmailModal}/>}
      <AsideInfo />
      <SignTypeToggle/>
    </>
  );
}