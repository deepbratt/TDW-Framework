import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

interface MetaTagsProps {
    canonical: string
    title: string
    description: string
    keywords: string
}

const MetaTags = ({ canonical, title, description, keywords } : MetaTagsProps) => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
  return (
    <Helmet defer={false}>
      <meta property="og:url" content="https://tezdealz.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="%PUBLIC_URL%/favicon.ico"/>
      <meta property="og:site_name" content="Tezdealz" />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="%PUBLIC_URL%/android-chrom-192x192.png"/>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={"https://Tezdealz.com/" + canonical} />
      <title>{title}</title>
    </Helmet>
  );
};

/*
<MetaTags
            title={metaData.title}
            description={metaData.description}
            canonical={metaData.canonical}
            keywords={metaData.keywords}
          />

*/

export default MetaTags;