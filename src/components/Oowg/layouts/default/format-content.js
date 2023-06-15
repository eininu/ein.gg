import { getTranslate } from "../../functions.js";

const formatContent = (
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
  ratingTableBody
) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlContent, "text/html");

  //// banner
  // <img src="/assets/images/banner.jpg" style="border-radius: 10px" alt="/assets/images/banner.jpg"/>
  const banner = document.createElement("img");
  banner.setAttribute(
    "src",
    isDemo
      ? window.location.origin + "/oowg/assets/images/banner.jpg"
      : "/assets/images/content/banner.jpg"
  );
  banner.setAttribute("alt", "banner");
  banner.setAttribute("style", "border-radius: 10px");

  //// button
  // <button type="button" id="copy-button" class="blob">🔥🔥 Play 🔥🔥</button>
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "copy-button");
  button.setAttribute("class", "blob");
  button.setAttribute("onclick", `window.open('${buttonLink}','_blank');`);
  button.setAttribute("href", buttonLink);
  button.innerHTML = buttonText;

  //// promo code
  const promocodeField = document.createElement("code");
  promocodeField.setAttribute("class", "promocode blob");
  promocodeField.innerText = promoCode;

  //// rating table
  // <table>
  //     <thead>
  //       <tr>
  //         <th>Bookmaker</th>
  //         <th>Rating</th>
  //         <th>Review</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       <tr>
  //         <td>Bookmaker A</td>
  //         <td>4.5</td>
  //         <td><a href="https://example.com/bookmaker-a-review" target="_blank" className="cta-button">Play</a></td>
  //       </tr>
  //       <tr>
  //         <td>Bookmaker B</td>
  //         <td>4.0</td>
  //         <td><a href="https://example.com/bookmaker-b-review" target="_blank" className="cta-button">Play</a></td>
  //       </tr>
  //       <tr>
  //         <td>Bookmaker C</td>
  //         <td>3.5</td>
  //         <td><a href="https://example.com/bookmaker-c-review" target="_blank" className="cta-button">Play</a></td>
  //       </tr>
  //     </tbody>
  //   </table>
  const ratingTable = document.createElement("table");

  const createThead = (products) => {
    const tHead = document.createElement("thead");
    const tHeadTr = tHead.appendChild(document.createElement("tr"));
    products.map((product) => {
      const tHeadTh = tHeadTr.appendChild(document.createElement("th"));
      tHeadTh.innerHTML = product;
    });

    return ratingTable.appendChild(tHead);
  };

  createThead(ratingTableHead);

  const createTbody = (products) => {
    const tBody = document.createElement("tbody");
    products.map((product) => {
      const tBodyTr = tBody.appendChild(document.createElement("tr"));

      const tBodyTd1 = tBodyTr.appendChild(document.createElement("td"));
      tBodyTd1.innerHTML = product[0];

      const tBodyTd2 = tBodyTr.appendChild(document.createElement("td"));
      tBodyTd2.innerHTML = (Math.random() * 20 + 80).toFixed(2);

      const tBodyTd3 = tBodyTr.appendChild(document.createElement("td"));
      const tableButton = document.createElement("a");
      tableButton.setAttribute("href", product[1]);
      tableButton.setAttribute("class", "cta-button");
      tableButton.setAttribute("target", "_blank");
      tableButton.innerHTML = product[2];

      tBodyTd3.appendChild(tableButton);
    });

    return ratingTable.appendChild(tBody);
  };

  createTbody(ratingTableBody);

  //// table of contents
  // <ol>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#bons-casino">💯 一般情報</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#login">🌐 ログイン</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#registration">🔥 登録</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#freespins">🎲 フリースピン</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#promocode">⚽ ボーナス</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#software">🏆 ソフトウェア</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#live">🎰 ライブ</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#products">💲 ブランド</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#mobile">💻 モバイル版</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#signup">📱 サインアップ</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#vip">💳 VIP</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#service">💬 サポート</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#tournament">💼 トーナメント</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#reviews">🔰 レビュー</a></li>
  //   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#faq">❓ よくある質問</a></li>
  // </ol>
  const tableOfContents = document.createElement("ol");

  //// table
  const table = getTranslate(language, "demoTable").replaceAll(
    "example.com",
    domainName
  );
  const createTable = (html) => {
    var template = document.createElement("template");
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  };

  const domTable = createTable(table);

  //// FAQ
  // <h2>FAQ</h2>
  // <details>
  //   <summary>Some summary/details can't hurt!</summary>
  //   <p>Lorem ipsum dolor sit blah blah.</p>
  // </details>
  // <details>
  //   <summary>Some summary/details can't hurt!</summary>
  //   <p>Lorem ipsum dolor sit blah blah.</p>
  // </details>
  // <details>
  //   <summary>Some summary/details can't hurt!</summary>
  //   <p>Lorem ipsum dolor sit blah blah.</p>
  // </details>
  // <details>
  //   <summary>Some summary/details can't hurt!</summary>
  //   <p>Lorem ipsum dolor sit blah blah.</p>
  // </details>

  const faqEl = document.createElement("h2");
  faqEl.innerHTML = getTranslate(language, "faq_heading");

  const addQA = (question, answer) => {
    const detailsEl = document.createElement("details");
    const questionEl = document.createElement("summary");
    const answerEl = document.createElement("p");
    questionEl.innerHTML = question;
    answerEl.innerHTML = answer;

    detailsEl.appendChild(questionEl);
    detailsEl.appendChild(answerEl);
    faqEl.after(detailsEl);
  };

  //// updated
  // <p><strong>最終更新日</strong>：<span style="text-decoration: underline;">2022-12-09</span></p>

  const updated = document.createElement("p");
  const updatedWord = document.createElement("strong");
  updatedWord.innerHTML = getTranslate(language, "updated_text");
  const updatedDate = document.createElement("span");
  updatedDate.setAttribute("style", "text-decoration: underline;");
  updatedDate.innerHTML = new Date().toISOString().split("T")[0];
  updated.appendChild(updatedWord);
  updated.append(": ");
  updated.appendChild(updatedDate);

  ////
  // <img src="/assets/images/content/1.png" alt="/assets/images/content/1.png"/>
  // <img src="/assets/images/content/2.png" alt="/assets/images/content/2.png"/>
  // <img src="/assets/images/content/3.png" alt="/assets/images/content/3.png"/>
  // <img src="/assets/images/content/4.png" alt="/assets/images/content/4.png"/>
  // <img src="/assets/images/content/5.png" alt="/assets/images/content/5.png"/>

  const createImage = (src) => {
    const image = document.createElement("img");
    image.setAttribute("src", src);
    image.setAttribute(
      "alt",
      src.split("/assets/images/content/")[1]
        ? src
            .split("/assets/images/content/")[1]
            .replaceAll("-", " ")
            .replaceAll("_", " ")
            .split(".jpg")[0]
            .split(".png")[0]
            .split(".jpeg")[0]
            .split(".gif")[0]
        : src
            .replaceAll("-", " ")
            .replaceAll("_", " ")
            .split(".jpg")[0]
            .split(".png")[0]
            .split(".jpeg")[0]
            .split(".gif")[0]
    );

    return image;
  };

  // create custom id's on headings

  [...document.getElementsByTagName("h1")].map((el, index) => {
    const heading = document.getElementsByTagName(el.tagName)[index];
    const myHeading = document.createElement(el.tagName);
    myHeading.setAttribute("id", "h1_" + (index + 1));
    myHeading.innerHTML = heading.innerText;
    heading.parentNode.replaceChild(myHeading, heading);
  });

  [...document.getElementsByTagName("h2")].map((el, index) => {
    const heading = document.getElementsByTagName(el.tagName)[index];
    const myHeading = document.createElement(el.tagName);
    myHeading.setAttribute("id", "h2_" + (index + 1));
    myHeading.innerHTML = heading.innerText;
    heading.parentNode.replaceChild(myHeading, heading);
    // push to table on contents
    // tableOfContentsData.push([heading.innerText, "h2_" + (index + 1)]);
    (() => {
      const tocItem = document.createElement("li");
      const a = document.createElement("a");
      a.innerHTML = "❓ " + heading.innerText;
      a.setAttribute("href", "#h2_" + (index + 1));
      tocItem.appendChild(a);
      tableOfContents.appendChild(tocItem);
    })();
  });

  const documentLength = document.getElementsByTagName("p").length;

  // add focus element

  if (document.getElementsByTagName("p")[0]) {
    // add button
    if (focusElement === "Button") {
      document.getElementsByTagName("p")[0].after(button);
    }

    // add promocode
    if (focusElement === "Promo Code") {
      document.getElementsByTagName("p")[0].after(promocodeField);
    }

    // add rating table
    if (focusElement === "Rating Table") {
      document.getElementsByTagName("p")[0].after(ratingTable);
    }
  }

  // add toc

  if (document.getElementsByTagName("p").length > 3) {
    document.getElementsByTagName("p")[1].after(tableOfContents);
  }

  // add updated
  if (document.getElementsByTagName("p")[documentLength - 1]) {
    document.getElementsByTagName("p")[documentLength - 1].after(updated);
  }

  // add faq
  if (document.getElementsByTagName("p")[documentLength - 1]) {
    if (faq.length > 0) {
      document.getElementsByTagName("p")[documentLength - 1].after(faqEl);
      faq.reverse().map((faq_item) => {
        addQA(faq_item[0], faq_item[1]);
      });
    }
  }

  // arrange images throughout the text
  const insertImages = (images) => {
    const imagesLength = images ? images.length : 0;

    if (imagesLength > 0) {
      let pictureEveryNParagraphs = Math.floor(
        (documentLength - 2) / imagesLength
      );

      if (pictureEveryNParagraphs === 0) {
        pictureEveryNParagraphs = 1;
      }

      const imagesStack = images
        .reduce((acc, image) => {
          if (image.file.name === "banner.jpg") {
            // add banner
            if (document.getElementsByTagName("h1")[0]) {
              document.getElementsByTagName("h1")[0].after(banner);
            }
            return acc;
          } else {
            acc.push(image);
            return acc;
          }
        }, [])
        .reverse();

      if (imagesStack.length > 0) {
        for (let i = 1; i <= documentLength - 2; i += 1) {
          if (i % pictureEveryNParagraphs === 0 && imagesLength > 0) {
            const image = imagesStack.pop();
            if (image) {
              isDemo
                ? document
                    .getElementsByTagName("p")
                    [i].after(createImage(image.data_url))
                : document
                    .getElementsByTagName("p")
                    [i].after(
                      createImage("/assets/images/content/" + image.file.name)
                    );
            }
          }
        }
      }
    }
  };

  insertImages(contentImages);

  // insertImages(
  //   isDemo
  //     ? window.location.origin + "/oowg/assets/images/content/1.png"
  //     : "/assets/images/content/1.png",
  //   isDemo
  //     ? window.location.origin + "/oowg/assets/images/content/2.png"
  //     : "/assets/images/content/2.png",
  //   isDemo
  //     ? window.location.origin + "/oowg/assets/images/content/3.png"
  //     : "/assets/images/content/3.png",
  //   isDemo
  //     ? window.location.origin + "/oowg/assets/images/content/4.png"
  //     : "/assets/images/content/4.png",
  //   isDemo
  //     ? window.location.origin + "/oowg/assets/images/content/5.png"
  //     : "/assets/images/content/5.png"
  // );

  // add table
  // it's better to add table the last one, because it has <p> elements, but images inserting between paragraphs
  if (document.getElementsByTagName("p")[2]) {
    document.getElementsByTagName("p")[2].after(domTable);
  }

  // console.log(document.body.innerHTML);
  // return htmlContent
  return document.body.innerHTML;
};

export default formatContent;
