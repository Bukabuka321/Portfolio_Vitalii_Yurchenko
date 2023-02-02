import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../pages/components/Layout";
import { Oswald } from "@next/font/google";
const oswald = Oswald({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={oswald.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
