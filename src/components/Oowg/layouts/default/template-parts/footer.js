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
<p class="${generateRandomClasses()}">${getRandomItem([
          "Если у вас возникнут вопросы или сложности в отношении этих Условий использования, не стесняйтесь обращаться к нам по адресу",
          "В случае возникновения вопросов или проблем, связанных с этими Условиями использования, мы просим вас связаться с нами по адресу",
          "Если у вас есть вопросы или проблемы относительно этих Условий использования, мы будем рады помочь вам. Свяжитесь с нами по адресу",
          "Мы всегда готовы помочь вам с любыми вопросами или проблемами, касающимися этих Условий использования. Пожалуйста, свяжитесь с нами по адресу",
          "Если вы столкнулись с какими-либо вопросами или проблемами, связанными с этими Условиями использования, пожалуйста, напишите нам на",
          "При возникновении любых вопросов или проблем в связи с этими Условиями использования, пожалуйста, не стесняйтесь связываться с нами по адресу",
          "Если эти Условия использования вызывают у вас вопросы или проблемы, мы будем рады помочь. Напишите нам на",
          "Если вы нуждаетесь в помощи или у вас есть вопросы по поводу этих Условий использования, пожалуйста, свяжитесь с нами по адресу",
          "Если у вас возникают вопросы или проблемы с пониманием этих Условий использования, мы готовы помочь. Свяжитесь с нами по адресу",
          "Если эти Условия использования вызывают у вас вопросы или неясности, мы всегда готовы помочь. Пишите нам на",
          "Мы всегда рады ответить на ваши вопросы и помочь решить любые проблемы, связанные с этими Условиями использования. Обращайтесь к нам по адресу",
          "Если у вас возникли вопросы или вы столкнулись с проблемами при использовании этих Условий, не стесняйтесь обратиться к нам по адресу",
          "Если у вас есть вопросы или замечания по поводу этих Условий использования, мы готовы помочь. Напишите нам на",
          "Если у вас есть какие-либо вопросы или проблемы, связанные с этими Условиями использования, мы будем рады помочь. Пожалуйста, свяжитесь с нами по адресу",
          "Если у вас возникнут какие-либо вопросы или проблемы, связанные с Условиями использования, не стесняйтесь связаться с нами по адресу",
          "При возникновении вопросов или проблем в отношении этих Условий использования, пожалуйста, свяжитесь с нами по адресу",
          "Если у вас есть какие-либо вопросы или проблемы, связанные с Условиями использования, мы будем рады помочь. Свяжитесь с нами по адресу",
          "Если эти Условия использования вызывают у вас вопросы или неясности, мы всегда готовы помочь. Свяжитесь с нами по адресу",
          "При возникновении любых вопросов или проблем, связанных с Условиями использования, пожалуйста, свяжитесь с нами по адресу",
          "Если у вас есть вопросы или проблемы относительно этих Условий использования, пожалуйста, напишите нам на",
          "Если у вас есть какие-либо вопросы или проблемы, связанные с этими Условиями использования, пожалуйста, обращайтесь к нам по адресу",
          "При возникновении любых вопросов или сложностей, связанных с этими Условиями использования, пожалуйста, свяжитесь с нами по адресу",
          "Если у вас возникнут вопросы или сложности в отношении этих Условий использования, мы просим вас связаться с нами по адресу",
          "Если у вас возникают вопросы или проблемы с пониманием этих Условий использования, не стесняйтесь обращаться к нам по адресу",
          "Если у вас есть какие-либо вопросы или проблемы, связанные с этими Условиями использования, мы будем рады помочь. Свяжитесь с нами по адресу",
          "Если эти Условия использования вызывают у вас вопросы или проблемы, мы всегда готовы помочь. Пожалуйста, свяжитесь с нами по адресу",
          "При возникновении любых вопросов или проблем, связанных с Условиями использования, мы будем рады помочь. Свяжитесь с нами по адресу",
          "Если у вас есть какие-либо вопросы или замечания по поводу этих Условий использования, пожалуйста, свяжитесь с нами по адресу",
          "Если у вас возникают вопросы или проблемы с этими Условиями использования, мы всегда готовы помочь. Свяжитесь с нами по адресу",
          "Если у вас есть какие-либо вопросы или проблемы, связанные с этими Условиями использования, мы будем рады помочь. Свяжитесь с нами по адресу",
        ])} <a href="mailto:${emailPrefix + domainName}">contact@${
          emailPrefix + domainName
        }</a>.</p>`
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
<p class="${generateRandomClasses()}">${getRandomItem([
          "If you have any questions or difficulties with these Terms of Use, please do not hesitate to contact us at",
          "In case of any questions or problems related to these Terms of Use, we ask you to contact us at",
          "If you have any questions or problems regarding these Terms of Use, we would be happy to help. Please contact us at",
          "We are always ready to help you with any questions or problems related to these Terms of Use. Please contact us at",
          "If you encounter any questions or problems related to these Terms of Use, please write to us at",
          "If any questions or problems arise in relation to these Terms of Use, please feel free to contact us at",
          "If these Terms of Use raise any questions or problems, we will be happy to help. Write to us at",
          "If you need assistance or have any questions about these Terms of Use, please contact us at",
          "If you have any questions or problems with understanding these Terms of Use, we are ready to help. Contact us at",
          "If these Terms of Use cause any questions or uncertainties, we are always ready to help. Write to us at",
          "We are always happy to answer your questions and help solve any problems related to these Terms of Use. Contact us at",
          "If you have any questions or encounter problems when using these Terms, do not hesitate to contact us at",
          "If you have any questions or remarks about these Terms of Use, we are ready to help. Write to us at",
          "If you have any questions or problems related to these Terms of Use, we would be happy to help. Please contact us at",
          "If any questions or problems arise related to the Terms of Use, do not hesitate to contact us at",
          "In case of any questions or problems with these Terms of Use, please contact us at",
          "If you have any questions or problems related to these Terms of Use, we would be glad to help. Please contact us at",
          "If these Terms of Use cause any questions or uncertainties, we are always ready to help. Please contact us at",
          "In case of any questions or problems related to these Terms of Use, please contact us at",
          "If you have any questions or problems regarding these Terms of Use, please write to us at",
          "If you have any questions or problems related to these Terms of Use, please contact us at",
          "In case of any questions or difficulties related to these Terms of Use, please contact us at",
          "If you have any questions or difficulties with these Terms of Use, we ask you to contact us at",
          "If you have any questions or problems with these Terms of Use, please do not hesitate to contact us at",
          "If you have any questions or problems related to these Terms of Use, we would be glad to help. Please contact us at",
          "If these Terms of Use raise any questions or problems, we are always ready to help. Please contact us at",
          "In case of any questions or problems related to these Terms of Use, we would be glad to help. Please contact us at",
          "If you have any questions or remarks about these Terms of Use, please contact us at",
          "If you have any questions or problems with these Terms of Use, we are always ready to help. Please contact us at",
          "If you have any questions or problems related to these Terms of Use, we would be glad to help. Please contact us at",
        ])} <a href="mailto:${emailPrefix + domainName}">${
          emailPrefix + domainName
        }</a>.</p>`
  }</small>
<a  class="${generateRandomClasses()}" href="#" style="display: block; text-align: center">${
    language === "ru"
      ? `${
          getRandomItem([
            "Вверх страницы",
            "В начало",
            "Наверх",
            "Возврат наверх",
            "Перейти вверх",
            "Вернуться наверх",
            "Подняться наверх",
            "Пролистать вверх",
            "Прокрутить вверх",
            "Проскроллить наверх",
            "Вверх",
            "Возврат в начало",
            "Подъем вверх",
            "Промотать вверх",
            "Прокрутка наверх",
            "Взойти вверх",
            "Подняться в начало",
            "Перейти в начало",
            "Вверх страницы",
            "Вернуться в начало",
            "Направление вверх",
            "Поверхность сайта",
            "В начало сайта",
            "Вознесение наверх",
            "Прокрутите вверх",
            "Вершина страницы",
            "Поднимитесь наверх",
            "Вверху страницы",
            "Перемотка вверх",
            "Вверху",
            "Возврат вверх",
            "Верхний уровень",
            "На самый верх",
            "Подняться к верху",
            "Вверх к началу",
            "Вернуться вверх",
            "Пролистать до начала",
            "Вверх, вверх",
            "Вверх по странице",
            "Переместиться вверх",
            "Наверху",
            "На весь экран вверх",
            "Наверх к вершине",
          ]) + " ⬆"
        }`
      : `${
          getRandomItem([
            "Back to Top",
            "Scroll to Top",
            "Go to Top",
            "Up to Top",
            "Return to Top",
            "Top of Page",
            "Move to Top",
            "Scroll Up",
            "Go Up",
            "Navigate to Top",
            "Upward",
            "To the Top",
            "Elevate",
            "Ascend",
            "Rise to Top",
            "Up to the Peak",
            "Climb to Top",
            "Up to Start",
            "Begin at Top",
            "Top",
            "Reach the Top",
            "Up, Up, and Away",
            "Head to Top",
            "Leap to Top",
            "Jump to Top",
            "Elevate to Top",
            "Advance to Top",
            "Scroll Back Up",
            "Scroll to Start",
            "Top of the Site",
            "Get Back Up",
            "Slide to Top",
            "Back to Peak",
            "Reverse to Top",
            "Rewind to Top",
            "Hit the Top",
            "Back to Beginning",
            "All the Way Up",
            "Sprint to Top",
            "Dash to Top",
            "Up We Go",
            "Scroll to Peak",
            "Top of the Scroll",
            "Fly to Top",
            "Soar to Top",
          ]) + " ⬆"
        }`
  }</a>
    
</footer>`;
};

export default footer;
