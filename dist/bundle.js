/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_greeting__ = __webpack_require__(/*! ./modules/greeting */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_math_functions__ = __webpack_require__(/*! ./modules/math-functions */ 2);\n\n\n//import {PIXI} from './modules/pixi.min';\n\nconst resultGreeting = document.getElementById('resultGreeting');\nconst resultSum = document.getElementById('resultSum');\nconst resultProduct = document.getElementById('resultProduct');\n\nconst a = 3;\nconst b = 7;\nconsole.log(document.getElementById('resultGreeting'));\nresultGreeting.textContent = Object(__WEBPACK_IMPORTED_MODULE_0__modules_greeting__[\"a\" /* sayHello */])('Nice to see you! 🙂');\nresultSum.textContent = `The sum of ${a} and ${b} is ${Object(__WEBPACK_IMPORTED_MODULE_1__modules_math_functions__[\"b\" /* sum */])(a, b)}. ✨`;\nresultProduct.textContent = `The product of ${a} and ${b} is ${Object(__WEBPACK_IMPORTED_MODULE_1__modules_math_functions__[\"a\" /* product */])(a, b)}. 🚀`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzYXlIZWxsb30gZnJvbSAnLi9tb2R1bGVzL2dyZWV0aW5nJztcbmltcG9ydCB7c3VtLCBwcm9kdWN0fSBmcm9tICcuL21vZHVsZXMvbWF0aC1mdW5jdGlvbnMnO1xuLy9pbXBvcnQge1BJWEl9IGZyb20gJy4vbW9kdWxlcy9waXhpLm1pbic7XG5cbmNvbnN0IHJlc3VsdEdyZWV0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdEdyZWV0aW5nJyk7XG5jb25zdCByZXN1bHRTdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0U3VtJyk7XG5jb25zdCByZXN1bHRQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdFByb2R1Y3QnKTtcblxuY29uc3QgYSA9IDM7XG5jb25zdCBiID0gNztcbmNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRHcmVldGluZycpKTtcbnJlc3VsdEdyZWV0aW5nLnRleHRDb250ZW50ID0gc2F5SGVsbG8oJ05pY2UgdG8gc2VlIHlvdSEg8J+ZgicpO1xucmVzdWx0U3VtLnRleHRDb250ZW50ID0gYFRoZSBzdW0gb2YgJHthfSBhbmQgJHtifSBpcyAke3N1bShhLCBiKX0uIOKcqGA7XG5yZXN1bHRQcm9kdWN0LnRleHRDb250ZW50ID0gYFRoZSBwcm9kdWN0IG9mICR7YX0gYW5kICR7Yn0gaXMgJHtwcm9kdWN0KGEsIGIpfS4g8J+agGA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************!*\
  !*** ./src/modules/greeting.js ***!
  \*********************************/
/*! exports provided: sayHello */
/*! exports used: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return sayHello; });\nconst sayHello = greeting => {\n    const currentHour = new Date().getHours();\n    let timeGreeting = 'Good morning!';\n\n    if (currentHour >= 12 && currentHour <= 17) {\n        timeGreeting = 'Good afternoon!';\n    } else if (currentHour >= 17) {\n        timeGreeting = 'Good evening!';\n    }\n\n    return `${timeGreeting} ${greeting}`;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbW9kdWxlcy9ncmVldGluZy5qcz9lYWQyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNheUhlbGxvID0gKGdyZWV0aW5nKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG4gICAgbGV0IHRpbWVHcmVldGluZyA9ICdHb29kIG1vcm5pbmchJztcblxuICAgIGlmIChjdXJyZW50SG91ciA+PSAxMiAmJiBjdXJyZW50SG91ciA8PSAxNykge1xuICAgICAgICB0aW1lR3JlZXRpbmcgPSAnR29vZCBhZnRlcm5vb24hJztcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRIb3VyID49IDE3KSB7XG4gICAgICAgIHRpbWVHcmVldGluZyA9ICdHb29kIGV2ZW5pbmchJztcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7dGltZUdyZWV0aW5nfSAke2dyZWV0aW5nfWA7XG59XG5cbmV4cG9ydCB7c2F5SGVsbG99O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9tb2R1bGVzL2dyZWV0aW5nLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./src/modules/math-functions.js ***!
  \***************************************/
/*! exports provided: sum, product */
/*! exports used: product, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return product; });\nconst sum = (a, b) => {\n    return a + b;\n};\n\nconst product = (a, b) => {\n    return a * b;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvbW9kdWxlcy9tYXRoLWZ1bmN0aW9ucy5qcz8xOWExIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN1bSA9IChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEgKyBiO1xufTtcblxuY29uc3QgcHJvZHVjdCA9IChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEgKiBiO1xufTtcblxuZXhwb3J0IHtzdW0sIHByb2R1Y3R9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9tb2R1bGVzL21hdGgtZnVuY3Rpb25zLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);