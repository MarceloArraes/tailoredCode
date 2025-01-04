import { ArtDecoSvg } from "@/components/ArtDeco";
import { NavigationBar } from "@/components/NavigationBar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailored Code",
  description: "programmed by Marcelo",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-gradient-to-b from-background to-popover dark:from-background dark:to-popover">
        {/* <body className="bg-[url(/marbleGold1.webp)]"> */}
        <NavigationBar />
        <ArtDecoSvg>
          <main>{children}</main>
        </ArtDecoSvg>
        {/* </ArtDecoSvg> */}
        {/* <ArtDecoSvgBottom /> */}
      </body>
    </html>
  );
}
