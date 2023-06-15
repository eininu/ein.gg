import formatContent from "./format-content-amp.js";

const getAmp = (
  language,
  domainName,
  title,
  description,
  htmlContent,
  buttonLink,
  buttonText,
  faq,
  contentImages,
  focusElement,
  promoCode,
  ratingTableHead,
  ratingTableBody,
  customFocusElementCode,
  showDemoTable
) => {
  return `<!DOCTYPE html>
<html amp lang="${language}" transformed="self;v=1" i-amphtml-layout="" i-amphtml-no-boilerplate="">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,minimum-scale=1"><link rel="preconnect" href="https://cdn.ampproject.org"><style amp-runtime="" i-amphtml-version="012303151621000">html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#000!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom],amp-script[sandboxed]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}
/*# sourceURL=/css/ampdoc.css*/[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not(img):not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img[i-amphtml-ssr]:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}amp-story{visibility:hidden!important}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}
/*# sourceURL=/css/ampshared.css*/</style><meta name="generator" content="AMP Plugin v2.2.1; mode=reader; theme=legacy"><script async="" src="https://cdn.ampproject.org/v0.mjs" type="module" crossorigin="anonymous"></script><script async nomodule src="https://cdn.ampproject.org/v0.js" crossorigin="anonymous"></script>${
    focusElement === "Button"
      ? `<script src="https://cdn.ampproject.org/v0/amp-action-macro-0.1.mjs" async="" custom-element="amp-action-macro" type="module" crossorigin="anonymous"></script><script async nomodule src="https://cdn.ampproject.org/v0/amp-action-macro-0.1.js" crossorigin="anonymous" custom-element="amp-action-macro"></script>`
      : ""
  }<script src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.mjs" async="" custom-element="amp-sidebar" type="module" crossorigin="anonymous"></script><script async nomodule src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" crossorigin="anonymous" custom-element="amp-sidebar"></script><style amp-custom="">h1,h2,h3{overflow-wrap:break-word}.wp-block-image{margin:0 0 1em}.wp-block-image amp-img{height:auto;max-width:100%;vertical-align:bottom}.wp-block-image:not(.is-style-rounded)>a,.wp-block-image:not(.is-style-rounded) amp-img{border-radius:inherit}.wp-block-image.aligncenter{text-align:center}.wp-block-image .aligncenter{display:table}.wp-block-image .aligncenter{margin-left:auto;margin-right:auto}.wp-block-image figure{margin:0}ol,ul{overflow-wrap:break-word}p{overflow-wrap:break-word}:where(p.has-text-color:not(.has-link-color)) a{color:inherit}:root{--wp--preset--font-size--normal:16px;--wp--preset--font-size--huge:42px}.aligncenter{clear:both}html :where(amp-img[class*=wp-image-]),html :where(amp-anim[class*=wp-image-]){height:auto;max-width:100%}amp-img.amp-wp-enforced-sizes{-o-object-fit:contain;object-fit:contain}amp-img img,amp-img noscript{image-rendering:inherit;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}.aligncenter{display:block;margin-left:auto;margin-right:auto}.amp-wp-enforced-sizes{max-width:100%;margin:0 auto}html{background:#202b38}body{background:#202b38;color:#fff;font-weight:300;line-height:1.75em;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue","Open Sans",sans-serif;padding-bottom:0}p,ol,ul,figure{margin:0 0 1em;padding:0}a,a:visited{color:#bebebe;text-decoration:none}a:hover,a:active,a:focus{color:#fff;text-decoration:none}.amp-wp-header .amp-logo,.amp-wp-title{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif}.amp-wp-header{background-color:#202b38;box-shadow:0 0 24px 0 rgba(0,0,0,.25)}.amp-wp-header .amp-logo{color:#fff;font-size:1em;font-weight:400;margin:0 auto;max-width:calc(700px - 32px);position:relative;padding:1em 16px}.amp-wp-header .amp-logo a{color:#fff;text-decoration:none}.amp-wp-article{color:#fff;font-weight:400;margin:1.5em auto;max-width:700px;overflow-wrap:break-word;word-wrap:break-word}.amp-wp-article-header{align-items:center;align-content:stretch;display:flex;flex-wrap:wrap;justify-content:space-between;margin:1.5em 16px 1.5em}.amp-wp-title{color:#fff;display:block;flex:1 0 100%;font-weight:bold;margin:0 0 .625em;width:100%;font-size:2em;line-height:1.2}.amp-wp-article-content{margin:0 16px;font-size:1em;line-height:1.75}.amp-wp-article-content ul,.amp-wp-article-content ol{margin-left:1em}.amp-wp-article-content amp-img{margin:0 auto}.wp-block-image{padding:0;max-width:100%;margin-bottom:1.2em}.amp-wp-header a{background-image:url("");background-repeat:no-repeat;background-size:contain;background-position:center center;display:block;height:35px;width:215px;margin:0 auto;text-indent:-9999px}amp-img{max-width:100%}.footer{/*background-color:#f8f8f8*/;padding:1.5em 1em;color:#fff;text-align:center}.footer-colophon{font-size:10px}.amp-custom-ad{max-width:700px;margin:1.5em auto;padding:0 16px;box-sizing:border-box;text-align:center}amp-sidebar{background:#131313}.close-nav{color:#eee;background:#222}.toggle-navigationv2 ul li a{background:#222;border-bottom:1px solid #111;color:#eee}.toggle-navigationv2 ul li a:hover{background:#333;color:#fff}.hamburgermenu{float:left;position:relative;z-index:9999;margin-top:8px}.toast{display:block;position:relative;height:50px;width:50px;background:none;border:0}.toast::after,.toast::before,.toast span{position:absolute;display:block;width:25px;height:2px;border-radius:2px;background-color:#bebebe}.toast span{opacity:1;top:24px}.toast::after,.toast::before{content:""}.toast::before{top:17px}.toast::after{top:31px}amp-sidebar{width:280px}.close-nav{font-size:12px;letter-spacing:1px;display:inline-block;padding:10px;border-radius:100px;line-height:8px;margin:14px;position:relative}.toggle-navigationv2 ul{list-style-type:none;padding:0}.toggle-navigationv2 ul li a{padding:10px 25px;display:block;font-size:14px;box-sizing:border-box}.amp-menu li{position:relative}.amp-wp-header{position:sticky;top:0;z-index:100}.footer-block-btn{z-index:999;position:fixed;right:0;bottom:0;left:0;height:50px;padding-right:10px;padding-left:10px;/*background-color:#f8f8f8*/;display:flex;justify-content:center;align-items:center}.amp-wp-article{margin:0 auto;background-color:#202b39}.bw-button{display:block;position:relative;text-transform:uppercase;text-align:center;font-weight:700;font-size:15px;padding:10px 15px}.st-button{background-color:#040a0f;border:2px solid #040a0f;color:#fff;width:100%;border-radius:10px}.nd-button{background-color:#bebebe;border:2px solid #bebebe;color:#242424;margin-left:10px}.footer{padding:10px 5px;margin-bottom:50px}.footer-colophon{font-size:13px;display:flex;flex-direction:column;line-height:1.6}.amp-wp-title{margin:0;font-size:28px}.txt-button{display:block;position:relative;text-transform:uppercase;text-align:center;font-weight:700;font-size:14px;padding:10px 15px;margin:0}.grn-button{background-color:#040a0f;color:#fff${
    focusElement === "Promo Code" ? ";border-style:dashed" : ""
  }}.toggle-navigationv2 ul li a{background:none;border-color:rgba(255,255,255,.05);border-bottom:1px solid rgba(0,0,0,.05);color:#bebebe;font-size:16px;line-height:22px;font-weight:600}amp-sidebar{background:#040a0f}.close-nav{background:none;color:#bebebe;font-size:18px}${
    focusElement === "Rating Table" || focusElement === "Custom Code"
      ? ".cta-button,th{font-weight:600}table{width:100%;border-collapse:collapse;margin:2rem 0}td,th{padding:.75rem 1rem;text-align:left;border-bottom:1px solid #dfe2e5}th{background-color:#f8f9fa;color:#4a4a4a}.cta-button{display:inline-block;padding:.5rem 1rem;background-color:#07c;color:#fff;text-align:center;font-size:14px;text-decoration:none;border-radius:3px;transition:background-color .3s}.cta-button:hover{background-color:#005fa3;text-decoration:none}"
      : ""
  }

/*# sourceURL=amp-custom.css */</style><link rel="canonical" href="https://${domainName}/"><title>${title}</title></head>

<body class="">
			<amp-sidebar id="sidebar" layout="nodisplay" side="left" class="i-amphtml-layout-nodisplay" hidden="hidden" i-amphtml-layout="nodisplay">
				<div class="toggle-navigationv2">
					<div role="button" tabindex="0" on="tap:sidebar.close" class="close-nav">X</div>
					<nav id="primary-amp-menu" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
						<div class="menu-main-menu-container">

						<div class="menu-amp-container"><ul id="menu-amp" class="amp-menu"><li id="menu-item-1332" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-22 current_page_item menu-item-1332 tie-current-menu"><a href="/amp.html" aria-current="page">HomePage</a></li>
</ul></div>
						</div>
					</nav>
				</div>
			</amp-sidebar>
			
<header id="#top" class="amp-wp-header">

				<div class="hamburgermenu">
				<button class="toast" on="tap:sidebar.toggle"><span></span></button>
			</div>
		
	<div class="amp-logo">
		${domainName}
	</div>
</header>


<article class="amp-wp-article">
	<!--<header class="amp-wp-article-header">
		<h1 class="amp-wp-title"></h1>
	</header>-->

	
	<div class="amp-wp-article-content">
		${formatContent(
      language,
      domainName,
      title,
      description,
      htmlContent,
      buttonLink,
      buttonText,
      faq,
      contentImages,
      focusElement,
      promoCode,
      ratingTableHead,
      ratingTableBody,
      customFocusElementCode,
      showDemoTable
    )}
</div><div class="amp-custom-ad amp-above-content-ad amp-ad">
${
  focusElement === "Button"
    ? `<div class="footer-block-btn">
	<amp-action-macro id="navigate-action" execute="AMP.navigateTo(url='${buttonLink}')" class="i-amphtml-layout-container" i-amphtml-layout="container"></amp-action-macro>
	<button on="tap:navigate-action.execute()" class="bw-button st-button">${buttonText}</button>
	<amp-action-macro id="navigate-btn" execute="AMP.navigateTo(url='${buttonLink}')" class="i-amphtml-layout-container" i-amphtml-layout="container"></amp-action-macro>
</div>`
    : `<div class="footer-block-btn"></div>`
}
</div>	</div>
</article>


<footer class="footer">

	<div class="footer-colophon"><span>© ${new Date().getFullYear()} All Rights Reserved  |  ${domainName}</span>
<span>18+</span></div></footer>

</body></html>`;
};

export default getAmp;
