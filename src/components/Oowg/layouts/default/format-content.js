import { getTranslate, generateRandomClasses } from "../../functions.js";

const getRandomItem = (arr) => {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};
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
  ratingTableBody,
  customFocusElementCode,
  showDemoTable
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
  banner.setAttribute("class", generateRandomClasses());
  banner.setAttribute("style", "border-radius: 10px");
  isDemo
    ? banner.setAttribute("onclick", `window.open("${buttonLink}",'_blank')`)
    : banner.setAttribute(
        "onclick",
        `window.open(atob('${btoa(buttonLink)}'),'_blank')`
      );

  //// button
  // <button type="button" id="copy-button" class="blob">🔥🔥 Play 🔥🔥</button>
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", "copy-button");
  button.setAttribute("class", "blob " + generateRandomClasses());
  isDemo
    ? button.setAttribute("onclick", `window.open("${buttonLink}",'_blank')`)
    : button.setAttribute(
        "onclick",
        `window.open(atob('${btoa(buttonLink)}'),'_blank')`
      );
  // button.setAttribute("href", buttonLink);
  button.innerHTML = buttonText;

  //// promo code
  const promocodeField = document.createElement("code");
  promocodeField.setAttribute(
    "class",
    "promocode blob " + generateRandomClasses()
  );
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
    tHead.setAttribute("class", generateRandomClasses());
    const tHeadTr = tHead.appendChild(document.createElement("tr"));
    tHeadTr.setAttribute("class", generateRandomClasses());
    products.map((product) => {
      const tHeadTh = tHeadTr.appendChild(document.createElement("th"));
      tHeadTh.innerHTML = product;
    });

    return ratingTable.appendChild(tHead);
  };

  createThead(ratingTableHead);

  const createTbody = (products) => {
    const tBody = document.createElement("tbody");
    tBody.setAttribute("class", generateRandomClasses());
    products.map((product, index) => {
      const tBodyTr = tBody.appendChild(document.createElement("tr"));
      tBodyTr.setAttribute("class", generateRandomClasses());
      const tBodyTd1 = tBodyTr.appendChild(document.createElement("td"));
      if (index === 0) {
        tBodyTd1.innerHTML = "🥇" + product[0];
      } else if (index === 1) {
        tBodyTd1.innerHTML = "🥈" + product[0];
      } else if (index === 2) {
        tBodyTd1.innerHTML = "🥉" + product[0];
      } else {
        tBodyTd1.innerHTML =
          `${getRandomItem([
            "😀",
            "😊",
            "😍",
            "😎",
            "🤩",
            "🥳",
            "🤗",
            "🤔",
            "😄",
            "😘",
            "🌞",
            "🌈",
            "🌻",
            "🌺",
            "🍕",
            "🍦",
            "🎉",
            "🎈",
            "✨",
            "🎁",
            "🐶",
            "🐱",
            "🐼",
            "🐬",
            "🐦",
            "🐝",
            "🐢",
            "🐞",
            "🦄",
            "🦋",
            "🍔",
            "🍓",
            "🍩",
            "🍿",
            "🍍",
            "🍄",
            "🌸",
            "🌼",
            "🌙",
            "⭐️",
            "🎵",
            "🎮",
            "📚",
            "🎨",
            "🎥",
            "📷",
            "🔥",
            "⚽️",
            "🚀",
            "🚲",
            "⌚️",
            "📱",
            "💻",
            "🎧",
            "📺",
            "🕹️",
            "📸",
          ])}` + product[0];
      }

      tBodyTd1.setAttribute("class", generateRandomClasses());
      const tBodyTd2 = tBodyTr.appendChild(document.createElement("td"));
      tBodyTd2.innerHTML = (Math.random() * 20 + 80).toFixed(2);
      tBodyTd2.setAttribute("class", generateRandomClasses());
      const tBodyTd3 = tBodyTr.appendChild(document.createElement("td"));
      tBodyTd3.setAttribute("class", generateRandomClasses());
      const tableButton = document.createElement("span");
      // tableButton.setAttribute("href", product[1]);
      tableButton.setAttribute(
        "onclick",
        `window.open(atob('${btoa(product[1])}'),'_blank')`
      );
      tableButton.setAttribute("style", "cursor: pointer");
      tableButton.setAttribute(
        "class",
        "cta-button " + generateRandomClasses()
      );
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

  const table = getTranslate(language, "demoTable")
    // domain
    .replaceAll(
      "example.com",
      getRandomItem([
        "http://",
        "https://",
        "www.",
        "http://www.",
        "https://www.",
      ]) +
        domainName +
        getRandomItem(["/", ""])
    )
    // year
    .replaceAll(
      "2023",
      `${Math.floor(Math.random() * (2023 - 2005 + 1)) + 2005}`
    )
    // licence
    .replaceAll(
      "8048",
      `${Math.floor(Math.random() * (9000 - 4000 + 1)) + 4000}`
    )
    .replaceAll(
      "2019",
      `${Math.floor(Math.random() * (2023 - 2005 + 1)) + 2005}`
    )
    .replaceAll("055", `0${Math.floor(Math.random() * (99 - 11 + 1)) + 11}`)
    // owner
    .replaceAll(
      "NestlingCorn Limited",
      getRandomItem([
        "DragonSpade Limited",
        "BettingBeacon LLC",
        "GambleGrove Inc.",
        "LuckyLynx Corp.",
        "ChanceChameleon Enterprises",
        "FortuneFalcon Ltd.",
        "WagerWolf LLC",
        "RiskRaven Co.",
        "OddsOcelot Incorporated",
        "BettingBobcat Limited",
        "VentureViper LLC",
        "GamingGriffin Corp.",
        "BetBuzzard Ltd.",
        "WagerWeasel Inc.",
      ])
    )
    .replaceAll(
      "3000+",
      `${Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000}+`
    )
    .replaceAll(
      "USD, EUR, RUB, UAH, CAD, AUD, JPY, KZT, MDL, BYN, BTC, AED, ALL, AMD, AOA, AZN, BAM, BDT, BGN, BHD, BIF, BOB, BRL, BWP, CDF, CHF, CLP, GHS, GMD, GNF, HKD, HRK, HTG, JOD, KES, KGS, KRW, KWD, MGA, MKD, MMK, NAD, NGN, NOK, NPR, NZD, RON, RSD, RWF, SAR, SCR, SDG, SOS, SZL, THB, TJS, TMT, TND, TRY, TWD",
      getRandomElements([
        "AED", // United Arab Emirates Dirham
        "AFN", // Afghanistan Afghani
        "ALL", // Albania Lek
        "AMD", // Armenia Dram
        "ANG", // Netherlands Antilles Guilder
        "AOA", // Angola Kwanza
        "ARS", // Argentina Peso
        "AUD", // Australia Dollar
        "AWG", // Aruba Guilder
        "AZN", // Azerbaijan Manat
        "BAM", // Bosnia and Herzegovina Convertible Mark
        "BBD", // Barbados Dollar
        "BDT", // Bangladesh Taka
        "BGN", // Bulgaria Lev
        "BHD", // Bahrain Dinar
        "BIF", // Burundi Franc
        "BMD", // Bermuda Dollar
        "BND", // Brunei Darussalam Dollar
        "BOB", // Bolivia Bolíviano
        "BRL", // Brazil Real
        "BSD", // Bahamas Dollar
        "BTC", // Bitcoin
        "BTN", // Bhutan Ngultrum
        "BWP", // Botswana Pula
        "BYN", // Belarus Ruble
        "BZD", // Belize Dollar
        "CAD", // Canada Dollar
        "CDF", // Congo/Kinshasa Franc
        "CHF", // Switzerland Franc
        "CLP", // Chile Peso
        "CNY", // China Yuan Renminbi
        "COP", // Colombia Peso
        "CRC", // Costa Rica Colon
        "CUC", // Cuba Convertible Peso
        "CUP", // Cuba Peso
        "CVE", // Cape Verde Escudo
        "CZK", // Czech Republic Koruna
        "DJF", // Djibouti Franc
        "DKK", // Denmark Krone
        "DOP", // Dominican Republic Peso
        "DZD", // Algeria Dinar
        "EGP", // Egypt Pound
        "ERN", // Eritrea Nakfa
        "ETB", // Ethiopia Birr
        "EUR", // Euro Member Countries
        "FJD", // Fiji Dollar
        "FKP", // Falkland Islands (Malvinas) Pound
        "GBP", // United Kingdom Pound
        "GEL", // Georgia Lari
        "GGP", // Guernsey Pound
        "GHS", // Ghana Cedi
        "GIP", // Gibraltar Pound
        "GMD", // Gambia Dalasi
        "GNF", // Guinea Franc
        "GTQ", // Guatemala Quetzal
        "GYD", // Guyana Dollar
        "HKD", // Hong Kong Dollar
        "HNL", // Honduras Lempira
        "HRK", // Croatia Kuna
        "HTG", // Haiti Gourde
        "HUF", // Hungary Forint
        "IDR", // Indonesia Rupiah
        "ILS", // Israel Shekel
        "IMP", // Isle of Man Pound
        "INR", // India Rupee
        "IQD", // Iraq Dinar
        "IRR", // Iran Rial
        "ISK", // Iceland Krona
        "JEP", // Jersey Pound
        "JMD", // Jamaica Dollar
        "JOD", // Jordan Dinar
        "JPY", // Japan Yen
        "KES", // Kenya Shilling
        "KGS", // Kyrgyzstan Som
        "KHR", // Cambodia Riel
        "KMF", // Comorian Franc
        "KPW", // Korea (North) Won
        "KRW", // Korea (South) Won
        "KWD", // Kuwait Dinar
        "KYD", // Cayman Islands Dollar
        "KZT", // Kazakhstan Tenge
        "LAK", // Laos Kip
        "LBP", // Lebanon Pound
        "LKR", // Sri Lanka Rupee
        "LRD", // Liberia Dollar
        "LSL", // Lesotho Loti
        "LYD", // Libya Dinar
        "MAD", // Morocco Dirham
        "MDL", // Moldova Leu
        "MGA", // Madagascar Ariary
        "MKD", // North Macedonia Denar
        "MMK", // Myanmar (Burma) Kyat
        "MNT", // Mongolia Tughrik
        "MOP", // Macau Pataca
        "MRU", // Mauritania Ouguiya
        "MUR", // Mauritius Rupee
        "MVR", // Maldives (Maldive Islands) Rufiyaa
        "MWK", // Malawi Kwacha
        "MXN", // Mexico Peso
        "MYR", // Malaysia Ringgit
        "MZN", // Mozambique Metical
        "NAD", // Namibia Dollar
        "NGN", // Nigeria Naira
        "NIO", // Nicaragua Cordoba
        "NOK", // Norway Krone
        "NPR", // Nepal Rupee
        "NZD", // New Zealand Dollar
        "OMR", // Oman Rial
        "PAB", // Panama Balboa
        "PEN", // Peru Sol
        "PGK", // Papua New Guinea Kina
        "PHP", // Philippines Peso
        "PKR", // Pakistan Rupee
        "PLN", // Poland Zloty
        "PYG", // Paraguay Guarani
        "QAR", // Qatar Riyal
        "RON", // Romania Leu
        "RSD", // Serbia Dinar
        "RUB", // Russia Ruble
        "RWF", // Rwanda Franc
        "SAR", // Saudi Arabia Riyal
        "SBD", // Solomon Islands Dollar
        "SCR", // Seychelles Rupee
        "SDG", // Sudan Pound
        "SEK", // Sweden Krona
        "SGD", // Singapore Dollar
        "SHP", // Saint Helena Pound
        "SLL", // Sierra Leone Leone
        "SOS", // Somalia Shilling
        "SPL", // Seborga Luigino
        "SRD", // Suriname Dollar
        "STN", // Sao Tome and Principe Dobra
        "SVC", // El Salvador Colon
        "SYP", // Syria Pound
        "SZL", // Eswatini Lilangeni
        "THB", // Thailand Baht
        "TJS", // Tajikistan Somoni
        "TMT", // Turkmenistan Manat
        "TND", // Tunisia Dinar
        "TOP", // Tonga Pa'anga
        "TRY", // Turkey Lira
        "TTD", // Trinidad and Tobago Dollar
        "TVD", // Tuvalu Dollar
        "TWD", // Taiwan New Dollar
        "TZS", // Tanzania Shilling
        "UAH", // Ukraine Hryvnia
        "UGX", // Uganda Shilling
        "USD", // United States Dollar
        "UYU", // Uruguay Peso
        "UZS", // Uzbekistan Som
        "VEF", // Venezuela Bolívar
        "VND", // Viet Nam Dong
        "VUV", // Vanuatu Vatu
        "WST", // Samoa Tala
        "XAF", // Communauté Financière Africaine (BEAC) CFA Franc BEAC
        "XCD", // East Caribbean Dollar
        "XDR", // International Monetary Fund (IMF) Special Drawing Rights
        "XOF", // Communauté Financière Africaine (BCEAO) Franc
        "XPF", // Comptoirs Français du Pacifique (CFP) Franc
        "YER", // Yemen Rial
        "ZAR", // South Africa Rand
        "ZMW", // Zambia Kwacha
        "ZWL", // Zimbabwe Dollar
      ])
    )
    .replaceAll(
      "VISA, MasterCard, WebMoney, UzPay, PayTM Wallet, UPI, AirTM, HOTVouchers, GrataPay Vouchers, PayGiga, Paytrust88, Hizli, Santander, Multibanco, Caixa, Bradesco, Banco de Brazil, Itau, Pay4Fun, Papara, FastPay, Vcreditos, Flexepin, Trues USD, Nemo, Amigo, B-pay, BitShares, Ethereum Classic, Basic Attention Token, OmiseGO, Chainlink, Paxos Standard Token, USD Coin, Tron, Stratis, QTUM, Verge, Bitcoin Gold, DigiByte, Monero, Sticpay, Epay, TelePay, Zcash, Jeton Wallet, Piastrix, Dash, Tether, Dogecoin, Boleto Bancario, Bitcoin Cash, MuchBetter, Litecoin, Ripple, Ethereum, ecoPayz, МИР, Astropay",
      getRandomElements([
        "Visa",
        "Mastercard",
        "American Express",
        "Discover",
        "JCB",
        "Diners Club",
        "UnionPay",
        "Maestro",
        "Visa Electron",
        "PayPal",
        "Apple Pay",
        "Google Pay",
        "Amazon Pay",
        "Samsung Pay",
        "Bitcoin",
        "Ethereum",
        "Litecoin",
        "Ripple",
        "Dogecoin",
        "Skrill",
        "Neteller",
        "Western Union",
        "MoneyGram",
        "Revolut",
        "Bank Transfer",
        "SEPA Transfer",
        "BACS Transfer",
        "SWIFT Transfer",
        "Venmo",
        "Cash App",
        "Zelle",
        "Payoneer",
        "Stripe",
        "Square",
        "2Checkout",
        "AliPay",
        "WeChat Pay",
        "Paytm",
        "MobiKwik",
        "Freecharge",
        "PayU",
        "Razorpay",
        "Klarna",
        "Afterpay",
        "Paybright",
        "Affirm",
        "Crypto",
        "Cirrus",
        "Interac",
        "eCheck",
        "Codashop",
        "Boleto",
        "Mercado Pago",
        "POLi",
      ])
    )
    .replaceAll(
      "Astropay, VISA, MasterCard, МИР, ecoPayz, Bitcoin, Ethereum, Ripple, Litecoin, Maestro, Bitcoin Cash, Payeer, Dogecoin, Tether, Dash, NEM, Piastrix, Jeton Wallet, Zcash, Sticpay, Monero, DigiByte, Bitcoin Gold, Verge, QTUM, Stratis, Tron, USD Coin, Paxos Standard Token, Chainlink, OmiseGO, Basic Attention Token, Ethereum Classic, BitShares, B-pay, Trues USD, Sepa",
      getRandomElements([
        "Visa",
        "Mastercard",
        "American Express",
        "Discover",
        "JCB",
        "Diners Club",
        "UnionPay",
        "Maestro",
        "Visa Electron",
        "PayPal",
        "Apple Pay",
        "Google Pay",
        "Amazon Pay",
        "Samsung Pay",
        "Bitcoin",
        "Ethereum",
        "Litecoin",
        "Ripple",
        "Dogecoin",
        "Skrill",
        "Neteller",
        "Western Union",
        "MoneyGram",
        "Revolut",
        "Bank Transfer",
        "SEPA Transfer",
        "BACS Transfer",
        "SWIFT Transfer",
        "Venmo",
        "Cash App",
        "Zelle",
        "Payoneer",
        "Stripe",
        "Square",
        "2Checkout",
        "AliPay",
        "WeChat Pay",
        "Paytm",
        "MobiKwik",
        "Freecharge",
        "PayU",
        "Razorpay",
        "Klarna",
        "Afterpay",
        "Paybright",
        "Affirm",
        "Crypto",
        "Cirrus",
        "Interac",
        "eCheck",
        "Codashop",
        "Boleto",
        "Mercado Pago",
        "POLi",
      ])
    )
    .replaceAll(
      "Microgaming, Quickspin, Evolution Gaming, ELK Studios, Playson, Red Tiger, Push Gaming, iSoftBet, Pragmatic Play, Habanero, Genesis Gaming, 1x2 Gaming, Kalamba Games, Rabcat, Foxium, Big Time Gaming, Booming Games, Thunderkick, EGT, Amatic, Betsoft, Endorphina, GameArt, PariPlay, Bgaming, Igrosoft, Rival, Red Rake, Ezugi, Booongo, Genii, Iron Dog Studio, Tom Horn Gaming, Authentic Gaming, Spinomenal, Blueprint Gaming, Realistic Games, Wazdan, Belatra, Evoplay, Platipus, Vivo Gaming, Lucky Streak, Felix Gaming, Swintt, Oryx, August, Leap Gaming, Fantasma Games, Gamefish Global, JFTW, Apollo Games, Mr.Slotty, BF Games, Gamomat, Pg Soft, Fugaso, Multislot, Spigo, Worldmatch, Netgame, Ruby Play, Sa Gaming, Reelnrg, Bbin, Betixon, Evolution Slots, Espresso Games, N2-Live, Noble, Portomaso Gaming, Radi8, VRCasino, Gamzix, Live Solutions, Up Games",
      getRandomElements([
        "Microgaming",
        "Quickspin",
        "Evolution Gaming",
        "ELK Studios",
        "Playson",
        "Red Tiger",
        "Push Gaming",
        "iSoftBet",
        "Pragmatic Play",
        "Habanero",
        "Genesis Gaming",
        "1x2 Gaming",
        "Kalamba Games",
        "Rabcat",
        "Foxium",
        "Big Time Gaming",
        "Booming Games",
        "Thunderkick",
        "EGT",
        "Amatic",
        "Betsoft",
        "Endorphina",
        "GameArt",
        "PariPlay",
        "Bgaming",
        "Igrosoft",
        "Rival",
        "Red Rake",
        "Ezugi",
        "Booongo",
        "Genii",
        "Iron Dog Studio",
        "Tom Horn Gaming",
        "Authentic Gaming",
        "Spinomenal",
        "Blueprint Gaming",
        "Realistic Games",
        "Wazdan",
        "Belatra",
        "Evoplay",
        "Platipus",
        "Vivo Gaming",
        "Lucky Streak",
        "Felix Gaming",
        "Swintt",
        "Oryx",
        "August",
        "Leap Gaming",
        "Fantasma Games",
        "Gamefish Global",
        "JFTW",
        "Apollo Games",
        "Mr.Slotty",
        "BF Games",
        "Gamomat",
        "Pg Soft",
        "Fugaso",
        "Multislot",
        "Spigo",
        "Worldmatch",
        "Netgame",
        "Ruby Play",
        "Sa Gaming",
        "Reelnrg",
        "Bbin",
        "Betixon",
        "Evolution Slots",
        "Espresso Games",
        "N2-Live",
        "Noble",
        "Portomaso Gaming",
        "Radi8",
        "VRCasino",
        "Gamzix",
        "Live Solutions",
        "Up Games",
      ])
    )
    .replaceAll("5", `${Math.floor(Math.random() * (100 - 1 + 1)) + 1}+`)
    .replaceAll("100", `${Math.floor(Math.random() * (500 - 20 + 1)) + 20}+`);
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
  faqEl.innerHTML = getTranslate(language, "faq_heading")
    .replaceAll(
      "Часто задаваемые вопросы",
      getRandomItem([
        "Основные Вопросы",
        "Задаваемые Вопросы",
        "Вопросы и Решения",
        "Помощь и Вопросы",
        "Вопросы и Консультации",
        "Ответы на Частые Вопросы",
        "Вопросы и Информация",
        "Часто Задаваемые Вопросы Пользователей",
        "Подробные Ответы на Ваши Вопросы",
        "Самые Частые Вопросы",
        "Информация для Пользователей: Вопросы и Ответы",
        "Список Частых Вопросов",
        "Ваши Запросы",
        "Ваши Запросы и Наши Ответы",
        "База Знаний: Вопросы и Ответы",
        "Нужна Помощь? Часто Задаваемые Вопросы",
        "Часто Задаваемые Вопросы и Рекомендации",
        "Все, что Вы Хотели Знать",
        "Ответы на Ваши Вопросы",
        "Вопросы и Подсказки",
        "Информация и Вопросы",
        "Популярные Вопросы и Ответы",
        "Поддержка: Вопросы и Ответы",
        "Помощь: Часто Задаваемые Вопросы",
        "Вопросы, которые Вы Могли Задать",
        "Частые Вопросы и Решения",
        "Руководство по Частым Вопросам",
        "Самые Популярные Вопросы",
        "Важные Вопросы",
        "Вопросы и Ответы: Помощь и Поддержка",
      ])
    )
    .replaceAll(
      "FAQ",
      getRandomItem([
        "Main Questions",
        "Asked Questions",
        "Questions and Solutions",
        "Help and Questions",
        "Questions and Consultations",
        "Answers to Frequent Questions",
        "Questions and Information",
        "Frequently Asked Questions by Users",
        "Detailed Answers to Your Questions",
        "The Most Frequent Questions",
        "User Information: Questions and Answers",
        "List of Frequent Questions",
        "Your Queries",
        "Your Queries and Our Answers",
        "Knowledge Base: Questions and Answers",
        "Need Help? Frequently Asked Questions",
        "Frequently Asked Questions and Recommendations",
        "Everything You Wanted to Know",
        "Answers to Your Questions",
        "Questions and Tips",
        "Information and Questions",
        "Popular Questions and Answers",
        "Support: Questions and Answers",
        "Help: Frequently Asked Questions",
        "Questions You Might Have Asked",
        "Frequent Questions and Solutions",
        "Guide to Frequent Questions",
        "The Most Popular Questions",
        "Important Questions",
        "Questions and Answers: Help and Support",
      ])
    );

  const addQA = (question, answer) => {
    const detailsEl = document.createElement("details");
    detailsEl.setAttribute("class", generateRandomClasses());
    const questionEl = document.createElement("summary");
    questionEl.setAttribute("class", generateRandomClasses());
    const answerEl = document.createElement("p");
    answerEl.setAttribute("class", generateRandomClasses());
    questionEl.innerHTML = question;
    answerEl.innerHTML = answer;

    detailsEl.appendChild(questionEl);
    detailsEl.appendChild(answerEl);
    faqEl.after(detailsEl);
  };

  //// updated
  // <p><strong>最終更新日</strong>：<span style="text-decoration: underline;">2022-12-09</span></p>

  const updated = document.createElement("p");
  updated.setAttribute("class", generateRandomClasses());
  const updatedWord = document.createElement("strong");
  updatedWord.innerHTML = getTranslate(language, "updated_text")
    .replaceAll(
      "Обновлено",
      getRandomItem([
        "Перезалито",
        "Обновленный",
        "Изменено",
        "Модифицировано",
        "Исправлено",
        "Внесены изменения",
        "Редактировано",
        "Улучшено",
        "Переработано",
        "Повторно загружено",
        "Дата изменения",
        "Дата модификации",
        "Дата правки",
        "Дата исправления",
        "Дата редактирования",
        "Дата улучшения",
        "Дата переработки",
        "Время обновления",
        "Последнее изменение",
        "Дата последнего обновления",
        "Дата перезаливки",
        "Дата повторной загрузки",
      ])
    )
    .replaceAll(
      "Updated",
      getRandomItem([
        "Reuploaded",
        "Updated",
        "Modified",
        "Changed",
        "Corrected",
        "Amended",
        "Edited",
        "Improved",
        "Overhauled",
        "Reuploaded",
        "Date of Change",
        "Modification Date",
        "Revision Date",
        "Correction Date",
        "Editing Date",
        "Improvement Date",
        "Overhaul Date",
        "Update Time",
        "Last Modified",
        "Last Update Date",
        "Reupload Date",
        "Reupload Time",
      ])
    );
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
    image.setAttribute("class", generateRandomClasses());
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
    myHeading.setAttribute("class", generateRandomClasses());
    myHeading.innerHTML = heading.innerText;
    heading.parentNode.replaceChild(myHeading, heading);
  });

  [...document.getElementsByTagName("h2")].map((el, index) => {
    const heading = document.getElementsByTagName(el.tagName)[index];
    const myHeading = document.createElement(el.tagName);
    myHeading.setAttribute("id", "h2_" + (index + 1));
    myHeading.setAttribute("class", generateRandomClasses());
    myHeading.innerHTML = heading.innerText;
    heading.parentNode.replaceChild(myHeading, heading);
    // push to table on contents
    // tableOfContentsData.push([heading.innerText, "h2_" + (index + 1)]);
    (() => {
      const tocItem = document.createElement("li");
      const a = document.createElement("a");
      a.innerHTML =
        `${getRandomItem([
          "😀",
          "😊",
          "😍",
          "😎",
          "🤩",
          "🥳",
          "🤗",
          "🤔",
          "😄",
          "😘",
          "🌞",
          "🌈",
          "🌻",
          "🌺",
          "🍕",
          "🍦",
          "🎉",
          "🎈",
          "✨",
          "🎁",
          "🐶",
          "🐱",
          "🐼",
          "🐬",
          "🐦",
          "🐝",
          "🐢",
          "🐞",
          "🦄",
          "🦋",
          "🍔",
          "🍓",
          "🍩",
          "🍿",
          "🍍",
          "🍄",
          "🌸",
          "🌼",
          "🌙",
          "⭐️",
          "🎵",
          "🎮",
          "📚",
          "🎨",
          "🎥",
          "📷",
          "🔥",
          "⚽️",
          "🚀",
          "🚲",
          "⌚️",
          "📱",
          "💻",
          "🎧",
          "📺",
          "🕹️",
          "📸",
        ])}` +
        " " +
        heading.innerText;
      a.setAttribute("href", "#h2_" + (index + 1));
      a.setAttribute("class", generateRandomClasses());
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

    // add custom code element
    if (focusElement === "Custom Code") {
      const customCode = new DOMParser().parseFromString(
        customFocusElementCode,
        "text/html"
      );

      var link = customFocusElementCode;
      document
        .getElementsByTagName("p")[0]
        .insertAdjacentHTML("afterend", link);
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
  if (showDemoTable) {
    if (document.getElementsByTagName("p")[2]) {
      document.getElementsByTagName("p")[2].after(domTable);
    }
  }

  // console.log(document.body.innerHTML);
  // return htmlContent
  return document.body.innerHTML;
};

export default formatContent;
