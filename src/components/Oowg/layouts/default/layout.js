import formatContent from "./format-content.js";
import head from "./template-parts/head.js";
import footer from "./template-parts/footer.js";
const getWaterCss = async (theme) => {
  let res;
  if (theme === "dark") {
    res = await fetch("/oowg/assets/styles/dark.min.css");
  }

  if (theme === "light") {
    res = await fetch("/oowg/assets/styles/light.min.css");
  }
  if (theme === "auto") {
    res = await fetch("/oowg/assets/styles/water.min.css");
  }

  return await res.text();
};

const getCustomStyles = async () => {
  let res = await fetch("/oowg/assets/styles/style.css");
  return await res.text();
};

const generateHtmlTemplate = ({
  language,
  title,
  description,
  domainName,
  htmlContent,
  isDemo,
  contentImages,
  buttonText,
  buttonLink,
  faq,
  amp,
  focusElement,
  promoCode,
  ratingTableHead,
  ratingTableBody,
  customFocusElementCode,
  showDemoTable,
  theme,
}) => {
  return `<!DOCTYPE html>
<html lang="${language}">
${head(title, description, domainName, faq, amp)}
<body>
<article>
    ${formatContent(
      htmlContent,
      isDemo,
      contentImages,
      language,
      domainName,
      buttonText,
      buttonLink,
      faq,
      focusElement,
      promoCode,
      ratingTableHead,
      ratingTableBody,
      customFocusElementCode,
      showDemoTable
    )}
    <!-- custom article ul, ol, tables -->
    <!-- custom <b> in sentences with keyword -->
    <!-- pluses and minuses -->
</article>
${footer(language, domainName)}

${
  isDemo && theme === "auto"
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/water.min.css">`
    : `<link rel="stylesheet" href="/assets/styles/water.min.css">`
}
${
  isDemo && theme === "light"
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/light.min.css">`
    : `<link rel="stylesheet" href="/assets/styles/water.min.css">`
}
${
  isDemo && theme === "dark"
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/dark.min.css">`
    : `<link rel="stylesheet" href="/assets/styles/water.min.css">`
}
${
  isDemo
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/style.css">`
    : `<link rel="stylesheet" href="/assets/styles/style.css">`
}
</body>
</html>`;
};

export { generateHtmlTemplate, getWaterCss, getCustomStyles };
