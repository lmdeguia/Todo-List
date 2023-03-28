/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
        console.log("list item ".concat(idx, " removed"));
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

"use strict";
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
        var _this = this;
        var list = document.createElement('div');
        list.className = 'todoList';
        for (var _i = 0, _a = this.itemViewList; _i < _a.length; _i++) {
            var itemView = _a[_i];
            var preview = itemView.genHtml();
            preview.addEventListener('mousedown', _controls_listControl__WEBPACK_IMPORTED_MODULE_2__.listControl.mouseDown);
            list.appendChild(preview);
        }
        var viewItem = document.querySelector('.view-item');
        viewItem.addEventListener('click', function (e) {
            _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openDetail(e, _this.target.items);
        });
        var delItem = document.querySelector('.del-item');
        delItem.addEventListener('click', function (e) {
            _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.delItem(e, _this.target.items);
        });
        var icons = Array.from(list.querySelectorAll('path'));
        var svgs = Array.from(list.querySelectorAll('svg'));
        svgs.forEach(function (svg) {
            svg.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.stop);
            svg.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openDropdown);
        });
        icons.forEach(function (icon) {
            icon.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.stop);
            icon.addEventListener('click', _controls_itemControl__WEBPACK_IMPORTED_MODULE_1__.itemPreviewControl.openDropdown);
        });
        return list;
    };
    return listView;
}());



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        options.className = 'previewOptions';
        options.innerHTML += "\n    <svg class=\"optionsIcon\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"display: block; float: right;\">\n      <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.865 11.153c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787-1.03 0-1.865-.8-1.865-1.787 0-.987.835-1.787 1.865-1.787zm0-5.566c1.03 0 1.864.8 1.864 1.787 0 .987-.835 1.787-1.864 1.787C6.835 9.16 6 8.36 6 7.374c0-.987.835-1.787 1.865-1.787zm1.871-3.8C9.736.8 8.901 0 7.871 0S6.007.8 6.007 1.787c0 .987.835 1.787 1.864 1.787 1.03 0 1.865-.8 1.865-1.787z\" fill=\"currentColor\">\n      </path>\n    </svg>";
        previewOptions.appendChild(options);
        outDiv.appendChild(previewOptions);
        outDiv.setAttribute('data-key', "".concat(this.target.itemId));
        return outDiv;
    };
    return itemPreview;
}());



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemPreviewControl": () => (/* binding */ itemPreviewControl)
/* harmony export */ });
/* harmony import */ var _views_itemDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);

var itemPreviewControl = /** @class */ (function () {
    function itemPreviewControl() {
    }
    itemPreviewControl.checkboxClick = function (e) {
        e.stopPropagation(); //update later to track checkbox
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
    itemPreviewControl.openDropdown = function (e) {
        var modalContainer = document.querySelector('.dropdown-modal-container');
        var viewItem = document.querySelector('.view-item');
        var delItem = document.querySelector('.del-item');
        var target = e.target;
        var finalTarget = target;
        while (!finalTarget.classList.contains('itemPreview')) {
            finalTarget = finalTarget.parentElement;
        }
        var itemId = finalTarget.dataset['key'];
        viewItem.setAttribute('id', itemId);
        delItem.setAttribute('id', itemId);
        var rect = target.getBoundingClientRect();
        modalContainer.style.position = 'absolute';
        modalContainer.style.top = "".concat(rect.bottom, "px");
        modalContainer.style.left = "".concat(rect.left, "px");
        modalContainer.classList.add('show');
    };
    itemPreviewControl.openDetail = function (e, items) {
        var content = document.querySelector('.content');
        if (content.children.length > 1) {
            content.children[1].remove();
        }
        var viewItem = e.target;
        var item = items.find(function (todo) { return todo.itemId === viewItem.id; });
        var detailViewObj = new _views_itemDetail__WEBPACK_IMPORTED_MODULE_0__.itemDetail(item);
        var detailView = detailViewObj.genHtml();
        content.appendChild(detailView);
        var modalContainer = document.querySelector('.dropdown-modal-container');
        modalContainer.classList.remove('show');
    };
    itemPreviewControl.delItem = function (e, items) {
        var delItem = e.target;
        var content = document.querySelector('.content');
        if (content.children.length > 1) {
            var currentDetail = content.children[1];
            if (currentDetail.dataset['key'] === delItem.id) {
                currentDetail.remove();
            }
        }
        var item = items.find(function (todo) { return todo.itemId === delItem.id; });
        var idx = items.indexOf(item);
        items.splice(idx, 1);
        console.log(items);
        var target = document.querySelector("[data-key='".concat(delItem.id, "'].itemPreview"));
        target.remove();
        var modalContainer = document.querySelector('.dropdown-modal-container');
        modalContainer.classList.remove('show');
    };
    itemPreviewControl.stop = function (e) {
        e.stopPropagation();
    };
    return itemPreviewControl;
}());



/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.itemPreviewContainer{\n  width: 100%;\n}\n\n.itemPreview{\n  user-select: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 98%;\n  height: 50px;\n  border-radius: 10px;\n}\n\n.itemPreview:hover{\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.selected, .selected:hover{\n  /* border: 1px solid #0074e0; */\n  background-color: rgba(0, 255, 255, 0.3);\n}\n\n.leftSide{\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-left: 10px;\n  gap: 5px;\n}\n\n.previewCheckbox{\n  cursor: pointer;\n}\n\n.previewOptionsContainer{\n  margin-right: 10px;\n}\n\n.previewOptions{\n  cursor: pointer;\n  background-color: inherit;\n  border: none;\n}\n\n.previewOptions > svg{\n  position: sticky;\n  color: transparent;\n}\n\n.itemPreview:hover svg{\n  color: #aaaaaa;\n}\n\n.itemPreview:hover svg:hover{\n  color: #0074e0;\n}\n\n/* dropdown */\n/* https://www.w3schools.com/howto/howto_js_dropdown.asp */\n\n\n\n.dropdown-content {\n  display: none;\n  position: relative;\n  left: 40px;\n  top: 40px;\n  background-color: #f1f1f1;\n  width: 120px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  border-radius: 10px;\n  z-index: 2;\n}\n\n.dropdown-content div{\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block !important;\n}\n\n.dropdown-content div:nth-child(1) {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.dropdown-content div:nth-child(2) {\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.disabled{\n  color: transparent !important;\n}\n\n.dropdown-content div:hover {background-color: #ddd;}\n\n.show {display: block;}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 14 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";


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

"use strict";
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
            listControl.placeholder.style.minHeight = "".concat(listControl.itemRect.height, "px");
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

"use strict";
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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n  --scrollbar-foreground: #999;\n  --scrollbar-background: #333;\n}\n\n\n.todoList{\n  width: 33vw;\n  margin-top: 10vh;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 5px;\n  padding: 20px;\n  border-radius: 16px;\n  height: 70vh;\n  width: 30vw;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n\n.placeholder{\n  background-color: #edf2f7;\n  border: 1px dashed #cbd5e0;\n  border-radius: 12px;\n}\n\n\n.todoList::-webkit-scrollbar{\n  width: 8px;\n  height: 10vh;\n}\n\n.todoList::-webkit-scrollbar-thumb{\n  left: 40px;\n  background: transparent;\n  border-radius: 16px;\n}\n\n.todoList::-webkit-scrollbar-thumb:hover{\n  background: rgba(153, 153, 153, 0.5);\n  border-right: 2px solid white;\n}\n\n.todoList::-webkit-scrollbar-track{\n  height: 50vh;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  background: transparent;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 19 */
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemDetail": () => (/* binding */ itemDetail)
/* harmony export */ });
/* harmony import */ var _controls_itemDetailControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _styles_itemDetail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);


var itemDetail = /** @class */ (function () {
    function itemDetail(target) {
        this.target = target;
        this.target = target;
    }
    itemDetail.prototype.genHtml = function () {
        var itemDetail = document.createElement('div');
        var closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener('click', _controls_itemDetailControl__WEBPACK_IMPORTED_MODULE_0__.itemDetailControl.closeDetail);
        itemDetail.appendChild(closeBtn);
        itemDetail.className = 'itemDetail';
        var itemTitleContainer = document.createElement('div');
        var itemTitle = document.createElement('h2');
        itemTitle.textContent = this.target.title;
        itemTitleContainer.appendChild(itemTitle);
        var itemId = document.createElement('div');
        itemId.textContent = this.target.itemId;
        itemTitleContainer.className = 'itemTitleContainer';
        itemDetail.setAttribute('data-key', "".concat(this.target.itemId));
        itemDetail.appendChild(itemTitleContainer);
        itemDetail.appendChild(itemId);
        return itemDetail;
    };
    return itemDetail;
}());



/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemDetailControl": () => (/* binding */ itemDetailControl)
/* harmony export */ });
var itemDetailControl = /** @class */ (function () {
    function itemDetailControl() {
    }
    itemDetailControl.closeDetail = function (e) {
        var target = e.target;
        target.parentElement.remove();
    };
    return itemDetailControl;
}());



/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_itemDetail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 23 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".itemDetail{\n  width: 33vw;\n  margin-top: 10vh;\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 5px;\n  padding: 20px;\n  padding-left: 40px;\n  border-radius: 16px;\n  min-height: 70vh;\n  width: 30vw;\n}\n\n.itemTitleContainer{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  width: 100%;\n}\n\n.itemTitleContainer:hover{\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.itemTitle{\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n\n.close{\n  cursor: pointer;\n  position: relative;\n  top: -10px;\n  left: 12rem;\n  color: #aaaaaa;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover{\n  color: #4a4a4a;\n  \n}", ""]);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_models_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_models_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_views_listView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_3__);




var testDateString = '2023-04-20';
var rawTestDateParams = testDateString.split('-');
var _a = rawTestDateParams.map(function (item) {
    var idx = rawTestDateParams.indexOf(item);
    return (idx === 1) ? (+item) - 1 : +item;
}), testYear = _a[0], testMonth = _a[1], testDay = _a[2];
var todo1 = new _modules_models_list__WEBPACK_IMPORTED_MODULE_1__.todoList();
var itemAmount = 15;
for (var i = 0; i < itemAmount; i++) {
    var params = {
        completed: false,
        title: "Test Todo Item ".concat(i + 1),
        createdDate: new Date(),
        dueDate: new Date(testYear, testMonth, testDay),
        itemId: "".concat(uniqid__WEBPACK_IMPORTED_MODULE_3__()),
        priority: 'High',
    };
    var newItem = new _modules_models_item__WEBPACK_IMPORTED_MODULE_0__.todoItem(params);
    todo1.add(newItem);
}
var newListView = new _modules_views_listView__WEBPACK_IMPORTED_MODULE_2__.listView(todo1);
var content = document.querySelector('.content');
var listviewHtml = newListView.genHtml();
content.appendChild(listviewHtml);

})();

/******/ })()
;