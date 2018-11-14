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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 41:
/***/ (function(module, exports) {

eval("\n// Uncomment these first two lines to run React without JSX - no tooling needed\n\nvar pEl = wp.element.createElement(\"p\", {}, \"Hello WP from React.\");\nwp.element.render(pEl, document.querySelector('.entry-content'));\n\n// With tooling set up, uncomment the following two lines to run React with simple JSX\n\n// const Hello = () => <p>Hello WP! React here, with JSX.</p>;\n// wp.element.render(<Hello />, document.querySelector( '.entry-content' ) );\n\n\n//With tooling set up, uncomment the following two lines to check WP with interactive react\n\n// import Button from './Button';\n// wp.element.render(<Button />, document.querySelector( '.entry-content' ) );//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/ODc0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIFVuY29tbWVudCB0aGVzZSBmaXJzdCB0d28gbGluZXMgdG8gcnVuIFJlYWN0IHdpdGhvdXQgSlNYIC0gbm8gdG9vbGluZyBuZWVkZWRcblxudmFyIHBFbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiwge30sIFwiSGVsbG8gV1AgZnJvbSBSZWFjdC5cIik7XG53cC5lbGVtZW50LnJlbmRlcihwRWwsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRyeS1jb250ZW50JykpO1xuXG4vLyBXaXRoIHRvb2xpbmcgc2V0IHVwLCB1bmNvbW1lbnQgdGhlIGZvbGxvd2luZyB0d28gbGluZXMgdG8gcnVuIFJlYWN0IHdpdGggc2ltcGxlIEpTWFxuXG4vLyBjb25zdCBIZWxsbyA9ICgpID0+IDxwPkhlbGxvIFdQISBSZWFjdCBoZXJlLCB3aXRoIEpTWC48L3A+O1xuLy8gd3AuZWxlbWVudC5yZW5kZXIoPEhlbGxvIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmVudHJ5LWNvbnRlbnQnICkgKTtcblxuXG4vL1dpdGggdG9vbGluZyBzZXQgdXAsIHVuY29tbWVudCB0aGUgZm9sbG93aW5nIHR3byBsaW5lcyB0byBjaGVjayBXUCB3aXRoIGludGVyYWN0aXZlIHJlYWN0XG5cbi8vIGltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuLy8gd3AuZWxlbWVudC5yZW5kZXIoPEJ1dHRvbiAvPiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5lbnRyeS1jb250ZW50JyApICk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///41\n");

/***/ })

/******/ });