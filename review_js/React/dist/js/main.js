/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

// 获取图片相关的数据
var imageData = __webpack_require__(6);

// 利用自执行函数，将图片名信息转成图片URL路径信息
imageData = function getImageURL(imageDataArr) {
	for (var i in imageDataArr) {
		var singleImageData = imageDataArr[i];

		singleImageData.imageURL = __webpack_require__(7)("./" + singleImageData.fileName);

		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
}(imageData);

/*
 * 获取区间内的一个随机数
 */
function getRangeRandom(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}

/*
 * 获取0-30°之间的一个正负值
 */
function get30DegRandom() {
	return (Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30);
}

var ImgFigure = React.createClass({
	displayName: 'ImgFigure',

	/*
  * imgFigure的点击处理函数
  */
	handleClick: function handleClick(e) {
		if (this.props.arrange.isCenter) {
			this.props.inverse();
		} else {
			this.props.center();
		}

		e.stopPropagation();
		e.preventDefault();
	},

	render: function render() {

		var styleObj = {};

		// 如果props属性中指定了这张图片的位置，则使用
		if (this.props.arrange.pos) {
			styleObj = this.props.arrange.pos;
		};

		// 如果图片的旋转角度有值并且不为0，添加旋转角度
		if (this.props.arrange.rotate) {
			['-moz-', '-ms-', '-webkit-', '-o-', ''].forEach(function (value) {
				styleObj['transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
			}.bind(this));
		}

		if (this.props.arrange.isCenter) {
			styleObj.zIndex = 11;
		}

		var imgFigureClassName = "img-figure";
		imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

		return React.createElement(
			'figure',
			{ className: imgFigureClassName, style: styleObj, onClick: this.handleClick },
			React.createElement('img', { src: this.props.data.imageURL, alt: this.props.data.title }),
			React.createElement(
				'figcaption',
				null,
				React.createElement(
					'h2',
					{ className: 'img-title' },
					this.props.data.title
				),
				React.createElement(
					'div',
					{ className: 'img-back', onClick: this.handleClick },
					React.createElement(
						'p',
						null,
						this.props.data.desc
					)
				)
			)
		);
	}
});

var GalleryByReactApp = React.createClass({
	displayName: 'GalleryByReactApp',

	Constant: {
		centerPos: {
			left: 0,
			right: 0
		},
		hPosRange: { // 水平方向的取值范围
			leftSecX: [0, 0],
			rightSecX: [0, 0],
			y: [0, 0]
		},
		vPosRange: { // 垂直方向的取值范围
			x: [0, 0],
			topY: [0, 0]
		}
	},

	/*
  * 翻转图片
  * @param index输入当前被执行inverse操作的图片对应的图片信息数组的index值
  * @return {Function} 这是一个闭包函数，其内return一个真正待被执行的函数
  */
	inverse: function inverse(index) {
		return function () {
			var imgsArrangeArr = this.state.imgsArrangeArr;

			imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;

			this.setState({
				imgsArrangeArr: imgsArrangeArr
			});
		}.bind(this);
	},

	/*
 	 * 重新布局所有图片
 	 * @param centerIndex 指定居中排布哪个图片
 	 */
	rearrange: function rearrange(centerIndex) {
		var imgsArrangeArr = this.state.imgsArrangeArr,
		    Constant = this.Constant,
		    centerPos = Constant.centerPos,
		    hPosRange = Constant.hPosRange,
		    vPosRange = Constant.vPosRange,
		    hPosRangeLeftSecX = hPosRange.leftSecX,
		    hPosRangeRightSecX = hPosRange.rightSecX,
		    hPosRangeY = hPosRange.y,
		    vPosRangeTopY = vPosRange.topY,
		    vPosRangeX = vPosRange.x,
		    imgsArrangeTopArr = [],

		// 上侧区域去一个或者不取
		topImgNum = Math.floor(Math.random() * 2),
		    topImgSpliceIndex = 0,
		    imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex, 1);

		imgsArrangeCenterArr[0] = {
			// 首先居中centerIndex的图片
			pos: centerPos,

			//居中的centerIndex的图片不需要旋转
			rotate: 0,

			isCenter: true
		};

		// 取出要布局上侧的图片的状态信息
		topImgSpliceIndex = Math.floor(Math.random() * (imgsArrangeArr.length - topImgNum));
		imgsArrangeTopArr = imgsArrangeArr.splice(topImgSpliceIndex, topImgNum);

		// 布局位于上侧的图片
		imgsArrangeTopArr.forEach(function (value, index) {
			imgsArrangeTopArr[index] = {
				pos: {
					top: getRangeRandom(vPosRangeTopY[0], vPosRangeTopY[1]),
					left: getRangeRandom(vPosRangeX[0], vPosRangeX[1])
				},
				rotate: get30DegRandom(),
				isCenter: false
			};
		});

		// 布局左右两侧的图片
		for (var i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
			var hPosRangeLORX = null;

			//前半部分布局左边，又半部分布局右边
			if (i < k) {
				hPosRangeLORX = hPosRangeLeftSecX;
			} else {
				hPosRangeLORX = hPosRangeRightSecX;
			}

			imgsArrangeArr[i] = {
				pos: {
					top: getRangeRandom(hPosRangeY[0], hPosRangeY[1]),
					left: getRangeRandom(hPosRangeLORX[0], hPosRangeLORX[1])
				},
				rotate: get30DegRandom(),
				isCenter: false
			};
		}

		if (imgsArrangeTopArr && imgsArrangeTopArr[0]) {
			imgsArrangeArr.splice(topImgSpliceIndex, 0, imgsArrangeTopArr[0]);
		}

		imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

		this.setState({
			imgsArrangeArr: imgsArrangeArr
		});
	},

	/*
  * 利用rearrange函数，居中对应index的图片
  * @param index，需要被居中的图片对应的图片信息数组的index值
  * @return {Function}
  */
	center: function center(index) {
		return function () {
			this.rearrange(index);
		}.bind(this);
	},

	getInitialState: function getInitialState() {
		return {
			imgsArrangeArr: [
				/*{
    	pos: {
    		left: '0',
    		top: '0'
    	},
    	// 旋转角度
    	rotate: 0,
    	// 图片正反面，默认正面false
    	isInverse: false,
    	// 图片是否居中
    	isCenter: false
    }*/
			]
		};
	},

	// 组件加载以后，为每张图片计算其位置范围
	componentDidMount: function componentDidMount() {
		// 首先拿到舞台的大小
		var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
		    stageW = stageDOM.scrollWidth,
		    stageH = stageDOM.scrollHeight,
		    halfStageW = Math.ceil(stageW / 2),
		    halfStageH = Math.ceil(stageH / 2);

		// 拿到一个imageFigure的大小
		var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
		    imgW = imgFigureDOM.scrollWidth,
		    imgH = imgFigureDOM.scrollHeight,
		    halfImgW = Math.ceil(imgW / 2),
		    halfImgH = Math.ceil(imgH / 2);

		// 计算中心图片的位置点
		this.Constant.centerPos = {
			left: halfStageW - halfImgW,
			top: halfStageH - halfImgH
		};

		// 计算左右侧区域图片排布位置的取值范围
		this.Constant.hPosRange.leftSecX[0] = -halfImgW;
		this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
		this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
		this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
		this.Constant.hPosRange.y[0] = -halfImgH;
		this.Constant.hPosRange.y[1] = stageH - halfImgH;

		// 计算上侧区域图片排布位置的取值范围
		this.Constant.vPosRange.topY[0] = -halfImgH;
		this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;
		this.Constant.vPosRange.x[0] = halfStageW - imgW;
		this.Constant.vPosRange.x[1] = halfStageW;

		this.rearrange(0);
	},

	render: function render() {

		var controllerUnits = [],
		    imgFigures = [];

		imageData.forEach(function (value, index) {
			if (!this.state.imgsArrangeArr[index]) {
				this.state.imgsArrangeArr[index] = {
					pos: {
						left: 0,
						top: 0
					},
					rotate: 0,
					isInverse: false,
					isCenter: false
				};
			};

			imgFigures.push(React.createElement(ImgFigure, { data: value, ref: 'imgFigure' + index, arrange: this.state.imgsArrangeArr[index], inverse: this.inverse(index), center: this.center(index) }));
		}.bind(this));

		return React.createElement(
			'section',
			{ className: 'stage', ref: 'stage' },
			React.createElement(
				'section',
				{ className: 'img-sec' },
				imgFigures
			),
			React.createElement(
				'nav',
				{ className: 'controller-nav' },
				controllerUnits
			)
		);
	}
});

ReactDOM.render(React.createElement(GalleryByReactApp, null), document.getElementById('content'));

module.exports = GalleryByReactApp;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./common.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/lib/index.js!../../node_modules/sass-loader/lib/loader.js!./common.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  background: #222222; }\n\n.content {\n  width: 100%;\n  height: 100%; }\n\n/* stage -- start */\n.stage {\n  position: relative;\n  width: 100%;\n  height: 680px; }\n\n/* stage -- end */\n/* image -- start */\n.img-sec {\n  padding: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #dddddd;\n  -webkit-perspective: 1800px;\n          perspective: 1800px; }\n  .img-figure {\n    position: absolute;\n    width: 320px;\n    height: 360px;\n    padding: 40px;\n    background: #ffffff;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    cursor: pointer;\n    -webkit-transform-origin: 0 50% 0;\n        -ms-transform-origin: 0 50% 0;\n            transform-origin: 0 50% 0;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transition: left .6s ease-in-out, top .6s ease-in-out, -webkit-transform .6s ease-in-out;\n    transition: left .6s ease-in-out, top .6s ease-in-out, -webkit-transform .6s ease-in-out;\n    -o-transition: transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out;\n    transition: transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out;\n    transition: transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out, -webkit-transform .6s ease-in-out; }\n    .img-figure.is-inverse {\n      -webkit-transform: translate(320px) rotateY(180deg);\n              transform: translate(320px) rotateY(180deg); }\n  figcaption {\n    text-align: center; }\n    figcaption .img-title {\n      margin: 20px 0 0 0;\n      color: #a7a0a2;\n      font-size: 16px; }\n    figcaption .img-back {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      padding: 50px 40px;\n      overflow: auto;\n      color: #a7a0a2;\n      font-size: 22px;\n      line-height: 1.25;\n      text-align: left;\n      background: #ffffff;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transform: rotateY(180deg) translateZ(1px);\n              transform: rotateY(180deg) translateZ(1px);\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n/* image -- end */\n/* controller -- start */\n.controller-nav {\n  position: absolute;\n  left: 0;\n  bottom: 30px;\n  z-index: 101;\n  width: 100%;\n  text-align: center; }\n\n/* controller -- end */\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = [{"fileName":"1.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"2.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"3.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"4.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"5.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"6.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"7.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"8.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"9.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"10.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"11.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"12.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"13.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"14.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"15.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"16.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."}]

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.jpg": 8,
	"./10.jpg": 9,
	"./11.jpg": 10,
	"./12.jpg": 11,
	"./13.jpg": 12,
	"./14.jpg": 13,
	"./15.jpg": 14,
	"./16.jpg": 15,
	"./2.jpg": 16,
	"./3.jpg": 17,
	"./4.jpg": 18,
	"./5.jpg": 19,
	"./6.jpg": 20,
	"./7.jpg": 21,
	"./8.jpg": 22,
	"./9.jpg": 23
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 7;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd63d00550899d17d96eab0e523e191a.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d751435c79f8947a09d2247b694c9f38.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "751053009988ada921063b9c976a0231.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "851d60748c878027e7a52c42c441b138.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4f0b2bbd13d80bb56db798dffb9bf438.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "707f3ac5e9fc103169b34fe0b01f59d3.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a3b5eb2fd4be679210afd738fcf8edb8.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ffa5badd054f465bf879543954816c29.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6fd1361a03f7cf3438b3aab6bc409c7e.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c88397eabc61b0cd856c63dba9af15f6.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ace3d5b785f01689d46740d26b55d68a.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cdb0062838530082085a0dd3e2f0b1d1.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1555904a3ed0f25d93fafb91d409d99e.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ed3b6061163c390a6c6a9aea559e6d06.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be1a90b6fc3184f6a923cb3720b92ec4.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "120c52ed00e61c10a538b35b498020e4.jpg";

/***/ })
/******/ ]);