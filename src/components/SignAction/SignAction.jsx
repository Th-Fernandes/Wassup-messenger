import AsideInfo from "./AsideInfo/AsideInfo"
import SignLogin from "./SignTypeToggle/SignTypeToggle"
import EmailConfirm from "./SignTypeToggle/EmailConfirm/EmailConfirm"
import { useState } from "react"

export default function SignAction() {
  const [emailModal, setEmailModal] = useState(false)

  return (
    <>
      {emailModal && <EmailConfirm emailModal={setEmailModal}/>}
      <AsideInfo/>
      <SignLogin emailModal={setEmailModal} />
    </>
  )
}