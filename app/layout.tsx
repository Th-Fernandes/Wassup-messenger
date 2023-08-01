import "assets/styles/global.css";
import { Roboto } from "next/font/google";
import React from "react";
import { Metadata } from "next";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Wassup Messenger",
  description: "Envie mensagens em tempo real para os mais diversos usuários ao redor do mundo",
  icons: {
    icon:  "/wassup-logo.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}