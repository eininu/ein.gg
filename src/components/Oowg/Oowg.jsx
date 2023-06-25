// TODO: serverless clock
// TODO: Stop adding pictures if table has paragraphs

import { useState, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import {
  getDemoData,
  getNotFoundPage,
  getRobotsTxt,
  getTranslate,
  getSitemap,
} from "./functions.js";

import {
  generateHtmlTemplate,
  getWaterCss,
  getCustomStyles,
} from "./layouts/default/layout.js";

import ImageUploading from "react-images-uploading";
import getAmp from "./layouts/amp/amp.js";

import defaultLanguage from "./language/default.json";
import ru from "./language/ru.json";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { v4 as uuidv4 } from "uuid";

export default function Oowg(props) {
  const [experimentalMode, setExperimentalMode] = useState(
    import.meta.env.MODE === "development"
  );
  const currentLanguage = "en";

  const getTranslate = (language, element) => {
    let languageObject;
    if (language === "ru") {
      languageObject = ru;
    } else {
      languageObject = defaultLanguage;
    }

    return languageObject[element];
  };

  const [language, setLanguage] = useState(currentLanguage);
  const [domainName, setDomainName] = useState(getDemoData().domainName);
  const [title, setTitle] = useState(getDemoData().title);
  const [description, setDescription] = useState(getDemoData().description);
  const [htmlContent, setHtmlContent] = useState(
    getDemoData(language).htmlContent
  );
  const [buttonText, setButtonText] = useState(
    getTranslate(language, "play_button_text")
  );
  const [buttonLink, setButtonLink] = useState("#");
  const [faq, setFaq] = useState(getTranslate(language, "demoFaq"));
  const [amp, setAmp] = useState(true);
  const [chatGPTApiKey, setChatGPTApiKey] = useState("");
  const [chatGPTQuestion, setChatGPTQuestion] = useState(
    "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:"
  );
  const [chatGPTAnswer, setChatGPTAnswer] = useState("");
  const [focusElement, setFocusElement] = useState("Button");

  useEffect(() => {
    if (experimentalMode) {
      setFocusElement("Rating Table");
    }
  }, [experimentalMode]);

  const [promoCode, setPromoCode] = useState("BONUS777");
  const [ratingTableHead, setRatingTableHead] = useState([
    "Product",
    "Bonus",
    "Promocode",
    "Play",
  ]);
  const [ratingTableBody, setRatingTableBody] = useState([
    [
      "SUPERCODE",
      "https://example.com",
      "Play",
      "150 Free Spins + 100% up to €/$ 150",
    ],
    [
      "333VIPCODE",
      "https://example.com",
      "Play",
      "154 Free Spins + 100% up to €/$ 150",
    ],
    [
      "WINWIN23",
      "https://example.com",
      "Play",
      "155 Free Spins + 100% up to €/$ 150",
    ],
  ]);
  const [ratingTableBodyNewRow, setRatingTableBodyNewRow] = useState([]);

  const [customFocusElementCode, setCustomFocusElementCode] = useState(
    `<div style="display: flex; justify-content: space-between;">
  <div style="border: 2px dashed; padding: 10px; flex-grow: 1; margin-right: 10px; text-align: center;">PROMOCODE</div>
  <a href="https://your-url-here.com" style="display: inline-block; padding: 10px; background-color: blue; color: white; flex-grow: 1; margin-left: 10px; text-decoration: none; text-align: center; border-radius: 15px;">PLAY</a>
</div>`
  );

  const [config, setConfig] = useState("{}");

  const [showDemoTable, setShowDemoTable] = useState(true);

  const [theme, setTheme] = useState("dark");

  const [redirects, setRedirects] = useState("");

  const [isSpoilerVisible, setSpoilerVisible] = useState(false);

  const toggleSpoiler = () => {
    setSpoilerVisible(!isSpoilerVisible);
  };

  const [editMode, setEditMode] = useState(true); // true for editor mode, false for code view

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],

      // [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],
      // [{ font: [] }],
      [{ align: [] }],

      ["clean"],

      // ["link", "image", "video"],
      ["link", "video"],
    ],
  };

  const [brandImages, setBrandImages] = useState([]);

  useEffect(() => {
    setBrandImages(brandImages);

    // console.log(brandImages);
  }, [brandImages]);

  const brandImagesOnChange = (imageList, addUpdateIndex) => {
    // sort the imageList by file name without extension
    const sortedImageList = [...imageList].sort((a, b) => {
      const nameA = a.file.name.split(".").slice(0, -1).join("."); // get name without extension for 'a'
      const nameB = b.file.name.split(".").slice(0, -1).join("."); // get name without extension for 'b'

      // check if names are numeric
      const isNumericA = /^\d+$/.test(nameA);
      const isNumericB = /^\d+$/.test(nameB);

      // if both names are numeric, compare as numbers
      if (isNumericA && isNumericB) {
        return parseInt(nameA, 10) - parseInt(nameB, 10);
      }

      // otherwise, compare as strings
      return nameA.localeCompare(nameB);
    });

    // create a new array of images with unique ids
    const base64Images = sortedImageList.map((image) => {
      return {
        id: uuidv4(), // generate a unique id
        data_url: image.data_url,
      };
    });

    setBrandImages(base64Images);
  };

  useEffect(() => {
    if (focusElement === "Rating Table" && ratingTableBody.length > 0) {
      setButtonLink(ratingTableBody[0][1]);
    }
  }, [focusElement]);

  useEffect(() => {
    try {
      const {
        language: language_edited,
        domainName: domainName_edited,
        title: title_edited,
        description: description_edited,
        htmlContent: htmlContent_edited,
        buttonLink: buttonLink_edited,
        buttonText: buttonText_edited,
        faq: faq_edited,
        contentImages: contentImages_edited,
        brandImages: brandImages_edited,
        focusElement: focusElement_edited,
        promoCode: promoCode_edited,
        ratingTableHead: ratingTableHead_edited,
        ratingTableBody: ratingTableBody_edited,
        customFocusElementCode: customFocusElementCode_edited,
        theme: theme_edited,
        redirects: redirects_edited,
      } = JSON.parse(config);
      if (language_edited) {
        setLanguage(language_edited);
      }

      if (domainName_edited) {
        setDomainName(domainName_edited);
      }

      if (title_edited) {
        setTitle(title_edited);
      }

      if (description_edited) {
        setDescription(description_edited);
      }

      if (htmlContent_edited) {
        setHtmlContent(htmlContent_edited);
      }

      if (buttonLink_edited) {
        setButtonLink(buttonLink_edited);
      }

      if (buttonText_edited) {
        setButtonText(buttonText);
      }

      if (faq_edited) {
        setFaq(faq_edited);
      }

      if (contentImages_edited) {
        setContentImages(contentImages_edited);
      }
      if (brandImages_edited) {
        setBrandImages(brandImages_edited);
      }

      if (focusElement_edited) {
        setFocusElement(focusElement_edited);
      }

      if (promoCode_edited) {
        setPromoCode(promoCode_edited);
      }

      if (ratingTableHead_edited) {
        if (ratingTableHead_edited.length !== 4) {
          setRatingTableHead(ratingTableHead);
        } else {
          setRatingTableHead(ratingTableHead_edited);
        }
      }

      if (ratingTableBody_edited) {
        setRatingTableBody(ratingTableBody_edited);
      }

      if (customFocusElementCode_edited) {
        setCustomFocusElementCode(customFocusElementCode_edited);
      }
      if (theme_edited) {
        setTheme(theme_edited);
      }

      if (redirects_edited) {
        setRedirects(redirects_edited);
      }
    } catch (err) {
      console.log("invalid JSON");
    }
  }, [config]);

  useEffect(() => {
    if (config === "{}") {
      setHtmlContent(getDemoData(language).htmlContent);
      setButtonText(getTranslate(language, "play_button_text"));
      setFaq(getTranslate(language, "demoFaq"));
    }
  }, [language]);

  const [contentImages, setContentImages] = useState(getDemoData().demoImages);
  const maxNumber = 69;

  const changeImages = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setContentImages(imageList);
  };

  // useEffect(() => {
  //   contentImages.map((el) => {
  //     console.log(el.data_url);
  //   });
  // }, [contentImages]);

  const createWebsiteArchive = async () => {
    const zip = new JSZip();

    if (amp) {
      await zip.file(
        "amp.html",
        getAmp(
          language,
          domainName,
          title,
          description,
          htmlContent,
          buttonLink,
          buttonText,
          faq,
          contentImages,
          brandImages,
          focusElement,
          promoCode,
          ratingTableHead,
          ratingTableBody,
          customFocusElementCode,
          showDemoTable,
          theme
        )
      );
    }

    await zip.file("assets/styles/water.min.css", getWaterCss(theme));

    await zip.file("assets/styles/style.css", getCustomStyles());
    await zip.file(
      "favicon.ico",
      "AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAKBEAAJ4EAAAwMAAAAQAgAGgmAADGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AH4A/wD5AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A+QD/AH4A/wD5AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD5AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/J/8n/xT/FP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Wf9Z///////g/+D/Av8C/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/G/8b/+v/6//+//7//////0b/Rv8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Cf8J/8f/x///////bf9t//b/9v+w/7D/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/6b/pv//////nv+e/wD/AP+g/6D//f/9/yf/J/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP81/zX/av9q/wX/Bf8A/wD/Mv8y//////+h/6H/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP+6/7r//P/8/yz/LP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Of85//7//v+6/7r/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP+p/6n//////1b/Vv8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/G/8b//H/8f/o/+j/E/8T/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP9d/13/+//7/6f/p/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/xH/Ef8f/x//AP8A/wD/AP8A/wD/AP8A+QD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A+QD/AH4A/wD5AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A+QD/AH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAIA/wB8AP8A5wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A5wD/AHwA/wACAP8AfAD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AHwA/wDnAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A5wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP9A/0D/Xf9d/0r/Sv8G/wb/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/YP9g/////////////////5X/lf8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/xf/F//s/+z/////////////////7//v/wj/CP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/sf+x////////////////////////////Wv9a/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/2z/bP/////////////////9//3///////////+//7//AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP88/zz/+f/5////////////8v/y/2L/Yv////////////7//v8r/yv/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/JP8k/+r/6v////////////////9g/2D/Af8B/9z/3P///////////5n/mf8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/xn/Gf/d/93/////////////////pP+k/wD/AP8A/wD/d/93////////////9v/2/xb/Fv8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/pP+k/////////////////8r/yv8K/wr/AP8A/wD/AP8V/xX/9//3////////////hf+F/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8m/yb/rv+u/+j/6P/C/8L/Fv8W/wD/AP8A/wD/AP8A/wD/AP+e/57////////////x//H/Ef8R/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/yz/LP/+//7///////////+F/4X/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/7P/s/////////////T/9P8Y/xj/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/N/83//7//v///////////5n/mf8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/tP+0/////////////P/8/y7/Lv8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8v/y///f/9////////////wP/A/wH/Af8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP+e/57/////////////////XP9c/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/xj/GP/w//D////////////p/+n/E/8T/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/2z/bP////////////////+i/6L/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Av8C/8f/x/////////////////9O/07/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Kf8p//f/9////////////+j/6P8W/xb/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Vv9W/+7/7v///////////5//n/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/CP8I/zv/O/9Q/1D/K/8r/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wDnAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A5gD/AHwA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wB8AP8AAgD/AHwA/wDmAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wDmAP8AfAD/AAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAADAAAABgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAPAP8AXAD/AMgA/wD2AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD2AP8AyAD/AFwA/wAOAAAAAAD/AA8A/wCVAP8A9wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/APgA/wCVAP8ADgD/AFwA/wD3AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD4AP8AXAD/AMYA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AxgD/APcA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A9wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/1b/Vv+T/5P/m/+b/4j/iP8//z//A/8D/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8D/wP/cP9w///////////////////////1//X/Pv8+/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP81/zX/4f/h////////////////////////////pP+k/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/w3/Df+g/6D//f/9////////////////////////////9f/1/xf/F/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/1b/Vv/4//j//////////////////////////////////////3r/ev8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/M/8z/+P/4////////////////////////////////////////////8//z/8T/xP/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8a/xr/x//H///////////////////////9//3//P/8/////////////////+//7/9R/1H/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wv/C/+S/5L//P/8//////////////////7//v+w/7D/mv+a//////////////////////+X/5f/CP8I/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Af8B/3L/cv/y//L//////////////////////+T/5P89/z3/Jf8l//b/9v/////////////////e/97/JP8k/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/ZP9k//P/8////////////////////////////2n/af8D/wP/Af8B/6v/q//////////////////+//7/dv92/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wP/A/9P/0//7P/s///////////////////////8//z/of+h/wD/AP8A/wD/AP8A/0L/Qv/5//n/////////////////5//n/w7/Dv8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/zT/NP/X/9f///////////////////////7//v+8/7z/HP8c/wD/AP8A/wD/AP8A/xb/Fv/C/8L//////////////////////3j/eP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/3X/df///////////////////////////+D/4P80/zT/Af8B/wD/AP8A/wD/AP8A/wP/A/97/3v/+//7/////////////////9f/1/8e/x7/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/xf/F/+s/6z/6f/p//b/9v/3//f/4v/i/zz/PP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8y/zL/4//j//////////////////f/9/9u/27/Av8C/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8L/wv/Pv8+/2X/Zf9n/2f/MP8w/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8E/wT/o/+j///////////////////////D/8P/Fv8W/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Kv8q//z//P/////////////////6//r/YP9g/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/6L/ov//////////////////////4P/g/w//D/8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/zb/Nv/q/+r//////////////////////4b/hv8C/wL/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wv/C/+h/6H//////////////////////+L/4v80/zT/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP9K/0r/7f/t//////////////////3//f+T/5P/CP8I/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8K/wr/rv+u///////////////////////n/+f/Ov86/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Kv8q//n/+f//////////////////////wP/A/wL/Av8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/4j/iP/9//3//////////////////////2z/bP8C/wL/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/yD/IP/Q/9D//////////////////////97/3v8w/zD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wP/A/9v/2//9//3//////////////////3//f+Y/5j/C/8L/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8T/xP/xv/G///////////////////////z//P/Rv9G/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Pf89//D/8P//////////////////////1P/U/x3/Hf8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/Af8B/3f/d////////////////////////////6j/qP8H/wf/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/xb/Fv++/77//v/+//////////////////L/8v9g/2D/Av8C/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wH/Af9J/0n/5//n///////////////////////R/9H/Jf8l/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8F/wX/Q/9D/9H/0f/////////////////+//7/gP+A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wX/Bf83/zf/bP9s/4T/hP+A/4D/Kf8p/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/APYA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A9gD/AMcA/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8AxgD/AFwA/wD4AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD3AP8AXAD/AA4A/wCUAP8A+AD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/APcA/wCUAP8ADwAAAAAA/wAOAP8AXAD/AMYA/wD2AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD2AP8AxgD/AFwA/wAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
      { base64: true }
    );
    const contentImg = zip.folder("assets/images/content");

    // img.file("image.jpg", imgData, { base64: true });
    await Promise.all(
      contentImages.map(async (image, index) => {
        await contentImg.file(
          image.file.name,
          image.data_url.split("data:image/jpeg;base64,")[1],
          { base64: true }
        );
      })
    );

    const configFile = {
      language,
      domainName,
      title,
      description,
      htmlContent,
      buttonLink,
      buttonText,
      faq,
      contentImages: contentImages.reduce((acc, rec) => {
        acc.push({
          data_url: rec.data_url,
          file: { name: rec.file.name },
        });
        return acc;
      }, []),
      brandImages: brandImages.reduce((acc, rec) => {
        acc.push({
          data_url: rec.data_url,
          // file: { name: rec.file.name },
        });
        return acc;
      }, []),
      focusElement,
      promoCode,
      ratingTableHead,
      ratingTableBody,
      customFocusElementCode,
      showDemoTable,
      theme,
      redirects,
    };

    await zip.file("config.json", JSON.stringify(configFile));

    await zip.file("robots.txt", getRobotsTxt(domainName));

    // create redirects
    const createRedirects = () => {
      if (redirects.length !== 0) {
        redirects.split("\n").map((redirect) => {
          function cleanURL(url) {
            if (!url.startsWith("/")) {
              url = "/" + url;
            }

            if (!url.includes("?") && !url.includes("#") && url.endsWith("/")) {
              url = url.slice(0, -1);
            }

            var urlObject = new URL(url, "http://dummy.com"); // Создаем URL объект, используя dummy базовый URL
            var pathname = urlObject.pathname; // Получаем часть пути (pathname)
            return pathname.replace(/^\/|\/$/g, ""); // Удаляем начальный и конечный слэш
          }
          if (redirect !== "/" && redirect !== "") {
            // console.log(cleanURL(redirect));
            if (redirect.endsWith(".html")) {
              zip.file(cleanURL(redirect), getNotFoundPage());
            } else {
              zip.file(cleanURL(redirect) + "/index.html", getNotFoundPage());
            }
          }
        });
      }
    };

    await createRedirects();

    await zip.file("sitemap.xml", getSitemap(domainName, redirects));

    await zip.file(
      "index.html",
      generateHtmlTemplate({
        language,
        domainName,
        title,
        description,
        htmlContent,
        contentImages,
        brandImages,
        buttonLink,
        buttonText,
        faq,
        amp,
        focusElement,
        promoCode,
        ratingTableHead,
        ratingTableBody,
        customFocusElementCode,
        showDemoTable,
        theme,
      })
    );

    await zip.generateAsync({ type: "blob" }).then(async function (content) {
      // see FileSaver.js
      await saveAs(content, domainName + ".zip");
    });
  };
  const blobContent = new Blob(
    [
      generateHtmlTemplate({
        language,
        domainName,
        title,
        description,
        htmlContent,
        isDemo: true,
        contentImages,
        brandImages,
        buttonLink,
        buttonText,
        faq,
        amp,
        focusElement,
        promoCode,
        ratingTableHead,
        ratingTableBody,
        customFocusElementCode,
        showDemoTable,
        theme,
      }),
    ],
    { type: "text/html" }
  );

  const iFrameSrc = URL.createObjectURL(blobContent);

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          {/* Page Section */}
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* Main Content */}
              <div className="order-last lg:order-first lg:col-span-8 p-5 lg:p-6 bg-white shadow-sm rounded-lg">
                {/*

                ADD YOUR MAIN CONTENT BELOW

                */}

                {/* Placeholder */}

                {/*flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700*/}
                <div className="">
                  {/*min-h-screen flex items-center justify-center overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full*/}
                  <div className="">
                    {/* Installation Section */}
                    {/*py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12*/}
                    <div className="">
                      {/* Logo */}
                      <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
                          <span>OOWG</span>
                        </h1>
                        <div className="flex items-center justify-center">
                          <img
                            src="https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/gb.svg"
                            alt="uk"
                            className="h-6 w-6 mr-2"
                            onClick={() => setLanguage("en")}
                          />
                          <img
                            src="https://raw.githubusercontent.com/hampusborgos/country-flags/ba2cf4101bf029d2ada26da2f95121de74581a4d/svg/ru.svg"
                            alt="ru"
                            className="h-6 w-6"
                            onClick={() => setLanguage("ru")}
                          />
                        </div>

                        <p className="text-gray-500">
                          {getTranslate(language, "description")}
                        </p>
                      </div>
                      {/* END Logo */}

                      {/* Installation Form */}
                      <div className="relative">
                        <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 left-0 h-64 transform translate-x-16 translate-y-32" />
                        <div className="pattern-dots-md text-gray-300 absolute bottom-0 right-0 left-0 h-64 transform -translate-x-16 -translate-y-32" />
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            createWebsiteArchive();
                          }}
                        >
                          <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden relative">
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <strong>
                                {getTranslate(language, "configuration")}:
                              </strong>{" "}
                              {getTranslate(language, "info")}
                            </div>
                            <div className="p-5 lg:p-6 grow w-full">
                              <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                                <div className="space-y-1">
                                  <label htmlFor="name" className="font-medium">
                                    {getTranslate(language, "website_lang")}
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="website_language"
                                    name="website_language"
                                    placeholder="en"
                                    onChange={(e) => {
                                      setLanguage(e.target.value);
                                      setButtonText(
                                        getTranslate(
                                          language,
                                          "play_button_text"
                                        )
                                      );
                                    }}
                                    value={`${language}`}
                                  />
                                  <p className="text-sm text-gray-500">
                                    <a
                                      href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
                                      target={"_blank"}
                                      className={"underline underline-offset-1"}
                                    >
                                      ISO 3166-1 alpha-2
                                    </a>
                                    ,{" "}
                                    <small>
                                      {getTranslate(language, "change")}
                                    </small>
                                  </p>
                                </div>
                                <div className="space-y-1">
                                  <label htmlFor="host" className="font-medium">
                                    {getTranslate(language, "domain_name")}
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="domain_name"
                                    name="domain_name"
                                    onChange={(e) =>
                                      setDomainName(e.target.value)
                                    }
                                    placeholder="example.com"
                                    value={`${domainName}`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <strong>
                                {getTranslate(language, "seo_params")}:
                              </strong>{" "}
                              {getTranslate(language, "meta")}
                            </div>

                            <div className="p-5 lg:p-6 grow w-full">
                              <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                                <div className="space-y-1">
                                  <label htmlFor="name" className="font-medium">
                                    {getTranslate(language, "seo_title")}
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="seo_title"
                                    name="seo_title"
                                    placeholder="SEO title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={`${title}`}
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label htmlFor="host" className="font-medium">
                                    {getTranslate(language, "seo_description")}
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="seo_description"
                                    name="seo_description"
                                    placeholder="SEO description"
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                    value={`${description}`}
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label
                                    htmlFor="table_prefix"
                                    className="font-medium"
                                  >
                                    {getTranslate(language, "seo_html")}
                                  </label>
                                  <div>
                                    <p
                                      className={"text-xs"}
                                      onClick={() => setEditMode(!editMode)}
                                    >
                                      {editMode
                                        ? "Show HTML Code"
                                        : "Show visual editor"}
                                    </p>
                                    {editMode ? (
                                      <ReactQuill
                                        className="block rounded leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        value={htmlContent}
                                        onChange={setHtmlContent}
                                        modules={modules}
                                      />
                                    ) : (
                                      <textarea
                                        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-96"
                                        value={htmlContent}
                                        onChange={(e) =>
                                          setHtmlContent(e.target.value)
                                        }
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <strong>
                                {getTranslate(language, "options")}:
                              </strong>{" "}
                              {getTranslate(language, "options_desc")}
                            </div>
                            <div className="p-5 lg:p-6 grow w-full">
                              <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                                {/* Form Switches: With Labels and Description */}

                                <div className="space-y-6">
                                  <div className="space-x-2">
                                    <div className="flex justify-between items-center space-x-3">
                                      <label
                                        htmlFor="switch1"
                                        className="font-medium leading-relaxed"
                                      >
                                        {getTranslate(language, "images")}
                                        <span className="block text-sm text-gray-500">
                                          {getTranslate(
                                            language,
                                            "images_desc"
                                          )}
                                        </span>
                                      </label>
                                      <ImageUploading
                                        multiple
                                        value={contentImages}
                                        onChange={changeImages}
                                        maxNumber={maxNumber}
                                        dataURLKey="data_url"
                                      >
                                        {({
                                          imageList,
                                          onImageUpload,
                                          onImageRemoveAll,
                                          onImageUpdate,
                                          onImageRemove,
                                          isDragging,
                                          dragProps,
                                        }) => (
                                          // write your building UI
                                          <div className="upload__image-wrapper">
                                            <span
                                              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                              style={
                                                isDragging
                                                  ? { color: "red" }
                                                  : undefined
                                              }
                                              onClick={onImageUpload}
                                              {...dragProps}
                                            >
                                              <span>
                                                {getTranslate(
                                                  language,
                                                  "drop_images"
                                                )}
                                              </span>
                                            </span>
                                            <br />
                                            {imageList.length > 0 && (
                                              <span onClick={onImageRemoveAll}>
                                                {getTranslate(
                                                  language,
                                                  "remove_images"
                                                )}
                                              </span>
                                            )}
                                            {imageList.map((image, index) => (
                                              <div
                                                key={index}
                                                className="image-item"
                                              >
                                                {/*<img*/}
                                                {/*  src={image["data_url"]}*/}
                                                {/*  alt=""*/}
                                                {/*  width="100"*/}
                                                {/*/>*/}

                                                <div className="image-item__btn-wrapper">
                                                  <small>
                                                    {image.file.name} [
                                                    <svg
                                                      onClick={() =>
                                                        onImageUpdate(index)
                                                      }
                                                      className="hi-solid hi-refresh inline-block w-5 h-5"
                                                      fill="currentColor"
                                                      viewBox="0 0 20 20"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        fillRule="evenodd"
                                                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                                        clipRule="evenodd"
                                                      />
                                                    </svg>
                                                    {" | "}
                                                    <svg
                                                      onClick={() =>
                                                        onImageRemove(index)
                                                      }
                                                      className="hi-solid hi-document-remove inline-block w-5 h-5"
                                                      fill="currentColor"
                                                      viewBox="0 0 20 20"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      aria-hidden="true"
                                                    >
                                                      <path
                                                        fillRule="evenodd"
                                                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z"
                                                        clipRule="evenodd"
                                                      />
                                                    </svg>
                                                    ]
                                                  </small>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                      </ImageUploading>
                                    </div>
                                  </div>
                                </div>

                                <div className="space-y-6">
                                  <div className="space-x-2">
                                    <div className="flex justify-between items-center space-x-3">
                                      <label
                                        htmlFor="switch1"
                                        className="font-medium leading-relaxed"
                                      >
                                        AMP
                                        <span className="block text-sm text-gray-500">
                                          {getTranslate(language, "amp")}
                                        </span>
                                      </label>
                                      <input
                                        type="checkbox"
                                        defaultChecked={amp}
                                        id="switch1"
                                        name="switch1"
                                        onClick={() => {
                                          setAmp(!amp);
                                        }}
                                        className="form-switch transition-all duration-150 ease-out rounded-full h-7 w-12 text-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      />
                                    </div>
                                  </div>
                                </div>

                                {/* END Form Switches: With Labels and Description */}
                              </div>
                            </div>
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <strong>
                                {getTranslate(language, "content_elements")}:
                              </strong>{" "}
                              {getTranslate(language, "content_elements_desc")}
                            </div>
                            <div className="p-5 lg:p-6 grow w-full">
                              <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                                <div className="space-y-1">
                                  <label htmlFor="name" className="font-medium">
                                    {getTranslate(language, "focus_element")}
                                  </label>
                                  <small>
                                    <br />
                                    {getTranslate(
                                      language,
                                      "focus_element_desc"
                                    )}
                                  </small>

                                  {/* Select Box */}
                                  <div className="space-y-1">
                                    <select
                                      onChange={(e) => {
                                        if (
                                          e.target.value ===
                                          getTranslate(language, "button_el")
                                        ) {
                                          setFocusElement(
                                            getTranslate(language, "button_el")
                                          );
                                        }

                                        if (
                                          e.target.value ===
                                          getTranslate(language, "promocode_el")
                                        ) {
                                          setFocusElement(
                                            getTranslate(
                                              language,
                                              "promocode_el"
                                            )
                                          );
                                        }

                                        if (
                                          e.target.value ===
                                          getTranslate(
                                            language,
                                            "rating_table_el"
                                          )
                                        ) {
                                          setFocusElement(
                                            getTranslate(
                                              "en",
                                              "rating_table_el"
                                            )
                                          );
                                        }

                                        if (
                                          e.target.value ===
                                          getTranslate(language, "disable_el")
                                        ) {
                                          setFocusElement(
                                            getTranslate(language, "disable_el")
                                          );
                                        }

                                        if (e.target.value === "Custom Code") {
                                          setFocusElement("Custom Code");
                                        }
                                      }}
                                      className="w-full block border border-gray-200 rounded px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      id="select"
                                      name="select"
                                      value={focusElement}
                                    >
                                      <option>
                                        {getTranslate(language, "button_el")}
                                      </option>
                                      <option>
                                        {getTranslate(language, "promocode_el")}
                                      </option>
                                      <option>
                                        {getTranslate(
                                          language,
                                          "rating_table_el"
                                        )}
                                      </option>
                                      <option>Custom Code</option>
                                      <option>
                                        {getTranslate(language, "disable_el")}
                                      </option>
                                    </select>
                                  </div>
                                  {/* END Select Box */}
                                </div>
                                {focusElement === "Button" && (
                                  <div className="space-y-1">
                                    <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
                                      <input
                                        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        type="text"
                                        id="button_text"
                                        name="button_text"
                                        placeholder="Button Text"
                                        onChange={(e) => {
                                          setButtonText(e.target.value);
                                        }}
                                        value={`${buttonText}`}
                                      />
                                      <input
                                        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        type="text"
                                        id="button_link"
                                        name="button_link"
                                        placeholder="Button Link"
                                        onChange={(e) => {
                                          setButtonLink(e.target.value);
                                        }}
                                        value={`${buttonLink}`}
                                      />
                                    </div>
                                  </div>
                                )}

                                {focusElement === "Promo Code" && (
                                  <div className="space-y-1">
                                    <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
                                      <input
                                        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        type="text"
                                        id="promocode"
                                        name="promocode"
                                        placeholder="Promo Code"
                                        onChange={(e) => {
                                          setPromoCode(e.target.value);
                                        }}
                                        value={`${promoCode}`}
                                      />
                                    </div>
                                  </div>
                                )}

                                {focusElement === "Rating Table" && (
                                  <div className="space-y-1">
                                    <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
                                      <label>Thead</label>
                                      {ratingTableHead.map((el, index) => {
                                        return (
                                          <input
                                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                            type="text"
                                            id={"thead" + index}
                                            name={"thead" + index}
                                            placeholder={"thead" + index}
                                            value={el}
                                            onChange={(e) => {
                                              setRatingTableHead([
                                                document.getElementById(
                                                  "thead" + 0
                                                ).value,
                                                document.getElementById(
                                                  "thead" + 1
                                                ).value,
                                                document.getElementById(
                                                  "thead" + 2
                                                ).value,
                                              ]);
                                            }}
                                          />
                                        );
                                      })}
                                    </div>

                                    <label>
                                      Tbody{" "}
                                      <small
                                        onClick={() => {
                                          setRatingTableBody([]);
                                        }}
                                      >
                                        Clean Tbody
                                      </small>
                                    </label>
                                    {ratingTableBody.map((el, index) => {
                                      return (
                                        <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
                                          <input
                                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                            disabled
                                            type="text"
                                            id={"tbody" + index}
                                            name={"tbody" + index}
                                            placeholder={"tbody" + index}
                                            value={el[0]}
                                          />
                                          <input
                                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                            disabled
                                            type="text"
                                            id={"tbody" + index}
                                            name={"tbody" + index}
                                            placeholder={"tbody" + index}
                                            value={el[3]}
                                          />
                                          <input
                                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                            disabled
                                            type="text"
                                            id={"tbody" + index}
                                            name={"tbody" + index}
                                            placeholder={"tbody" + index}
                                            value={el[1]}
                                          />
                                          <input
                                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                            disabled
                                            type="text"
                                            id={"tbody" + index}
                                            name={"tbody" + index}
                                            placeholder={"tbody" + index}
                                            value={el[2]}
                                          />
                                        </div>
                                      );
                                    })}

                                    <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
                                      <label>Add Row</label>
                                      <input
                                        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        type="text"
                                        id="product_name_table_add_row"
                                        name="product_name_table_add_row"
                                        placeholder="Promo Code"
                                        // onChange={(e) => {
                                        //   ratingTableBodyNewRow[0] =
                                        //     e.target.value;
                                        // }}
                                        onChange={(e) => {
                                          setRatingTableBodyNewRow([
                                            e.target.value,
                                            ratingTableBodyNewRow[1],
                                            ratingTableBodyNewRow[2],
                                            ratingTableBodyNewRow[3],
                                          ]);
                                        }}
                                        value={ratingTableBodyNewRow[0]}
                                      />
                                      <input
                                        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        type="text"
                                        id="product_button_text_table_add_row"
                                        name="product_button_text_table_add_row"
                                        placeholder="Bonus Text"
                                        // onChange={(e) => {
                                        //   ratingTableBodyNewRow[2] =
                                        //     e.target.value;
                                        // }}
                                        onChange={(e) => {
                                          setRatingTableBodyNewRow([
                                            ratingTableBodyNewRow[0],
                                            ratingTableBodyNewRow[1],
                                            ratingTableBodyNewRow[2],
                                            e.target.value,
                                          ]);
                                        }}
                                        value={ratingTableBodyNewRow[3]}
                                      />
                                      <input
                                        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        type="text"
                                        id="product_link_table_add_row"
                                        name="product_link_table_add_row"
                                        placeholder="Link"
                                        // onChange={(e) => {
                                        //   ratingTableBodyNewRow[1] =
                                        //     e.target.value;
                                        // }}
                                        onChange={(e) => {
                                          setRatingTableBodyNewRow([
                                            ratingTableBodyNewRow[0],
                                            e.target.value,
                                            ratingTableBodyNewRow[2],
                                            ratingTableBodyNewRow[3],
                                          ]);
                                        }}
                                        value={ratingTableBodyNewRow[1]}
                                      />
                                      <input
                                        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                        type="text"
                                        id="product_button_text_table_add_row"
                                        name="product_button_text_table_add_row"
                                        placeholder="Button Text"
                                        // onChange={(e) => {
                                        //   ratingTableBodyNewRow[2] =
                                        //     e.target.value;
                                        // }}
                                        onChange={(e) => {
                                          setRatingTableBodyNewRow([
                                            ratingTableBodyNewRow[0],
                                            ratingTableBodyNewRow[1],
                                            e.target.value,
                                            ratingTableBodyNewRow[3],
                                          ]);
                                        }}
                                        value={ratingTableBodyNewRow[2]}
                                      />

                                      <button
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                                        onClick={() => {
                                          setRatingTableBody([
                                            ...ratingTableBody,
                                            ratingTableBodyNewRow,
                                          ]);
                                          // setRatingTableBodyNewRow([]);
                                        }}
                                      >
                                        <svg
                                          className="hi-mini hi-plus inline-block w-5 h-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                        </svg>
                                      </button>
                                      <button
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                                        onClick={() => {
                                          ratingTableBody.pop();
                                          setRatingTableBody([
                                            ...ratingTableBody,
                                          ]);
                                          // setRatingTableBodyNewRow([]);
                                        }}
                                      >
                                        <svg
                                          className="hi-mini hi-minus-small inline-block w-5 h-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                                        </svg>
                                      </button>
                                    </div>
                                    <div>
                                      <ImageUploading
                                        multiple={true}
                                        value={brandImages}
                                        onChange={brandImagesOnChange}
                                        dataURLKey="data_url"
                                      >
                                        {({
                                          imageList,
                                          onImageUpload,
                                          onImageRemoveAll,
                                          onImageUpdate,
                                          onImageRemove,
                                          isDragging,
                                          dragProps,
                                        }) => (
                                          <div className="upload__image-wrapper">
                                            <span
                                              style={
                                                isDragging
                                                  ? { color: "red" }
                                                  : undefined
                                              }
                                              onClick={onImageUpload}
                                              {...dragProps}
                                            >
                                              <hr />
                                              <span
                                                className={"text-green-500"}
                                              >
                                                Load images (1.jpg, 2.jpg,
                                                3.jpg, ...)
                                              </span>
                                            </span>
                                            &nbsp;
                                            {imageList.map((image, index) => (
                                              <div key={index}>
                                                {/*<img*/}
                                                {/*  src={image.data_url}*/}
                                                {/*  alt=""*/}
                                                {/*/>*/}
                                                <span>{index + 1}</span>
                                                <span
                                                  onClick={() =>
                                                    onImageUpdate(index)
                                                  }
                                                >
                                                  | Update
                                                </span>
                                                <span
                                                  onClick={() =>
                                                    onImageRemove(index)
                                                  }
                                                >
                                                  | Remove
                                                </span>
                                              </div>
                                            ))}
                                            <span onClick={onImageRemoveAll}>
                                              | Delete all images
                                            </span>
                                          </div>
                                        )}
                                      </ImageUploading>
                                    </div>
                                  </div>
                                )}

                                {focusElement === "Custom Code" && (
                                  <div className="space-y-1">
                                    <label
                                      htmlFor="table_prefix"
                                      className="font-medium"
                                    >
                                      Custom HTML Code Element
                                    </label>
                                    <textarea
                                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-96"
                                      rows="5"
                                      id="html_content"
                                      name="html_content"
                                      placeholder="HTML content (seo text)"
                                      value={`${customFocusElementCode}`}
                                      onChange={(e) =>
                                        setCustomFocusElementCode(
                                          e.target.value
                                        )
                                      }
                                    ></textarea>
                                  </div>
                                )}

                                <div className="space-y-1">
                                  <label htmlFor="host" className="font-medium">
                                    FAQ
                                    {faq.length > 0 && (
                                      <small
                                        onClick={() => {
                                          setFaq([]);
                                        }}
                                      >
                                        {" "}
                                        [ {getTranslate(
                                          language,
                                          "clean_faq"
                                        )}{" "}
                                        ]
                                      </small>
                                    )}
                                  </label>
                                  {faq.reverse().map((faq_item, index) => {
                                    const question = faq_item[0];
                                    const answer = faq_item[1];

                                    return (
                                      <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden">
                                        {/* Card Header: Form Action multiple edits */}
                                        {/*<div className="py-4 px-5 lg:px-6 w-full bg-gray-50">*/}
                                        {/*  <h3>FAQ</h3>*/}
                                        {/*</div>*/}

                                        <div className="">
                                          {/* Form 1 */}
                                          <span className="p-4 rounded bg-gray-100 flex items-center justify-between space-x-2">
                                            <div>
                                              <h4 className="font-semibold mb-1">
                                                {index + 1}. {question}
                                              </h4>
                                              <p className="text-gray-600 text-sm">
                                                {answer}
                                              </p>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                  <label
                                    htmlFor="name"
                                    className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2 font-medium"
                                  >
                                    {" "}
                                    {getTranslate(language, "add_qa")}
                                  </label>
                                  <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2">
                                    <input
                                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      type="text"
                                      id="faq_question"
                                      name="faq_question"
                                      placeholder={getTranslate(
                                        language,
                                        "question"
                                      )}
                                      onChange={(e) => {
                                        // setFaq([
                                        //   ...faq,
                                        //   [e.target.value, "answer"],
                                        // ]);
                                      }}
                                      // value={`${buttonText}`}
                                    />
                                    <input
                                      className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                      type="text"
                                      id="faq_answer"
                                      name="faq_answer"
                                      placeholder={getTranslate(
                                        language,
                                        "answer"
                                      )}
                                      onChange={(e) => {
                                        // setButtonLink(e.target.value);
                                      }}
                                      // value={`${buttonLink}`}
                                    />
                                    <div
                                      className={
                                        "space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-2"
                                      }
                                    >
                                      {/* Button (small) */}
                                      <button
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                                        onClick={(e) => {
                                          const question =
                                            document.getElementById(
                                              "faq_question"
                                            ).value;
                                          const answer =
                                            document.getElementById(
                                              "faq_answer"
                                            ).value;
                                          setFaq([...faq, [question, answer]]);
                                          document.getElementById(
                                            "faq_question"
                                          ).value = "";
                                          document.getElementById(
                                            "faq_answer"
                                          ).value = "";
                                        }}
                                      >
                                        <svg
                                          className="hi-mini hi-plus inline-block w-5 h-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                        </svg>
                                      </button>

                                      <button
                                        type="button"
                                        className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                                        onClick={(e) => {
                                          faq.pop();
                                          setFaq([...faq]);
                                        }}
                                      >
                                        <svg
                                          className="hi-mini hi-minus-small inline-block w-5 h-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
                                        </svg>
                                      </button>

                                      {/* END Button (small) */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*<div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">*/}
                            {/*  <strong>Ai Features:</strong> ChatGPT*/}
                            {/*</div>*/}
                            {/*<div className="p-5 lg:p-6 grow w-full">*/}
                            {/*  <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">*/}
                            {/*    <div className="space-y-1">*/}
                            {/*      <label htmlFor="name" className="font-medium">*/}
                            {/*        ChatGPT API Key*/}
                            {/*      </label>*/}
                            {/*      <input*/}
                            {/*        className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"*/}
                            {/*        type="text"*/}
                            {/*        id="chatgpt_api_key1"*/}
                            {/*        name="chatgpt_api_key1"*/}
                            {/*        placeholder="ChatGPT Api Key"*/}
                            {/*        onChange={(e) => {*/}
                            {/*          setChatGPTApiKey(e.target.value);*/}
                            {/*        }}*/}
                            {/*      />*/}
                            {/*      <label htmlFor="name" className="font-medium">*/}
                            {/*        Question*/}
                            {/*      </label>*/}
                            {/*      <div className="sm:flex">*/}
                            {/*        <input*/}
                            {/*          className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"*/}
                            {/*          type="text"*/}
                            {/*          id="chatgpt_question"*/}
                            {/*          name="chatgpt_question"*/}
                            {/*          placeholder="ChatGPT Question"*/}
                            {/*          onChange={(e) => {*/}
                            {/*            setChatGPTQuestion(e.target.value);*/}
                            {/*          }}*/}
                            {/*          value={chatGPTQuestion}*/}
                            {/*        />*/}
                            {/*        <button*/}
                            {/*          type="button"*/}
                            {/*          className="ml-5 inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"*/}
                            {/*          onClick={() => {*/}
                            {/*            fetch(*/}
                            {/*              `https://api.openai.com/v1/completions`,*/}
                            {/*              {*/}
                            {/*                body: JSON.stringify({*/}
                            {/*                  model: "text-davinci-003",*/}
                            {/*                  prompt: `${chatGPTQuestion}`,*/}
                            {/*                  temperature: 0.9,*/}
                            {/*                  max_tokens: 150,*/}
                            {/*                  top_p: 1,*/}
                            {/*                  frequency_penalty: 0.0,*/}
                            {/*                  presence_penalty: 0.6,*/}
                            {/*                  stop: [" Human:", " AI:"],*/}
                            {/*                }),*/}
                            {/*                method: "POST",*/}
                            {/*                headers: {*/}
                            {/*                  "content-type":*/}
                            {/*                    "application/json",*/}
                            {/*                  Authorization: `Bearer  ${chatGPTApiKey}`,*/}
                            {/*                },*/}
                            {/*              }*/}
                            {/*            ).then((response) => {*/}
                            {/*              if (response.ok) {*/}
                            {/*                response.json().then((json) => {*/}
                            {/*                  // console.log(json);*/}
                            {/*                  setChatGPTAnswer(*/}
                            {/*                    json.choices[0].text*/}
                            {/*                  );*/}
                            {/*                });*/}
                            {/*              } else {*/}
                            {/*                response.json().then((json) => {*/}
                            {/*                  // console.log(json);*/}
                            {/*                  setChatGPTAnswer(*/}
                            {/*                    json.error.message*/}
                            {/*                  );*/}
                            {/*                });*/}
                            {/*              }*/}
                            {/*            });*/}
                            {/*          }}*/}
                            {/*        >*/}
                            {/*          <svg*/}
                            {/*            className="hi-mini hi-question-mark-circle inline-block w-5 h-5"*/}
                            {/*            xmlns="http://www.w3.org/2000/svg"*/}
                            {/*            viewBox="0 0 20 20"*/}
                            {/*            fill="currentColor"*/}
                            {/*            aria-hidden="true"*/}
                            {/*          >*/}
                            {/*            <path*/}
                            {/*              fillRule="evenodd"*/}
                            {/*              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"*/}
                            {/*              clipRule="evenodd"*/}
                            {/*            />*/}
                            {/*          </svg>*/}
                            {/*        </button>*/}
                            {/*      </div>*/}
                            {/*      {chatGPTAnswer && (*/}
                            {/*        <>*/}
                            {/*          <label*/}
                            {/*            htmlFor="name"*/}
                            {/*            className="font-medium"*/}
                            {/*          >*/}
                            {/*            Answer*/}
                            {/*          </label>*/}
                            {/*          <textarea*/}
                            {/*            className="w-full block border border-gray-200 rounded px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"*/}
                            {/*            id="details"*/}
                            {/*            name="details"*/}
                            {/*            rows="4"*/}
                            {/*            placeholder="Enter further details"*/}
                            {/*            value={chatGPTAnswer}*/}
                            {/*            disabled*/}
                            {/*          ></textarea>*/}
                            {/*        </>*/}
                            {/*      )}*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}
                            <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                              <button
                                type="submit"
                                className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none w-full px-4 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                              >
                                {getTranslate(
                                  language,
                                  "generate_and_download"
                                )}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>

                      <p
                        className="p-5 text-xs text-black text-center"
                        onClick={() => setExperimentalMode(!experimentalMode)}
                        style={{ cursor: "pointer" }}
                      >
                        Experimental Mode -{" "}
                        {experimentalMode ? (
                          <span className="text-xs text-green-500">TRUE</span>
                        ) : (
                          <span className="text-xs text-red-600">FALSE</span>
                        )}
                      </p>

                      {/* END Installation Form */}
                    </div>
                    {/* END Installation Section */}
                    {experimentalMode && (
                      <div className="">
                        {/* Installation Form */}
                        <div className="relative">
                          <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 left-0 h-64 transform translate-x-16 translate-y-32" />
                          <div className="pattern-dots-md text-gray-300 absolute bottom-0 right-0 left-0 h-64 transform -translate-x-16 -translate-y-32" />
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              createWebsiteArchive();
                            }}
                          >
                            <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden relative">
                              <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                                <strong>Edit Website</strong> using config.json
                                inside website directory
                              </div>
                              <div className="space-y-1">
                                <label
                                  htmlFor="table_prefix"
                                  className="font-medium"
                                >
                                  config.json
                                </label>
                                <p class="text-xs">
                                  It's not contain images. Paste images in
                                  default form from website manually.
                                </p>
                                <textarea
                                  className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-96"
                                  rows="5"
                                  id="config_json"
                                  name="config_json"
                                  placeholder={`${JSON.stringify({
                                    language,
                                    domainName,
                                    title,
                                    description,
                                    htmlContent,
                                    buttonLink,
                                    buttonText,
                                    faq,
                                    contentImages,
                                    brandImages,
                                    focusElement,
                                    promoCode,
                                    ratingTableHead,
                                    ratingTableBody,
                                    customFocusElementCode,
                                    showDemoTable,
                                    theme,
                                  })}`}
                                  value={`${config}`}
                                  onChange={(e) => setConfig(e.target.value)}
                                ></textarea>
                                <p
                                  className="p-5 text-xs text-black"
                                  onClick={() =>
                                    setShowDemoTable(!showDemoTable)
                                  }
                                  style={{ cursor: "pointer" }}
                                >
                                  Show Demo Table -{" "}
                                  {showDemoTable ? (
                                    <span className="text-xs text-green-500">
                                      TRUE
                                    </span>
                                  ) : (
                                    <span className="text-xs text-red-600">
                                      FALSE
                                    </span>
                                  )}
                                </p>
                                <div>
                                  <label htmlFor="theme-select">
                                    Choose theme (only desktop, not amp):{" "}
                                  </label>
                                  <select
                                    id="theme-select"
                                    value={theme}
                                    onChange={(e) => {
                                      setTheme(e.target.value);
                                    }}
                                  >
                                    <option value="auto">Auto</option>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                  </select>
                                </div>

                                <label
                                  htmlFor="table_prefix"
                                  className="font-medium"
                                >
                                  Redirects (all pages would redirect to "/")
                                </label>
                                <textarea
                                  className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 h-96"
                                  rows="5"
                                  id="redirects"
                                  name="redirects"
                                  placeholder={`/example
/something
/link.html
/example/something/adsf?het=asdfasd&asdfasnz=asdfsad#1132
111
/222
333/
/444/`}
                                  value={redirects}
                                  onChange={(e) => setRedirects(e.target.value)}
                                ></textarea>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* END Installation Form */}
                      </div>
                    )}
                  </div>
                </div>

                {/*

                ADD YOUR MAIN CONTENT ABOVE

                */}
              </div>
              {/* END Main Content */}

              {/* Side content */}
              <div
                className={`lg:block order-first lg:order-last lg:col-span-4 p-5 lg:p-6 bg-white shadow-sm rounded-lg`}
              >
                <div className="lg:hidden">
                  {/* Мобильный вид спойлера */}
                  <input
                    type="checkbox"
                    id="spoilerToggle"
                    className="hidden"
                    checked={isSpoilerVisible}
                    onChange={toggleSpoiler}
                  />
                  <label
                    htmlFor="spoilerToggle"
                    className="block w-full px-4 py-2 bg-gray-300 text-gray-700 text-xs rounded-md cursor-pointer"
                  >
                    {isSpoilerVisible ? "Demo" : "Demo"}
                  </label>
                  <div
                    id="spoilerContent"
                    className={`overflow-hidden ${
                      isSpoilerVisible ? "max-h-full" : "max-h-0"
                    }`}
                  >
                    <iframe
                      src={iFrameSrc}
                      frameBorder="0"
                      width={"100%"}
                      className={"min-h-screen h-full"}
                    ></iframe>
                  </div>
                </div>
                <div className="hidden lg:block min-h-screen h-full">
                  {/* Десктопный вид спойлера */}
                  <iframe
                    src={iFrameSrc}
                    frameBorder="0"
                    width={"100%"}
                    className={"min-h-screen h-full"}
                  ></iframe>
                </div>

                {/*flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700*/}
                {/*<div className="">*/}

                {/*<HTMLString*/}
                {/*  html={generateHtmlTemplate({*/}
                {/*    language,*/}
                {/*    domainName,*/}
                {/*    title,*/}
                {/*    description,*/}
                {/*    htmlContent,*/}
                {/*  })}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*

                ADD YOUR SIDE CONTENT BELOW

                */}

                {/* Placeholder */}

                {/*

                ADD YOUR SIDE CONTENT ABOVE

                */}
              </div>

              {/* END Side content */}
            </div>
          </div>
          {/* END Page Section */}
        </main>
      </div>
    </>
  );
}
