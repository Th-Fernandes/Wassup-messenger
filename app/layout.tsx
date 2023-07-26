import { Roboto } from "next/font/google";
import "assets/styles/global.css";
import React from "react";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"]
});

export const metadata = {
  title: "Wassup Messenger",
  description: "Envie mensagens em tempo real para os mais diversos usuários ao redor do mundo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
