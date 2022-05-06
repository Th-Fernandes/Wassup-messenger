import AsideInfo from "./AsideInfo/AsideInfo"
import {SignTypeToggle} from "./SignTypeToggle/SignTypeToggle"
import EmailConfirm from "./SignTypeToggle/EmailConfirm/EmailConfirm"
import { useState } from "react"

export default function SignAction() {
  const [emailModal, setEmailModal] = useState(false)

  return (
    <>
      {emailModal && <EmailConfirm emailModal={setEmailModal}/>}
      <AsideInfo/>
      <SignTypeToggle emailModal={setEmailModal} />
    </>
  )
}