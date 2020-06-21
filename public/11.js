(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionViewer/QuestionViewer.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--11-1!./node_modules/postcss-loader/src??ref--11-2!./node_modules/sass-loader/dist/cjs.js??ref--11-3!./resources/js/components/QuestionsContainer/QuestionViewer/QuestionViewer.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".QuestionViewer__QuestionViewer___2lMad {\n  background-color: #f9f9f9;\n  padding: 0px 20px;\n  margin-top: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.QuestionViewer__QuestionViewer___2lMad .QuestionViewer__WithMargin___37yPe {\n  margin: 15px 0px;\n}\n.QuestionViewer__QuestionViewer___2lMad .QuestionViewer__BtnGreen___2sMhK {\n  background-color: #38c172 !important;\n  text-transform: none;\n  font-weight: 500;\n  border-radius: 5px;\n}\n.QuestionViewer__QuestionViewer___2lMad .QuestionViewer__BtnGreen___2sMhK:hover, .QuestionViewer__QuestionViewer___2lMad .QuestionViewer__BtnGreen___2sMhK:active, .QuestionViewer__QuestionViewer___2lMad .QuestionViewer__BtnGreen___2sMhK:focus {\n  background-color: #35b56b !important;\n}\n.QuestionViewer__QuestionViewer___2lMad .QuestionViewer__BtnOrange___WQUC0 {\n  background-color: #f6993f !important;\n  text-transform: none;\n  font-weight: 500;\n  border-radius: 5px;\n  margin-left: 5px;\n}\n.QuestionViewer__QuestionViewer___2lMad .QuestionViewer__BtnOrange___WQUC0:hover, .QuestionViewer__QuestionViewer___2lMad .QuestionViewer__BtnOrange___WQUC0:active, .QuestionViewer__QuestionViewer___2lMad .QuestionViewer__BtnOrange___WQUC0:focus {\n  background-color: #f59130 !important;\n}", ""]);

// exports
exports.locals = {
	"QuestionViewer": "QuestionViewer__QuestionViewer___2lMad",
	"WithMargin": "QuestionViewer__WithMargin___37yPe",
	"BtnGreen": "QuestionViewer__BtnGreen___2sMhK",
	"BtnOrange": "QuestionViewer__BtnOrange___WQUC0"
};

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionViewer/QuestionViewer.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionViewer/QuestionViewer.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionViewer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionViewer.scss */ "./resources/js/components/QuestionsContainer/QuestionViewer/QuestionViewer.scss");
/* harmony import */ var _QuestionViewer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_QuestionViewer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/ErrorMessage/ErrorMessage */ "./resources/js/components/UI/ErrorMessage/ErrorMessage.js");
/* harmony import */ var _Question_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Question/Question */ "./resources/js/components/QuestionsContainer/QuestionViewer/Question/Question.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utility */ "./resources/js/utility.js");
/* harmony import */ var _InfoBar_InfoBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InfoBar/InfoBar */ "./resources/js/components/QuestionsContainer/QuestionViewer/InfoBar/InfoBar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
  question: {},
  isLoading: false,
  error: null
};
var REQUEST_START = 'REQUEST_START';
var REQUEST_SUCCESS = 'REQUEST_SUCCESS';
var REQUEST_FAIL = 'REQUEST_FAIL';

var reducer = function reducer() {
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
          question: action.question,
          error: null
        };
      }

    case REQUEST_FAIL:
      {
        return {
          isLoading: false,
          question: null,
          error: action.error
        };
      }

    default:
      return state;
  }
};

var QuestionViewer = function QuestionViewer() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVerifying = _useState2[0],
      setIsVerifying = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedAlternative = _useState4[0],
      setSelectedAlternative = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      isBookmarked = _useState6[0],
      setIsBookmarked = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      isAnswered = _useState8[0],
      setIsAnswered = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState10 = _slicedToArray(_useState9, 2),
      isOwner = _useState10[0],
      setIsOwner = _useState10[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useRouteMatch"])();
  var questionId = match.params.question;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: REQUEST_START
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("/questions/".concat(questionId)).then(function (response) {
      var question = response.data.data;
      var relations = question.relations.map(function (user) {
        return user.pivot.relation;
      });
      setIsBookmarked(relations.includes('bookmark'));
      setIsOwner(relations.includes('owner'));
      setIsAnswered(relations.includes('answer'));
      dispatch({
        type: REQUEST_SUCCESS,
        question: question
      });
      Object(_utility__WEBPACK_IMPORTED_MODULE_6__["setupTooltips"])();
    })["catch"](function (error) {
      console.error(error);
      dispatch({
        type: REQUEST_FAIL,
        error: error
      });
    });
  }, [questionId, axios__WEBPACK_IMPORTED_MODULE_5___default.a]);

  var verifyAnswerHandler = function verifyAnswerHandler() {
    setIsVerifying(true);
  };

  var resetHandler = function resetHandler() {
    setIsVerifying(false);
  };

  var toggleBookmarkHandler = function toggleBookmarkHandler(activate) {
    dispatch({
      type: REQUEST_START
    });
    var request = null;

    if (activate) {
      request = axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/questions/".concat(questionId, "/bookmark"));
    } else {
      request = axios__WEBPACK_IMPORTED_MODULE_5___default.a["delete"]("/questions/".concat(questionId, "/unbookmark"));
    }

    request.then(function (response) {
      if (response.status === 200) {
        setIsBookmarked(activate);
        dispatch({
          type: REQUEST_SUCCESS,
          question: state.question
        });
        Object(_utility__WEBPACK_IMPORTED_MODULE_6__["setupTooltips"])();
      }
    })["catch"](function (error) {
      dispatch({
        type: REQUEST_FAIL,
        error: error
      });
    });
  };

  var editQuestionHandler = function editQuestionHandler() {
    history.push("/questions/".concat(questionId, "/edit"));
  };

  var deleteQuestionHandler = function deleteQuestionHandler() {
    dispatch({
      type: REQUEST_START
    });
    axios__WEBPACK_IMPORTED_MODULE_5___default.a["delete"]("/questions/".concat(questionId)).then(function (response) {
      if (response.status === 200) {
        history.replace('/questions');
      }
    })["catch"](function (error) {
      dispatch({
        type: REQUEST_FAIL,
        error: error
      });
    });
  };

  var registerAnswerHandler = function registerAnswerHandler() {
    if (!isAnswered) {
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/questions/".concat(questionId, "/answer")).then(function (response) {
        if (response.status === 200) {
          //eslint-disable-next-line
          M.toast({
            html: 'Questão Respondida'
          });
          setIsAnswered(true);
        }
      });
    }
  };

  var content = null;

  if (state.isLoading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  } else if (state.error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: state.error.message
    });
  } else {
    var validOwner = state.question.owner;
    var ownerName = validOwner ? state.question.owner.name : '';
    var ownerImage = validOwner ? state.question.owner.image : '';
    var ownerId = validOwner ? state.question.owner.id : null;
    var subject = state.question.subject ? state.question.subject.name : '';
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Question_Question__WEBPACK_IMPORTED_MODULE_4__["default"], {
      question: state.question,
      correct: isVerifying,
      selectedAlternative: selectedAlternative,
      setSelectedAlternative: setSelectedAlternative,
      registerAnswerHandler: registerAnswerHandler
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _QuestionViewer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.WithMargin
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn ".concat(_QuestionViewer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.BtnGreen, " z-depth-0"),
      onClick: verifyAnswerHandler
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons left"
    }, "check"), "Responder"), isVerifying && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn ".concat(_QuestionViewer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.BtnOrange, " z-depth-0"),
      onClick: resetHandler
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "material-icons left"
    }, "refresh"), "Restaurar")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBar_InfoBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      ownerName: ownerName,
      ownerId: ownerId,
      ownerImage: ownerImage,
      subject: subject,
      tags: state.question.tags,
      isOwner: isOwner,
      isBookmarked: isBookmarked,
      isAnswered: isAnswered,
      deleteHandler: deleteQuestionHandler,
      toggleBookmarkHandler: toggleBookmarkHandler,
      editHandler: editQuestionHandler
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(_QuestionViewer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.QuestionViewer, " container")
  }, content);
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionViewer);

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionViewer/QuestionViewer.scss":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionViewer/QuestionViewer.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--11-1!../../../../../node_modules/postcss-loader/src??ref--11-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-3!./QuestionViewer.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionViewer/QuestionViewer.scss");

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