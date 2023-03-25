/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
var todoItem = /** @class */ (function () {
    function todoItem(props) {
        this.props = props;
        this.props = props;
    }
    Object.defineProperty(todoItem.prototype, "completed", {
        // getters
        get: function () { return this.props.completed; },
        // setters
        set: function (newValue) { this.props.completed = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "title", {
        get: function () { return this.props.title; },
        set: function (newValue) { this.props.title = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "createdDate", {
        get: function () { return this.props.createdDate; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "dueDate", {
        get: function () { return this.props.dueDate; },
        set: function (newValue) { this.props.dueDate = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "itemId", {
        get: function () { return this.props.itemId; },
        set: function (newValue) { this.props.itemId = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "priority", {
        get: function () { return this.props.priority; },
        set: function (newValue) { this.props.priority = newValue; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(todoItem.prototype, "notes", {
        get: function () { return this.props.notes; },
        set: function (newValue) { this.props.notes = newValue; },
        enumerable: false,
        configurable: true
    });
    return todoItem;
}());



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoList": () => (/* binding */ todoList)
/* harmony export */ });
var todoList = /** @class */ (function () {
    function todoList() {
        this._items = [];
    }
    Object.defineProperty(todoList.prototype, "items", {
        get: function () { return this._items; },
        enumerable: false,
        configurable: true
    });
    todoList.prototype.add = function (newItem) {
        this._items.push(newItem);
    };
    todoList.prototype.remove = function (item) {
        var idx = this._items.indexOf(item);
        this._items.splice(idx, 1);
    };
    todoList.prototype.clearList = function () {
        this._items = [];
    };
    return todoList;
}());



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listView": () => (/* binding */ listView)
/* harmony export */ });
/* harmony import */ var _itemPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _controls_listControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _styles_listView_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);




var listView = /** @class */ (function () {
    function listView(target) {
        this.target = target;
        this.target = target;
        this.itemViewList = this.target.items.map(function (item) { return new _itemPreview__WEBPACK_IMPORTED_MODULE_0__.itemPreview(item); });
    }
    listView.prototype.genHtml = function () {
        var list = document.createElement('div');
        list.className = 'todoList';
        for (var _i = 0, _a = this.itemViewList; _i < _a.length; _i++) {
            var itemView = _a[_i];
            var node = itemView.genHtml();
            node.addEventListener('mousedown', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.mouseDown);
            list.appendChild(node);
        }
        var deletePopups = Array.from(list.querySelectorAll('.delTask'));
        deletePopups.forEach(function (item) {
            item.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.stop);
        });
        var editPopups = Array.from(list.querySelectorAll('.editTask'));
        editPopups.forEach(function (item) {
            item.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.stop);
        });
        var icons = Array.from(list.querySelectorAll('path'));
        var svgs = Array.from(list.querySelectorAll('svg'));
        icons.forEach(function (item) {
            item.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openOptions);
        });
        svgs.forEach(function (item) {
            item.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openOptions);
        });
        return list;
    };
    return listView;
}());



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemPreview": () => (/* binding */ itemPreview)
/* harmony export */ });
/* harmony import */ var _controls_itemControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _styles_itemPreview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


var itemPreview = /** @class */ (function () {
    function itemPreview(target) {
        this.target = target;
        this.target = target;
    }
    Object.defineProperty(itemPreview.prototype, "title", {
        get: function () { return this.target.title; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(itemPreview.prototype, "completed", {
        get: function () { return this.target.completed; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(itemPreview.prototype, "changeTitle", {
        set: function (newTitle) { this.target.title = newTitle; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(itemPreview.prototype, "changeCompleted", {
        set: function (newValue) { this.target.completed = newValue; },
        enumerable: false,
        configurable: true
    });
    itemPreview.prototype.genHtml = function () {
        var outDiv = document.createElement('div');
        outDiv.className = 'itemPreview';
        outDiv.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.focusItem);
        var leftSide = document.createElement('div');
        leftSide.className = 'leftSide';
        var previewCheckbox = document.createElement('div');
        previewCheckbox.className = 'previewCheckboxContainer';
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = this.target.completed;
        checkbox.className = 'previewCheckbox';
        previewCheckbox.appendChild(checkbox);
        previewCheckbox.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_0__.itemPreviewControl.checkboxClick);
        leftSide.appendChild(previewCheckbox);
        var previewTitle = document.createElement('div');
        previewTitle.className = 'previewTitleContainer';
        var title = document.createElement('p');
        title.textContent = this.target.title;
        title.className = 'previewTitle';
        previewTitle.appendChild(title);
        leftSide.appendChild(previewTitle);
        outDiv.appendChild(leftSide);
        var previewOptions = document.createElement('div');
        previewOptions.className = 'previewOptionsContainer';
        var options = document.createElement('button');
        var dropDown = document.createElement('div');
        dropDown.className = 'dropdown-content';
        var editTask = document.createElement('div');
        editTask.textContent = 'view details';
        editTask.className = 'editTask';
        // editTask.addEventListener('click', itemPreviewControl.stop);
        var delTask = document.createElement('div');
        delTask.textContent = 'delete task';
        delTask.className = 'delTask';
        // delTask.addEventListener('click', itemPreviewControl.stop);
        dropDown.appendChild(editTask);
        dropDown.appendChild(delTask);
        options.className = 'previewOptions';
        //options.addEventListener('click', itemPreviewControl.openOptions);
        options.appendChild(dropDown);
        options.innerHTML += "\n    <svg class=\"optionsIcon\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\">\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.865 11.153c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787-1.03 0-1.865-.8-1.865-1.787 0-.987.835-1.787 1.865-1.787zm0-5.566c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787C6.835 9.16 6 8.36 6 7.374c0-.987.835-1.787 1.865-1.787zm1.871-3.8C9.736.8 8.901 0 7.871 0S6.007.8 6.007 1.787c0 .987.835 1.787 1.864 1.787 1.03 0 1.865-.8 1.865-1.787z\" fill=\"currentColor\">\n      </path>\n    </svg>";
        previewOptions.appendChild(options);
        outDiv.appendChild(previewOptions);
        return outDiv;
    };
    return itemPreview;
}());



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemPreviewControl": () => (/* binding */ itemPreviewControl)
/* harmony export */ });
var itemPreviewControl = /** @class */ (function () {
    function itemPreviewControl() {
    }
    itemPreviewControl.checkboxClick = function (e) {
        e.stopPropagation();
    };
    itemPreviewControl.focusItem = function (e) {
        var target = e.target;
        if (target instanceof HTMLElement) {
            var finalTarget = target;
            if (!finalTarget.classList.contains('itemPreview')) {
                while (!finalTarget.classList.contains('itemPreview')) {
                    finalTarget = finalTarget.parentElement;
                }
            }
            var classList = Array.from(finalTarget.classList);
            if (classList.includes('selected')) {
                finalTarget.classList.remove('selected');
            }
            else {
                finalTarget.classList.add('selected');
            }
        }
    };
    itemPreviewControl.openOptions = function (e) {
        var target = e.target;
        var t = target;
        var finalTarget;
        if (t.localName === 'path') {
            finalTarget = t.parentElement.previousElementSibling;
        }
        else if (t.localName === 'svg') {
            finalTarget = t.previousElementSibling;
        }
        finalTarget.classList.toggle("show");
        e.stopPropagation();
    };
    itemPreviewControl.stop = function (e) {
        e.stopPropagation();
    };
    return itemPreviewControl;
}());



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_itemPreview_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 7 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 8 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 9 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 10 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 11 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 12 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 13 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.itemPreviewContainer{\n  width: 100%;\n}\n\n.itemPreview{\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 98%;\n  border-radius: 10px;\n}\n\n.itemPreview:hover{\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.selected, .selected:hover{\n  /* border: 1px solid #0074e0; */\n  background-color: rgba(0, 255, 255, 0.3);\n}\n\n.leftSide{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: 10px;\n  gap: 5px;\n}\n\n.previewCheckbox{\n  cursor: pointer;\n}\n\n.previewOptionsContainer{\n  margin-right: 10px;\n}\n\n.previewOptions{\n  cursor: pointer;\n  background-color: inherit;\n  border: none;\n}\n\n.previewOptions > svg{\n  vertical-align: middle;\n  color: transparent;\n}\n\n.itemPreview:hover svg{\n  color: #aaaaaa;\n}\n\n.itemPreview:hover svg:hover{\n  color: #0074e0;\n}\n\n/* dropdown */\n/* https://www.w3schools.com/howto/howto_js_dropdown.asp */\n\n\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  width: 120px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n  border-radius: 5px;\n}\n\n.dropdown-content div {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content div:hover {background-color: #ddd;}\n\n.show {display: block;}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 14 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 15 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listControl": () => (/* binding */ listControl)
/* harmony export */ });
var listControl = /** @class */ (function () {
    function listControl() {
    }
    listControl.isAbove = function (nodeA, nodeB) {
        var rectA = nodeA.getBoundingClientRect();
        var rectB = nodeB.getBoundingClientRect();
        return (rectA.height / 2 + rectA.top) < (rectB.height / 2 + rectB.top);
    };
    listControl.mouseMove = function (e) {
        e.stopPropagation();
        listControl.itemRect = listControl.targetItem.getBoundingClientRect();
        if (!listControl.dragging) {
            listControl.dragging = true;
            listControl.placeholder = document.createElement('div');
            listControl.placeholder.classList.add('placeholder');
            listControl.targetItem.parentNode.insertBefore(listControl.placeholder, listControl.targetItem.nextSibling);
            listControl.targetItem.style.width = "".concat(listControl.itemRect.width, "px");
            listControl.placeholder.style.height = "".concat(listControl.itemRect.height, "px");
            listControl.placeholder.style.width = "".concat(listControl.itemRect.width, "px");
        }
        listControl.targetItem.style.position = 'absolute';
        listControl.targetItem.style.left = "".concat(e.pageX - listControl.varX, "px");
        listControl.targetItem.style.top = "".concat(e.pageY - listControl.varY, "px");
        listControl.prev = listControl.targetItem.previousElementSibling;
        listControl.next = listControl.targetItem.nextElementSibling.nextElementSibling;
        if (listControl.prev && listControl.isAbove(listControl.targetItem, listControl.prev)) {
            listControl.placeholder.parentNode.insertBefore(listControl.prev, listControl.placeholder.nextElementSibling);
            return;
        }
        if (listControl.next && listControl.isAbove(listControl.next, listControl.targetItem)) {
            listControl.next.parentNode.insertBefore(listControl.placeholder, listControl.next.nextElementSibling);
            listControl.next.parentNode.insertBefore(listControl.targetItem, listControl.placeholder);
        }
    };
    listControl.mouseUp = function (e) {
        e.stopPropagation();
        if (listControl.placeholder && listControl.placeholder.parentNode) {
            listControl.placeholder.parentNode.removeChild(listControl.placeholder);
        }
        // return item to list upon release of mouse button:
        listControl.targetItem.style.removeProperty('position');
        listControl.targetItem.style.removeProperty('top');
        listControl.targetItem.style.removeProperty('left');
        listControl.varX = null, listControl.varY = null, listControl.targetItem = null, listControl.dragging = false;
        document.removeEventListener('mousemove', listControl.mouseMove);
        document.removeEventListener('mouseup', listControl.mouseUp);
    };
    listControl.mouseDown = function (e) {
        e.stopPropagation();
        listControl.targetItem = e.target;
        while (listControl.targetItem.parentElement.className !== 'todoList') {
            listControl.targetItem = listControl.targetItem.parentElement;
        }
        var rect = listControl.targetItem.getBoundingClientRect();
        // space outside page x: mu = px - (L0 + u)
        // space outside page y: nu = py - (T0 + v)
        listControl.varX = e.pageX - rect.left; // px - L0 = (u + mu) lhs is nonconstant while rhs is
        listControl.varY = e.pageY - rect.top; // py - T0 = (v + nu)
        document.addEventListener('mousemove', listControl.mouseMove);
        document.addEventListener('mouseup', listControl.mouseUp);
    };
    listControl.targetItem = null;
    listControl.varX = 0;
    listControl.varY = 0;
    listControl.dragging = false;
    listControl.placeholder = null;
    listControl.itemRect = null;
    listControl.prev = null;
    listControl.next = null;
    return listControl;
}());



/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 18 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".todoList{\n  width: 33vw;\n  margin-top: 10vh;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 5px;\n  padding: 20px;\n  border-radius: 16px;\n  min-height: 70vh;\n}\n\n.placeholder{\n  background-color: #edf2f7;\n  border: 1px dashed #cbd5e0;\n  border-radius: 10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_models_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_models_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_views_listView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



var testDateString = '2023-04-20';
var rawTestDateParams = testDateString.split('-');
var _a = rawTestDateParams.map(function (item) {
    var idx = rawTestDateParams.indexOf(item);
    return (idx === 1) ? (+item) - 1 : +item;
}), testYear = _a[0], testMonth = _a[1], testDay = _a[2];
var params1 = {
    completed: false,
    title: 'Test Todo Item 1',
    createdDate: new Date(),
    dueDate: new Date(testYear, testMonth, testDay),
    itemId: 0,
    priority: 'Low',
};
var params2 = {
    completed: false,
    title: 'Test Todo Item 2',
    createdDate: new Date(),
    dueDate: new Date(testYear, testMonth, testDay),
    itemId: 0,
    priority: 'Medium',
};
var params3 = {
    completed: false,
    title: 'Test Todo Item 3',
    createdDate: new Date(),
    dueDate: new Date(testYear, testMonth, testDay),
    itemId: 0,
    priority: 'High',
};
var params4 = {
    completed: false,
    title: 'Test Todo Item 4',
    createdDate: new Date(),
    dueDate: new Date(testYear, testMonth, testDay),
    itemId: 0,
    priority: 'High',
};
var params5 = {
    completed: false,
    title: 'Test Todo Item 5',
    createdDate: new Date(),
    dueDate: new Date(testYear, testMonth, testDay),
    itemId: 0,
    priority: 'High',
};
var newItem1 = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params1);
var newItem2 = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params2);
var newItem3 = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params3);
var newItem4 = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params4);
var newItem5 = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params5);
var todo1 = new _modules_models_list__WEBPACK_IMPORTED_MODULE_1__.todoList();
todo1.add(newItem1);
todo1.add(newItem2);
todo1.add(newItem3);
todo1.add(newItem4);
todo1.add(newItem5);
var newListView = new _modules_views_listView__WEBPACK_IMPORTED_MODULE_2__.listView(todo1);
var itemContainer = document.querySelector('.content');
var listviewHtml = newListView.genHtml();
itemContainer.appendChild(listviewHtml);

})();

/******/ })()
;