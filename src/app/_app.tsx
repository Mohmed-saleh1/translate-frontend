import { AppProps } from "next/app";
import { withTranslation } from "next-i18next";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTranslation()(MyApp);
