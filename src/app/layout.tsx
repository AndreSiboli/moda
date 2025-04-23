import { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/styles/pages/globals.scss";

import { ReduxProvider } from "@/redux/Provider";
import MainContainer from "@/components/layout/MainContainer";
import { MessageProvider } from "@/context/Message";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "MODA",
  description: "This is a fictional site about fashion.",
  creator: "André Siboli",
  keywords:
    "fashion, clothes, moda, woman, women, bikini, dress, dresses, intimate, jewelry",
  icons: {
    icon: "public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${raleway.variable}`}>
        <ReduxProvider>
          <MessageProvider>
            <MainContainer>{children}</MainContainer>
          </MessageProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
