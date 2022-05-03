import AsideInfo from "./AsideInfo/AsideInfo"
import SignLogin from "./SignLogin/SignLogin"
import EmailConfirm from "components/SignAction/SignLogin/EmailConfirm/EmailConfirm"
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