import { Button } from "@skynexui/components";
import colors from "common/colors.json";

export function SubmitButton() {
  return (
    <Button
      variant="secondary"
      type="submit"
      label="Entrar"
      fullWidth={true}
      rounded="full"
      styleSheet={{
        font: " 2rem 'Lexend Deca', sans-serif",
        display: "block",
        maxWidth: "35rem",
        margin: "1.5rem auto 0 ",
        color: colors.primary["purple"]
      }}
    />
  );
}