import { Button } from "@skynexui/components"
import colors from "../../../../common/colors.json"

export function SubmitButton() {
  return (
    <Button
    buttonColors={{
      contrastColor: '#FFFFFF',
      mainColor: colors.primary['purple'],
    }}
    variant="secondary"
    type="submit"
    label="Entrar"
    fullWidth={true}
    rounded="full"
    colorVariant="secondary"
    styleSheet={{
      font: " 2rem 'Lexend Deca', sans-serif",
      display: 'block',
      maxWidth: '35rem',
      margin: '1.5rem auto 0 ',
    }}
  />
  )
}