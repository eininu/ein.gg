import formatContent from "./format-content.js";
import head from "./template-parts/head.js";
import footer from "./template-parts/footer.js";
const getWaterCss = async () => {
  let res = await fetch("/oowg/assets/styles/water.min.css");
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
      customFocusElementCode
    )}
    <!-- custom article ul, ol, tables -->
    <!-- custom <b> in sentences with keyword -->
    <!-- pluses and minuses -->
</article>
${footer(language, domainName)}
${
  isDemo
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/water.min.css">`
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
