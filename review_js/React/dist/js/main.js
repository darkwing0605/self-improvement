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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

// 获取图片相关的数据
var imageData = __webpack_require__(10);

// 利用自执行函数，将图片名信息转成图片URL路径信息
imageData = function getImageURL(imageDataArr) {
	for (var i in imageDataArr) {
		var singleImageData = imageDataArr[i];

		singleImageData.imageURL = __webpack_require__(11)("./" + singleImageData.fileName);

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
			['MozTransform', 'msTransform', 'WebkitTransform', 'transform'].forEach(function (value) {
				styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
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

// 控制组件
var ControllerUnits = React.createClass({
	displayName: 'ControllerUnits',

	handleClick: function handleClick(e) {
		// 如果点击的是当前正在选中态的按钮，则翻转图片，否则将对应的图片居中
		if (this.props.arrange.isCenter) {
			this.props.inverse();
		} else {
			this.props.center();
		}

		e.stopPropagation();
		e.preventDefault();
	},
	render: function render() {
		var controllerUnitClassName = 'controller-unit';

		// 如果对应的是居中的图片，显示控制按钮的居中态
		if (this.props.arrange.isCenter) {
			controllerUnitClassName += ' is-center';

			// 如果同时对应的翻转图片，显示控制按钮的翻转态
			if (this.props.arrange.isInverse) {
				controllerUnitClassName += ' is-inverse';
			}
		}

		return React.createElement('span', { className: controllerUnitClassName, onClick: this.handleClick });
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

			imgFigures.push(React.createElement(ImgFigure, { key: index, data: value, ref: 'imgFigure' + index, arrange: this.state.imgsArrangeArr[index], inverse: this.inverse(index), center: this.center(index) }));

			controllerUnits.push(React.createElement(ControllerUnits, { key: index, arrange: this.state.imgsArrangeArr[index], inverse: this.inverse(index), center: this.center(index) }));
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'iconfont';\n  /* IE9 */\n  src: url(" + __webpack_require__(0) + ");\n  /* IE6-IE8 */\n  src: url(" + __webpack_require__(0) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(5) + ") format(\"woff\"), url(" + __webpack_require__(6) + ") format(\"truetype\"), url(" + __webpack_require__(7) + "#iconfont) format(\"svg\"); }\n\n* {\n  margin: 0;\n  padding: 0; }\n\nhtml, body {\n  width: 100%;\n  height: 100%;\n  background: #222222; }\n\n.content {\n  width: 100%;\n  height: 100%; }\n\n/* stage -- start */\n.stage {\n  position: relative;\n  width: 100%;\n  height: 680px; }\n\n/* stage -- end */\n/* image -- start */\n.img-sec {\n  padding: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #dddddd;\n  -webkit-perspective: 1800px;\n          perspective: 1800px; }\n  .img-figure {\n    position: absolute;\n    width: 320px;\n    height: 360px;\n    padding: 40px;\n    background: #ffffff;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    cursor: pointer;\n    -webkit-transform-origin: 0 50% 0;\n        -ms-transform-origin: 0 50% 0;\n            transform-origin: 0 50% 0;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transition: left .6s ease-in-out, top .6s ease-in-out, -webkit-transform .6s ease-in-out;\n    transition: left .6s ease-in-out, top .6s ease-in-out, -webkit-transform .6s ease-in-out;\n    -o-transition: transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out;\n    transition: transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out;\n    transition: transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out, -webkit-transform .6s ease-in-out; }\n    .img-figure.is-inverse {\n      -webkit-transform: translate(320px) rotateY(180deg);\n              transform: translate(320px) rotateY(180deg); }\n  figcaption {\n    text-align: center; }\n    figcaption .img-title {\n      margin: 20px 0 0 0;\n      color: #a7a0a2;\n      font-size: 16px; }\n    figcaption .img-back {\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      padding: 50px 40px;\n      overflow: auto;\n      color: #a7a0a2;\n      font-size: 22px;\n      line-height: 1.25;\n      text-align: left;\n      background: #ffffff;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transform: rotateY(180deg) translateZ(1px);\n              transform: rotateY(180deg) translateZ(1px);\n      -webkit-backface-visibility: hidden;\n              backface-visibility: hidden; }\n\n/* image -- end */\n/* controller -- start */\n.controller-nav {\n  position: absolute;\n  left: 0;\n  bottom: 30px;\n  z-index: 101;\n  width: 100%;\n  text-align: center; }\n  .controller-unit {\n    display: inline-block;\n    margin: 0 5px;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background: #aaaaaa;\n    border-radius: 50%;\n    -webkit-transform: scale(0.5);\n        -ms-transform: scale(0.5);\n            transform: scale(0.5);\n    -webkit-transition: background-color .3s, -webkit-transform .6s ease-in-out;\n    transition: background-color .3s, -webkit-transform .6s ease-in-out;\n    -o-transition: transform .6s ease-in-out, background-color .3s;\n    transition: transform .6s ease-in-out, background-color .3s;\n    transition: transform .6s ease-in-out, background-color .3s, -webkit-transform .6s ease-in-out; }\n    .controller-unit.is-center {\n      background: #888888;\n      -webkit-transform: scale(1);\n          -ms-transform: scale(1);\n              transform: scale(1); }\n      .controller-unit.is-center::after {\n        color: #ffffff;\n        font-size: 18px;\n        font-family: 'iconfont';\n        line-height: 30px;\n        content: '\\E699';\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale; }\n      .controller-unit.is-center.is-inverse {\n        background: #555555;\n        -webkit-transform: rotateY(180deg);\n                transform: rotateY(180deg); }\n\n/* controller -- end */\n", ""]);

// exports


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRgABAAAAAAWAAAsAAAAAB/wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7kiDY21hcAAAAYAAAABeAAABhpucBr5nbHlmAAAB4AAAAbQAAAHon9xwkmhlYWQAAAOUAAAALgAAADYO5y39aGhlYQAAA8QAAAAcAAAAJAfeA4RobXR4AAAD4AAAAAwAAAAMC+kAAGxvY2EAAAPsAAAACAAAAAgAdgD0bWF4cAAAA/QAAAAfAAAAIAESAGFuYW1lAAAEFAAAAUUAAAJtPlT+fXBvc3QAAAVcAAAAIQAAADJ1iOx4eJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/sE4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDybydzwv4EhhrmBoQEozAiSAwAutw0FeJzFkMENgDAMAy9t6QMxCA8G4sUcXaULdo1iQnkwQS05VhxLiQIsQBQPMYFdGA9OueZ+ZHU/eSZLjUBptXf1nyqiWXYNKplpsHmr/9i87qPTVyiDOrHVl4Qb2aYN8wAAeJwlj89u00AQh3fW9dpO413H/9bZxE68TuyG0hQ7yRqp0Eiol1ZFQqIScOQB6LUXDr0UOCDRZ0BIvESPvEgLzxHYiNEcRvrNN5oPmQj9vTfujAQFaA/V6AS9QgjIPkiKU8ir5RzvQ5SbEQ+pURVVbhVybjwHLkkYN2pZcmIRBhQyWOSNqua4gtXyGB9BE6cA/YF47U+HvnELnaTKbjZn+DtEo2LIjg82p4/XYTMO7Kuu7/d9/6tNTNPGeIdR+MBjx3Q6ZPPDZCK6G83wCLr9Spy/c8cD//2X5WU65Q7A9TUEgzH9ue6Jnu6PIg78vuW5diLcYhLC1Z/dJOim5W+kC2vXX8Zn4xmaoQtt2er3D6GU+n8Sj4BYtXaJMqxWS9XWqrVIzBda0pQkorBNW1VW//ejUBM6a1dK31BrUK1azQEeLjph7xuTqQNdysnTucrGMFHl3oSnxHU5sDyFS1FCOU2GhHqcyqGzZW6pZrpustMegMpGMMHWJ2+SWS9tRjE/dA3xqHlxciYkFOLJWxkzJ25cmx0Von4jY6/DF7u2R29Y6Gf2uZ4gqjUzgy00kP8AHpRCUXicY2BkYGAAYvVARo14fpuvDNwsDCBw9fFXJPr/ERYGZhsgg4OBCSQKAAPNCbwAAHicY2BkYGBu+N/AEMPCAAJAkpEBFTADAEcJAmwEAAAAA+kAAAQAAAAAAAAAAHYA9HicY2BkYGBgZghlYGUAASYg5gJCBob/YD4DABFbAXQAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAmZGJkZmRhYGxgqWktCiPgQEADvQCYgAAAA=="

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPCEtLQoyMDEzLTktMzA6IENyZWF0ZWQuCi0tPgo8c3ZnPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgaWNvbmZvbnQKPC9tZXRhZGF0YT4KPGRlZnM+Cgo8Zm9udCBpZD0iaWNvbmZvbnQiIGhvcml6LWFkdi14PSIxMDI0IiA+CiAgPGZvbnQtZmFjZQogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgYXNjZW50PSI4OTYiCiAgICBkZXNjZW50PSItMTI4IgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgCiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ieCIgdW5pY29kZT0ieCIgaG9yaXotYWR2LXg9IjEwMDEiCmQ9Ik0yODEgNTQzcS0yNyAtMSAtNTMgLTFoLTgzcS0xOCAwIC0zNi41IC02dC0zMi41IC0xOC41dC0yMyAtMzJ0LTkgLTQ1LjV2LTc2aDkxMnY0MXEwIDE2IC0wLjUgMzB0LTAuNSAxOHEwIDEzIC01IDI5dC0xNyAyOS41dC0zMS41IDIyLjV0LTQ5LjUgOWgtMTMzdi05N2gtNDM4djk3ek05NTUgMzEwdi01MnEwIC0yMyAwLjUgLTUydDAuNSAtNTh0LTEwLjUgLTQ3LjV0LTI2IC0zMHQtMzMgLTE2dC0zMS41IC00LjVxLTE0IC0xIC0yOS41IC0wLjUKdC0yOS41IDAuNWgtMzJsLTQ1IDEyOGgtNDM5bC00NCAtMTI4aC0yOWgtMzRxLTIwIDAgLTQ1IDFxLTI1IDAgLTQxIDkuNXQtMjUuNSAyM3QtMTMuNSAyOS41dC00IDMwdjE2N2g5MTF6TTE2MyAyNDdxLTEyIDAgLTIxIC04LjV0LTkgLTIxLjV0OSAtMjEuNXQyMSAtOC41cTEzIDAgMjIgOC41dDkgMjEuNXQtOSAyMS41dC0yMiA4LjV6TTMxNiAxMjNxLTggLTI2IC0xNCAtNDhxLTUgLTE5IC0xMC41IC0zN3QtNy41IC0yNXQtMyAtMTV0MSAtMTQuNQp0OS41IC0xMC41dDIxLjUgLTRoMzdoNjdoODFoODBoNjRoMzZxMjMgMCAzNCAxMnQyIDM4cS01IDEzIC05LjUgMzAuNXQtOS41IDM0LjVxLTUgMTkgLTExIDM5aC0zNjh6TTMzNiA0OTh2MjI4cTAgMTEgMi41IDIzdDEwIDIxLjV0MjAuNSAxNS41dDM0IDZoMTg4cTMxIDAgNTEuNSAtMTQuNXQyMC41IC01Mi41di0yMjdoLTMyN3oiIC8+CiAgICAKCiAgICAKICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ0dXJuIiB1bmljb2RlPSImIzU5MDMzOyIgZD0iTTQ4MS41Nzk2NjUgNTE4LjYwMTYwNGw4NC4zNjg1MjYgMTM0LjAxMTE1NmM2Ljk2NTY0NSAxMC45ODgyNjIgMTAuNDk3MDc1IDIyLjQ5MDIyNCAxMC40OTcwNzUgMzQuMTgzNTQ0IDAgMjQuMTA4MDcxLTE1LjA0MTU3OCA0Ni4yMDYzNjgtMzcuNjM5MjQ5IDU1LjYxOTc2MkwzOTYuMjU2Mzk0IDgxOC45MDMwODhjLTkuOTUwNjI5IDUuMzk3OTQtMjEuMTc4MzQ1IDguMjUwOTE4LTMyLjQ3OTczOSA4LjI1MDkxOC0yMi42MzI0NjMgMC00My4wMDc1MTMtMTAuOTk5NTE4LTU0LjUwMzMzNS0yOS40MjUxN2wtMC40NTUzNzEtMC43MzE2NjQtMC40MDgyOTktMC43NTcyNDdjLTE2LjM1MDM4Ni0zMC4zMDUyMTMtNS4zNTcwMDgtNjcuMDYzMzk1IDI1LjAyNy04My42ODE4ODhsNS4yNDEzNzQtMi43OTQ2NDljLTM2Ljg4NDA0OS0xNy4zMDUxMzEtNzAuNzkxMjk5LTM5Ljk0OTg3NC0xMDEuMjc0NTY4LTY3LjY4NzYxMmwtMC4xODcyNjUtMC4xNzE5MTVjLTM2LjAxNzMwOC0zMy4zOTE1MDUtNjQuNDM5NjM4LTcyLjM1NTkzNS04NC40NzU5NzMtMTE1LjgxMTY1Ni0yMC44NzQ0MjMtNDUuMjc1MTU5LTMxLjQ2MDUyNi05Mi45NzM1MDgtMzEuNDYwNTI2LTE0MS43NzA4ODcgMC0zMy44NDg5MjIgMjguNzQwNTc4LTYxLjM4NzExNiA2NC4wNjgxNzgtNjEuMzg3MTE2IDE3LjAxMDQxOSAwIDMzLjAzMjMyNCA2LjA4MDQ4NSA0NS4xMTA0MDcgMTcuMTI1MDI5IDEyLjcyMDcxOSAxMS42Mjg4NTIgMTkuNzI2Mjc0IDI3LjM0Nzg1OCAxOS43MjYyNzQgNDQuMjYyMDg2IDAgNjMuMjg5NDQyIDI3LjU4NTI2NSAxMjQuOTcyMjkzIDc1LjY4MTY4IDE2OS4yMzc0NDlsMC4yODE0MDkgMC4yNjI5OWMxNS4yNzA3OTggMTQuNDU4MjkzIDMyLjc0NTc5OCAyNy4wNDQ5NiA1MS45NTczNDkgMzcuNTE4NDk4bC02LjA4MzU1NS05LjUxNjc0OC0wLjE3MDg5Mi0wLjI3MjE5OWMtOC43MTk1OTItMTMuOTk5ODUyLTExLjIzMjgzMi0zMC40MzcyMi03LjA3NzE4Ni00Ni4yODYxODYgNC4yNDc3NDQtMTYuMTk5OTYgMTUuMzQ2NTIzLTMwLjIzMzU4MiAzMC40NTI1NjktMzguNTA1OTg5bDAuNDIxNjAyLTAuMjI2MTUxYzkuNzYxMzE4LTUuMTI0NzE3IDIwLjY3NTkwMi03LjgzMjM4NiAzMS41NjM4OC03LjgzMjM4NkM0NDkuNzM1Mzk5IDQ4OC42OTg1NSA0NzAuMDQzOTM0IDQ5OS44NzMwNTQgNDgxLjU3OTY2NSA1MTguNjAxNjA0ek04MzguNjU1MiA0NDUuMzMzOTA0Yy0xNi4zMTM1NDcgMC0zMS45NTY4MjktNi4wMzU0Ni00NC4wNTAyNjItMTYuOTkzMDIzLTEyLjcyMzc4OS0xMS41MzE2MzgtMjAuMDE5OTYyLTI3LjU3NjA1NS0yMC4wMTk5NjItNDQuMDIxNjA5IDAtNjQuNzA0Njc0LTI2Ljg3NjExNC0xMjUuMDY2NDM3LTc1LjY3NDUxNy0xNjkuOTY1MDJsLTAuMzgzNzQtMC4zNTgxNTdjLTE1LjM3NzIyMi0xNC43MDI4NjMtMzIuODYyNDU1LTI3LjQwNzIxLTUxLjk4Mzk1NS0zNy44NjQzNzZsNi4zNjkwNTggMTAuMjM3MTU1YzkuMDk0MTIyIDE0LjYyMDk5OSAxMS40MTA4ODcgMzIuNDI2NTI3IDYuMzU2Nzc4IDQ4Ljg0NzUyMS00Ljg0NDMzMiAxNS43Mzk0NzMtMTYuMDU4NzQ0IDI4LjcwNzgzMi0zMC45MDc5NCAzNS44MzMxMTMtOS40OTAxNDIgNS40Mjk2NjMtMjAuMjY1NTU2IDguMjg5ODA0LTMxLjI3NTMwNyA4LjI4OTgwNC0yMi4zNzM1NjcgMC00My4wMjc5NzktMTEuNTk4MTUyLTU0LjA1MTAzMy0zMC4zMTQ0MjNsLTgzLjY5MTA5Ny0xMzMuMjg2NjU2Yy02LjcwNzc3Mi05LjI5Nzc2LTEwLjI0MzI5NS0yMS4yMjk1MS0xMC4yNDMyOTUtMzQuNjI2NjM1IDAtMjMuODM1ODcxIDE0LjI1ODc0OS00NS41ODYyNDUgMzYuNDI3NjU0LTU1Ljc0MDUxMmwxNDQuMzgzMzg4LTc2LjYzNzQ0OGM5LjE4NjIyLTUuMTYxNTU2IDE5LjczNjUwNy03Ljg4ODY2NyAzMC41NDY3MTMtNy44ODc2NDQgMjIuNDAwMTczIDAuMDAxMDIzIDQzLjQ5NDYwNyAxMS41Mjc1NDQgNTUuMDUyODUgMzAuMDgxMTA5bDAuMzU4MTU3IDAuNTg5NDI0YzguMTQ5NjExIDEzLjg0OTQyNiAxMC4yNzE5NDggMzAuMDczOTQ2IDUuOTc1MDg1IDQ1LjY4MDM4OS00LjQxODYzNiAxNi4wNTM2MjgtMTUuNTIwNDg1IDI5Ljk1OTMzNi0zMC40NjE3NzkgMzguMTUzOTcybC00Ljg0NzQwMSAyLjU4NjkxOGMzNi42Mzc0MzIgMTcuMzkzMTM1IDcwLjgyODEzOSA0MC4yMjgyMTMgMTAwLjg0Nzg0OSA2Ny41MjY5NTNsMC4xOTM0MDUgMC4xNzgwNTVjMzUuOTc3Mzk5IDMzLjM1ODc1OSA2NC4yODUxMTkgNzIuNDEzMjQgODQuMTQxMzUyIDExNi4wODE4MDkgMjAuNTcyNTQ4IDQ1LjI1MzY3IDMxLjAwNTE1NSA5My4yMjcyODggMzEuMDA1MTU1IDE0Mi41OTI2MDJDOTAyLjcyMDMwOCA0MTguNTMyNDkxIDg3NC41NzgzNjQgNDQ1LjMzMzkwNCA4MzguNjU1MiA0NDUuMzMzOTA0eiIgIGhvcml6LWFkdi14PSIxMDI0IiAvPgoKICAgIAoKCiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg=="

/***/ }),
/* 8 */
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

var	fixUrls = __webpack_require__(9);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = [{"fileName":"1.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"2.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"3.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"4.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"5.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"6.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"7.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"8.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"9.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"10.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"11.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"12.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"13.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"14.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"15.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."},{"fileName":"16.jpg","title":"Heaven of time","desc":"Here he comes Here comes Speed Racer."}]

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.jpg": 12,
	"./10.jpg": 13,
	"./11.jpg": 14,
	"./12.jpg": 15,
	"./13.jpg": 16,
	"./14.jpg": 17,
	"./15.jpg": 18,
	"./16.jpg": 19,
	"./2.jpg": 20,
	"./3.jpg": 21,
	"./4.jpg": 22,
	"./5.jpg": 23,
	"./6.jpg": 24,
	"./7.jpg": 25,
	"./8.jpg": 26,
	"./9.jpg": 27
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
webpackContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/1-bd63d.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/10-d7514.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/11-75105.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/12-851d6.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/13-4f0b2.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/14-707f3.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/15-a3b5e.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/16-ffa5b.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2-6fd13.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/3-c8839.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/4-ace3d.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/5-cdb00.jpg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6-15559.jpg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/7-ed3b6.jpg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/8-be1a9.jpg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9-120c5.jpg";

/***/ })
/******/ ]);