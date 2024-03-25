/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   browserCheck: () => (/* binding */ browserCheck),
/* harmony export */   checkThemeMode: () => (/* binding */ checkThemeMode),
/* harmony export */   isWebp: () => (/* binding */ isWebp),
/* harmony export */   onChangeThemeMode: () => (/* binding */ onChangeThemeMode),
/* harmony export */   onFilter: () => (/* binding */ onFilter),
/* harmony export */   supportsCssVars: () => (/* binding */ supportsCssVars)
/* harmony export */ });

const isWebp = () => {
    function testWebP(callback) {
        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        
        document.querySelector('body').classList.add(className);
    });
};


const browserCheck = () => {
    if ( !supportsCssVars() ) {
        document.getElementsByTagName('body').classList.add("lock");
        document.getElementsByClassName('supports_error').classList.add("show");
    }
};


const supportsCssVars = () => {
    var s = document.createElement('style'),
        support;

    s.innerHTML = ":root { --tmp-var: bold; }";
    document.head.appendChild(s);
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'));
    s.parentNode.removeChild(s);

    return support;
};


/**
 *  Theme mode
 */
const checkThemeMode = (switcherBox) => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const box = document.querySelectorAll(`${switcherBox} button`);

    setThemeMode(box, isDarkMode)
};

const onChangeThemeMode = (switcherBox) => {
    const box = document.querySelectorAll(`${switcherBox} button`);

    box.forEach((button) => {
        const mode = button.getAttribute('data-theme')
        button.addEventListener('click', () => {
            setThemeMode(box, mode === 'dark')
        })
    })
};

const setThemeMode = (box, condition) => {
    if (condition) {
        document.querySelector('html').classList.add('dark-mode')
        box.forEach((el) => {
            buttonsState(el, el.getAttribute('data-theme') === 'dark')
        })
    } else{
        document.querySelector('html').classList.remove('dark-mode')
        box.forEach((el) => {
            buttonsState(el, el.getAttribute('data-theme') !== 'dark')
        })
    }
}

const buttonsState = (el, condition) => {
    if (condition) {
        el.classList.add('active')
        el.setAttribute('disabled', true)
    } else{
        el.classList.remove('active')
        el.removeAttribute('disabled')
    }
}

/**
 * Filter
 */
const onFilter = (filterBox) => {
    const filterBtns = document.querySelectorAll(`${filterBox} button`);

    filterBtns.forEach((btn) => {
        const category = btn.getAttribute('data-category').toLowerCase()
        btn.addEventListener('click', () => {
            filterBtnState(filterBtns);
            filterCategories(category);
            btn.classList.add('active')
            btn.setAttribute('disabled', true);
        })
    })
};

const filterBtnState = (buttons) => {
    buttons.forEach((btn) => {
        btn.classList.remove('active');
        btn.removeAttribute('disabled');
    })
}

const filterCategories = (category) => {
    const blogItems = document.querySelectorAll('.blog-item');

    blogItems.forEach((item) => {
        const tags = item.querySelectorAll('.blog-item__tag');

        tags.forEach((tag) => {
            const elementCategory = tag.getAttribute('data-category').toLowerCase();
            if (category === 'all' || elementCategory === category) {
                item.style.display = 'block';
                return;
            } else {
                item.style.display = 'none';
            }
        })
    })
}




/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.browserCheck();

_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkThemeMode('.theme-switcher');

_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.onChangeThemeMode('.theme-switcher');

_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.onFilter('.filter')
})();

/******/ })()
;