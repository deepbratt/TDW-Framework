import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

interface MetaTagsProps {
    canonical: string
    title: string
}

const MetaTags = ({ canonical, title } : MetaTagsProps) => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
  return (
    <Helmet defer={false}>
      <meta property="og:title" content={title} />

      <meta name="twitter:title" content={title} />

      <link rel="canonical" href={"https://Carokta.com/" + canonical} />
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