import Head from "next/head";
import Link from "next/link";
//
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Custom404() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("Error.404.Head")} | Clínica Dentária Sorriso Popular</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
        <div className="text-center">
          <div className="text-xl font-bold text-primary">
            {t("Error.404.Title")}
          </div>
          <div>{t("Error.404.Text")}</div>
        </div>
        <Button />
      </div>
    </>
  );
}

function Button() {
  const { t } = useTranslation();
  return (
    <>
      <Link href="/" passHref>
        <a className="px-8 py-2 font-bold uppercase duration-150 bg-white border-2 rounded-full shadow-lg text-primary border-primary hover:bg-primary hover:text-white">
          <span>{t("Error.Button")}</span>
        </a>
      </Link>
    </>
  );
}
