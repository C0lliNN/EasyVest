(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ListItem__ListItem___34Uzq .ListItem__Title___1b4qp {\n  color: #303030;\n  transition: 0.3s ease-in-out color;\n}\n.ListItem__ListItem___34Uzq .ListItem__Title___1b4qp:hover {\n  color: #008aff;\n}\n.ListItem__ListItem___34Uzq div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.ListItem__ListItem___34Uzq .ListItem__Subject___2Nr_P {\n  margin-top: 20px;\n  margin-bottom: 8px;\n}\n.ListItem__ListItem___34Uzq .ListItem__Subject___2Nr_P,\n.ListItem__ListItem___34Uzq .ListItem__Questions___16g57 {\n  display: flex;\n  align-items: center;\n  color: rgba(31, 45, 61, 0.6);\n}\n.ListItem__ListItem___34Uzq .ListItem__Icons___2X4PJ {\n  margin: 0;\n}\n.ListItem__ListItem___34Uzq .ListItem__Icons___2X4PJ button {\n  border: none;\n  background-color: transparent;\n  border-radius: 100%;\n  cursor: pointer;\n  padding: 8px;\n}\n.ListItem__ListItem___34Uzq .ListItem__Icons___2X4PJ button:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}", ""]);

// exports
exports.locals = {
	"ListItem": "ListItem__ListItem___34Uzq",
	"Title": "ListItem__Title___1b4qp",
	"Subject": "ListItem__Subject___2Nr_P",
	"Questions": "ListItem__Questions___16g57",
	"Icons": "ListItem__Icons___2X4PJ"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/UI/Paginator/Paginator.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./resources/js/components/UI/Paginator/Paginator.scss ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Paginator__Paginator___3EsAn {\n  text-align: center;\n}\n.Paginator__Paginator___3EsAn button {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  margin-right: 2px;\n  border-radius: 100%;\n  background-color: transparent;\n  border: 1px solid #008aff;\n  color: #008aff;\n  outline: none;\n  font-size: 1.1em;\n}\n.Paginator__Paginator___3EsAn button:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.Paginator__Paginator___3EsAn button:focus, .Paginator__Paginator___3EsAn button:active {\n  background-color: #008aff;\n  color: white;\n}\n.Paginator__Paginator___3EsAn button.Paginator__Active___2cMUW {\n  background-color: #008aff;\n  color: white;\n}", ""]);

// exports
exports.locals = {
	"Paginator": "Paginator__Paginator___3EsAn",
	"Active": "Paginator__Active___2cMUW"
};

/***/ }),

/***/ "./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ListItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem.scss */ "./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.scss");
/* harmony import */ var _ListItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ListItem_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var ListItem = function ListItem(props) {
  var list = props.list;
  var relations = list.relations.map(function (user) {
    return user.pivot.relation;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "collection-item ".concat(_ListItem_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ListItem)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/lists/".concat(list.id),
    className: "truncate ".concat(_ListItem_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Title)
  }, list.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _ListItem_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Subject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "book"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, list.subject.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _ListItem_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Questions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons"
  }, "question_answer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, list.questions.length, " Quest\xF5es")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: _ListItem_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Icons
  }, relations.includes('answer') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Lista Respondida"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons green-text"
  }, "check")), relations.includes('owner') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Editar",
    onClick: function onClick() {
      return props.editListHandler(list.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons blue-text"
  }, "edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Excluir",
    onClick: function onClick() {
      return props.deleteListHandler(list.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons red-text"
  }, "delete"))), relations.includes('bookmark') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Remover dos Favoritos",
    onClick: function onClick() {
      return props.unbookmarkListHandler(list.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons yellow-text text-darken-1"
  }, "star")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "tooltipped",
    "data-position": "bottom",
    "data-tooltip": "Adicionar aos Favoritos",
    onClick: function onClick() {
      return props.bookmarkListHandler(list.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "material-icons yellow-text text-darken-1"
  }, "stars")))));
};

ListItem.propTypes = {
  bookmarkListHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  bookmarkQuestionHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  deleteListHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  editListHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  list: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    questions: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
    relations: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
    subject: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    }),
    title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }),
  unbookmarkListHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  unbookmarkQuestionHandler: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.scss":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--10-1!../../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!./ListItem.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.scss");

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

/***/ "./resources/js/components/ListsContainer/ListsCollection/ListsCollection.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ListsContainer/ListsCollection/ListsCollection.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hooks/use-request-data */ "./resources/js/hooks/use-request-data.js");
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/ErrorMessage/ErrorMessage */ "./resources/js/components/UI/ErrorMessage/ErrorMessage.js");
/* harmony import */ var _ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItem/ListItem */ "./resources/js/components/ListsContainer/ListsCollection/ListItem/ListItem.js");
/* harmony import */ var _UI_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../UI/Paginator/Paginator */ "./resources/js/components/UI/Paginator/Paginator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utility */ "./resources/js/utility.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var ListsCollection = function ListsCollection() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      lastPage = _useState4[0],
      setLastPage = _useState4[1];

  var _useRequestData = Object(_hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["default"])(setCurrentPage, setLastPage),
      _useRequestData2 = _slicedToArray(_useRequestData, 2),
      state = _useRequestData2[0],
      dispatch = _useRequestData2[1];

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  var content = null;

  var editListHandler = function editListHandler(listId) {
    history.push("/lists/".concat(listId, "/edit"));
  };

  var deleteListHandler = function deleteListHandler(listId) {
    dispatch({
      type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_START"]
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a["delete"]("/lists/".concat(listId)).then(function (response) {
      if (response.status === 200) {
        var newCollection = state.collection.filter(function (item) {
          return item.id !== listId;
        });
        dispatch({
          type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_SUCCESS"],
          collection: newCollection
        });
      }
    })["catch"](function (error) {
      dispatch({
        type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_FAIL"],
        error: error
      });
    });
  };

  var bookmarkListHandler = function bookmarkListHandler(listId) {
    dispatch({
      type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_START"]
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/lists/".concat(listId, "/bookmark")).then(function (response) {
      if (response.status === 200) {
        var listIndex = state.collection.findIndex(function (list) {
          return list.id === listId;
        });

        var list = _objectSpread({}, state.collection[listIndex]);

        if (list.relations && Array.isArray(list.relations)) {
          list.relations = list.relations.concat([{
            pivot: {
              relation: 'bookmark'
            }
          }]);
        } else {
          list.relations = [{
            pivot: {
              relation: 'bookmark'
            }
          }];
        }

        var lists = _toConsumableArray(state.collection);

        lists[listIndex] = list;
        dispatch({
          type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_SUCCESS"],
          collection: lists
        });
        Object(_utility__WEBPACK_IMPORTED_MODULE_7__["setupTooltips"])();
      }
    })["catch"](function (error) {
      dispatch({
        type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_FAIL"],
        error: error
      });
    });
  };

  var unbookmarkQuestionHandler = function unbookmarkQuestionHandler(listId) {
    dispatch({
      type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_START"]
    });
    axios__WEBPACK_IMPORTED_MODULE_6___default.a["delete"]("/lists/".concat(listId, "/unbookmark")).then(function (response) {
      if (response.status === 200) {
        var listIndex = state.collection.findIndex(function (list) {
          return list.id === listId;
        });

        var list = _objectSpread({}, state.collection[listIndex]);

        if (list.relations) {
          var updatedRelations = list.relations.filter(function (relation) {
            return relation.pivot.relation !== 'bookmark';
          });
          list.relations = updatedRelations;
        }

        var lists = null;

        if (location.pathname === '/lists/bookmarks') {
          lists = state.collection.filter(function (listItem) {
            return listItem.id !== list.id;
          });
        } else {
          lists = _toConsumableArray(state.collection);
          lists[listIndex] = list;
        }

        dispatch({
          type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_SUCCESS"],
          collection: lists
        });
        Object(_utility__WEBPACK_IMPORTED_MODULE_7__["setupTooltips"])();
      }
    })["catch"](function (error) {
      dispatch({
        type: _hooks_use_request_data__WEBPACK_IMPORTED_MODULE_1__["REQUEST_FAIL"],
        error: error
      });
    });
  };

  if (state.isLoading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  } else if (state.error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      message: state.error.message
    });
  } else {
    if (state.collection.length) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "collection"
      }, state.collection.map(function (list) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItem_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: list.id,
          list: list,
          editListHandler: editListHandler,
          deleteListHandler: deleteListHandler,
          bookmarkListHandler: bookmarkListHandler,
          unbookmarkListHandler: unbookmarkQuestionHandler
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Paginator_Paginator__WEBPACK_IMPORTED_MODULE_5__["default"], {
        currentPage: currentPage,
        lastPage: lastPage
      }));
    } else {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Sem Listas");
    }
  }

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (ListsCollection);

/***/ }),

/***/ "./resources/js/components/UI/ErrorMessage/ErrorMessage.js":
/*!*****************************************************************!*\
  !*** ./resources/js/components/UI/ErrorMessage/ErrorMessage.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ErrorMessage = function ErrorMessage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "red-text"
  }, "Um erro inesperado aconteceu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, props.message));
};

ErrorMessage.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(ErrorMessage));

/***/ }),

/***/ "./resources/js/components/UI/Paginator/Paginator.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/UI/Paginator/Paginator.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Paginator_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paginator.scss */ "./resources/js/components/UI/Paginator/Paginator.scss");
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

/***/ "./resources/js/components/UI/Paginator/Paginator.scss":
/*!*************************************************************!*\
  !*** ./resources/js/components/UI/Paginator/Paginator.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!./Paginator.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/UI/Paginator/Paginator.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/hooks/use-request-data.js":
/*!************************************************!*\
  !*** ./resources/js/hooks/use-request-data.js ***!
  \************************************************/
/*! exports provided: REQUEST_START, REQUEST_SUCCESS, REQUEST_FAIL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_START", function() { return REQUEST_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_SUCCESS", function() { return REQUEST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_FAIL", function() { return REQUEST_FAIL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./resources/js/utility.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
  collection: [],
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
          collection: action.collection,
          error: null
        };
      }

    case REQUEST_FAIL:
      {
        return {
          isLoading: false,
          collection: null,
          error: action.error
        };
      }

    default:
      return state;
  }
};

var useRequestData = function useRequestData(setCurrentPage, setLastPage) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(requestReducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useLocation"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: REQUEST_START
    });
    var endPoint = location.pathname + location.search;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(endPoint).then(function (response) {
      if (response.status === 200) {
        dispatch({
          type: REQUEST_SUCCESS,
          collection: response.data.data
        });
        setLastPage(response.data.meta.last_page);
        setCurrentPage(response.data.meta.current_page);
        Object(_utility__WEBPACK_IMPORTED_MODULE_2__["setupTooltips"])();
      }
    })["catch"](function (error) {
      console.error(error);
      dispatch({
        type: REQUEST_FAIL,
        error: error
      });
    });
  }, [axios__WEBPACK_IMPORTED_MODULE_1___default.a, location]);
  return [state, dispatch];
};

/* harmony default export */ __webpack_exports__["default"] = (useRequestData);

/***/ }),

/***/ "./resources/js/utility.js":
/*!*********************************!*\
  !*** ./resources/js/utility.js ***!
  \*********************************/
/*! exports provided: setupTooltips, setupModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupTooltips", function() { return setupTooltips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupModal", function() { return setupModal; });
var setupTooltips = function setupTooltips() {
  var elements = document.querySelectorAll('.tooltipped'); //eslint-disable-next-line

  M.Tooltip.init(elements, {
    enterDelay: 400
  });
};
var setupModal = function setupModal(headerText, headerClass, contentText) {
  var header = document.querySelector('#modal h4');
  header.innerHTML = headerText;
  header.className = headerClass;
  var modalContent = document.querySelector('#modal p');
  modalContent.innerHTML = contentText;
};

/***/ })

}]);