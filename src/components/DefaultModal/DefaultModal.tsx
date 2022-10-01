import { ReactNode } from "react";
import colors from "../../common/colors.json";

interface Props {
  children: ReactNode
}

export function DefaultModal({children}:Props) {
  return (
    <article
      style={{
        width: "100%",
        inset: 0,
        height: "100vh",
        position: "fixed",
        zIndex: 999,
        backgroundColor: colors.neutrals["black-modal-bg"],
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </article>
  );
}