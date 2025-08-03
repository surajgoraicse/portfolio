import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import ConditionalFooter from "./ConditionalFooter";
import Provider from "@/context/Provider";

export const metadata: Metadata = {
  title: "suraj",
  description: "Suraj Gorai is a Backend Developer specializing in building scalable, production-grade systems using Go / Python from scratch. Explore his portfolio to see my projects and skills.",
  keywords: "Suraj Gorai, Backend Developer, Web Developer, Portfolio, Go, Python, Golang, Node.js, software engineer",
  authors: [{ name: "Suraj Gorai" }],
  openGraph: {
    title: "suraj",
    description: "",
    url: "#", // add your website url eg. https://suraj.dev
    siteName: "suraj",
    images: [
      {
        url: "https://res.cloudinary.com/surajgoraicse/image/upload/v1754202297/Suraj_Gorai_llxgon.png",
        width: 400,
        height: 200,
        alt: "suraj",
      },
    ],
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'suraj',
    creator: '@surajgoraicse',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position='bottom-right' />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}