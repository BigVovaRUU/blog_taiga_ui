import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Shadcn Blog",
  description: "Минимальный блог на Next.js + shadcn/ui (Button/Card)"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}