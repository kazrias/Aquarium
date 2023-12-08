/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _sections_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/Header/Header.js */ \"./src/sections/Header/Header.js\");\n/* harmony import */ var _sections_Product_Product_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/Product/Product.js */ \"./src/sections/Product/Product.js\");\n/* harmony import */ var _sections_AboutUs_AboutUs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/AboutUs/AboutUs.js */ \"./src/sections/AboutUs/AboutUs.js\");\n/* harmony import */ var _sections_Contact_Contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/Contact/Contact.js */ \"./src/sections/Contact/Contact.js\");\n\n\n\n\n\n\n(0,_sections_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__.Header)();\n(0,_sections_Product_Product_js__WEBPACK_IMPORTED_MODULE_3__.ProductList)();\n(0,_sections_AboutUs_AboutUs_js__WEBPACK_IMPORTED_MODULE_4__.About)();\n(0,_sections_Contact_Contact_js__WEBPACK_IMPORTED_MODULE_5__.Contact)();\n\n//# sourceURL=webpack://aquarium/./src/index.js?");

/***/ }),

/***/ "./src/sections/AboutUs/AboutUs.js":
/*!*****************************************!*\
  !*** ./src/sections/AboutUs/AboutUs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   About: () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.css */ \"./src/sections/AboutUs/About.css\");\n\nconst About = () => {\n  const section = document.querySelector('.about>.container');\n  const title = document.createElement('h2');\n  title.classList.add('about-title');\n  const span = document.createElement('span');\n  span.innerText = 'About Us';\n  title.append(span);\n  const info = document.createElement('div');\n  info.classList.add('about-info');\n  const pFirst = document.createElement('p');\n  const pSecond = document.createElement('p');\n  const pThird = document.createElement('p');\n  pFirst.classList.add('about-info__text');\n  pSecond.classList.add('about-info__text');\n  pThird.classList.add('about-info__text');\n  pFirst.innerText = `At our Aquarium & Fish Shop, we are passionate about creating a thriving aquatic world for enthusiasts and beginners alike. With years of experience and a love for aquatic life, we are committed to providing the best products and guidance for your underwater adventure.`;\n  pSecond.innerText = `Our dedicated team of experts is here to assist you in choosing the right aquarium, selecting compatible fish, and offering valuable tips on maintenance. Whether you're a seasoned hobbyist or just starting, our shop is the perfect place to explore and enhance your aquatic hobby.`;\n  pThird.innerText = `We source our fish and aquarium supplies from reputable suppliers to ensure the well-being of your aquatic pets. Our goal is to create a community where fellow enthusiasts can share their experiences, exchange knowledge, and find inspiration for their underwater worlds.`;\n  info.append(pFirst, pSecond, pThird);\n  section.append(title, info);\n};\n\n//# sourceURL=webpack://aquarium/./src/sections/AboutUs/AboutUs.js?");

/***/ }),

/***/ "./src/sections/Contact/Contact.js":
/*!*****************************************!*\
  !*** ./src/sections/Contact/Contact.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Contact: () => (/* binding */ Contact)\n/* harmony export */ });\n/* harmony import */ var _Contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.css */ \"./src/sections/Contact/Contact.css\");\n\nconst Contact = () => {\n  const contactForm = document.querySelector(\".contact>.container\");\n  const subContainer = document.createElement(\"form\");\n  contactForm.classList.add(\"contact-form\");\n  subContainer.classList.add(\"subcontainer\");\n  contactForm.appendChild(subContainer);\n  document.querySelector('.subcontainer').addEventListener('submit', function (event) {\n    event.preventDefault();\n  });\n  //ul.setAttribute(\"class\", \"name\");\n\n  const h1 = document.createElement(\"h1\");\n  h1.classList.add(\"contact-h1\");\n  h1.innerText = \"Contact Us\";\n  subContainer.appendChild(h1);\n  let formGroup = [];\n  let label = [];\n  let input = [];\n  for (let i = 0; i < 5; i++) {\n    formGroup[i] = document.createElement(\"div\");\n    formGroup[i].classList.add(\"form-group\");\n    subContainer.appendChild(formGroup[i]);\n    label[i] = document.createElement(\"label\");\n    label[i].setAttribute(\"for\", \"\");\n    formGroup[i].appendChild(label[i]);\n    if (i < 3) {\n      input[i] = document.createElement(\"input\");\n      input[i].setAttribute(\"type\", \"text\");\n      formGroup[i].appendChild(input[i]);\n    }\n  }\n  input[3] = document.createElement(\"textarea\");\n  input[3].setAttribute(\"id\", \"message\");\n  input[3].setAttribute(\"placeholder\", \"Message\");\n  formGroup[3].appendChild(input[3]);\n  label[0].innerText = \"Your Name\";\n  input[0].setAttribute(\"id\", \"name\");\n  label[1].innerText = \"Your Email\";\n  input[1].setAttribute(\"id\", \"email\");\n  label[2].innerText = \"Subject\";\n  input[2].setAttribute(\"id\", \"subject\");\n  label[3].innerText = \"Message\";\n  input[3].setAttribute(\"id\", \"message\");\n  const contactButton = document.createElement(\"button\");\n  contactButton.innerText = \"Send Message\";\n  contactButton.classList.add(\"contact-button\");\n  //contactButton.setAttribute(\"onclick\", \"sendMessage();\")\n  formGroup[4].appendChild(contactButton);\n};\n\n//# sourceURL=webpack://aquarium/./src/sections/Contact/Contact.js?");

/***/ }),

/***/ "./src/sections/Header/Header.js":
/*!***************************************!*\
  !*** ./src/sections/Header/Header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.css */ \"./src/sections/Header/Header.css\");\n\nconst Header = () => {\n  const header = document.querySelector(\".header\");\n  function createNavBar(_ref) {\n    let {\n      element,\n      content\n    } = _ref;\n    const navBar = {\n      Home: \"#home\",\n      Products: \"#products\",\n      Contacts: \"#contacts\",\n      \"About Us\": \"#aboutUs\"\n    };\n    const nav = document.createElement(element);\n    nav.setAttribute(\"class\", \"list\");\n    const ul = document.createElement(content);\n    ul.setAttribute(\"class\", \"navigation\");\n    nav.appendChild(ul);\n    for (let key in navBar) {\n      const li = document.createElement(\"li\");\n      const a = document.createElement(\"a\");\n      a.href = navBar[key];\n      a.innerText = key;\n      li.appendChild(a);\n      ul.appendChild(li);\n    }\n    return nav;\n  }\n  function creatingLogo() {\n    const div = `\n    <div class=\"logo\">\n              <img src=\"https://i.pinimg.com/736x/44/96/a9/4496a981ee1481c4cf8395ac8811ebef.jpg\">\n              Aquarium park \n          </div>\n    `;\n    return div;\n  }\n  header.insertAdjacentHTML(\"afterbegin\", creatingLogo());\n  header.appendChild(createNavBar({\n    element: \"nav\",\n    content: \"ul\"\n  }));\n};\n\n//# sourceURL=webpack://aquarium/./src/sections/Header/Header.js?");

/***/ }),

/***/ "./src/sections/Product/Product.js":
/*!*****************************************!*\
  !*** ./src/sections/Product/Product.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductList: () => (/* binding */ ProductList)\n/* harmony export */ });\n/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.css */ \"./src/sections/Product/Product.css\");\n\nconst imgContext = __webpack_require__(\"./src/img sync \\\\.(jpe?g%7Cpng%7Cwebp%7Cgif%7Csvg)$/\");\nconst imgs = ['freshwaterSnails', 'freshwaterShrimp', 'freshwaterFish', 'freshwaterCrayFish', 'freshwaterPlants', 'nanoFish', 'freshwaterCrabs', 'AquariumParkFood'];\nconst titles = ['Freshwater Snails', 'Freshwater Shrimp', 'Freshwater fish', 'freshwater crayfish', 'freshwater plants', 'nano fish', 'freshwater crabs', 'aquarium park`s brand foods and supplies'];\nconst ProductList = async () => {\n  const section = document.querySelector('.product>.container');\n  const productList = document.createElement('div');\n  productList.classList.add('product-list');\n  const categories = document.createElement('h2');\n  categories.classList.add('product-categories');\n  categories.innerText = 'Popular Products';\n  section.append(categories);\n  for (let i = 0; i < titles.length; i++) {\n    const productItem = document.createElement('div');\n    productItem.classList.add('product-list__item');\n    const img = document.createElement('img');\n    img.classList.add('product-list__img');\n    img.src = imgContext(`./${imgs[i]}.webp`);\n    const title = document.createElement('h3');\n    title.classList.add('product-list__title');\n    title.innerText = `${titles[i]}`;\n    productItem.append(img, title);\n    productList.append(productItem);\n  }\n  section.append(productList);\n};\n\n//# sourceURL=webpack://aquarium/./src/sections/Product/Product.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <title>Document</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <header class=\\\"header\\\"></header>\\r\\n  <main  id=\\\"home\\\" class=\\\"main\\\">\\r\\n    <section class=\\\"aquarium\\\"></section>\\r\\n    <section id=\\\"products\\\" class=\\\"product\\\">\\r\\n      <div class=\\\"container\\\">\\r\\n\\r\\n      </div>\\r\\n    </section>\\r\\n    <section id='aboutUs' class=\\\"about\\\">\\r\\n      <div class=\\\"container\\\">\\r\\n\\r\\n      </div>\\r\\n    </section>\\r\\n    <section id=\\\"contacts\\\" class=\\\"contact\\\">\\r\\n      <div class=\\\"container\\\"></div>\\r\\n    </section>\\r\\n  </main>\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://aquarium/./src/index.html?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://aquarium/./src/index.css?");

/***/ }),

/***/ "./src/sections/AboutUs/About.css":
/*!****************************************!*\
  !*** ./src/sections/AboutUs/About.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://aquarium/./src/sections/AboutUs/About.css?");

/***/ }),

/***/ "./src/sections/Contact/Contact.css":
/*!******************************************!*\
  !*** ./src/sections/Contact/Contact.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://aquarium/./src/sections/Contact/Contact.css?");

/***/ }),

/***/ "./src/sections/Header/Header.css":
/*!****************************************!*\
  !*** ./src/sections/Header/Header.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://aquarium/./src/sections/Header/Header.css?");

/***/ }),

/***/ "./src/sections/Product/Product.css":
/*!******************************************!*\
  !*** ./src/sections/Product/Product.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://aquarium/./src/sections/Product/Product.css?");

/***/ }),

/***/ "./src/img sync \\.(jpe?g%7Cpng%7Cwebp%7Cgif%7Csvg)$/":
/*!*************************************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(jpe?g%7Cpng%7Cwebp%7Cgif%7Csvg)$/ ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./AquariumParkFood.webp\": \"./src/img/AquariumParkFood.webp\",\n\t\"./fish2.png\": \"./src/img/fish2.png\",\n\t\"./freshwaterCrabs.webp\": \"./src/img/freshwaterCrabs.webp\",\n\t\"./freshwaterCrayFish.webp\": \"./src/img/freshwaterCrayFish.webp\",\n\t\"./freshwaterFish.webp\": \"./src/img/freshwaterFish.webp\",\n\t\"./freshwaterPlants.webp\": \"./src/img/freshwaterPlants.webp\",\n\t\"./freshwaterShrimp.webp\": \"./src/img/freshwaterShrimp.webp\",\n\t\"./freshwaterSnails.webp\": \"./src/img/freshwaterSnails.webp\",\n\t\"./goldfish1.png\": \"./src/img/goldfish1.png\",\n\t\"./nanoFish.webp\": \"./src/img/nanoFish.webp\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync \\\\.(jpe?g%7Cpng%7Cwebp%7Cgif%7Csvg)$/\";\n\n//# sourceURL=webpack://aquarium/./src/img/_sync_nonrecursive_\\.(jpe?");

/***/ }),

/***/ "./src/img/AquariumParkFood.webp":
/*!***************************************!*\
  !*** ./src/img/AquariumParkFood.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/AquariumParkFood.webp\";\n\n//# sourceURL=webpack://aquarium/./src/img/AquariumParkFood.webp?");

/***/ }),

/***/ "./src/img/fish2.png":
/*!***************************!*\
  !*** ./src/img/fish2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/fish2.png\";\n\n//# sourceURL=webpack://aquarium/./src/img/fish2.png?");

/***/ }),

/***/ "./src/img/freshwaterCrabs.webp":
/*!**************************************!*\
  !*** ./src/img/freshwaterCrabs.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/freshwaterCrabs.webp\";\n\n//# sourceURL=webpack://aquarium/./src/img/freshwaterCrabs.webp?");

/***/ }),

/***/ "./src/img/freshwaterCrayFish.webp":
/*!*****************************************!*\
  !*** ./src/img/freshwaterCrayFish.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/freshwaterCrayFish.webp\";\n\n//# sourceURL=webpack://aquarium/./src/img/freshwaterCrayFish.webp?");

/***/ }),

/***/ "./src/img/freshwaterFish.webp":
/*!*************************************!*\
  !*** ./src/img/freshwaterFish.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/freshwaterFish.webp\";\n\n//# sourceURL=webpack://aquarium/./src/img/freshwaterFish.webp?");

/***/ }),

/***/ "./src/img/freshwaterPlants.webp":
/*!***************************************!*\
  !*** ./src/img/freshwaterPlants.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/freshwaterPlants.webp\";\n\n//# sourceURL=webpack://aquarium/./src/img/freshwaterPlants.webp?");

/***/ }),

/***/ "./src/img/freshwaterShrimp.webp":
/*!***************************************!*\
  !*** ./src/img/freshwaterShrimp.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/freshwaterShrimp.webp\";\n\n//# sourceURL=webpack://aquarium/./src/img/freshwaterShrimp.webp?");

/***/ }),

/***/ "./src/img/freshwaterSnails.webp":
/*!***************************************!*\
  !*** ./src/img/freshwaterSnails.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/freshwaterSnails.webp\";\n\n//# sourceURL=webpack://aquarium/./src/img/freshwaterSnails.webp?");

/***/ }),

/***/ "./src/img/goldfish1.png":
/*!*******************************!*\
  !*** ./src/img/goldfish1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/goldfish1.png\";\n\n//# sourceURL=webpack://aquarium/./src/img/goldfish1.png?");

/***/ }),

/***/ "./src/img/nanoFish.webp":
/*!*******************************!*\
  !*** ./src/img/nanoFish.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/nanoFish.webp\";\n\n//# sourceURL=webpack://aquarium/./src/img/nanoFish.webp?");

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;