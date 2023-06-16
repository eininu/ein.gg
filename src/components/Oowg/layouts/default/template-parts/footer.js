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

const getRandomElements = (arr) => {
  let arrCopy = [...arr];
  let result = [];
  let length = arr.length <= 20 ? arr.length : 20;

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * arrCopy.length);
    result.push(" " + arrCopy[randomIndex]);
    arrCopy.splice(randomIndex, 1);
  }

  return result;
};

const getRandomItem = (arr) => {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const emailPrefix = "contact@".replaceAll(
  "contact@",
  getRandomItem([
    "contact@",
    "support@",
    "admin@",
    "info@",
    "help@",
    "billing@",
    "sales@",
    "marketing@",
    "press@",
    "hello@",
    "feedback@",
    "webmaster@",
    "team@",
    "business@",
    "partners@",
    "accounts@",
    "hr@",
    "jobs@",
    "admissions@",
    "inquiries@",
    "service@",
    "customer.service@",
    "editor@",
    "news@",
    "privacy@",
    "management@",
    "subscriptions@",
    "donations@",
    "services@",
    "financial@",
    "media@",
    "advertising@",
    "office@",
    "members@",
    "technical@",
    "customersupport@",
    "user@",
    "registration@",
    "customercare@",
    "security@",
    "memberservices@",
    "customer.relations@",
    "corp@",
    "pr@",
    "investorrelations@",
    "affiliates@",
    "legal@",
    "order@",
    "requests@",
    "developer@",
    "enquiries@",
    "network@",
    "operations@",
    "compliance@",
    "customer@",
    "general.info@",
    "publicrelations@",
    "investors@",
    "supportteam@",
    "communications@",
    "helpdesk@",
    "customercare@",
    "noreply@",
    "webinfo@",
  ])
);

const footer = (language, domainName) => {
  return `<footer class="${generateRandomClasses()}">

    <small class="${generateRandomClasses()}">${
    language === "ru"
      ? `<p class="${generateRandomClasses()}">Авторское право &copy; ${new Date().getFullYear()} ${domainName}. Все права защищены.</p>
<p class="${generateRandomClasses()}">Используя этот сайт, вы соглашаетесь с следующими Условиями использования:</p>
<ol class="${generateRandomClasses()}">
<li class="${generateRandomClasses()}">
<p class="${generateRandomClasses()}">Использование контента: Весь контент на этом сайте предназначен только для информационных целей. Вы не можете копировать, воспроизводить, распространять или изменять любой контент без нашего письменного разрешения.</p>
</li>
<li class="${generateRandomClasses()}">
<p class="${generateRandomClasses()}">Партнерские ссылки: Этот сайт содержит партнерские ссылки, что означает, что мы можем получить комиссию, если вы совершите покупку через наши ссылки. Мы продвигаем только те продукты и услуги, в которые верим, и наши мнения являются собственными.</p>
</li>
<li>
<p class="${generateRandomClasses()}">Отказ от гарантий: Этот сайт и его контент предоставляются "как есть" без каких-либо гарантий, явных или подразумеваемых, включая, но не ограничиваясь, подразумеваемыми гарантиями товарной пригодности, соответствия конкретной цели или отсутствия нарушения прав.</p>
</li>
<li class="${generateRandomClasses()}">
<p class="${generateRandomClasses()}">Ограничение ответственности: Мы не будем нести ответственность за какие-либо убытки, проистекающие из использования этого сайта, включая, но не ограничиваясь, прямыми, косвенными, случайными, наказуемыми и последующими убытками.</p>
</li>
<li class="${generateRandomClasses()}">
<p class="${generateRandomClasses()}">Возмещение убытков: Вы соглашаетесь возместить нам любые претензии, убытки или расходы, возникшие в результате использования этого сайта или нарушения вами этих Условий использования.</p>
</li>
</ol>
<p class="${generateRandomClasses()}">Если у вас есть какие-либо вопросы или проблемы с этими Условиями использования, пожалуйста, свяжитесь с нами по адресу <a href="mailto:${
          emailPrefix + domainName
        }">contact@${emailPrefix + domainName}</a>.</p>`
      : `<p>Copyright &copy; ${new Date().getFullYear()} ${domainName}. All rights reserved.</p>
<p class="${generateRandomClasses()}">By using this website, you agree to the following Terms and Conditions:</p>
<ol class="${generateRandomClasses()}">
<li>
<p class="${generateRandomClasses()}">Use of Content: All content on this website is for informational purposes only. You may not copy, reproduce, distribute, or modify any content without our written permission.</p>
</li>
<li class="${generateRandomClasses()}">
<p>Affiliate Links: This website contains affiliate links, which means that we may earn a commission if you make a purchase through our links. We only promote products and services that we believe in, and our opinions are our own.</p>
</li>
<li class="${generateRandomClasses()}">
<p>Disclaimer of Warranties: This website and its content are provided "as is" without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
</li>
<li class="${generateRandomClasses()}">
<p>Limitation of Liability: We will not be liable for any damages of any kind arising from the use of this website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.</p>
</li>
<li class="${generateRandomClasses()}">
<p>Indemnification: You agree to indemnify and hold us harmless from any claims, damages, or expenses arising out of your use of this website or your violation of these Terms and Conditions.</p>
</li>
</ol class="${generateRandomClasses()}">
<p class="${generateRandomClasses()}">If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:${
          emailPrefix + domainName
        }">${emailPrefix + domainName}</a>.</p>`
  }</small>
<a  class="${generateRandomClasses()}" href="#" style="display: block; text-align: center">${
    language === "ru" ? "Наверх сайта ⬆" : "Back to top ⬆"
  }</a>
    
</footer>`;
};

export default footer;
