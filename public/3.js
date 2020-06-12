(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Paginator__Paginator___smQV1 {\n  text-align: center;\n}\n.Paginator__Paginator___smQV1 button {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  margin-right: 2px;\n  border-radius: 100%;\n  background-color: transparent;\n  border: 1px solid #008aff;\n  color: #008aff;\n  outline: none;\n  font-size: 1.1em;\n}\n.Paginator__Paginator___smQV1 button:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.Paginator__Paginator___smQV1 button:focus, .Paginator__Paginator___smQV1 button:active {\n  background-color: #008aff;\n  color: white;\n}\n.Paginator__Paginator___smQV1 button.Paginator__Active___1XqU5 {\n  background-color: #008aff;\n  color: white;\n}", ""]);

// exports
exports.locals = {
	"Paginator": "Paginator__Paginator___smQV1",
	"Active": "Paginator__Active___1XqU5"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".QuestionItem__QuestionItem___2i_AI .QuestionItem__Subject___1UlPi,\n.QuestionItem__QuestionItem___2i_AI .QuestionItem__Tags___3-z5R {\n  display: flex;\n  color: rgba(31, 45, 61, 0.6);\n  align-items: center;\n  height: 43px;\n}\n.QuestionItem__QuestionItem___2i_AI .QuestionItem__Subject___1UlPi {\n  margin-bottom: 0;\n  margin-top: 8px;\n}\n.QuestionItem__QuestionItem___2i_AI .QuestionItem__Title___31BMt {\n  color: #303030;\n  transition: 0.3s ease-in-out color;\n}\n.QuestionItem__QuestionItem___2i_AI .QuestionItem__Title___31BMt:hover {\n  color: #008aff;\n}\n.QuestionItem__QuestionItem___2i_AI div {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.QuestionItem__QuestionItem___2i_AI div p {\n  margin: 0;\n}\n.QuestionItem__QuestionItem___2i_AI div button {\n  border: none;\n  background-color: transparent;\n  border-radius: 100%;\n  cursor: pointer;\n  padding: 8px;\n}\n.QuestionItem__QuestionItem___2i_AI div button:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}", ""]);

// exports
exports.locals = {
	"QuestionItem": "QuestionItem__QuestionItem___2i_AI",
	"Subject": "QuestionItem__Subject___1UlPi",
	"Tags": "QuestionItem__Tags___3-z5R",
	"Title": "QuestionItem__Title___31BMt"
};

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Paginator_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paginator.scss */ "./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.scss");
/* harmony import */ var _Paginator_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Paginator_scss__WEBPACK_IMPORTED_MODULE_2__);




var Paginator = function Paginator(props) {
  if (props.lastPage <= 1) {
    return null;
  }

  var buttons = [];

  var _loop = function _loop(i) {
    var classes = '';

    if (props.currentPage === i) {
      classes = _Paginator_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Active;
    }

    buttons.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      key: i,
      onClick: function onClick() {
        return props.changePageHandler(i);
      },
      className: classes
    }, i));
  };

  for (var i = 1; i <= props.lastPage; i++) {
    _loop(i);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Paginator_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Paginator
  }, buttons);
};

Paginator.propTypes = {
  changePageHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  lastPage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Paginator);

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.scss":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--10-1!../../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!./Paginator.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _QuestionItem_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionItem.scss */ "./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.scss");
/* harmony import */ var _QuestionItem_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_QuestionItem_scss__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var QuestionItem = function QuestionItem(props) {
  var question = props.question,
      text = props.text;
  var relations = [];

  if (question.pivot) {
    relations.push(question.pivot.relation);
  }

  if (question.relations) {
    relations.push.apply(relations, _toConsumableArray(question.relations.map(function (user) {
      return user.pivot.relation;
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    key: question.id,
    className: "collection-item ".concat(_QuestionItem_scss__WEBPACK_IMPORTED_MODULE_3___default.a.QuestionItem)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/questions/".concat(question.id),
    className: "truncate ".concat(_QuestionItem_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Title)
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _QuestionItem_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Subject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, question.subject.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _QuestionItem_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Tags
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "label_outline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, question.tags && question.tags.length ? question.tags : 'Sem tags'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "crud-icons"
  }, relations.includes('answer') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Quest\xE3o Respondida"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons green-text"
  }, "check")), relations.includes('owner') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Editar",
    onClick: function onClick() {
      return props.editQuestionHandler(question.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons blue-text"
  }, "edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Excluir",
    onClick: function onClick() {
      return props.deleteQuestionHandler(question.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons red-text"
  }, "delete"))), relations.includes('bookmark') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Remover dos Favoritos",
    onClick: function onClick() {
      return props.unbookmarkQuestionHandler(question.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons yellow-text text-darken-1"
  }, "star")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Adicionar aos Favoritos",
    onClick: function onClick() {
      return props.bookmarkQuestionHandler(question.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons yellow-text text-darken-1"
  }, "stars")))));
};

QuestionItem.propTypes = {
  bookmarkQuestionHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  deleteQuestionHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  editQuestionHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  question: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    pivot: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      relation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
    }),
    relations: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
    subject: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    }),
    tags: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }),
  text: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  unbookmarkQuestionHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (QuestionItem);

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.scss":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--10-1!../../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!./QuestionItem.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionsList/QuestionsList.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionsList/QuestionsList.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/ErrorMessage/ErrorMessage */ "./resources/js/components/UI/ErrorMessage/ErrorMessage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _QuestionItem_QuestionItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QuestionItem/QuestionItem */ "./resources/js/components/QuestionsContainer/QuestionsList/QuestionItem/QuestionItem.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utility */ "./resources/js/components/utility.js");
/* harmony import */ var _Paginator_Paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Paginator/Paginator */ "./resources/js/components/QuestionsContainer/QuestionsList/Paginator/Paginator.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var initialState = {
  questions: [],
  isLoading: false,
  error: null
};
var REQUEST_START = 'REQUEST_START';
var REQUEST_SUCCESS = 'REQUEST_SUCCESS';
var REQUEST_FAIL = 'REQUEST_FAIL';

var requestReducer = function requestReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case REQUEST_START:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: true
        });
      }

    case REQUEST_SUCCESS:
      {
        return {
          isLoading: false,
          questions: action.questions,
          error: null
        };
      }

    case REQUEST_FAIL:
      {
        return {
          isLoading: false,
          questions: null,
          error: action.error
        };
      }

    default:
      return state;
  }
};

var QuestionsList = function QuestionsList(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(requestReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      lastPage = _useState2[0],
      setLastPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var location = props.location;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: REQUEST_START
    });
    var endPoint = location.pathname + location.search;
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(endPoint).then(function (response) {
      if (response.status === 200) {
        console.log(response);
        dispatch({
          type: REQUEST_SUCCESS,
          questions: response.data.data
        });
        setLastPage(response.data.last_page);
        setCurrentPage(response.data.current_page);
        Object(_utility__WEBPACK_IMPORTED_MODULE_7__["setupTooltips"])();
      }
    })["catch"](function (error) {
      console.error(error);
      dispatch({
        type: REQUEST_FAIL,
        error: error
      });
    });
  }, [axios__WEBPACK_IMPORTED_MODULE_2___default.a, location]);

  var editQuestionHandler = function editQuestionHandler(questionId) {
    props.history.push("/questions/".concat(questionId, "/edit"));
  };

  var deleteQuestionHandler = function deleteQuestionHandler(questionId) {
    dispatch({
      type: REQUEST_START
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/questions/".concat(questionId)).then(function (response) {
      if (response.status === 200) {
        dispatch({
          type: REQUEST_SUCCESS,
          questions: state.questions.filter(function (question) {
            return question.id !== questionId;
          })
        });
        Object(_utility__WEBPACK_IMPORTED_MODULE_7__["setupTooltips"])();
      }
    })["catch"](function (error) {
      dispatch({
        type: REQUEST_FAIL,
        error: error
      });
    });
  };

  var bookmarkQuestionHandler = function bookmarkQuestionHandler(questionId) {
    dispatch({
      type: REQUEST_START
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/questions/".concat(questionId, "/bookmark")).then(function (response) {
      if (response.status === 200) {
        var questionIndex = state.questions.findIndex(function (question) {
          return question.id === questionId;
        });

        var question = _objectSpread({}, state.questions[questionIndex]);

        if (question.relations && Array.isArray(question.relations)) {
          question.relations = question.relations.concat([{
            pivot: {
              relation: 'bookmark'
            }
          }]);
        } else {
          question.relations = [{
            pivot: {
              relation: 'bookmark'
            }
          }];
        }

        var questions = _toConsumableArray(state.questions);

        questions[questionIndex] = question;
        dispatch({
          type: REQUEST_SUCCESS,
          questions: questions
        });
        Object(_utility__WEBPACK_IMPORTED_MODULE_7__["setupTooltips"])();
      }
    })["catch"](function (error) {
      dispatch({
        type: REQUEST_FAIL,
        error: error
      });
    });
  };

  var unbookmarkQuestionHandler = function unbookmarkQuestionHandler(questionId) {
    dispatch({
      type: REQUEST_START
    });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/questions/".concat(questionId, "/unbookmark")).then(function (response) {
      if (response.status === 200) {
        var questionIndex = state.questions.findIndex(function (question) {
          return question.id === questionId;
        });

        var question = _objectSpread({}, state.questions[questionIndex]);

        if (question.relations) {
          var updatedRelations = question.relations.filter(function (relation) {
            return relation.pivot.relation !== 'bookmark';
          });
          question.relations = updatedRelations;
        }

        var questions = null;

        if (props.location.pathname === '/questions/bookmarks') {
          questions = state.questions.filter(function (questionItem) {
            return questionItem.id !== question.id;
          });
        } else {
          questions = _toConsumableArray(state.questions);
          questions[questionIndex] = question;
        }

        dispatch({
          type: REQUEST_SUCCESS,
          questions: questions
        });
        Object(_utility__WEBPACK_IMPORTED_MODULE_7__["setupTooltips"])();
      }
    })["catch"](function (error) {
      dispatch({
        type: REQUEST_FAIL,
        error: error
      });
    });
  };

  var changePageHandler = function changePageHandler(page) {
    console.log(page);

    if (page !== currentPage) {
      setCurrentPage(page);
      var params = new URLSearchParams(props.location.search);
      var url = props.location.pathname + '?page=' + page;

      if (params.get('query')) {
        url += '&query=' + params.get('query');
      }

      props.history.push(url);
    }
  };

  var content = null;

  if (state.isLoading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  } else if (state.error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: state.error.message
    });
  } else {
    if (state.questions.length) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "collection"
      }, state.questions.map(function (question) {
        var auxDiv = document.createElement('div');
        auxDiv.innerHTML = question.content;
        var text = auxDiv.innerText;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QuestionItem_QuestionItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: question.id,
          question: question,
          text: text,
          editQuestionHandler: editQuestionHandler,
          bookmarkQuestionHandler: bookmarkQuestionHandler,
          unbookmarkQuestionHandler: unbookmarkQuestionHandler,
          deleteQuestionHandler: deleteQuestionHandler
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_8__["default"], {
        lastPage: lastPage,
        currentPage: currentPage,
        changePageHandler: changePageHandler
      }));
    } else {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "Sem Quest\xF5es");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "questions-list"
  }, content);
};

QuestionsList.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
  }),
  location: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    search: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(QuestionsList));

/***/ }),

/***/ "./resources/js/components/utility.js":
/*!********************************************!*\
  !*** ./resources/js/components/utility.js ***!
  \********************************************/
/*! exports provided: setupTooltips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTooltips", function() { return setupTooltips; });
var setupTooltips = function setupTooltips() {
  var elements = document.querySelectorAll(".tooltipped"); //eslint-disable-next-line

  M.Tooltip.init(elements, {
    enterDelay: 400
  });
};

/***/ })

}]);