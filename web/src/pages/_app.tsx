import { Header } from "@/components/layout/Header";
import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import { Saira, Saira_Stencil_One as SairaStencilOne } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--saira",
});

const sairaStencilOne = SairaStencilOne({
  subsets: ["latin"],
  variable: "--saira-stencil-one",
  weight: ["400"],
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${saira.variable} ${sairaStencilOne.variable}`}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
