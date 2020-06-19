(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.scss":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.scss ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".QuestionBuilder__QuestionBuilder___HLpKN p.QuestionBuilder__Label___ljm5g {\n  font-size: 1.1em;\n  font-weight: 600;\n}\n.QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__Select___Hvq7Z {\n  display: block;\n  width: 100%;\n}\n.QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__Select___Hvq7Z div {\n  padding: 10px 0;\n}\n.QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__Select___Hvq7Z::before {\n  border-bottom-color: #bbb;\n}\n.QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__Select___Hvq7Z:hover::before, .QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__Select___Hvq7Z:active::before, .QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__Select___Hvq7Z:focus::before, .QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__Select___Hvq7Z::after {\n  border-bottom-color: #008aff !important;\n}\n.QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__CreateButton___3gl46 {\n  background-color: #38c172 !important;\n  text-transform: none;\n  font-weight: 500;\n  border-radius: 5px;\n  display: block;\n  width: 100%;\n  margin: 10px auto 3px auto;\n  font-size: 1.4em;\n}\n.QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__CreateButton___3gl46:hover, .QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__CreateButton___3gl46:active, .QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__CreateButton___3gl46:focus {\n  background-color: #35b56b !important;\n}\n.QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__ClearButton___AVDVh {\n  background-color: #f6993f !important;\n  text-transform: none;\n  font-weight: 500;\n  border-radius: 5px;\n  display: block;\n  width: 100%;\n  font-size: 1.4em;\n}\n.QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__ClearButton___AVDVh:hover, .QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__ClearButton___AVDVh:active, .QuestionBuilder__QuestionBuilder___HLpKN .QuestionBuilder__ClearButton___AVDVh:focus {\n  background-color: #f59130 !important;\n}", ""]);

// exports
exports.locals = {
	"QuestionBuilder": "QuestionBuilder__QuestionBuilder___HLpKN",
	"Label": "QuestionBuilder__Label___ljm5g",
	"Select": "QuestionBuilder__Select___Hvq7Z",
	"CreateButton": "QuestionBuilder__CreateButton___3gl46",
	"ClearButton": "QuestionBuilder__ClearButton___AVDVh"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionsContainer.scss":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--10-1!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/dist/cjs.js??ref--10-3!./resources/js/components/QuestionsContainer/QuestionsContainer.scss ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".QuestionsContainer__QuestionsContainer___3NDcb {\n  background-color: #f9f9f9;\n  padding: 0px 20px;\n  margin-top: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.QuestionsContainer__QuestionsContainer___3NDcb h3 {\n  color: #152c5b !important;\n  font-size: 1.8em;\n  font-weight: bold;\n  text-align: center;\n}\n.QuestionsContainer__QuestionsContainer___3NDcb .QuestionsContainer__Container___2g07r {\n  padding-top: 5px;\n  padding-bottom: 20px;\n  padding-left: 25px;\n  padding-right: 25px;\n  box-sizing: border-box;\n}\n\narticle.QuestionsContainer__question___1NLRP {\n  padding: 20px auto;\n}", ""]);

// exports
exports.locals = {
	"QuestionsContainer": "QuestionsContainer__QuestionsContainer___3NDcb",
	"Container": "QuestionsContainer__Container___2g07r",
	"question": "QuestionsContainer__question___1NLRP"
};

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context */ "./resources/js/context.js");
/* harmony import */ var _UI_MyCKEditor_MyCKEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/MyCKEditor/MyCKEditor */ "./resources/js/components/UI/MyCKEditor/MyCKEditor.js");
/* harmony import */ var _UI_InputTag_InputTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/InputTag/InputTag */ "./resources/js/components/UI/InputTag/InputTag.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/ErrorMessage/ErrorMessage */ "./resources/js/components/UI/ErrorMessage/ErrorMessage.js");
/* harmony import */ var _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./QuestionBuilder.scss */ "./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.scss");
/* harmony import */ var _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utility */ "./resources/js/utility.js");
/* harmony import */ var _bit_mui_org_material_ui_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bit/mui-org.material-ui.select */ "./node_modules/@bit/mui-org.material-ui.select/dist/Select/index.js");
/* harmony import */ var _bit_mui_org_material_ui_select__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_bit_mui_org_material_ui_select__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bit/mui-org.material-ui.menu-item */ "./node_modules/@bit/mui-org.material-ui.menu-item/dist/MenuItem/index.js");
/* harmony import */ var _bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var QuestionBuilder = function QuestionBuilder(props) {
  var question = props.question;
  var setIsLoading = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_2__["default"]).changeFixedSpinnerState;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.content : null),
      _useState4 = _slicedToArray(_useState3, 2),
      content = _useState4[0],
      setContent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.alternativeA : null),
      _useState6 = _slicedToArray(_useState5, 2),
      alternativeA = _useState6[0],
      setAlternativeA = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.alternativeB : null),
      _useState8 = _slicedToArray(_useState7, 2),
      alternativeB = _useState8[0],
      setAlternativeB = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.alternativeC : null),
      _useState10 = _slicedToArray(_useState9, 2),
      alternativeC = _useState10[0],
      setAlternativeC = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.alternativeD : null),
      _useState12 = _slicedToArray(_useState11, 2),
      alternativeD = _useState12[0],
      setAlternativeD = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.alternativeE : null),
      _useState14 = _slicedToArray(_useState13, 2),
      alternativeE = _useState14[0],
      setAlternativeE = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.correctAlternative : 'a'),
      _useState16 = _slicedToArray(_useState15, 2),
      correctAlternative = _useState16[0],
      setCorrectAlternative = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.subject.id : 1),
      _useState18 = _slicedToArray(_useState17, 2),
      subject = _useState18[0],
      setSubject = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState20 = _slicedToArray(_useState19, 2),
      availableSubjects = _useState20[0],
      setAvailableSubjects = _useState20[1];

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(question ? question.tags.split(',').map(function (tag) {
    return tag.trim();
  }) : []),
      _useState22 = _slicedToArray(_useState21, 2),
      tags = _useState22[0],
      setTags = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState24 = _slicedToArray(_useState23, 2),
      modalInstance = _useState24[0],
      setModalInstance = _useState24[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/subjects').then(function (response) {
      setAvailableSubjects(response.data.data);
      var modal = document.querySelector('#modal'); // eslint-disable-next-line

      var instance = M.Modal.init(modal, {});
      setModalInstance(instance);
    })["catch"](function (error) {
      setError(error);
    })["finally"](function () {
      setIsLoading(false);
    });
  }, [axios__WEBPACK_IMPORTED_MODULE_5___default.a]);

  var createQuestionHandler = function createQuestionHandler() {
    var auxDiv = document.createElement('div');
    var errorFounded = false;
    var errorMessage = null;
    auxDiv.innerHTML = content;

    if (!content || !auxDiv.innerText.trim()) {
      errorFounded = true;
      errorMessage = "O campo 'Conteúdo' precisa ser preenchido";
    }

    auxDiv.innerHTML = alternativeA;

    if (!errorFounded && (!alternativeA || !auxDiv.innerText.trim())) {
      errorFounded = true;
      errorMessage = "O campo 'Alternativa A' precisa ser preenchido";
    }

    auxDiv.innerHTML = alternativeB;

    if (!errorFounded && (!alternativeB || !auxDiv.innerText.trim())) {
      errorFounded = true;
      errorMessage = "O campo 'Alternativa B' precisa ser preenchido";
    }

    auxDiv.innerHTML = alternativeC;

    if (!errorFounded && (!alternativeC || !auxDiv.innerText.trim())) {
      errorFounded = true;
      errorMessage = "O campo 'Alternativa C' precisa ser preenchido";
    }

    auxDiv.innerHTML = alternativeD;

    if (!errorFounded && (!alternativeD || !auxDiv.innerText.trim())) {
      errorFounded = true;
      errorMessage = "O campo 'Alternativa D' precisa ser preenchido";
    }

    if (!errorFounded && !correctAlternative) {
      errorFounded = true;
      errorMessage = 'Uma alternativa correta precisa ser selecionada';
    }

    if (!errorFounded && !subject) {
      errorFounded = true;
      errorMessage = 'Uma matéria precisa ser selecionada';
    }

    auxDiv.innerHTML = alternativeE;

    if (!errorFounded && (!alternativeE || !auxDiv.innerText.trim()) && correctAlternative === 'E') {
      errorFounded = true;
      errorMessage = "A alternativa correta não pode ser 'E' pois esta não está preenchida";
    }

    if (errorFounded) {
      Object(_utility__WEBPACK_IMPORTED_MODULE_8__["setupModal"])('Erro no formulário', 'red-text', errorMessage);
      modalInstance.open();
    } else {
      var data = {
        content: content,
        alternativeA: alternativeA,
        alternativeB: alternativeB,
        alternativeC: alternativeC,
        alternativeD: alternativeD,
        alternativeE: alternativeE,
        correctAlternative: correctAlternative,
        subject: subject,
        tags: tags
      };
      setIsLoading(true);
      var request = null;

      if (question) {
        request = axios__WEBPACK_IMPORTED_MODULE_5___default.a.put("/questions/".concat(question.id), data);
      } else {
        request = axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/questions', data);
      }

      request.then(function (response) {
        if (response.status === 200) {
          var operation = question ? 'atualizada' : 'criada';
          Object(_utility__WEBPACK_IMPORTED_MODULE_8__["setupModal"])("Quest\xE3o ".concat(operation, " com Sucesso!"), 'green-text', "Sua quest\xE3o foi ".concat(operation, " e j\xE1 est\xE1 dispon\xEDvel na sess\xE3o 'Minhas Quest\xF5es'"));
          modalInstance.open();
        }
      })["catch"](function (error) {
        setError(error);
        console.error(error);
      })["finally"](function () {
        setIsLoading(false);
      });
    }
  };

  var clearFormHandler = function clearFormHandler() {
    setContent('');
    setAlternativeA('');
    setAlternativeB('');
    setAlternativeC('');
    setAlternativeD('');
    setAlternativeE('');
    setCorrectAlternative('a');
    setSubject(1);
    setTags([]);
  };

  var uiContent = null;

  if (error) {
    uiContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      message: error.message
    });
  } else {
    uiContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Label
    }, "Conte\xFAdo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_MyCKEditor_MyCKEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: content,
      setData: setContent
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alternative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Label
    }, "Alternativa A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_MyCKEditor_MyCKEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: alternativeA,
      setData: setAlternativeA
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alternative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Label
    }, "Alternativa B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_MyCKEditor_MyCKEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: alternativeB,
      setData: setAlternativeB
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alternative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Label
    }, "Alternativa C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_MyCKEditor_MyCKEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: alternativeC,
      setData: setAlternativeC
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alternative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Label
    }, "Alternativa D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_MyCKEditor_MyCKEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: alternativeD,
      setData: setAlternativeD
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "alternative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Label
    }, "Alternativa E (Opcional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_MyCKEditor_MyCKEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      content: alternativeE,
      setData: setAlternativeE
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Label
    }, "Alternativa Correta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bit_mui_org_material_ui_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Select,
      value: correctAlternative,
      onChange: function onChange(event) {
        return setCorrectAlternative(event.target.value);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10___default.a, {
      value: "a"
    }, "A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10___default.a, {
      value: "b"
    }, "B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10___default.a, {
      value: "c"
    }, "C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10___default.a, {
      value: "d"
    }, "D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10___default.a, {
      value: "e"
    }, "E"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Label
    }, "Mat\xE9ria"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bit_mui_org_material_ui_select__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.Select,
      value: subject,
      onChange: function onChange(event) {
        return setSubject(event.target.value);
      }
    }, availableSubjects.map(function (subject) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_bit_mui_org_material_ui_menu_item__WEBPACK_IMPORTED_MODULE_10___default.a, {
        key: subject.id,
        value: subject.id
      }, subject.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "label"
    }, "Tags"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UI_InputTag_InputTag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tags: tags,
      setTags: setTags
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn ".concat(_QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.CreateButton, " z-depth-0"),
      onClick: createQuestionHandler
    }, question ? 'Salvar' : 'Criar'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "btn ".concat(_QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.ClearButton, " z-depth-0"),
      onClick: clearFormHandler
    }, "Limpar"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _QuestionBuilder_scss__WEBPACK_IMPORTED_MODULE_7___default.a.QuestionBuilder
  }, uiContent);
};

QuestionBuilder.propTypes = {
  question: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    alternativeA: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    alternativeB: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    alternativeC: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    alternativeD: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    alternativeE: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    correctAlternative: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
    subject: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any
    }),
    tags: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })
};
/* harmony default export */ __webpack_exports__["default"] = (QuestionBuilder);

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.scss":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--10-1!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!./QuestionBuilder.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.scss");

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

/***/ "./resources/js/components/QuestionsContainer/QuestionEdit/QuestionEdit.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionEdit/QuestionEdit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionBuilder_QuestionBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../QuestionBuilder/QuestionBuilder */ "./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/ErrorMessage/ErrorMessage */ "./resources/js/components/UI/ErrorMessage/ErrorMessage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var QuestionEdit = function QuestionEdit() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      question = _useState4[0],
      setQuestion = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useRouteMatch"])();
  var questionId = match.params.question;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("questions/".concat(questionId)).then(function (response) {
      setQuestion(response.data.data);
    })["catch"](function (error) {
      console.error(error);
      setError(error);
    })["finally"](function () {
      setIsLoading(false);
    });
  }, [axios__WEBPACK_IMPORTED_MODULE_2___default.a, questionId]);
  var content = null;

  if (isLoading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  } else if (question) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuestionBuilder_QuestionBuilder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      question: question
    });
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_ErrorMessage_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      message: error.message
    });
  }

  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionEdit);

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionsContainer.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionsContainer.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionsContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionsContainer.scss */ "./resources/js/components/QuestionsContainer/QuestionsContainer.scss");
/* harmony import */ var _QuestionsContainer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_QuestionsContainer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Spinner/Spinner */ "./resources/js/components/UI/Spinner/Spinner.js");
/* harmony import */ var _QuestionEdit_QuestionEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuestionEdit/QuestionEdit */ "./resources/js/components/QuestionsContainer/QuestionEdit/QuestionEdit.js");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./resources/js/components/Sidebar/Sidebar.js");






var QuestionsCollection = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./QuestionsCollection/QuestionsCollection */ "./resources/js/components/QuestionsContainer/QuestionsCollection/QuestionsCollection.js"));
});
var QuestionBuilder = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./QuestionBuilder/QuestionBuilder */ "./resources/js/components/QuestionsContainer/QuestionBuilder/QuestionBuilder.js"));
});

var QuestionsContainer = function QuestionsContainer() {
  var searchInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var searchHandler = function searchHandler(event) {
    event.preventDefault();
    var query = searchInputRef.current.value;

    if (query && query.trim()) {
      history.push("/questions?query=".concat(query));
    } else {
      history.push('/questions');
    }
  };

  var links = [{
    path: '/questions',
    text: 'Minhas Questões',
    icon: 'person',
    iconColor: 'blue-text'
  }, {
    path: '/questions/bookmarks',
    text: 'Favoritos',
    icon: 'star',
    iconColor: 'yellow-text text-darken-1'
  }, {
    path: '/questions/answers',
    text: 'Questões Respondidas',
    icon: 'check',
    iconColor: 'green-text'
  }];
  var createLink = {
    path: '/questions/create',
    text: 'Nova Questão'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "".concat(_QuestionsContainer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.QuestionsContainer, " container")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/questions/:question/edit",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Editar Quest\xE3o");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/questions/bookmarked",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Favoritos");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/questions/answered",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Quest\xF5es Respondidas");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/questions/create",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Nova Quest\xE3o");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/questions",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Minhas Quest\xF5es");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    links: links,
    createLink: createLink,
    searchHandler: searchHandler,
    searchInputRef: searchInputRef,
    searchPlaceholder: "Procurar Quest\xF5es"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s12 m7 card ".concat(_QuestionsContainer_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Container)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/questions/:question/edit",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QuestionEdit_QuestionEdit__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/questions/create",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuestionBuilder, null));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: "/questions",
    render: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QuestionsCollection, null));
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionsContainer);

/***/ }),

/***/ "./resources/js/components/QuestionsContainer/QuestionsContainer.scss":
/*!****************************************************************************!*\
  !*** ./resources/js/components/QuestionsContainer/QuestionsContainer.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--10-1!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--10-3!./QuestionsContainer.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/QuestionsContainer/QuestionsContainer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/UI/MyCKEditor/MyCKEditor.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/UI/MyCKEditor/MyCKEditor.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);





var MyCKEditor = function MyCKEditor(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default.a,
    data: props.content,
    onChange: function onChange(event, editor) {
      props.setData(editor.getData());
    },
    config: {
      toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'blockQuote', 'imageUpload', 'imageStyle:full', 'imageStyle:side', 'insertTable', '|', 'undo', 'redo'],
      language: 'pt',
      heading: {
        options: [{
          model: 'paragraph',
          title: 'Parágrafo',
          "class": 'ck-heading_paragraph'
        }, {
          model: 'heading1',
          view: 'h2',
          title: 'Título 1',
          "class": 'ck-heading_heading1'
        }, {
          model: 'heading2',
          view: 'h3',
          title: 'Título 2',
          "class": 'ck-heading_heading2'
        }, {
          model: 'heading3',
          view: 'h4',
          title: 'Título 3',
          "class": 'ck-heading_heading3'
        }]
      },
      height: '400px'
    }
  });
};

MyCKEditor.propTypes = {
  content: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  setData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (MyCKEditor);

/***/ })

}]);