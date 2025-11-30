// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Bagas • Anime Portfolio",
  description: "Anime style developer portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950`}
      >
        <div className="min-h-screen flex items-start gap-12 px-10 py-14">
          {children}
        </div>
      </body>
    </html>
  );
}
