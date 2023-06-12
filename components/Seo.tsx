import Head from "next/head";

interface SEOProps {
  pageTitle: string;
}

const SEO: React.FC<SEOProps> = ({ pageTitle }) => (
  <Head>
    <title>{pageTitle}</title>
  </Head>
);

export default SEO;
