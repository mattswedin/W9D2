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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://TicTacToe/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const View = __webpack_require__(/*! ./ttt-view */ \"./src/ttt-view.js\")\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  \n  let view1 = new View({\n    game: new Game(),\n    el: document.querySelector(\".ttt\")\n  });\n\n  function Game(){\n  }\n\n});\n\nwindow.View = View;\n\n\n//# sourceURL=webpack://TicTacToe/./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Index = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\nlet MOVE_NUM = 0;\n\nclass View {\n  constructor(options) {\n    this.game = options.game;\n    this.el = options.el;\n    this.setupBoard();\n  }\n\n  setupBoard() {\n    let ul = document.createElement(\"ul\");\n    ul.style.display = \"flex\";\n    ul.style.width = \"600px\";\n    ul.style.height = \"600px\";\n    ul.style.flexWrap = \"wrap\";\n    ul.style.margin = \"0 auto\";\n    ul.style.paddingLeft = \"20px\";\n    ul.style.listStyleType = \"none\";\n\n    for (let i = 0; i < 9; i++) {\n      let li = document.createElement(\"li\");\n      li.style.display = \"inline-block\";\n      li.style.width = \"180px\";\n      li.style.height = \"180px\";\n      li.style.marginRight = \"20px\";\n      li.style.backgroundColor = \"red\";\n      li.style.display = \"flex\";\n      li.style.justifyContent = \"center\";\n      li.style.alignItems = \"center\";\n      \n\n      li.setAttribute(\"data-index-number\", i);\n\n      li.addEventListener(\"mouseover\", (e) => {\n        e.target.style.backgroundColor = \"blue\";\n      });\n\n      li.addEventListener(\"mouseout\", (e) => {\n        e.target.style.backgroundColor = \"red\";\n      });\n\n      li.addEventListener(\"click\", (e) => this.handleClick(e));\n\n      ul.appendChild(li);\n    };\n\n    this.el.appendChild(ul);\n  }\n  \n  bindEvents() {}\n\n  handleClick(e) {\n    if(MOVE_NUM % 2 === 0){\n      e.target.innerHTML = \"<img style='width: 150px; height: 150px;' src='https://images.theconversation.com/files/129851/original/image-20160708-24096-1mslcn7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'></img>\";\n    }else{\n      e.target.innerHTML = \"<img style='width: 150px; height: 150px;' src='https://m.media-amazon.com/images/I/81t1BZc5CNL._AC_UL1500_.jpg'></img>\";\n    }\n    MOVE_NUM++;\n  }\n\n  makeMove(square) {}\n\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack://TicTacToe/./src/ttt-view.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;