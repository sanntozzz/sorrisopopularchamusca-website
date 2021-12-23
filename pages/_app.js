import Head from "next/head";
import "../styles/globals.css";
// ScrollToTop
import ScrollToTop from "../components/Layout/ScrollToTop";
// i18next
import { appWithTranslation } from "next-i18next";

const metaData = {
  title: "Clínica Dentária Sorriso Popular",
  description:
    "Na Sorriso Popular Chamusca a Avaliação Oral é gratuita e sem compromisso! Será avaliado por um dos nossos médicos dentistas. Sem custos e sem compromisso!",
  type: "website",
  url: "https://www.sorrisopopularchamusca.com/",
  image:
    "https://raw.githubusercontent.com/sanntozzz/sorrisopopularchamusca-website/main/public/images/OG_Image.png",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Primary Meta Tags */}
        <title>{metaData.title}</title>
        <meta name="title" content={metaData.title} />
        <meta name="description" content={metaData.description} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={metaData.type} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.image} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={metaData.url} />
        <meta property="twitter:title" content={metaData.title} />
        <meta property="twitter:description" content={metaData.description} />
        <meta property="twitter:image" content={metaData.image}></meta>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
