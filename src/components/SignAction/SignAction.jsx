import AsideInfo from "./AsideInfo/AsideInfo"
import SignLogin from "./SignLogin/SignLogin"
import EmailConfirm from "components/SignAction/SignLogin/EmailConfirm/EmailConfirm"
import { useState } from "react"

/*
  1- criar a estrutura do modal (x)
  2- criar o state para controlar o modal (x)
  3- passar como prop pro signlogin (x)
  4- manipular o estado através da função de signUp
*/

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