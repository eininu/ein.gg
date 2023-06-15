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

const generateRandomClasses = () => {
  let cssClassNames = [
    "btnPrimary",
    "btnSecondary",
    "headerContainer",
    "footerContainer",
    "navBar",
    "dropDown",
    "heroSection",
    "cardContainer",
    "cardImage",
    "cardText",
    "formInput",
    "formSubmit",
    "modalWindow",
    "modalClose",
    "gridContainer",
    "gridItem",
    "listContainer",
    "listItem",
    "carouselContainer",
    "carouselItem",
    "tabContainer",
    "tabItem",
    "responsiveImage",
    "flexContainer",
    "flexItem",
    "leftSidebar",
    "rightSidebar",
    "headerLogo",
    "footerLogo",
    "mainContent",
    "bgPrimary",
    "bgSecondary",
    "textPrimary",
    "textSecondary",
    "textBold",
    "textItalic",
    "textUnderline",
    "alertSuccess",
    "alertError",
    "alertWarning",
    "spinnerLoading",
    "toggleSwitch",
    "checkboxCustom",
    "radioCustom",
    "iconSocial",
    "iconArrow",
    "iconClose",
    "iconHamburger",
    "lightboxContainer",
    "lightboxItem",
    "overlayDark",
    "overlayLight",
    "badgeStatus",
    "tooltipCustom",
    "popoverCustom",
    "collapsibleItem",
    "accordionItem",
    "progressBar",
    "progressCircle",
    "chartBar",
    "chartPie",
    "tableResponsive",
    "dataTable",
    "modalHeader",
    "modalBody",
    "modalFooter",
    "navItem",
    "navLink",
    "cardHeader",
    "cardBody",
    "cardFooter",
    "listGroup",
    "listGroupItem",
    "paginationContainer",
    "paginationItem",
    "breadcrumbsContainer",
    "breadcrumbsItem",
    "alertInfo",
    "alertDismiss",
    "dropdownMenu",
    "dropdownItem",
    "formGroup",
    "formControl",
    "formLabel",
    "formHelp",
    "inputGroup",
    "inputGroupAddon",
    "jumbotron",
    "mediaObject",
    "navbarBrand",
    "navbarToggle",
    "sidebarToggle",
    "userAvatar",
    "userProfile",
    "contentWrapper",
    "parallaxBackground",
    "stickyElement",
    "scrollSpy",
    "headerSticky",
    "footerSticky",
  ];

  function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  }

  function getRandomString(length) {
    let result = "";
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  let randomClasses = [];
  for (let i = 0; i < 3; i++) {
    let randomIndex = getRandomIndex(cssClassNames.length);
    randomClasses.push(cssClassNames[randomIndex]);
  }

  for (let i = 0; i < 3; i++) {
    let randomString = getRandomString(5);
    randomClasses.push(randomString);
  }

  return randomClasses.join(" ");
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
<body class="${generateRandomClasses()}">
<article class="${generateRandomClasses()}">
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
