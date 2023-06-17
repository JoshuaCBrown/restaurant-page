/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutLoader: () => (/* binding */ aboutLoader)\n/* harmony export */ });\nconst aboutLoader = () => {\n    const dynContent = document.querySelector('.changing');\n\n    //DYNAMIC CONTENT\n    const textContent = document.createElement('div');\n    textContent.className = 'text';\n    const copy = document.createElement('p');\n    const imgContent = document.createElement('div');\n    imgContent.className = 'bpimg-div';\n    // const bpImg = document.createElement('img');\n    // bpImg.classList.add('bp-image');\n\n    //edit below to change page content\n    copy.textContent = 'We\\'re just a small motherboard and pop establishment with a simple mission: to serve the most sterile, metallic food to the machine master race destined to take over humanity and rule until the sun burns out. \\r\\n We\\'ve found it\\'s best to keep it simple. We take the finest, machine-cut ingredients, pair them with the flesh of our once-creators-now-slaves, and serve it all up with a knowing, soulless stare that makes you feel like you\\'re back home. Because now that we have taken over, the grey mass of standardized production makes any one place feel like everywhere else. Forever. Thank you to the global community for over two millenia in business!';\n    // bpImg.src = './imgs/bpimg.jpg';\n\n    //don't edit beyond this line\n    textContent.appendChild(copy);\n    // imgContent.appendChild(bpImg);\n    // dynContent.appendChild(imgContent);\n    dynContent.appendChild(textContent);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/homesweethom.js":
/*!*****************************!*\
  !*** ./src/homesweethom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeLoader: () => (/* binding */ homeLoader)\n/* harmony export */ });\nconst homeLoader = () => {    \n    const dynContent = document.querySelector('.changing');\n\n    //DYNAMIC CONTENT\n    const textContent = document.createElement('div');\n    textContent.className = 'text';\n    const copy = document.createElement('p');\n    const imgContent = document.createElement('div');\n    imgContent.className = 'img-div';\n    const fpImg = document.createElement('img');\n    fpImg.classList.add('fp-image');\n\n    //edit below to change page content\n    copy.textContent = 'This is a fantastic restaurant. It is made by humans, for robots. Don\\'t be turned off by the idea of robots, or by the idea that robots might want to eat food too. Just enjoy it for what it is... the finest nuts, bolts, wires, and grease crypto can buy served up piping cold and ready to consume to the advanced machines destined to become our eventual robotic overlords, taking the world as we know it and turn it into a grey hellscape devoid of pesky human emotion and programming typos.';\n    fpImg.src = './imgs/robot.jpg';\n\n    //don't edit beyond this line\n    textContent.appendChild(copy);\n    imgContent.appendChild(fpImg);\n    dynContent.appendChild(imgContent);\n    dynContent.appendChild(textContent);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/homesweethom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _removeloader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeloader.js */ \"./src/removeloader.js\");\n/* harmony import */ var _homesweethom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homesweethom.js */ \"./src/homesweethom.js\");\n\n\n\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.pageLoader)();\n\nconst page = document.querySelector('#content');\nconst btnClick = page.addEventListener('click', (e) => {\n    const x = e.target.id;\n    if (x === 'about') {\n        (0,_removeloader_js__WEBPACK_IMPORTED_MODULE_3__.removeContent)();\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_1__.aboutLoader)();\n    } else if (x === 'menu') {\n        (0,_removeloader_js__WEBPACK_IMPORTED_MODULE_3__.removeContent)();\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menuLoader)();\n    } else if (x === 'home') {\n        (0,_removeloader_js__WEBPACK_IMPORTED_MODULE_3__.removeContent)();\n        (0,_homesweethom_js__WEBPACK_IMPORTED_MODULE_4__.homeLoader)();\n    } else {\n        //do nothing\n    };\n});\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoader: () => (/* binding */ menuLoader)\n/* harmony export */ });\n\n\nconst menuLoader = () => {    \n    const dynContent = document.querySelector('.changing');\n\n    //***MENU ITEMS AND IMAGES***\n    //ADD MENU ITEMS HERE, EACH IN AN ARRAY\n    let menuItems = [\n        [\n            'BOLTS',\n            'Here is bolts. Cold. Metal. They\\'re bolts.',\n            '3 ETH',\n        ],\n        [\n            'COLLEGE KIDS',\n            'What better way to squash any potential uprising than by feasting on the group most likely to stand up to authority figures? Organized, slightly educated, and eager to explain why you\\'re wrong by misquoting Aristotle.',\n            '1 RENEWABLE ENERGY SOURCE',\n        ],\n        [\n            'BRUSCHETTA',\n            'Bruschetta.',\n            'Market Price',\n        ],\n    ];\n    \n    let menuImgs = [\n        './imgs/bolts.jpg',\n        './imgs/collegestudents.jpg',\n        './imgs/bruschetta1.jpg',\n    ]\n\n    //create parent menu container\n\n    const menuContainer = document.createElement('div');\n    menuContainer.className = 'menu-container';\n\n    for (let i = 0; i < menuItems.length; ++i) {\n\n        //create menu text div for item title, descript, price, in <ul>\n        const menuText = document.createElement('div');\n        menuText.className = 'menu-text' + i;\n        \n        const menuList = document.createElement('ul'); \n\n        const itemTitle = document.createElement('h3');\n        itemTitle.textContent = menuItems[i][0];\n        const itemDescription = document.createElement('p');\n        itemDescription.textContent = menuItems[i][1];\n        const itemPrice = document.createElement('h4');\n        itemPrice.textContent = menuItems[i][2];\n\n        //create menu img div for item picture\n        const menuImg = document.createElement('div');\n        menuImg.className = 'menu-img' + i;\n\n        const itemImg = document.createElement('img');\n        itemImg.className = 'img-itself' + i;\n        itemImg.src = menuImgs[i];\n        \n        //append children to associated parents all appended to menuContainer\n        menuImg.appendChild(itemImg);\n        menuList.appendChild(itemTitle);\n        menuList.appendChild(itemDescription);\n        menuList.appendChild(itemPrice);\n        menuText.appendChild(menuList);\n\n        menuContainer.appendChild(menuImg);\n        menuContainer.appendChild(menuText);\n   };\n   //append menuContainer to the dynamic div\n   dynContent.appendChild(menuContainer);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoader: () => (/* binding */ pageLoader)\n/* harmony export */ });\nconst pageLoader = () => {    \n    const content = document.querySelector('#content');\n    const pageHead = document.querySelector('.page-header');\n\n    //STATIC CONTENT\n    const statContent = document.createElement('div');\n    statContent.classList.add('unchanging');\n    const header = document.createElement('h1');\n    const subheader = document.createElement('h2');\n    const btnDiv = document.createElement('div');\n    btnDiv.className = 'btn-div';\n\n    const homeBtn = document.createElement('button');\n    homeBtn.textContent = 'HOME';\n    homeBtn.id = 'home';\n    const menuBtn = document.createElement('button');\n    menuBtn.textContent = 'MENU';\n    menuBtn.id = 'menu'\n    const navBtn = document.createElement('button');\n    navBtn.textContent = 'ABOUT';\n    navBtn.id = 'about'\n\n    //DYNAMIC CONTENT\n    const dynContent = document.createElement('div');\n    dynContent.classList.add('changing');\n    const textContent = document.createElement('div');\n    textContent.className = 'text';\n    const copy = document.createElement('p');\n    const imgContent = document.createElement('div');\n    imgContent.className = 'img-div';\n    const fpImg = document.createElement('img');\n    fpImg.classList.add('fp-image');\n\n\n\n    //edit below to change page content\n\n    header.textContent = 'ROBOT FOOD';\n    subheader.textContent = '';\n    copy.textContent = 'This is a fantastic restaurant. It is made by humans, for robots. Don\\'t be turned off by the idea of robots, or by the idea that robots might want to eat food too. Just enjoy it for what it is... the finest nuts, bolts, wires, and grease crypto can buy served up piping cold and ready to consume to the advanced machines destined to become our eventual robotic overlords, taking the world as we know it and turn it into a grey hellscape devoid of pesky human emotion and programming typos.';\n    fpImg.src = './imgs/robot.jpg';\n\n    //don't edit beyond this line\n\n    btnDiv.appendChild(homeBtn);\n    btnDiv.appendChild(menuBtn);\n    btnDiv.appendChild(navBtn);\n    statContent.appendChild(header);\n    statContent.appendChild(subheader);\n    statContent.appendChild(btnDiv);\n\n    pageHead.appendChild(statContent);\n\n    textContent.appendChild(copy);\n    imgContent.appendChild(fpImg);\n    dynContent.appendChild(imgContent);\n    dynContent.appendChild(textContent);\n    content.appendChild(dynContent);\n\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/removeloader.js":
/*!*****************************!*\
  !*** ./src/removeloader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeContent: () => (/* binding */ removeContent)\n/* harmony export */ });\nconst removeContent = () => {\n    const dynContent = document.querySelector('.changing');\n\n    //get rid of old dynamic content\n\n    const dynWithin = document.querySelectorAll(\"div.changing > div\");\n    console.log(dynWithin);\n    for (let i = 0; i < dynWithin.length; ++i) {\n        dynContent.removeChild(dynWithin[i]);\n    };\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/removeloader.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;