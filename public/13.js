(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./resources/js/components/ListsContainer/ListEdit/ListEdit.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/ListsContainer/ListEdit/ListEdit.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/ErrorMessage/ErrorMessage */ "./resources/js/components/UI/ErrorMessage/ErrorMessage.js");
/* harmony import */ var _ListBuilder_ListBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ListBuilder/ListBuilder */ "./resources/js/components/ListsContainer/ListBuilder/ListBuilder.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ListEdit = function ListEdit() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useRouteMatch"])();
  var listId = match.params.list;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/lists/".concat(listId)).then(function (response) {
      setList(response.data.data);
    })["catch"](function (error) {
      console.error(error);
      setError(error);
    })["finally"](function () {
      setIsLoading(false);
    });
  }, [axios__WEBPACK_IMPORTED_MODULE_1___default.a, listId]);
  var content = null;

  if (isLoading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: error.message
    });
  } else if (list) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListBuilder_ListBuilder__WEBPACK_IMPORTED_MODULE_5__["default"], {
      list: list
    });
  }

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ListEdit);

/***/ })

}]);