const head = (title, description, domainName, faq, amp) => {
  return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    ${
      description === domainName + " Website Description" || description === ""
        ? ""
        : '<meta name="description" content="' + description + '" />'
    }
    <link rel="canonical" href="https://${domainName}/" />
    ${
      amp === true
        ? `<link rel="amphtml" href="https://${domainName}/amp.html">`
        : ""
    }
    <meta name="generator" content="OOWG"/>
    <script type = "application/ld+json">
    {
    "@context": "http://www.schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "item": {
            "@type": "WebPage",
            "@id": "/",
            "name": "☘️Website"
        }
    }, {
        "@type": "ListItem",
        "position": 2,
        "item": {
            "@type": "WebPage",
            "@id": "/#h1_1",
            "name": "⚡️⚡️⚡️ Click 💸💸💸"
        }
    }]
    }
    </script>
    ${
      faq.length > 0
        ? `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [${faq.map((faqItem) => {
        return `{
        "@type": "Question",
        "name": "${faqItem[0]}",
      "acceptedAnswer": {
      "@type": "Answer",
      "text": "${faqItem[1]}"
    }
    }`;
      })}]
    }
  </script>`
        : ""
    }
    
</head>`;
};

export default head;
