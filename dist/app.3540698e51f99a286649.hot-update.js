"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateecummerc"]("app",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _laylazi_bootstrap_rtl_dist_css_bootstrap_rtl_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css */ \"./node_modules/@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min.js */ \"./node_modules/bootstrap/dist/js/bootstrap.min.js\");\n/* harmony import */ var bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery/dist/jquery.min */ \"./node_modules/jquery/dist/jquery.min.js\");\n/* harmony import */ var jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ \"./node_modules/@fortawesome/fontawesome-free/js/all.min.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready(function() {\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n\r\n    $('.add-to-cart-btn').click(function() {  // اظهار رسالة التنبيه للمنتج بأنه اضيف للعربة \r\n        alert('أضيف المنتج الى العربة ');\r\n    });\r\n\r\n    $('#copyright').text(\"جميع الحقوق محفوظة سنة\" + new Date().getFullYear());\r\n\r\n    $('.product-option input[type=\"radio\"]').change(function() {\r\n        $(this).parents('.product-option').siblings().removeClass('active');\r\n        $(this).parents('.product-option').addClass('active');\r\n    });\r\n\r\n    //عند تغيير كمية المنتج \r\n    $('[data-product-quantity]').change(function () {\r\n\r\n        //اجلب الكمية الجديدة \r\n        var newQuantity= $(this).val();\r\n\r\n        // ابحث عن السطر الذي يحتوي معلومات هذا المنتج \r\n        var parent = $(this).parents('[data-product-info]');\r\n\r\n        // اجلب سعر القطعة الواحدة عن معلومات المنتج \r\n        var pricePerUnit = parent.attr('data-product-price');\r\n\r\n        // السعر الاجمالي للمنتج هو سعر القطعة مضروبا بعددها \r\n        var totalPriceForProduct = newQuantity * pricePerUnit;\r\n\r\n        // عين السعر الجديد ضمن خلية السعر الاجمالي للمنتج في هذا السطر \r\n        parent.find('.total-price-for-product').text(totalPriceForProduct + '$');\r\n    });\r\n});\n\n//# sourceURL=webpack://ecummerc/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("13c0fc760960b68de95d")
/******/ })();
/******/ 
/******/ }
);