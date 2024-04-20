import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Link from "next/link";
import { Toaster } from "~/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} dark`}>
        <main className="flex min-h-screen">
          <div className="flex w-64 flex-col gap-4 border-r border-slate-600 p-4">
            <Link href="tts">Text to Speach</Link>
            <Link href="stt">Speach to Text</Link>
            <Link href="itt">Image to Text</Link>
          </div>
          <div className="w-full p-4">{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
