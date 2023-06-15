const footer = (language, domainName) => {
  return `<footer>

    <small>${
      language === "ru"
        ? `<p>Авторское право &copy; ${new Date().getFullYear()} ${domainName}. Все права защищены.</p>
<p>Используя этот сайт, вы соглашаетесь с следующими Условиями использования:</p>
<ol>
<li>
<p>Использование контента: Весь контент на этом сайте предназначен только для информационных целей. Вы не можете копировать, воспроизводить, распространять или изменять любой контент без нашего письменного разрешения.</p>
</li>
<li>
<p>Партнерские ссылки: Этот сайт содержит партнерские ссылки, что означает, что мы можем получить комиссию, если вы совершите покупку через наши ссылки. Мы продвигаем только те продукты и услуги, в которые верим, и наши мнения являются собственными.</p>
</li>
<li>
<p>Отказ от гарантий: Этот сайт и его контент предоставляются "как есть" без каких-либо гарантий, явных или подразумеваемых, включая, но не ограничиваясь, подразумеваемыми гарантиями товарной пригодности, соответствия конкретной цели или отсутствия нарушения прав.</p>
</li>
<li>
<p>Ограничение ответственности: Мы не будем нести ответственность за какие-либо убытки, проистекающие из использования этого сайта, включая, но не ограничиваясь, прямыми, косвенными, случайными, наказуемыми и последующими убытками.</p>
</li>
<li>
<p>Возмещение убытков: Вы соглашаетесь возместить нам любые претензии, убытки или расходы, возникшие в результате использования этого сайта или нарушения вами этих Условий использования.</p>
</li>
</ol>
<p>Если у вас есть какие-либо вопросы или проблемы с этими Условиями использования, пожалуйста, свяжитесь с нами по адресу <a href="mailto:contact@${domainName}">contact@${domainName}</a>.</p>`
        : `<p>Copyright &copy; ${new Date().getFullYear()} ${domainName}. All rights reserved.</p>
<p>By using this website, you agree to the following Terms and Conditions:</p>
<ol>
<li>
<p>Use of Content: All content on this website is for informational purposes only. You may not copy, reproduce, distribute, or modify any content without our written permission.</p>
</li>
<li>
<p>Affiliate Links: This website contains affiliate links, which means that we may earn a commission if you make a purchase through our links. We only promote products and services that we believe in, and our opinions are our own.</p>
</li>
<li>
<p>Disclaimer of Warranties: This website and its content are provided "as is" without warranty of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
</li>
<li>
<p>Limitation of Liability: We will not be liable for any damages of any kind arising from the use of this website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.</p>
</li>
<li>
<p>Indemnification: You agree to indemnify and hold us harmless from any claims, damages, or expenses arising out of your use of this website or your violation of these Terms and Conditions.</p>
</li>
</ol>
<p>If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:contact@${domainName}">contact@${domainName}</a>.</p>`
    }</small>
<a href="#" style="display: block; text-align: center">${
    language === "ru" ? "Наверх сайта ⬆" : "Back to top ⬆"
  }</a>
    
</footer>`;
};

export default footer;
