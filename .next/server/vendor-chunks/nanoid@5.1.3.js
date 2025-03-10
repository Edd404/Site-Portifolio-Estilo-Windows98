"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nanoid@5.1.3";
exports.ids = ["vendor-chunks/nanoid@5.1.3"];
exports.modules = {

/***/ "(action-browser)/./node_modules/.pnpm/nanoid@5.1.3/node_modules/nanoid/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/nanoid@5.1.3/node_modules/nanoid/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),\n/* harmony export */   customRandom: () => (/* binding */ customRandom),\n/* harmony export */   nanoid: () => (/* binding */ nanoid),\n/* harmony export */   random: () => (/* binding */ random),\n/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__.urlAlphabet)\n/* harmony export */ });\n/* harmony import */ var node_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"(action-browser)/./node_modules/.pnpm/nanoid@5.1.3/node_modules/nanoid/url-alphabet/index.js\");\n\n\n\nconst POOL_SIZE_MULTIPLIER = 128\nlet pool, poolOffset\nfunction fillPool(bytes) {\n  if (!pool || pool.length < bytes) {\n    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)\n    node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto.getRandomValues(pool)\n    poolOffset = 0\n  } else if (poolOffset + bytes > pool.length) {\n    node_crypto__WEBPACK_IMPORTED_MODULE_0__.webcrypto.getRandomValues(pool)\n    poolOffset = 0\n  }\n  poolOffset += bytes\n}\nfunction random(bytes) {\n  fillPool((bytes |= 0))\n  return pool.subarray(poolOffset - bytes, poolOffset)\n}\nfunction customRandom(alphabet, defaultSize, getRandom) {\n  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1\n  let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)\n  return (size = defaultSize) => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      let i = step\n      while (i--) {\n        id += alphabet[bytes[i] & mask] || ''\n        if (id.length >= size) return id\n      }\n    }\n  }\n}\nfunction customAlphabet(alphabet, size = 21) {\n  return customRandom(alphabet, size, random)\n}\nfunction nanoid(size = 21) {\n  fillPool((size |= 0))\n  let id = ''\n  for (let i = poolOffset - size; i < poolOffset; i++) {\n    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__.urlAlphabet[pool[i] & 63]\n  }\n  return id\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9uYW5vaWRANS4xLjMvbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ3lCO0FBQ3JCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFNO0FBQ1Y7QUFDQSxJQUFJO0FBQ0osSUFBSSxrREFBTTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELFVBQVUsK0RBQWlCO0FBQzNCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy8ucG5wbS9uYW5vaWRANS4xLjMvbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5qcz9kZDQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdlYmNyeXB0byBhcyBjcnlwdG8gfSBmcm9tICdub2RlOmNyeXB0bydcbmltcG9ydCB7IHVybEFscGhhYmV0IGFzIHNjb3BlZFVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5leHBvcnQgeyB1cmxBbHBoYWJldCB9IGZyb20gJy4vdXJsLWFscGhhYmV0L2luZGV4LmpzJ1xuY29uc3QgUE9PTF9TSVpFX01VTFRJUExJRVIgPSAxMjhcbmxldCBwb29sLCBwb29sT2Zmc2V0XG5mdW5jdGlvbiBmaWxsUG9vbChieXRlcykge1xuICBpZiAoIXBvb2wgfHwgcG9vbC5sZW5ndGggPCBieXRlcykge1xuICAgIHBvb2wgPSBCdWZmZXIuYWxsb2NVbnNhZmUoYnl0ZXMgKiBQT09MX1NJWkVfTVVMVElQTElFUilcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHBvb2wpXG4gICAgcG9vbE9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChwb29sT2Zmc2V0ICsgYnl0ZXMgPiBwb29sLmxlbmd0aCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocG9vbClcbiAgICBwb29sT2Zmc2V0ID0gMFxuICB9XG4gIHBvb2xPZmZzZXQgKz0gYnl0ZXNcbn1cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20oYnl0ZXMpIHtcbiAgZmlsbFBvb2woKGJ5dGVzIHw9IDApKVxuICByZXR1cm4gcG9vbC5zdWJhcnJheShwb29sT2Zmc2V0IC0gYnl0ZXMsIHBvb2xPZmZzZXQpXG59XG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBkZWZhdWx0U2l6ZSwgZ2V0UmFuZG9tKSB7XG4gIGxldCBtYXNrID0gKDIgPDwgKDMxIC0gTWF0aC5jbHozMigoYWxwaGFiZXQubGVuZ3RoIC0gMSkgfCAxKSkpIC0gMVxuICBsZXQgc3RlcCA9IE1hdGguY2VpbCgoMS42ICogbWFzayAqIGRlZmF1bHRTaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcbiAgcmV0dXJuIChzaXplID0gZGVmYXVsdFNpemUpID0+IHtcbiAgICBsZXQgaWQgPSAnJ1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBsZXQgYnl0ZXMgPSBnZXRSYW5kb20oc3RlcClcbiAgICAgIGxldCBpID0gc3RlcFxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tpXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIGlmIChpZC5sZW5ndGggPj0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3VzdG9tQWxwaGFiZXQoYWxwaGFiZXQsIHNpemUgPSAyMSkge1xuICByZXR1cm4gY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG59XG5leHBvcnQgZnVuY3Rpb24gbmFub2lkKHNpemUgPSAyMSkge1xuICBmaWxsUG9vbCgoc2l6ZSB8PSAwKSlcbiAgbGV0IGlkID0gJydcbiAgZm9yIChsZXQgaSA9IHBvb2xPZmZzZXQgLSBzaXplOyBpIDwgcG9vbE9mZnNldDsgaSsrKSB7XG4gICAgaWQgKz0gc2NvcGVkVXJsQWxwaGFiZXRbcG9vbFtpXSAmIDYzXVxuICB9XG4gIHJldHVybiBpZFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/.pnpm/nanoid@5.1.3/node_modules/nanoid/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/.pnpm/nanoid@5.1.3/node_modules/nanoid/url-alphabet/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/nanoid@5.1.3/node_modules/nanoid/url-alphabet/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)\n/* harmony export */ });\nconst urlAlphabet =\n  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9uYW5vaWRANS4xLjMvbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvLnBucG0vbmFub2lkQDUuMS4zL25vZGVfbW9kdWxlcy9uYW5vaWQvdXJsLWFscGhhYmV0L2luZGV4LmpzPzAyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHVybEFscGhhYmV0ID1cbiAgJ3VzZWFuZG9tLTI2VDE5ODM0MFBYNzVweEpBQ0tWRVJZTUlOREJVU0hXT0xGX0dRWmJmZ2hqa2xxdnd5enJpY3QnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/.pnpm/nanoid@5.1.3/node_modules/nanoid/url-alphabet/index.js\n");

/***/ })

};
;