(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListsContainer/ListViewer/ListViewer.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./resources/js/components/ListsContainer/ListViewer/ListViewer.scss ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ListViewer__ListViewer___2yFPZ {\n  background-color: #f9f9f9;\n  padding: 0px 20px;\n  margin-top: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.ListViewer__ListViewer___2yFPZ h3 {\n  text-align: center;\n  color: #152c5b !important;\n  font-size: 2.2em;\n  font-weight: 600;\n}\n.ListViewer__ListViewer___2yFPZ .ListViewer__WithMargin___1meVn {\n  margin: 15px 0px;\n}\n.ListViewer__ListViewer___2yFPZ .ListViewer__BtnGreen___3FHuk {\n  background-color: #38c172 !important;\n  text-transform: none;\n  font-weight: 500;\n  border-radius: 5px;\n}\n.ListViewer__ListViewer___2yFPZ .ListViewer__BtnGreen___3FHuk:hover, .ListViewer__ListViewer___2yFPZ .ListViewer__BtnGreen___3FHuk:active, .ListViewer__ListViewer___2yFPZ .ListViewer__BtnGreen___3FHuk:focus {\n  background-color: #35b56b !important;\n}\n.ListViewer__ListViewer___2yFPZ .ListViewer__BtnOrange___2rHss {\n  background-color: #f6993f !important;\n  text-transform: none;\n  font-weight: 500;\n  border-radius: 5px;\n  margin-left: 5px;\n}\n.ListViewer__ListViewer___2yFPZ .ListViewer__BtnOrange___2rHss:hover, .ListViewer__ListViewer___2yFPZ .ListViewer__BtnOrange___2rHss:active, .ListViewer__ListViewer___2yFPZ .ListViewer__BtnOrange___2rHss:focus {\n  background-color: #f59130 !important;\n}", ""]);

// exports
exports.locals = {
	"ListViewer": "ListViewer__ListViewer___2yFPZ",
	"WithMargin": "ListViewer__WithMargin___1meVn",
	"BtnGreen": "ListViewer__BtnGreen___3FHuk",
	"BtnOrange": "ListViewer__BtnOrange___2rHss"
};

/***/ }),

/***/ "./resources/js/components/ListsContainer/ListViewer/ListViewer.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ListsContainer/ListViewer/ListViewer.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ListViewer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListViewer.scss */ "./resources/js/components/ListsContainer/ListViewer/ListViewer.scss");
/* harmony import */ var _ListViewer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ListViewer_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/ErrorMessage/ErrorMessage */ "./resources/js/components/UI/ErrorMessage/ErrorMessage.js");
/* harmony import */ var _QuestionsContainer_QuestionViewer_Question_Question__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../QuestionsContainer/QuestionViewer/Question/Question */ "./resources/js/components/QuestionsContainer/QuestionViewer/Question/Question.js");
/* harmony import */ var _QuestionsContainer_QuestionViewer_InfoBar_InfoBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../QuestionsContainer/QuestionViewer/InfoBar/InfoBar */ "./resources/js/components/QuestionsContainer/QuestionViewer/InfoBar/InfoBar.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ListViewer = function ListViewer() {
  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])();
  var listId = match.params.list;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      correct = _useState2[0],
      setCorrect = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      list = _useState4[0],
      setList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      setError = _useState8[1];

  var relations = list ? list.relations.map(function (relation) {
    return relation.pivot.relation;
  }) : null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/lists/".concat(listId)).then(function (response) {
      if (response.status === 200) {
        setList(response.data.data);
      }
    })["catch"](function (error) {
      setError(error);
    })["finally"](function () {
      setIsLoading(false);
    });
  }, [listId]);

  var correctList = function correctList() {
    setCorrect(true);
  };

  var resetList = function resetList() {
    setCorrect(false);
  };

  var content = null;

  if (isLoading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      message: error.message
    });
  } else if (list) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, list.title), list.questions.map(function (question) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuestionsContainer_QuestionViewer_Question_Question__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: question.id,
        question: question,
        correct: correct
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _ListViewer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.WithMargin
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn ".concat(_ListViewer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.BtnGreen, " z-depth-0"),
      onClick: correctList
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons left"
    }, "check"), "Responder"), correct && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn ".concat(_ListViewer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.BtnOrange, " z-depth-0"),
      onClick: resetList
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons left"
    }, "refresh"), "Restaurar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuestionsContainer_QuestionViewer_InfoBar_InfoBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ownerName: list.owner.name,
      ownerId: list.owner.id,
      ownerImage: list.owner.image,
      subject: list.subject.name,
      tags: list.tags,
      isOwner: relations && relations.includes('owner'),
      isAnswered: relations && relations.includes('answer'),
      isBookmarked: relations && relations.includes('bookmark'),
      isList: true,
      numberOfQuestions: list.questions.length
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_ListViewer_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ListViewer, " container")
  }, content);
};

/* harmony default export */ __webpack_exports__["default"] = (ListViewer);

/***/ }),

/***/ "./resources/js/components/ListsContainer/ListViewer/ListViewer.scss":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ListsContainer/ListViewer/ListViewer.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!./ListViewer.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListsContainer/ListViewer/ListViewer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);