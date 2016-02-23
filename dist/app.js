module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _colors = __webpack_require__(20);

	var _MuiThemeProvider = __webpack_require__(33);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _appBar = __webpack_require__(34);

	var _appBar2 = _interopRequireDefault(_appBar);

	var _searchBox = __webpack_require__(63);

	var _searchBox2 = _interopRequireDefault(_searchBox);

	var _searchResults = __webpack_require__(104);

	var _searchResults2 = _interopRequireDefault(_searchResults);

	var _reactRedux = __webpack_require__(106);

	var _redux = __webpack_require__(107);

	var _searchActions = __webpack_require__(108);

	var searchActionCreators = _interopRequireWildcard(_searchActions);

	__webpack_require__(110);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var muiTheme = (0, _getMuiTheme2.default)({
	  palette: {
	    accent1Color: _colors.deepOrange500
	  }
	}, { userAgent: 'all' });

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _MuiThemeProvider2.default,
	        { muiTheme: muiTheme },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_appBar2.default, {
	            title: 'Travel Stats',
	            iconClassNameRight: 'muidocs-icon-navigation-expand-more'
	          }),
	          _react2.default.createElement(_searchBox2.default, {
	            autocompleteData: this.props.searchAutocomplete,
	            onSearchSubmit: this.props.search,
	            onSearchUpdate: this.props.fetchAutocompleteResults }),
	          _react2.default.createElement(_searchResults2.default, { results: this.props.searchResults })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    searchAutocomplete: state.searchAutocomplete,
	    searchResults: state.searchResults
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(searchActionCreators, dispatch);
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getMuiTheme;

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _colorManipulator = __webpack_require__(21);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _autoPrefix = __webpack_require__(23);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _lightBaseTheme = __webpack_require__(25);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _zIndex = __webpack_require__(27);

	var _zIndex2 = _interopRequireDefault(_zIndex);

	var _transformers = __webpack_require__(28);

	var _lodash3 = __webpack_require__(32);

	var _lodash4 = _interopRequireDefault(_lodash3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	function getMuiTheme(baseTheme, muiTheme) {
	  baseTheme = (0, _lodash2.default)({}, _lightBaseTheme2.default, baseTheme);
	  var _baseTheme = baseTheme;
	  var palette = _baseTheme.palette;
	  var spacing = _baseTheme.spacing;

	  muiTheme = (0, _lodash2.default)({
	    isRtl: false,
	    userAgent: undefined,
	    zIndex: _zIndex2.default,
	    baseTheme: baseTheme,
	    rawTheme: baseTheme, // To provide backward compatibility.
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement
	    },
	    avatar: {
	      borderColor: 'rgba(0, 0, 0, 0.08)'
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    flatButton: {
	      color: _colors2.default.transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: _colorManipulator2.default.fade(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.accent1Color,
	      secondaryTextColor: palette.primary1Color
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.accent1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor
	    },
	    gridTile: {
	      textColor: _colors2.default.white
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    leftNav: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: 'rgba(0, 0, 0, .035)',
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    paper: {
	      backgroundColor: palette.canvasColor,
	      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + _colorManipulator2.default.fade(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + _colorManipulator2.default.fade(palette.shadowColor, d[5]);
	      })
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.accent1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.primary1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: _colorManipulator2.default.darken(palette.alternateTextColor, 0.1),
	      disabledTextColor: _colorManipulator2.default.fade(palette.textColor, 0.3)
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: _colorManipulator2.default.lighten(palette.primary1Color, 0.55),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor,
	      height: 48
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.accent3Color,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: _colorManipulator2.default.fade(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: _colorManipulator2.default.fade(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      backgroundColor: _colorManipulator2.default.darken(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: 'rgba(0, 0, 0, .40)',
	      separatorColor: 'rgba(0, 0, 0, .175)',
	      menuHoverColor: 'rgba(0, 0, 0, .10)'
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: _colorManipulator2.default.fade(palette.alternateTextColor, 0.7),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.textColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors2.default.red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    }
	  }, muiTheme);

	  var transformers = [_transformers.autoprefixer, _transformers.rtl, _transformers.callOnce].map(function (t) {
	    return t(muiTheme);
	  }).filter(function (t) {
	    return t;
	  });
	  muiTheme.prefix = _autoPrefix2.default.getTransform(muiTheme.userAgent);
	  muiTheme.prepareStyles = _lodash4.default.apply(undefined, _toConsumableArray(transformers));

	  return muiTheme;
	}
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.3.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var arrayCopy = __webpack_require__(4),
	    arrayEach = __webpack_require__(5),
	    createAssigner = __webpack_require__(6),
	    isArguments = __webpack_require__(10),
	    isArray = __webpack_require__(11),
	    isPlainObject = __webpack_require__(12),
	    isTypedArray = __webpack_require__(15),
	    keys = __webpack_require__(16),
	    toPlainObject = __webpack_require__(18);

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.merge` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {Object} Returns `object`.
	 */
	function baseMerge(object, source, customizer, stackA, stackB) {
	  if (!isObject(object)) {
	    return object;
	  }
	  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	      props = isSrcArr ? undefined : keys(source);

	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObjectLike(srcValue)) {
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	    }
	    else {
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	      }
	      if ((result !== undefined || (isSrcArr && !(key in object))) &&
	          (isCommon || (result === result ? (result !== value) : (value === value)))) {
	        object[key] = result;
	      }
	    }
	  });
	  return object;
	}

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	  var length = stackA.length,
	      srcValue = source[key];

	  while (length--) {
	    if (stackA[length] == srcValue) {
	      object[key] = stackB[length];
	      return;
	    }
	  }
	  var value = object[key],
	      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	      isCommon = result === undefined;

	  if (isCommon) {
	    result = srcValue;
	    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	      result = isArray(value)
	        ? value
	        : (isArrayLike(value) ? arrayCopy(value) : []);
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      result = isArguments(value)
	        ? toPlainObject(value)
	        : (isPlainObject(value) ? value : {});
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate
	  // it with its merged value.
	  stackA.push(srcValue);
	  stackB.push(result);

	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	  } else if (result === result ? (result !== value) : (value === value)) {
	    object[key] = result;
	  }
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Recursively merges own enumerable properties of the source object(s), that
	 * don't resolve to `undefined` into the destination object. Subsequent sources
	 * overwrite property assignments of previous sources. If `customizer` is
	 * provided it is invoked to produce the merged values of the destination and
	 * source properties. If `customizer` returns `undefined` merging is handled
	 * by the method instead. The `customizer` is bound to `thisArg` and invoked
	 * with five arguments: (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 *
	 * // using a customizer callback
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.merge(object, other, function(a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);

	module.exports = merge;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = arrayCopy;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands or `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var bindCallback = __webpack_require__(7),
	    isIterateeCall = __webpack_require__(8),
	    restParam = __webpack_require__(9);

	/**
	 * Creates a function that assigns properties of source object(s) to a given
	 * destination object.
	 *
	 * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = bindCallback;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isIterateeCall;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.7 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null &&
	    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 11 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(13),
	    isArguments = __webpack_require__(10),
	    keysIn = __webpack_require__(14);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = baseFor;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(10),
	    isArray = __webpack_require__(11);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.5 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(17),
	    isArguments = __webpack_require__(10),
	    isArray = __webpack_require__(11);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = getNative;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseCopy = __webpack_require__(19),
	    keysIn = __webpack_require__(14);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return baseCopy(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  red50: '#ffebee',
	  red100: '#ffcdd2',
	  red200: '#ef9a9a',
	  red300: '#e57373',
	  red400: '#ef5350',
	  red500: '#f44336',
	  red600: '#e53935',
	  red700: '#d32f2f',
	  red800: '#c62828',
	  red900: '#b71c1c',
	  redA100: '#ff8a80',
	  redA200: '#ff5252',
	  redA400: '#ff1744',
	  redA700: '#d50000',

	  pink50: '#fce4ec',
	  pink100: '#f8bbd0',
	  pink200: '#f48fb1',
	  pink300: '#f06292',
	  pink400: '#ec407a',
	  pink500: '#e91e63',
	  pink600: '#d81b60',
	  pink700: '#c2185b',
	  pink800: '#ad1457',
	  pink900: '#880e4f',
	  pinkA100: '#ff80ab',
	  pinkA200: '#ff4081',
	  pinkA400: '#f50057',
	  pinkA700: '#c51162',

	  purple50: '#f3e5f5',
	  purple100: '#e1bee7',
	  purple200: '#ce93d8',
	  purple300: '#ba68c8',
	  purple400: '#ab47bc',
	  purple500: '#9c27b0',
	  purple600: '#8e24aa',
	  purple700: '#7b1fa2',
	  purple800: '#6a1b9a',
	  purple900: '#4a148c',
	  purpleA100: '#ea80fc',
	  purpleA200: '#e040fb',
	  purpleA400: '#d500f9',
	  purpleA700: '#aa00ff',

	  deepPurple50: '#ede7f6',
	  deepPurple100: '#d1c4e9',
	  deepPurple200: '#b39ddb',
	  deepPurple300: '#9575cd',
	  deepPurple400: '#7e57c2',
	  deepPurple500: '#673ab7',
	  deepPurple600: '#5e35b1',
	  deepPurple700: '#512da8',
	  deepPurple800: '#4527a0',
	  deepPurple900: '#311b92',
	  deepPurpleA100: '#b388ff',
	  deepPurpleA200: '#7c4dff',
	  deepPurpleA400: '#651fff',
	  deepPurpleA700: '#6200ea',

	  indigo50: '#e8eaf6',
	  indigo100: '#c5cae9',
	  indigo200: '#9fa8da',
	  indigo300: '#7986cb',
	  indigo400: '#5c6bc0',
	  indigo500: '#3f51b5',
	  indigo600: '#3949ab',
	  indigo700: '#303f9f',
	  indigo800: '#283593',
	  indigo900: '#1a237e',
	  indigoA100: '#8c9eff',
	  indigoA200: '#536dfe',
	  indigoA400: '#3d5afe',
	  indigoA700: '#304ffe',

	  blue50: '#e3f2fd',
	  blue100: '#bbdefb',
	  blue200: '#90caf9',
	  blue300: '#64b5f6',
	  blue400: '#42a5f5',
	  blue500: '#2196f3',
	  blue600: '#1e88e5',
	  blue700: '#1976d2',
	  blue800: '#1565c0',
	  blue900: '#0d47a1',
	  blueA100: '#82b1ff',
	  blueA200: '#448aff',
	  blueA400: '#2979ff',
	  blueA700: '#2962ff',

	  lightBlue50: '#e1f5fe',
	  lightBlue100: '#b3e5fc',
	  lightBlue200: '#81d4fa',
	  lightBlue300: '#4fc3f7',
	  lightBlue400: '#29b6f6',
	  lightBlue500: '#03a9f4',
	  lightBlue600: '#039be5',
	  lightBlue700: '#0288d1',
	  lightBlue800: '#0277bd',
	  lightBlue900: '#01579b',
	  lightBlueA100: '#80d8ff',
	  lightBlueA200: '#40c4ff',
	  lightBlueA400: '#00b0ff',
	  lightBlueA700: '#0091ea',

	  cyan50: '#e0f7fa',
	  cyan100: '#b2ebf2',
	  cyan200: '#80deea',
	  cyan300: '#4dd0e1',
	  cyan400: '#26c6da',
	  cyan500: '#00bcd4',
	  cyan600: '#00acc1',
	  cyan700: '#0097a7',
	  cyan800: '#00838f',
	  cyan900: '#006064',
	  cyanA100: '#84ffff',
	  cyanA200: '#18ffff',
	  cyanA400: '#00e5ff',
	  cyanA700: '#00b8d4',

	  teal50: '#e0f2f1',
	  teal100: '#b2dfdb',
	  teal200: '#80cbc4',
	  teal300: '#4db6ac',
	  teal400: '#26a69a',
	  teal500: '#009688',
	  teal600: '#00897b',
	  teal700: '#00796b',
	  teal800: '#00695c',
	  teal900: '#004d40',
	  tealA100: '#a7ffeb',
	  tealA200: '#64ffda',
	  tealA400: '#1de9b6',
	  tealA700: '#00bfa5',

	  green50: '#e8f5e9',
	  green100: '#c8e6c9',
	  green200: '#a5d6a7',
	  green300: '#81c784',
	  green400: '#66bb6a',
	  green500: '#4caf50',
	  green600: '#43a047',
	  green700: '#388e3c',
	  green800: '#2e7d32',
	  green900: '#1b5e20',
	  greenA100: '#b9f6ca',
	  greenA200: '#69f0ae',
	  greenA400: '#00e676',
	  greenA700: '#00c853',

	  lightGreen50: '#f1f8e9',
	  lightGreen100: '#dcedc8',
	  lightGreen200: '#c5e1a5',
	  lightGreen300: '#aed581',
	  lightGreen400: '#9ccc65',
	  lightGreen500: '#8bc34a',
	  lightGreen600: '#7cb342',
	  lightGreen700: '#689f38',
	  lightGreen800: '#558b2f',
	  lightGreen900: '#33691e',
	  lightGreenA100: '#ccff90',
	  lightGreenA200: '#b2ff59',
	  lightGreenA400: '#76ff03',
	  lightGreenA700: '#64dd17',

	  lime50: '#f9fbe7',
	  lime100: '#f0f4c3',
	  lime200: '#e6ee9c',
	  lime300: '#dce775',
	  lime400: '#d4e157',
	  lime500: '#cddc39',
	  lime600: '#c0ca33',
	  lime700: '#afb42b',
	  lime800: '#9e9d24',
	  lime900: '#827717',
	  limeA100: '#f4ff81',
	  limeA200: '#eeff41',
	  limeA400: '#c6ff00',
	  limeA700: '#aeea00',

	  yellow50: '#fffde7',
	  yellow100: '#fff9c4',
	  yellow200: '#fff59d',
	  yellow300: '#fff176',
	  yellow400: '#ffee58',
	  yellow500: '#ffeb3b',
	  yellow600: '#fdd835',
	  yellow700: '#fbc02d',
	  yellow800: '#f9a825',
	  yellow900: '#f57f17',
	  yellowA100: '#ffff8d',
	  yellowA200: '#ffff00',
	  yellowA400: '#ffea00',
	  yellowA700: '#ffd600',

	  amber50: '#fff8e1',
	  amber100: '#ffecb3',
	  amber200: '#ffe082',
	  amber300: '#ffd54f',
	  amber400: '#ffca28',
	  amber500: '#ffc107',
	  amber600: '#ffb300',
	  amber700: '#ffa000',
	  amber800: '#ff8f00',
	  amber900: '#ff6f00',
	  amberA100: '#ffe57f',
	  amberA200: '#ffd740',
	  amberA400: '#ffc400',
	  amberA700: '#ffab00',

	  orange50: '#fff3e0',
	  orange100: '#ffe0b2',
	  orange200: '#ffcc80',
	  orange300: '#ffb74d',
	  orange400: '#ffa726',
	  orange500: '#ff9800',
	  orange600: '#fb8c00',
	  orange700: '#f57c00',
	  orange800: '#ef6c00',
	  orange900: '#e65100',
	  orangeA100: '#ffd180',
	  orangeA200: '#ffab40',
	  orangeA400: '#ff9100',
	  orangeA700: '#ff6d00',

	  deepOrange50: '#fbe9e7',
	  deepOrange100: '#ffccbc',
	  deepOrange200: '#ffab91',
	  deepOrange300: '#ff8a65',
	  deepOrange400: '#ff7043',
	  deepOrange500: '#ff5722',
	  deepOrange600: '#f4511e',
	  deepOrange700: '#e64a19',
	  deepOrange800: '#d84315',
	  deepOrange900: '#bf360c',
	  deepOrangeA100: '#ff9e80',
	  deepOrangeA200: '#ff6e40',
	  deepOrangeA400: '#ff3d00',
	  deepOrangeA700: '#dd2c00',

	  brown50: '#efebe9',
	  brown100: '#d7ccc8',
	  brown200: '#bcaaa4',
	  brown300: '#a1887f',
	  brown400: '#8d6e63',
	  brown500: '#795548',
	  brown600: '#6d4c41',
	  brown700: '#5d4037',
	  brown800: '#4e342e',
	  brown900: '#3e2723',

	  blueGrey50: '#eceff1',
	  blueGrey100: '#cfd8dc',
	  blueGrey200: '#b0bec5',
	  blueGrey300: '#90a4ae',
	  blueGrey400: '#78909c',
	  blueGrey500: '#607d8b',
	  blueGrey600: '#546e7a',
	  blueGrey700: '#455a64',
	  blueGrey800: '#37474f',
	  blueGrey900: '#263238',

	  grey50: '#fafafa',
	  grey100: '#f5f5f5',
	  grey200: '#eeeeee',
	  grey300: '#e0e0e0',
	  grey400: '#bdbdbd',
	  grey500: '#9e9e9e',
	  grey600: '#757575',
	  grey700: '#616161',
	  grey800: '#424242',
	  grey900: '#212121',

	  black: '#000000',
	  white: '#ffffff',

	  transparent: 'rgba(0, 0, 0, 0)',
	  fullBlack: 'rgba(0, 0, 0, 1)',
	  darkBlack: 'rgba(0, 0, 0, 0.87)',
	  lightBlack: 'rgba(0, 0, 0, 0.54)',
	  minBlack: 'rgba(0, 0, 0, 0.26)',
	  faintBlack: 'rgba(0, 0, 0, 0.12)',
	  fullWhite: 'rgba(255, 255, 255, 1)',
	  darkWhite: 'rgba(255, 255, 255, 0.87)',
	  lightWhite: 'rgba(255, 255, 255, 0.54)'
	};
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  /**
	   * The relative brightness of any point in a colorspace, normalized to 0 for
	   * darkest black and 1 for lightest white. RGB colors only. Does not take
	   * into account alpha values.
	   *
	   * TODO:
	   * - Take into account alpha values.
	   * - Identify why there are minor discrepancies for some use cases
	   *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
	   *
	   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	   */

	  _luminance: function _luminance(color) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('rgb') > -1) {
	      var rgb = color.values.map(function (val) {
	        val /= 255; // normalized
	        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	      });

	      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
	    } else {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Calculating the relative luminance is not available\n        for HSL and HSLA.') : undefined;

	      return -1;
	    }
	  },

	  /**
	   * @params:
	   * additionalValue = An extra value that has been calculated but not included
	   *                   with the original color object, such as an alpha value.
	   */
	  _convertColorToString: function _convertColorToString(color, additonalValue) {
	    var str = color.type + '(' + parseInt(color.values[0]) + ',' + parseInt(color.values[1]) + ',' + parseInt(color.values[2]);

	    if (additonalValue !== undefined) {
	      str += ',' + additonalValue + ')';
	    } else if (color.values.length === 4) {
	      str += ',' + color.values[3] + ')';
	    } else {
	      str += ')';
	    }

	    return str;
	  },

	  // Converts a color from hex format to rgb format.
	  _convertHexToRGB: function _convertHexToRGB(color) {
	    if (color.length === 4) {
	      var extendedColor = '#';
	      for (var i = 1; i < color.length; i++) {
	        extendedColor += color.charAt(i) + color.charAt(i);
	      }
	      color = extendedColor;
	    }

	    var values = {
	      r: parseInt(color.substr(1, 2), 16),
	      g: parseInt(color.substr(3, 2), 16),
	      b: parseInt(color.substr(5, 2), 16)
	    };

	    return 'rgb(' + values.r + ',' + values.g + ',' + values.b + ')';
	  },

	  // Returns the type and values of a color of any given type.
	  _decomposeColor: function _decomposeColor(color) {
	    if (color.charAt(0) === '#') {
	      return this._decomposeColor(this._convertHexToRGB(color));
	    }

	    var marker = color.indexOf('(');
	    var type = color.substring(0, marker);
	    var values = color.substring(marker + 1, color.length - 1).split(',');

	    return { type: type, values: values };
	  },

	  // Set the absolute transparency of a color.
	  // Any existing alpha values are overwritten.
	  fade: function fade(color, amount) {
	    color = this._decomposeColor(color);
	    if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
	    return this._convertColorToString(color, amount);
	  },

	  // Desaturates rgb and sets opacity to 0.15
	  lighten: function lighten(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 + amount;
	        if (color.values[i] > 255) color.values[i] = 255;
	      }
	    }

	    if (color.type.indexOf('a') <= -1) color.type += 'a';

	    return this._convertColorToString(color, '0.15');
	  },
	  darken: function darken(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 - amount;
	        if (color.values[i] < 0) color.values[i] = 0;
	      }
	    }

	    return this._convertColorToString(color);
	  },

	  // Calculates the contrast ratio between two colors.
	  //
	  // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	  contrastRatio: function contrastRatio(background, foreground) {
	    var lumA = this._luminance(background);
	    var lumB = this._luminance(foreground);

	    if (lumA >= lumB) {
	      return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
	    } else {
	      return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
	    }
	  },

	  /**
	   * Determines how readable a color combination is based on its level.
	   * Levels are defined from @LeaVerou:
	   * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
	   */
	  contrastRatioLevel: function contrastRatioLevel(background, foreground) {
	    var levels = {
	      'fail': {
	        range: [0, 3],
	        color: 'hsl(0, 100%, 40%)'
	      },
	      'aa-large': {
	        range: [3, 4.5],
	        color: 'hsl(40, 100%, 45%)'
	      },
	      'aa': {
	        range: [4.5, 7],
	        color: 'hsl(80, 60%, 45%)'
	      },
	      'aaa': {
	        range: [7, 22],
	        color: 'hsl(95, 60%, 41%)'
	      }
	    };

	    var ratio = this.contrastRatio(background, foreground);

	    for (var level in levels) {
	      var range = levels[level].range;
	      if (ratio >= range[0] && ratio <= range[1]) return level;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("warning");

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inlineStylePrefixer = __webpack_require__(24);

	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var prefixers = {};

	var hasWarnedAboutUserAgent = false;

	exports.default = {
	  getTransform: function getTransform(userAgent) {
	    if (userAgent === undefined && typeof navigator !== 'undefined') {
	      userAgent = navigator.userAgent;
	    }

	    if (userAgent === undefined && !hasWarnedAboutUserAgent) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n        for server-side rendering.') : undefined;

	      hasWarnedAboutUserAgent = true;
	    }

	    if (userAgent === false) {
	      // Disabled autoprefixer
	      return function (style) {
	        return style;
	      };
	    } else if (userAgent === 'all' || userAgent === undefined) {
	      // Prefix for all user agent
	      return _inlineStylePrefixer2.default.prefixAll;
	    } else {
	      var _ret = function () {
	        var prefixer = new _inlineStylePrefixer2.default({
	          userAgent: userAgent
	        });

	        return {
	          v: function v(style) {
	            return prefixer.prefix(style);
	          }
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  },
	  getPrefixer: function getPrefixer() {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: getPrefixer() is no longer used. Do not use it.') : undefined;

	    if (typeof navigator === 'undefined') {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI expects the global navigator.userAgent to be defined\n        for server-side rendering. Set this property when receiving the request headers.') : undefined;

	      return null;
	    }

	    var userAgent = navigator.userAgent;

	    // Get prefixing instance for this user agent
	    var prefixer = prefixers[userAgent];
	    // None found, create a new instance
	    if (!prefixer) {
	      prefixer = new _inlineStylePrefixer2.default({ userAgent: userAgent });
	      prefixers[userAgent] = prefixer;
	    }

	    return prefixer;
	  },
	  all: function all(style) {
	    if (!style) {
	      return {};
	    }

	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: all() is no longer used, it will be removed. Do not use it') : undefined;

	    var prefixer = this.getPrefixer();

	    if (prefixer) {
	      return prefixer.prefix(style);
	    } else {
	      return _inlineStylePrefixer2.default.prefixAll(style);
	    }
	  },
	  set: function set(style, key, value, muiTheme) {
	    style[key] = value;

	    if (muiTheme) {
	      style = muiTheme.prefix(style);
	    } else {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: you need to provide the muiTheme to the autoPrefix.set()') : undefined;

	      var prefixer = this.getPrefixer();

	      if (prefixer) {
	        style = prefixer.prefix(style);
	      } else {
	        style = _inlineStylePrefixer2.default.prefixAll(style);
	      }
	    }
	  },
	  getPrefix: function getPrefix(key) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: getPrefix() is no longer used, it will be removed. Do not use it') : undefined;

	    var style = {};
	    style[key] = true;

	    var prefixer = this.getPrefixer();
	    var prefixes = undefined;

	    if (prefixer) {
	      prefixes = Object.keys(prefixer.prefix(style));
	    } else {
	      prefixes = Object.keys(_inlineStylePrefixer2.default.prefixAll(style));
	    }

	    return prefixes ? prefixes[0] : key;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("inline-style-prefixer");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _colorManipulator = __webpack_require__(21);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _spacing = __webpack_require__(26);

	var _spacing2 = _interopRequireDefault(_spacing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */

	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors2.default.cyan500,
	    primary2Color: _colors2.default.cyan700,
	    primary3Color: _colors2.default.grey400,
	    accent1Color: _colors2.default.pinkA200,
	    accent2Color: _colors2.default.grey100,
	    accent3Color: _colors2.default.grey500,
	    textColor: _colors2.default.darkBlack,
	    alternateTextColor: _colors2.default.white,
	    canvasColor: _colors2.default.white,
	    borderColor: _colors2.default.grey300,
	    disabledColor: _colorManipulator2.default.fade(_colors2.default.darkBlack, 0.3),
	    pickerHeaderColor: _colors2.default.cyan500,
	    clockCircleColor: _colorManipulator2.default.fade(_colors2.default.darkBlack, 0.07),
	    shadowColor: _colors2.default.fullBlack
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,

	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopLeftNavMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  menu: 1000,
	  appBar: 1100,
	  leftNavOverlay: 1200,
	  leftNav: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rtl = exports.callOnce = exports.autoprefixer = undefined;

	var _autoprefixer = __webpack_require__(29);

	var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

	var _callOnce = __webpack_require__(30);

	var _callOnce2 = _interopRequireDefault(_callOnce);

	var _rtl = __webpack_require__(31);

	var _rtl2 = _interopRequireDefault(_rtl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.autoprefixer = _autoprefixer2.default;
	exports.callOnce = _callOnce2.default;
	exports.rtl = _rtl2.default;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (muiTheme) {
	  if (muiTheme.userAgent !== false) {
	    return function (style) {
	      return muiTheme.prefix(style);
	    };
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = callOnce;

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CALLED_ONCE = 'muiPrepared';

	function callOnce() {
	  if (process.env.NODE_ENV !== 'production') {
	    return function (style) {
	      if (style[CALLED_ONCE]) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'You cannot call prepareStyles() on the same style object more than once.') : undefined;
	      }
	      style[CALLED_ONCE] = true;
	      return style;
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = rtl;
	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function rtl(muiTheme) {
	  if (muiTheme.isRtl) {
	    return function (style) {
	      var flippedAttributes = {
	        // Keys and their replacements.
	        right: 'left',
	        left: 'right',
	        marginRight: 'marginLeft',
	        marginLeft: 'marginRight',
	        paddingRight: 'paddingLeft',
	        paddingLeft: 'paddingRight',
	        borderRight: 'borderLeft',
	        borderLeft: 'borderRight'
	      };

	      var newStyle = {};

	      Object.keys(style).forEach(function (attribute) {
	        var value = style[attribute];
	        var key = attribute;

	        if (flippedAttributes.hasOwnProperty(attribute)) {
	          key = flippedAttributes[attribute];
	        }

	        switch (attribute) {
	          case 'float':
	          case 'textAlign':
	            if (value === 'right') {
	              value = 'left';
	            } else if (value === 'left') {
	              value = 'right';
	            }
	            break;

	          case 'direction':
	            if (value === 'ltr') {
	              value = 'rtl';
	            } else if (value === 'rtl') {
	              value = 'ltr';
	            }
	            break;

	          case 'transform':
	            var matches = undefined;
	            if (matches = value.match(reTranslate)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	            }
	            if (matches = value.match(reSkew)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	            }
	            break;

	          case 'transformOrigin':
	            if (value.indexOf('right') > -1) {
	              value = value.replace('right', 'left');
	            } else if (value.indexOf('left') > -1) {
	              value = value.replace('left', 'right');
	            }
	            break;
	        }

	        newStyle[key] = value;
	      });

	      return newStyle;
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * lodash 3.2.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a `_.flow` or `_.flowRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new flow function.
	 */
	function createFlow(fromRight) {
	  return function() {
	    var length = arguments.length,
	        index = fromRight ? length : -1,
	        leftIndex = 0,
	        funcs = Array(length);

	    while ((fromRight ? index-- : ++index < length)) {
	      var func = funcs[leftIndex++] = arguments[index];
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	    }
	    return function() {
	      var index = 0,
	          result = length ? funcs[index].apply(this, arguments) : arguments[0];

	      while (++index < length) {
	        result = funcs[index].call(this, result);
	      }
	      return result;
	    };
	  };
	}

	/**
	 * This method is like `_.flow` except that it creates a function that
	 * invokes the provided functions from right to left.
	 *
	 * @static
	 * @memberOf _
	 * @alias backflow, compose
	 * @category Function
	 * @param {...Function} [funcs] Functions to invoke.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * var addSquare = _.flowRight(square, _.add);
	 * addSquare(1, 2);
	 * // => 9
	 */
	var flowRight = createFlow(true);

	module.exports = flowRight;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MuiThemeProvider = function (_Component) {
	  _inherits(MuiThemeProvider, _Component);

	  function MuiThemeProvider() {
	    _classCallCheck(this, MuiThemeProvider);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MuiThemeProvider).apply(this, arguments));
	  }

	  _createClass(MuiThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: this.props.muiTheme
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);

	  return MuiThemeProvider;
	}(_react.Component);

	MuiThemeProvider.propTypes = {
	  children: _react.PropTypes.element,
	  muiTheme: _react.PropTypes.object
	};
	MuiThemeProvider.childContextTypes = {
	  muiTheme: _react.PropTypes.object
	};
	exports.default = MuiThemeProvider;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _typography = __webpack_require__(38);

	var _typography2 = _interopRequireDefault(_typography);

	var _iconButton = __webpack_require__(39);

	var _iconButton2 = _interopRequireDefault(_iconButton);

	var _menu = __webpack_require__(60);

	var _menu2 = _interopRequireDefault(_menu);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _paper = __webpack_require__(62);

	var _paper2 = _interopRequireDefault(_paper);

	var _propTypes = __webpack_require__(43);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var AppBar = _react2.default.createClass({
	  displayName: 'AppBar',

	  propTypes: {
	    /**
	     * Can be used to render a tab inside an app bar for instance.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Applied to the app bar's root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The classname of the icon on the left of the app bar.
	     * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
	     */
	    iconClassNameLeft: _react2.default.PropTypes.string,

	    /**
	     * Similiar to the iconClassNameLeft prop except that
	     * it applies to the icon displayed on the right of the app bar.
	     */
	    iconClassNameRight: _react2.default.PropTypes.string,

	    /**
	     * The custom element to be displayed on the left side of the
	     * app bar such as an SvgIcon.
	     */
	    iconElementLeft: _react2.default.PropTypes.element,

	    /**
	     * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
	     */
	    iconElementRight: _react2.default.PropTypes.element,

	    /**
	     * Override the inline-styles of the element displayed on the right side of the app bar.
	     */
	    iconStyleRight: _react2.default.PropTypes.object,

	    /**
	     * Callback function for when the left icon is selected via a touch tap.
	     */
	    onLeftIconButtonTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the right icon is selected via a touch tap.
	     */
	    onRightIconButtonTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the title text is selected via a touch tap.
	     */
	    onTitleTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Determines whether or not to display the Menu icon next to the title.
	     * Setting this prop to false will hide the icon.
	     */
	    showMenuIconButton: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The title to display on the app bar.
	     */
	    title: _react2.default.PropTypes.node,

	    /**
	     * Override the inline-styles of the app bar's title element.
	     */
	    titleStyle: _react2.default.PropTypes.object,

	    /**
	     * The zDepth of the component.
	     * The shadow of the app bar is also dependent on this property.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      showMenuIconButton: true,
	      title: '',
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.') : undefined;

	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.') : undefined;
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;

	    var themeVariables = muiTheme.appBar;
	    var iconButtonSize = muiTheme.button.iconButtonSize;
	    var flatButtonSize = 36;

	    var styles = {
	      root: {
	        position: 'relative',
	        zIndex: muiTheme.zIndex.appBar,
	        width: '100%',
	        display: 'flex',
	        minHeight: themeVariables.height,
	        backgroundColor: themeVariables.color,
	        paddingLeft: rawTheme.spacing.desktopGutter,
	        paddingRight: rawTheme.spacing.desktopGutter
	      },
	      title: {
	        whiteSpace: 'nowrap',
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        margin: 0,
	        paddingTop: 0,
	        letterSpacing: 0,
	        fontSize: 24,
	        fontWeight: _typography2.default.fontWeightNormal,
	        color: themeVariables.textColor,
	        lineHeight: themeVariables.height + 'px'
	      },
	      mainElement: {
	        boxFlex: 1,
	        flex: '1'
	      },
	      iconButton: {
	        style: {
	          marginTop: (themeVariables.height - iconButtonSize) / 2,
	          marginRight: 8,
	          marginLeft: -16
	        },
	        iconStyle: {
	          fill: themeVariables.textColor,
	          color: themeVariables.textColor
	        }
	      },
	      flatButton: {
	        color: themeVariables.textColor,
	        marginTop: (iconButtonSize - flatButtonSize) / 2 + 2
	      }
	    };

	    return styles;
	  },
	  _onLeftIconButtonTouchTap: function _onLeftIconButtonTouchTap(event) {
	    if (this.props.onLeftIconButtonTouchTap) {
	      this.props.onLeftIconButtonTouchTap(event);
	    }
	  },
	  _onRightIconButtonTouchTap: function _onRightIconButtonTouchTap(event) {
	    if (this.props.onRightIconButtonTouchTap) {
	      this.props.onRightIconButtonTouchTap(event);
	    }
	  },
	  _onTitleTouchTap: function _onTitleTouchTap(event) {
	    if (this.props.onTitleTouchTap) {
	      this.props.onTitleTouchTap(event);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var title = _props.title;
	    var titleStyle = _props.titleStyle;
	    var iconStyleRight = _props.iconStyleRight;
	    var showMenuIconButton = _props.showMenuIconButton;
	    var iconElementLeft = _props.iconElementLeft;
	    var iconElementRight = _props.iconElementRight;
	    var iconClassNameLeft = _props.iconClassNameLeft;
	    var iconClassNameRight = _props.iconClassNameRight;
	    var className = _props.className;
	    var style = _props.style;
	    var zDepth = _props.zDepth;
	    var children = _props.children;

	    var other = _objectWithoutProperties(_props, ['title', 'titleStyle', 'iconStyleRight', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'className', 'style', 'zDepth', 'children']);

	    var menuElementLeft = undefined;
	    var menuElementRight = undefined;
	    var styles = this.getStyles();
	    var iconRightStyle = this.mergeStyles(styles.iconButton.style, {
	      marginRight: -16,
	      marginLeft: 'auto'
	    }, iconStyleRight);
	    var titleElement = undefined;

	    if (title) {
	      // If the title is a string, wrap in an h1 tag.
	      // If not, just use it as a node.
	      titleElement = typeof title === 'string' || title instanceof String ? _react2.default.createElement(
	        'h1',
	        {
	          onTouchTap: this._onTitleTouchTap,
	          style: this.prepareStyles(styles.title, styles.mainElement, titleStyle)
	        },
	        title
	      ) : _react2.default.createElement(
	        'div',
	        {
	          onTouchTap: this._onTitleTouchTap,
	          style: this.prepareStyles(styles.title, styles.mainElement, titleStyle)
	        },
	        title
	      );
	    }

	    if (showMenuIconButton) {
	      if (iconElementLeft) {
	        switch (iconElementLeft.type.displayName) {
	          case 'IconButton':
	            iconElementLeft = _react2.default.cloneElement(iconElementLeft, {
	              iconStyle: this.mergeStyles(styles.iconButton.iconStyle, iconElementLeft.props.iconStyle)
	            });
	            break;
	        }

	        menuElementLeft = _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.iconButton.style) },
	          iconElementLeft
	        );
	      } else {
	        var child = iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: this.mergeStyles(styles.iconButton.iconStyle) });
	        menuElementLeft = _react2.default.createElement(
	          _iconButton2.default,
	          {
	            style: this.mergeStyles(styles.iconButton.style),
	            iconStyle: this.mergeStyles(styles.iconButton.iconStyle),
	            iconClassName: iconClassNameLeft,
	            onTouchTap: this._onLeftIconButtonTouchTap
	          },
	          child
	        );
	      }
	    }

	    if (iconElementRight) {
	      switch (iconElementRight.type.displayName) {
	        case 'IconMenu':
	        case 'IconButton':
	          iconElementRight = _react2.default.cloneElement(iconElementRight, {
	            iconStyle: this.mergeStyles(styles.iconButton.iconStyle, iconElementRight.props.iconStyle)
	          });
	          break;

	        case 'FlatButton':
	          iconElementRight = _react2.default.cloneElement(iconElementRight, {
	            style: this.mergeStyles(styles.flatButton, iconElementRight.props.style)
	          });
	          break;
	      }

	      menuElementRight = _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(iconRightStyle) },
	        iconElementRight
	      );
	    } else if (iconClassNameRight) {
	      menuElementRight = _react2.default.createElement(_iconButton2.default, {
	        style: iconRightStyle,
	        iconStyle: this.mergeStyles(styles.iconButton.iconStyle),
	        iconClassName: iconClassNameRight,
	        onTouchTap: this._onRightIconButtonTouchTap
	      });
	    }

	    return _react2.default.createElement(
	      _paper2.default,
	      _extends({}, other, {
	        rounded: false,
	        className: className,
	        style: this.mergeStyles(styles.root, style),
	        zDepth: zDepth
	      }),
	      menuElementLeft,
	      titleElement,
	      menuElementRight,
	      children
	    );
	  }
	});

	exports.default = AppBar;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This mixin isn't necessary and will be removed soon. DO NOT USE!
	 *
	 * All internal components that use this mixin should be switched to the
	 * `styleUtils` that this mixin now wraps. Notice the method signature of
	 * the `prepareStyles()` function of this mixin is different than the method
	 * signature of the `prepareStyles()` function in `styleUtils`.
	 *
	 * See `../utils/styles.js` for more details.
	 */
	exports.default = {

	  propTypes: {
	    style: _react2.default.PropTypes.object
	  },

	  mergeStyles: _styles.mergeStyles,

	  mergeAndPrefix: _styles.mergeAndPrefix,

	  prepareStyles: function prepareStyles() {
	    var _ref = this.state && this.state.muiTheme || this.context && this.context.muiTheme || this.props && this.props.muiTheme || {};

	    var _ref$prepareStyles = _ref.prepareStyles;
	    var prepareStyles = _ref$prepareStyles === undefined ? function (style) {
	      return style;
	    } : _ref$prepareStyles;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return prepareStyles(_styles.mergeStyles.apply(undefined, [{}].concat(args)));
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mergeStyles = mergeStyles;
	exports.mergeAndPrefix = mergeAndPrefix;
	exports.prepareStyles = prepareStyles;

	var _autoPrefix = __webpack_require__(23);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _reactAddonsUpdate = __webpack_require__(37);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;

	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

	function mergeSingle(objA, objB) {
	  if (!objA) return objB;
	  if (!objB) return objA;
	  return (0, _reactAddonsUpdate2.default)(objA, { $merge: objB });
	}

	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function ensureDirection(muiTheme, style) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!style.didFlip, 'You\'re calling ensureDirection() on the same style\n      object twice.') : undefined;

	    style = mergeStyles({
	      didFlip: 'true'
	    }, style);
	  }

	  // Left to right is the default. No need to flip anything.
	  if (!muiTheme || !muiTheme.isRtl) return style;

	  var flippedAttributes = {
	    // Keys and their replacements.
	    right: 'left',
	    left: 'right',
	    marginRight: 'marginLeft',
	    marginLeft: 'marginRight',
	    paddingRight: 'paddingLeft',
	    paddingLeft: 'paddingRight',
	    borderRight: 'borderLeft',
	    borderLeft: 'borderRight'
	  };

	  var newStyle = {};

	  Object.keys(style).forEach(function (attribute) {
	    var value = style[attribute];
	    var key = attribute;

	    if (flippedAttributes.hasOwnProperty(attribute)) {
	      key = flippedAttributes[attribute];
	    }

	    switch (attribute) {
	      case 'float':
	      case 'textAlign':
	        if (value === 'right') {
	          value = 'left';
	        } else if (value === 'left') {
	          value = 'right';
	        }
	        break;

	      case 'direction':
	        if (value === 'ltr') {
	          value = 'rtl';
	        } else if (value === 'rtl') {
	          value = 'ltr';
	        }
	        break;

	      case 'transform':
	        var matches = undefined;
	        if (matches = value.match(reTranslate)) {
	          value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	        }
	        if (matches = value.match(reSkew)) {
	          value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	        }
	        break;

	      case 'transformOrigin':
	        if (value.indexOf('right') > -1) {
	          value = value.replace('right', 'left');
	        } else if (value.indexOf('left') > -1) {
	          value = value.replace('left', 'right');
	        }
	        break;
	    }

	    newStyle[key] = value;
	  });

	  return newStyle;
	}

	function mergeStyles(base) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  for (var i = 0; i < args.length; i++) {
	    if (args[i]) {
	      base = mergeSingle(base, args[i]);
	    }
	  }
	  return base;
	}

	/**
	 * `mergeAndPrefix` is used to merge styles and autoprefix them. It has has been deprecated
	 *  and should no longer be used.
	 */
	function mergeAndPrefix() {
	  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Use of mergeAndPrefix() has been deprecated. ' + 'Please use mergeStyles() for merging styles, and then prepareStyles() for prefixing and ensuring direction.') : undefined;
	  return _autoPrefix2.default.all(mergeStyles.apply(undefined, arguments));
	}

	/**
	 * `prepareStyles` is used to merge multiple styles, make sure they are flipped
	 * to rtl if needed, and then autoprefix them.
	 *
	 * Never call this on the same style object twice. As a rule of thumb, only
	 * call it when passing style attribute to html elements.
	 *
	 * If this method detects you called it twice on the same style object, it
	 * will produce a warning in the console.
	 */
	function prepareStyles(muiTheme) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  for (var _len2 = arguments.length, styles = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    styles[_key2 - 2] = arguments[_key2];
	  }

	  if (styles) {
	    //warning(false, 'Providing more than one style argument to prepareStyles has been deprecated. ' +
	    //  'Please pass a single style, such as the result from mergeStyles(...styles).');
	    style = mergeStyles.apply(undefined, [style].concat(styles));
	  }

	  var flipped = ensureDirection(muiTheme, style);
	  return muiTheme.prefix(flipped);
	}

	exports.default = {
	  mergeStyles: mergeStyles,
	  mergeAndPrefix: mergeAndPrefix,
	  prepareStyles: prepareStyles
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = require("react-addons-update");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Typography = function Typography() {
	  _classCallCheck(this, Typography);

	  // text colors
	  this.textFullBlack = _colors2.default.fullBlack;
	  this.textDarkBlack = _colors2.default.darkBlack;
	  this.textLightBlack = _colors2.default.lightBlack;
	  this.textMinBlack = _colors2.default.minBlack;
	  this.textFullWhite = _colors2.default.fullWhite;
	  this.textDarkWhite = _colors2.default.darkWhite;
	  this.textLightWhite = _colors2.default.lightWhite;

	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;

	  this.fontStyleButtonFontSize = 14;
	};

	exports.default = new Typography();
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _contextPure = __webpack_require__(40);

	var _contextPure2 = _interopRequireDefault(_contextPure);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _propTypes = __webpack_require__(43);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _enhancedButton = __webpack_require__(44);

	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);

	var _fontIcon = __webpack_require__(58);

	var _fontIcon2 = _interopRequireDefault(_fontIcon);

	var _tooltip = __webpack_require__(59);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _children = __webpack_require__(46);

	var _children2 = _interopRequireDefault(_children);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var IconButton = _react2.default.createClass({
	  displayName: 'IconButton',

	  propTypes: {
	    /**
	     * Can be used to pass a font icon as the icon for the button.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Disables the icon button.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * If you are using a stylesheet for your
	     * icons, enter the class name for the icon to be used here.
	     */
	    iconClassName: _react2.default.PropTypes.string,

	    /**
	     * Overrides the inline-styles of the icon element.
	     */
	    iconStyle: _react2.default.PropTypes.object,

	    /**
	     * Callback function for when the component loses focus.
	     */
	    onBlur: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the component gains focus.
	     */
	    onFocus: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the component
	     * receives keyboard focus.
	     */
	    onKeyboardFocus: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when mouse enters element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when mouse leaves element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The tooltip text to show.
	     */
	    tooltip: _react2.default.PropTypes.node,

	    /**
	     * Allows the tooltip to be viewed with different
	     * alignments: "bottom-center", "top-center",
	     * "bottom-right", "top-right", "bottom-left" and "top-left".
	     */
	    tooltipPosition: _propTypes2.default.cornersAndCenter,

	    /**
	     * Styles prop passed down to the tooltip.
	     */
	    tooltipStyles: _react2.default.PropTypes.object,

	    /**
	     * Prop for tooltip to make it larger for mobile.
	     */
	    touch: _react2.default.PropTypes.bool
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default, _contextPure2.default],

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var spacing = muiTheme.rawTheme.spacing;
	      var palette = muiTheme.rawTheme.palette;

	      return {
	        iconSize: spacing.iconSize,
	        textColor: palette.textColor,
	        disabledColor: palette.disabledColor
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [_enhancedButton2.default, _fontIcon2.default, _tooltip2.default];
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      iconStyle: {},
	      tooltipPosition: 'bottom-center',
	      touch: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      tooltipShown: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    var _constructor$getRelev = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var iconSize = _constructor$getRelev.iconSize;
	    var textColor = _constructor$getRelev.textColor;
	    var disabledColor = _constructor$getRelev.disabledColor;

	    var styles = {
	      root: {
	        position: 'relative',
	        boxSizing: 'border-box',
	        transition: _transitions2.default.easeOut(),
	        padding: iconSize / 2,
	        width: iconSize * 2,
	        height: iconSize * 2,
	        fontSize: 0
	      },
	      tooltip: {
	        boxSizing: 'border-box'
	      },
	      icon: {
	        color: textColor,
	        fill: textColor
	      },
	      overlay: {
	        position: 'relative',
	        top: 0,
	        width: '100%',
	        height: '100%',
	        background: disabledColor
	      },
	      disabled: {
	        color: disabledColor,
	        fill: disabledColor
	      }
	    };

	    return styles;
	  },
	  setKeyboardFocus: function setKeyboardFocus() {
	    this.refs.button.setKeyboardFocus();
	  },
	  _showTooltip: function _showTooltip() {
	    if (this.props.tooltip) {
	      this.setState({ tooltipShown: true });
	    }
	  },
	  _hideTooltip: function _hideTooltip() {
	    if (this.props.tooltip) this.setState({ tooltipShown: false });
	  },
	  _handleBlur: function _handleBlur(e) {
	    this._hideTooltip();
	    if (this.props.onBlur) this.props.onBlur(e);
	  },
	  _handleFocus: function _handleFocus(e) {
	    this._showTooltip();
	    if (this.props.onFocus) this.props.onFocus(e);
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.button.isKeyboardFocused()) this._hideTooltip();
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this._showTooltip();
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this._showTooltip();
	      if (this.props.onFocus) this.props.onFocus(e);
	    } else if (!this.state.hovered) {
	      this._hideTooltip();
	      if (this.props.onBlur) this.props.onBlur(e);
	    }

	    if (this.props.onKeyboardFocus) this.props.onKeyboardFocus(e, keyboardFocused);
	  },
	  render: function render() {
	    var _props = this.props;
	    var disabled = _props.disabled;
	    var iconClassName = _props.iconClassName;
	    var tooltip = _props.tooltip;
	    var touch = _props.touch;
	    var iconStyle = _props.iconStyle;

	    var other = _objectWithoutProperties(_props, ['disabled', 'iconClassName', 'tooltip', 'touch', 'iconStyle']);

	    var fonticon = undefined;

	    var styles = this.getStyles();
	    var tooltipPosition = this.props.tooltipPosition.split('-');

	    var tooltipElement = tooltip ? _react2.default.createElement(_tooltip2.default, {
	      ref: 'tooltip',
	      label: tooltip,
	      show: this.state.tooltipShown,
	      touch: touch,
	      style: this.mergeStyles(styles.tooltip, this.props.tooltipStyles),
	      verticalPosition: tooltipPosition[0],
	      horizontalPosition: tooltipPosition[1]
	    }) : null;

	    if (iconClassName) {
	      var iconHoverColor = iconStyle.iconHoverColor;

	      var iconStyleFontIcon = _objectWithoutProperties(iconStyle, ['iconHoverColor']);

	      fonticon = _react2.default.createElement(
	        _fontIcon2.default,
	        {
	          className: iconClassName,
	          hoverColor: disabled ? null : iconHoverColor,
	          style: this.mergeStyles(styles.icon, disabled ? styles.disabled : {}, iconStyleFontIcon)
	        },
	        this.props.children
	      );
	    }

	    var childrenStyle = disabled ? this.mergeStyles(iconStyle, styles.disabled) : iconStyle;

	    return _react2.default.createElement(
	      _enhancedButton2.default,
	      _extends({}, other, {
	        ref: 'button',
	        centerRipple: true,
	        disabled: disabled,
	        style: this.mergeStyles(styles.root, this.props.style),
	        onBlur: this._handleBlur,
	        onFocus: this._handleFocus,
	        onMouseLeave: this._handleMouseLeave,
	        onMouseEnter: this._handleMouseEnter,
	        onKeyboardFocus: this._handleKeyboardFocus
	      }),
	      tooltipElement,
	      fonticon,
	      _children2.default.extend(this.props.children, {
	        style: childrenStyle
	      })
	    );
	  }
	});

	exports.default = IconButton;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _shallowEqual = __webpack_require__(41);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function relevantContextKeysEqual(classObject, currentContext, nextContext) {

	  //Get those keys from current object's context that we care
	  //about and check whether those keys have changed or not
	  if (classObject.getRelevantContextKeys) {
	    var currentContextKeys = classObject.getRelevantContextKeys(currentContext);
	    var nextContextKeys = classObject.getRelevantContextKeys(nextContext);

	    if (!(0, _shallowEqual2.default)(currentContextKeys, nextContextKeys)) {
	      return false;
	    }
	  }

	  //Check if children context keys changed
	  if (classObject.getChildrenClasses) {
	    var childrenArray = classObject.getChildrenClasses();
	    for (var i = 0; i < childrenArray.length; i++) {
	      if (!relevantContextKeysEqual(childrenArray[i], currentContext, nextContext)) {
	        return false;
	      }
	    }
	  }

	  //context keys are equal
	  return true;
	}

	exports.default = {

	  //Don't update if state, prop, and context are equal

	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState, nextContext) {

	    //If either the props or state have changed, component should update
	    if (!(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState)) {
	      return true;
	    }

	    //If current theme and next theme are both undefined, do not update
	    if (!this.context.muiTheme && !nextContext.muiTheme) {
	      return false;
	    }

	    //If both themes exist, compare keys only if current theme is not static
	    if (this.context.muiTheme && nextContext.muiTheme) {
	      return !this.context.muiTheme.static && !relevantContextKeysEqual(this.constructor, this.context.muiTheme, nextContext.muiTheme);
	    }

	    //At this point it is guaranteed that exactly one theme is undefined so simply update
	    return true;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;

	    if (property && Object.prototype.toString.call(property) === '[object Array]') {

	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }

	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';

	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var horizontal = _react2.default.PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react2.default.PropTypes.oneOf(['top', 'center', 'bottom']);

	exports.default = {

	  corners: _react2.default.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

	  horizontal: horizontal,

	  vertical: vertical,

	  origin: _react2.default.PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),

	  cornersAndCenter: _react2.default.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

	  stringOrNumber: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),

	  zDepth: _react2.default.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

	};
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _children = __webpack_require__(46);

	var _children2 = _interopRequireDefault(_children);

	var _events = __webpack_require__(48);

	var _events2 = _interopRequireDefault(_events);

	var _keyCode = __webpack_require__(49);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _focusRipple = __webpack_require__(50);

	var _focusRipple2 = _interopRequireDefault(_focusRipple);

	var _touchRipple = __webpack_require__(55);

	var _touchRipple2 = _interopRequireDefault(_touchRipple);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var styleInjected = false;
	var listening = false;
	var tabPressed = false;

	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}

	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (e) {
	      tabPressed = e.keyCode === _keyCode2.default.TAB;
	    });
	    listening = true;
	  }
	}

	var EnhancedButton = _react2.default.createClass({
	  displayName: 'EnhancedButton',

	  propTypes: {
	    centerRipple: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    containerElement: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
	    disableFocusRipple: _react2.default.PropTypes.bool,
	    disableKeyboardFocus: _react2.default.PropTypes.bool,
	    disableTouchRipple: _react2.default.PropTypes.bool,
	    disabled: _react2.default.PropTypes.bool,
	    focusRippleColor: _react2.default.PropTypes.string,
	    focusRippleOpacity: _react2.default.PropTypes.number,
	    keyboardFocused: _react2.default.PropTypes.bool,
	    linkButton: _react2.default.PropTypes.bool,
	    onBlur: _react2.default.PropTypes.func,
	    onFocus: _react2.default.PropTypes.func,
	    onKeyDown: _react2.default.PropTypes.func,
	    onKeyUp: _react2.default.PropTypes.func,
	    onKeyboardFocus: _react2.default.PropTypes.func,
	    onTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    tabIndex: _react2.default.PropTypes.number,
	    touchRippleColor: _react2.default.PropTypes.string,
	    touchRippleOpacity: _react2.default.PropTypes.number,
	    type: _react2.default.PropTypes.string
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      containerElement: 'button',
	      onBlur: function onBlur() {},
	      onFocus: function onFocus() {},
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onKeyDown: function onKeyDown() {},
	      onKeyUp: function onKeyUp() {},
	      onTouchTap: function onTouchTap() {},
	      tabIndex: 0,
	      type: 'button'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      isKeyboardFocused: !this.props.disabled && this.props.keyboardFocused && !this.props.disableKeyboardFocus,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    injectStyle();
	    listenForTabPresses();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      if (nextProps.onKeyboardFocus) {
	        nextProps.onKeyboardFocus(null, false);
	      }
	    }
	  },
	  isKeyboardFocused: function isKeyboardFocused() {
	    return this.state.isKeyboardFocused;
	  },
	  removeKeyboardFocus: function removeKeyboardFocus(e) {
	    if (this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: false });
	      this.props.onKeyboardFocus(e, false);
	    }
	  },
	  setKeyboardFocus: function setKeyboardFocus(e) {
	    if (!this.state.isKeyboardFocused) {
	      this.setState({ isKeyboardFocused: true });
	      this.props.onKeyboardFocus(e, true);
	    }
	  },
	  _cancelFocusTimeout: function _cancelFocusTimeout() {
	    if (this._focusTimeout) {
	      clearTimeout(this._focusTimeout);
	      this._focusTimeout = null;
	    }
	  },
	  _createButtonChildren: function _createButtonChildren() {
	    var _props = this.props;
	    var centerRipple = _props.centerRipple;
	    var children = _props.children;
	    var disabled = _props.disabled;
	    var disableFocusRipple = _props.disableFocusRipple;
	    var disableKeyboardFocus = _props.disableKeyboardFocus;
	    var disableTouchRipple = _props.disableTouchRipple;
	    var focusRippleColor = _props.focusRippleColor;
	    var focusRippleOpacity = _props.focusRippleOpacity;
	    var touchRippleColor = _props.touchRippleColor;
	    var touchRippleOpacity = _props.touchRippleOpacity;
	    var isKeyboardFocused = this.state.isKeyboardFocused;

	    //Focus Ripple

	    var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_focusRipple2.default, {
	      color: focusRippleColor,
	      muiTheme: this.state.muiTheme,
	      opacity: focusRippleOpacity,
	      show: isKeyboardFocused
	    }) : undefined;

	    //Touch Ripple
	    var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	      _touchRipple2.default,
	      {
	        centerRipple: centerRipple,
	        color: touchRippleColor,
	        muiTheme: this.state.muiTheme,
	        opacity: touchRippleOpacity
	      },
	      children
	    ) : undefined;

	    return _children2.default.create({
	      focusRipple: focusRipple,
	      touchRipple: touchRipple,
	      children: touchRipple ? undefined : children
	    });
	  },
	  _handleKeyDown: function _handleKeyDown(e) {
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      if (e.keyCode === _keyCode2.default.ENTER && this.state.isKeyboardFocused) {
	        this._handleTouchTap(e);
	      }
	    }
	    this.props.onKeyDown(e);
	  },
	  _handleKeyUp: function _handleKeyUp(e) {
	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      if (e.keyCode === _keyCode2.default.SPACE && this.state.isKeyboardFocused) {
	        this._handleTouchTap(e);
	      }
	    }
	    this.props.onKeyUp(e);
	  },
	  _handleBlur: function _handleBlur(e) {
	    this._cancelFocusTimeout();
	    this.removeKeyboardFocus(e);
	    this.props.onBlur(e);
	  },
	  _handleFocus: function _handleFocus(e) {
	    var _this = this;

	    if (!this.props.disabled && !this.props.disableKeyboardFocus) {
	      //setTimeout is needed because the focus event fires first
	      //Wait so that we can capture if this was a keyboard focus
	      //or touch focus
	      this._focusTimeout = setTimeout(function () {
	        if (tabPressed) {
	          _this.setKeyboardFocus(e);
	        }
	      }, 150);

	      this.props.onFocus(e);
	    }
	  },
	  _handleTouchTap: function _handleTouchTap(e) {
	    this._cancelFocusTimeout();
	    if (!this.props.disabled) {
	      tabPressed = false;
	      this.removeKeyboardFocus(e);
	      this.props.onTouchTap(e);
	    }
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var centerRipple = _props2.centerRipple;
	    var children = _props2.children;
	    var containerElement = _props2.containerElement;
	    var disabled = _props2.disabled;
	    var disableFocusRipple = _props2.disableFocusRipple;
	    var disableKeyboardFocus = _props2.disableKeyboardFocus;
	    var disableTouchRipple = _props2.disableTouchRipple;
	    var focusRippleColor = _props2.focusRippleColor;
	    var focusRippleOpacity = _props2.focusRippleOpacity;
	    var linkButton = _props2.linkButton;
	    var touchRippleColor = _props2.touchRippleColor;
	    var touchRippleOpacity = _props2.touchRippleOpacity;
	    var onBlur = _props2.onBlur;
	    var onFocus = _props2.onFocus;
	    var onKeyUp = _props2.onKeyUp;
	    var onKeyDown = _props2.onKeyDown;
	    var onTouchTap = _props2.onTouchTap;
	    var style = _props2.style;
	    var tabIndex = _props2.tabIndex;
	    var type = _props2.type;

	    var other = _objectWithoutProperties(_props2, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'linkButton', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onFocus', 'onKeyUp', 'onKeyDown', 'onTouchTap', 'style', 'tabIndex', 'type']);

	    var mergedStyles = this.mergeStyles({
	      border: 10,
	      background: 'none',
	      boxSizing: 'border-box',
	      display: 'inline-block',
	      font: 'inherit',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      tapHighlightColor: _colors2.default.transparent,
	      appearance: linkButton ? null : 'button',
	      cursor: disabled ? 'default' : 'pointer',
	      textDecoration: 'none',
	      outline: 'none',
	      /*
	        This is needed so that ripples do not bleed
	        past border radius.
	        See: http://stackoverflow.com/questions/17298739/
	          css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	       */
	      transform: disableTouchRipple && disableFocusRipple ? null : 'translate3d(0, 0, 0)',
	      verticalAlign: other.hasOwnProperty('href') ? 'middle' : null
	    }, style);

	    if (disabled && linkButton) {
	      return _react2.default.createElement(
	        'span',
	        _extends({}, other, {
	          style: mergedStyles
	        }),
	        children
	      );
	    }

	    var buttonProps = _extends({}, other, {
	      style: this.prepareStyles(mergedStyles),
	      disabled: disabled,
	      onBlur: this._handleBlur,
	      onFocus: this._handleFocus,
	      onTouchTap: this._handleTouchTap,
	      onKeyUp: this._handleKeyUp,
	      onKeyDown: this._handleKeyDown,
	      tabIndex: tabIndex,
	      type: type
	    });
	    var buttonChildren = this._createButtonChildren();

	    // Provides backward compatibity. Added to support wrapping around <a> element.
	    var targetLinkElement = buttonProps.hasOwnProperty('href') ? 'a' : 'span';

	    return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, buttonProps, buttonChildren) : _react2.default.createElement(linkButton ? targetLinkElement : containerElement, buttonProps, buttonChildren);
	  }
	});

	exports.default = EnhancedButton;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("react-addons-pure-render-mixin");

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCreateFragment = __webpack_require__(47);

	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  create: function create(fragments) {
	    var newFragments = {};
	    var validChildrenCount = 0;
	    var firstKey = undefined;

	    //Only create non-empty key fragments
	    for (var key in fragments) {
	      var currentChild = fragments[key];

	      if (currentChild) {
	        if (validChildrenCount === 0) firstKey = key;
	        newFragments[key] = currentChild;
	        validChildrenCount++;
	      }
	    }

	    if (validChildrenCount === 0) return undefined;
	    if (validChildrenCount === 1) return newFragments[firstKey];
	    return (0, _reactAddonsCreateFragment2.default)(newFragments);
	  },
	  extend: function extend(children, extendedProps, extendedChildren) {

	    return _react2.default.isValidElement(children) ? _react2.default.Children.map(children, function (child) {

	      var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

	      var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

	      return _react2.default.cloneElement(child, newProps, newChildren);
	    }) : children;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("react-addons-create-fragment");

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(e) {
	      e.target.removeEventListener(e.type, recursiveFunction);
	      return callback(e);
	    };

	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(e) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(e.type) !== -1;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  DOWN: 40,
	  ESC: 27,
	  ENTER: 13,
	  LEFT: 37,
	  RIGHT: 39,
	  SPACE: 32,
	  TAB: 9,
	  UP: 38
	};
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _autoPrefix = __webpack_require__(23);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _scaleIn = __webpack_require__(52);

	var _scaleIn2 = _interopRequireDefault(_scaleIn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pulsateDuration = 750;

	var FocusRipple = _react2.default.createClass({
	  displayName: 'FocusRipple',

	  propTypes: {
	    color: _react2.default.PropTypes.string,
	    innerStyle: _react2.default.PropTypes.object,

	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,

	    opacity: _react2.default.PropTypes.number,
	    show: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: _colors2.default.darkBlack
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.show) {
	      this._setRippleSize();
	      this._pulsate();
	    } else {
	      if (this._timeout) clearTimeout(this._timeout);
	    }
	  },
	  _getRippleElement: function _getRippleElement(props) {
	    var color = props.color;
	    var innerStyle = props.innerStyle;
	    var opacity = props.opacity;

	    var innerStyles = this.mergeStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      opacity: opacity ? opacity : 0.16,
	      backgroundColor: color,
	      transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	    }, innerStyle);

	    return _react2.default.createElement('div', { ref: 'innerCircle', style: this.prepareStyles(innerStyles) });
	  },
	  _pulsate: function _pulsate() {
	    if (!this.isMounted()) return;

	    var innerCircle = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	    if (!innerCircle) return;

	    var startScale = 'scale(1)';
	    var endScale = 'scale(0.85)';
	    var currentScale = innerCircle.style.transform;
	    var nextScale = undefined;

	    currentScale = currentScale || startScale;
	    nextScale = currentScale === startScale ? endScale : startScale;

	    _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale, this.props.muiTheme);
	    this._timeout = setTimeout(this._pulsate, pulsateDuration);
	  },
	  _setRippleSize: function _setRippleSize() {
	    var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	    var height = el.offsetHeight;
	    var width = el.offsetWidth;
	    var size = Math.max(height, width);

	    var oldTop = 0;
	    // For browsers that don't support endsWith()
	    if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	      oldTop = parseInt(el.style.top);
	    }
	    el.style.height = size + 'px';
	    el.style.top = height / 2 - size / 2 + oldTop + 'px';
	  },
	  render: function render() {
	    var _props = this.props;
	    var show = _props.show;
	    var style = _props.style;

	    var mergedRootStyles = this.mergeStyles({
	      height: '100%',
	      width: '100%',
	      position: 'absolute',
	      top: 0,
	      left: 0
	    }, style);

	    var ripple = show ? this._getRippleElement(this.props) : null;

	    return _react2.default.createElement(
	      _scaleIn2.default,
	      {
	        maxScale: 0.85,
	        style: mergedRootStyles
	      },
	      ripple
	    );
	  }
	});

	exports.default = FocusRipple;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactAddonsTransitionGroup = __webpack_require__(53);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _scaleInChild = __webpack_require__(54);

	var _scaleInChild2 = _interopRequireDefault(_scaleInChild);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ScaleIn = _react2.default.createClass({
	  displayName: 'ScaleIn',

	  propTypes: {
	    childStyle: _react2.default.PropTypes.object,
	    children: _react2.default.PropTypes.node,
	    enterDelay: _react2.default.PropTypes.number,
	    maxScale: _react2.default.PropTypes.number,
	    minScale: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var childStyle = _props.childStyle;
	    var enterDelay = _props.enterDelay;
	    var maxScale = _props.maxScale;
	    var minScale = _props.minScale;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);

	    var mergedRootStyles = this.mergeStyles({
	      position: 'relative',
	      overflow: 'hidden',
	      height: '100%'
	    }, style);

	    var newChildren = _react2.default.Children.map(children, function (child) {
	      return _react2.default.createElement(
	        _scaleInChild2.default,
	        {
	          key: child.key,
	          enterDelay: enterDelay,
	          maxScale: maxScale,
	          minScale: minScale,
	          style: childStyle
	        },
	        child
	      );
	    });

	    return _react2.default.createElement(
	      _reactAddonsTransitionGroup2.default,
	      _extends({}, other, {
	        style: this.prepareStyles(mergedRootStyles),
	        component: 'div'
	      }),
	      newChildren
	    );
	  }
	});

	exports.default = ScaleIn;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("react-addons-transition-group");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _autoPrefix = __webpack_require__(23);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ScaleInChild = _react2.default.createClass({
	  displayName: 'ScaleInChild',

	  propTypes: {
	    children: _react2.default.PropTypes.node,
	    enterDelay: _react2.default.PropTypes.number,
	    maxScale: _react2.default.PropTypes.number,
	    minScale: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      enterDelay: 0,
	      maxScale: 1,
	      minScale: 0
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },
	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    var style = _reactDom2.default.findDOMNode(this).style;

	    style.opacity = '0';
	    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')', this.state.muiTheme);

	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 450);
	  },
	  _animate: function _animate() {
	    var style = _reactDom2.default.findDOMNode(this).style;

	    style.opacity = '1';
	    _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')', this.state.muiTheme);
	  },
	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;

	    var style = _reactDom2.default.findDOMNode(this).style;

	    style.opacity = '0';
	    _autoPrefix2.default.set(style, 'transform', 'scale(0)', this.state.muiTheme);

	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, this.props.enterDelay);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var enterDelay = _props.enterDelay;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'style']);

	    var mergedRootStyles = this.mergeStyles({
	      position: 'absolute',
	      height: '100%',
	      width: '100%',
	      top: 0,
	      left: 0,
	      transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	    }, style);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(mergedRootStyles) }),
	      children
	    );
	  }
	});

	exports.default = ScaleInChild;
	module.exports = exports['default'];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactAddonsTransitionGroup = __webpack_require__(53);

	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _dom = __webpack_require__(56);

	var _dom2 = _interopRequireDefault(_dom);

	var _circleRipple = __webpack_require__(57);

	var _circleRipple2 = _interopRequireDefault(_circleRipple);

	var _reactAddonsUpdate = __webpack_require__(37);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function push(array, obj) {
	  var newObj = Array.isArray(obj) ? obj : [obj];
	  return (0, _reactAddonsUpdate2.default)(array, { $push: newObj });
	}

	function shift(array) {
	  return (0, _reactAddonsUpdate2.default)(array, { $splice: [[0, 1]] });
	}

	var TouchRipple = _react2.default.createClass({
	  displayName: 'TouchRipple',

	  propTypes: {
	    centerRipple: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    color: _react2.default.PropTypes.string,

	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,

	    opacity: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getInitialState: function getInitialState() {
	    //Touch start produces a mouse down event for compat reasons. To avoid
	    //showing ripples twice we skip showing a ripple for the first mouse down
	    //after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    //to avoid re-rendering when we change it
	    this._ignoreNextMouseDown = false;

	    return {
	      //This prop allows us to only render the ReactTransitionGroup
	      //on the first click of the component, making the inital
	      //render faster
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	  },
	  start: function start(e, isRippleTouchGenerated) {
	    if (this._ignoreNextMouseDown && !isRippleTouchGenerated) {
	      this._ignoreNextMouseDown = false;
	      return;
	    }

	    var ripples = this.state.ripples;

	    //Add a ripple to the ripples array
	    ripples = push(ripples, _react2.default.createElement(_circleRipple2.default, {
	      key: this.state.nextKey,
	      muiTheme: this.props.muiTheme,
	      style: !this.props.centerRipple ? this._getRippleStyle(e) : {},
	      color: this.props.color,
	      opacity: this.props.opacity,
	      touchGenerated: isRippleTouchGenerated
	    }));

	    this._ignoreNextMouseDown = isRippleTouchGenerated;
	    this.setState({
	      hasRipples: true,
	      nextKey: this.state.nextKey + 1,
	      ripples: ripples
	    });
	  },
	  end: function end() {
	    var currentRipples = this.state.ripples;
	    this.setState({
	      ripples: shift(currentRipples)
	    });
	  },
	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) this.start(e, false);
	  },
	  _handleMouseUp: function _handleMouseUp() {
	    this.end();
	  },
	  _handleMouseLeave: function _handleMouseLeave() {
	    this.end();
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.start(e, true);
	  },
	  _handleTouchEnd: function _handleTouchEnd() {
	    this.end();
	  },
	  _getRippleStyle: function _getRippleStyle(e) {
	    var style = {};
	    var el = _reactDom2.default.findDOMNode(this);
	    var elHeight = el.offsetHeight;
	    var elWidth = el.offsetWidth;
	    var offset = _dom2.default.offset(el);
	    var isTouchEvent = e.touches && e.touches.length;
	    var pageX = isTouchEvent ? e.touches[0].pageX : e.pageX;
	    var pageY = isTouchEvent ? e.touches[0].pageY : e.pageY;
	    var pointerX = pageX - offset.left;
	    var pointerY = pageY - offset.top;
	    var topLeftDiag = this._calcDiag(pointerX, pointerY);
	    var topRightDiag = this._calcDiag(elWidth - pointerX, pointerY);
	    var botRightDiag = this._calcDiag(elWidth - pointerX, elHeight - pointerY);
	    var botLeftDiag = this._calcDiag(pointerX, elHeight - pointerY);
	    var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	    var rippleSize = rippleRadius * 2;
	    var left = pointerX - rippleRadius;
	    var top = pointerY - rippleRadius;

	    style.height = rippleSize + 'px';
	    style.width = rippleSize + 'px';
	    style.top = top + 'px';
	    style.left = left + 'px';

	    return style;
	  },
	  _calcDiag: function _calcDiag(a, b) {
	    return Math.sqrt(a * a + b * b);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var style = _props.style;
	    var _state = this.state;
	    var hasRipples = _state.hasRipples;
	    var ripples = _state.ripples;

	    var rippleGroup = undefined;
	    if (hasRipples) {
	      var mergedStyles = this.mergeStyles({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        overflow: 'hidden'
	      }, style);

	      rippleGroup = _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        { style: this.prepareStyles(mergedStyles) },
	        ripples
	      );
	    }

	    return _react2.default.createElement(
	      'div',
	      {
	        onMouseUp: this._handleMouseUp,
	        onMouseDown: this._handleMouseDown,
	        onMouseLeave: this._handleMouseLeave,
	        onTouchStart: this._handleTouchStart,
	        onTouchEnd: this._handleTouchEnd
	      },
	      rippleGroup,
	      children
	    );
	  }
	});

	exports.default = TouchRipple;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;

	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }

	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  },

	  getStyleAttributeAsNumber: function getStyleAttributeAsNumber(el, attr) {
	    var attrStyle = el.style[attr];
	    var attrNum = 0;
	    if (attrStyle && attrStyle.length) {
	      attrNum = parseInt(attrStyle);
	    }

	    return attrNum;
	  },

	  addClass: function addClass(el, className) {
	    if (el.classList) el.classList.add(className);else el.className += ' ' + className;
	  },
	  removeClass: function removeClass(el, className) {
	    if (el.classList) {
	      el.classList.remove(className);
	    } else {
	      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	    }
	  },
	  hasClass: function hasClass(el, className) {
	    if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  },
	  toggleClass: function toggleClass(el, className) {
	    if (this.hasClass(el, className)) this.removeClass(el, className);else this.addClass(el, className);
	  },
	  forceRedraw: function forceRedraw(el) {
	    var originalDisplay = el.style.display;

	    el.style.display = 'none';
	    el.style.display = originalDisplay;
	  },
	  withoutTransition: function withoutTransition(el, callback) {
	    var originalTransition = el.style.transition;

	    //turn off transition
	    el.style.transition = null;

	    callback();

	    //force a redraw
	    this.forceRedraw(el);

	    //put the transition back
	    el.style.transition = originalTransition;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _autoPrefix = __webpack_require__(23);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var CircleRipple = _react2.default.createClass({
	  displayName: 'CircleRipple',

	  propTypes: {
	    color: _react2.default.PropTypes.string,

	    /**
	     * The material-ui theme applied to this component.
	     */
	    muiTheme: _react2.default.PropTypes.object.isRequired,

	    opacity: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      color: _colors2.default.darkBlack,
	      opacity: 0.16
	    };
	  },
	  componentWillAppear: function componentWillAppear(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentWillEnter: function componentWillEnter(callback) {
	    this._initializeAnimation(callback);
	  },
	  componentDidAppear: function componentDidAppear() {
	    this._animate();
	  },
	  componentDidEnter: function componentDidEnter() {
	    this._animate();
	  },
	  componentWillLeave: function componentWillLeave(callback) {
	    var _this = this;

	    var style = _reactDom2.default.findDOMNode(this).style;
	    style.opacity = 0;
	    setTimeout(function () {
	      if (_this.isMounted()) callback();
	    }, 2000);
	  },
	  _animate: function _animate() {
	    var style = _reactDom2.default.findDOMNode(this).style;
	    var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ',' + _transitions2.default.easeOut('1s', 'transform');
	    _autoPrefix2.default.set(style, 'transition', transitionValue, this.props.muiTheme);
	    _autoPrefix2.default.set(style, 'transform', 'scale(1)', this.props.muiTheme);
	  },
	  _initializeAnimation: function _initializeAnimation(callback) {
	    var _this2 = this;

	    var style = _reactDom2.default.findDOMNode(this).style;
	    style.opacity = this.props.opacity;
	    _autoPrefix2.default.set(style, 'transform', 'scale(0)', this.props.muiTheme);
	    setTimeout(function () {
	      if (_this2.isMounted()) callback();
	    }, 0);
	  },
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var opacity = _props.opacity;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['color', 'opacity', 'style']);

	    var mergedStyles = this.mergeStyles({
	      position: 'absolute',
	      top: 0,
	      left: 0,
	      height: '100%',
	      width: '100%',
	      borderRadius: '50%',
	      backgroundColor: color
	    }, style);

	    return _react2.default.createElement('div', _extends({}, other, { style: this.prepareStyles(mergedStyles) }));
	  }
	});

	exports.default = CircleRipple;
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FontIcon = _react2.default.createClass({
	  displayName: 'FontIcon',

	  propTypes: {
	    /**
	     * This is the font color of the font icon. If not specified,
	     * this component will default to muiTheme.palette.textColor.
	     */
	    color: _react2.default.PropTypes.string,

	    /**
	     * This is the icon color when the mouse hovers over the icon.
	     */
	    hoverColor: _react2.default.PropTypes.string,

	    /**
	     * Function called when mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Function called when mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {}
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: false });
	    if (this.props.onMouseLeave) {
	      this.props.onMouseLeave(e);
	    }
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    // hover is needed only when a hoverColor is defined
	    if (this.props.hoverColor !== undefined) this.setState({ hovered: true });
	    if (this.props.onMouseEnter) {
	      this.props.onMouseEnter(e);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseLeave = _props.onMouseLeave;
	    var onMouseEnter = _props.onMouseEnter;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['color', 'hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);

	    var spacing = this.state.muiTheme.rawTheme.spacing;
	    var offColor = color ? color : style && style.color ? style.color : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;

	    var mergedStyles = this.mergeStyles({
	      position: 'relative',
	      fontSize: spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }, style, {
	      color: this.state.hovered ? onColor : offColor
	    });

	    return _react2.default.createElement('span', _extends({}, other, {
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      style: this.prepareStyles(mergedStyles)
	    }));
	  }
	});

	exports.default = FontIcon;
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Tooltip = _react2.default.createClass({
	  displayName: 'Tooltip',

	  propTypes: {
	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	    horizontalPosition: _react2.default.PropTypes.oneOf(['left', 'right', 'center']),
	    label: _react2.default.PropTypes.node.isRequired,
	    show: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    touch: _react2.default.PropTypes.bool,
	    verticalPosition: _react2.default.PropTypes.oneOf(['top', 'bottom'])
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      offsetWidth: null,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._setRippleSize();
	    this._setTooltipPosition();
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    this._setTooltipPosition();

	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._setRippleSize();
	  },
	  getStyles: function getStyles() {
	    var verticalPosition = this.props.verticalPosition;
	    var horizontalPosition = this.props.horizontalPosition;
	    var touchMarginOffset = this.props.touch ? 10 : 0;
	    var touchOffsetTop = this.props.touch ? -20 : -10;
	    var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;

	    var styles = {
	      root: {
	        position: 'absolute',
	        fontFamily: rawTheme.fontFamily,
	        fontSize: '10px',
	        lineHeight: '22px',
	        padding: '0 8px',
	        zIndex: muiTheme.zIndex.tooltip,
	        color: _colors2.default.white,
	        overflow: 'hidden',
	        top: -10000,
	        borderRadius: 2,
	        userSelect: 'none',
	        opacity: 0,
	        right: horizontalPosition === 'left' ? 12 : null,
	        left: horizontalPosition === 'center' ? (this.state.offsetWidth - 48) / 2 * -1 : null,
	        transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ',' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	      },
	      label: {
	        position: 'relative',
	        whiteSpace: 'nowrap'
	      },
	      ripple: {
	        position: 'absolute',
	        left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	        top: verticalPosition === 'bottom' ? 0 : '100%',
	        transform: 'translate(-50%, -50%)',
	        borderRadius: '50%',
	        backgroundColor: 'transparent',
	        transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ',' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ',' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	      },
	      rootWhenShown: {
	        top: verticalPosition === 'top' ? touchOffsetTop : 36,
	        opacity: 0.9,
	        transform: 'translate3d(0px, ' + offset + 'px, 0px)',
	        transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	      },
	      rootWhenTouched: {
	        fontSize: '14px',
	        lineHeight: '32px',
	        padding: '0 16px'
	      },
	      rippleWhenShown: {
	        backgroundColor: _colors2.default.grey700,
	        transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ',' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	      }
	    };

	    return styles;
	  },
	  _setRippleSize: function _setRippleSize() {
	    var ripple = _reactDom2.default.findDOMNode(this.refs.ripple);
	    var tooltip = window.getComputedStyle(_reactDom2.default.findDOMNode(this));
	    var tooltipWidth = parseInt(tooltip.getPropertyValue('width'), 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	    var tooltipHeight = parseInt(tooltip.getPropertyValue('height'), 10);

	    var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	    if (this.props.show) {
	      ripple.style.height = rippleDiameter + 'px';
	      ripple.style.width = rippleDiameter + 'px';
	    } else {
	      ripple.style.width = '0px';
	      ripple.style.height = '0px';
	    }
	  },
	  _setTooltipPosition: function _setTooltipPosition() {
	    var tooltip = _reactDom2.default.findDOMNode(this);
	    this.setState({ offsetWidth: tooltip.offsetWidth });
	  },
	  render: function render() {
	    var _props = this.props;
	    var label = _props.label;

	    var other = _objectWithoutProperties(_props, ['label']);

	    var styles = this.getStyles();

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, {
	        style: this.prepareStyles(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style)
	      }),
	      _react2.default.createElement('div', {
	        ref: 'ripple',
	        style: this.prepareStyles(styles.ripple, this.props.show && styles.rippleWhenShown)
	      }),
	      _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label) },
	        label
	      )
	    );
	  }
	});

	exports.default = Tooltip;
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(61);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationMenu = _react2.default.createClass({
	  displayName: 'NavigationMenu',

	  mixins: [_reactAddonsPureRenderMixin2.default],

	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	    );
	  }
	});

	exports.default = NavigationMenu;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var SvgIcon = _react2.default.createClass({
	  displayName: 'SvgIcon',

	  propTypes: {
	    /**
	     * Elements passed into the SVG Icon.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * This is the fill color of the svg icon.
	     * If not specified, this component will default
	     * to muiTheme.palette.textColor.
	     */
	    color: _react2.default.PropTypes.string,

	    /**
	     * This is the icon color when the mouse hovers over the icon.
	     */
	    hoverColor: _react2.default.PropTypes.string,

	    /**
	     * Function called when mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Function called when mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Allows you to redifine what the coordinates
	     * without units mean inside an svg element. For example,
	     * if the SVG element is 500 (width) by 200 (height), and you
	     * pass viewBox="0 0 50 20", this means that the coordinates inside
	     * the svg will go from the top left corner (0,0) to bottom right (50,20)
	     * and each unit will be worth 10px.
	     */
	    viewBox: _react2.default.PropTypes.string
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      viewBox: '0 0 24 24'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var color = _props.color;
	    var hoverColor = _props.hoverColor;
	    var onMouseEnter = _props.onMouseEnter;
	    var onMouseLeave = _props.onMouseLeave;
	    var style = _props.style;
	    var viewBox = _props.viewBox;

	    var other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);

	    var offColor = color ? color : style && style.fill ? style.fill : this.state.muiTheme.rawTheme.palette.textColor;
	    var onColor = hoverColor ? hoverColor : offColor;

	    var mergedStyles = this.mergeStyles({
	      display: 'inline-block',
	      height: 24,
	      width: 24,
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }, style, {
	      // Make sure our fill color overrides fill provided in props.style
	      fill: this.state.hovered ? onColor : offColor
	    });

	    var events = hoverColor ? {
	      onMouseEnter: this._handleMouseEnter,
	      onMouseLeave: this._handleMouseLeave
	    } : {};

	    return _react2.default.createElement(
	      'svg',
	      _extends({}, other, events, {
	        style: this.prepareStyles(mergedStyles),
	        viewBox: viewBox
	      }),
	      children
	    );
	  }
	});

	exports.default = SvgIcon;
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _propTypes = __webpack_require__(43);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Paper = _react2.default.createClass({
	  displayName: 'Paper',

	  propTypes: {
	    /**
	     * Children passed into the paper element.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Set to true to generate a circlular paper container.
	     */
	    circle: _react2.default.PropTypes.bool,

	    /**
	     * By default, the paper container will have a border radius.
	     * Set this to false to generate a container with sharp corners.
	     */
	    rounded: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Set to false to disable CSS transitions for the paper element.
	     */
	    transitionEnabled: _react2.default.PropTypes.bool,

	    /**
	     * This number represents the zDepth of the paper shadow.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      circle: false,
	      rounded: true,
	      transitionEnabled: true,
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var circle = _props.circle;
	    var rounded = _props.rounded;
	    var style = _props.style;
	    var transitionEnabled = _props.transitionEnabled;
	    var zDepth = _props.zDepth;

	    var other = _objectWithoutProperties(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);

	    var styles = {
	      backgroundColor: this.state.muiTheme.paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      boxShadow: this.state.muiTheme.paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    };

	    return _react2.default.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles, style) }),
	      children
	    );
	  }
	});

	exports.default = Paper;
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _searchForm = __webpack_require__(64);

	var _searchForm2 = _interopRequireDefault(_searchForm);

	var _raisedButton = __webpack_require__(92);

	var _raisedButton2 = _interopRequireDefault(_raisedButton);

	var _paper = __webpack_require__(62);

	var _paper2 = _interopRequireDefault(_paper);

	var _cardActions = __webpack_require__(93);

	var _cardActions2 = _interopRequireDefault(_cardActions);

	var _cardHeader = __webpack_require__(94);

	var _cardHeader2 = _interopRequireDefault(_cardHeader);

	var _cardMedia = __webpack_require__(102);

	var _cardMedia2 = _interopRequireDefault(_cardMedia);

	var _cardTitle = __webpack_require__(103);

	var _cardTitle2 = _interopRequireDefault(_cardTitle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBox = function (_Component) {
	  _inherits(SearchBox, _Component);

	  function SearchBox() {
	    _classCallCheck(this, SearchBox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBox).apply(this, arguments));
	  }

	  _createClass(SearchBox, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'search-box' },
	        _react2.default.createElement(
	          _paper2.default,
	          { zDepth: 2 },
	          _react2.default.createElement(_searchForm2.default, {
	            dataSource: this.props.autocompleteData,
	            onUpdate: this.props.onSearchUpdate,
	            onSubmit: this.props.onSearchSubmit })
	        )
	      );
	    }
	  }]);

	  return SearchBox;
	}(_react.Component);

	exports.default = SearchBox;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _autoComplete = __webpack_require__(65);

	var _autoComplete2 = _interopRequireDefault(_autoComplete);

	var _raisedButton = __webpack_require__(92);

	var _raisedButton2 = _interopRequireDefault(_raisedButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchForm = function (_Component) {
	  _inherits(SearchForm, _Component);

	  function SearchForm(props) {
	    _classCallCheck(this, SearchForm);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchForm).call(this, props));
	  }

	  _createClass(SearchForm, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'search-input' },
	        _react2.default.createElement(_autoComplete2.default, {
	          hintText: 'Place name',
	          dataSource: this.props.dataSource,
	          onUpdateInput: this.props.onUpdate
	        }),
	        _react2.default.createElement(
	          'div',
	          { id: 'search-button' },
	          _react2.default.createElement(_raisedButton2.default, { label: 'Search', primary: true, onClick: this.props.onSubmit })
	        )
	      );
	    }
	  }]);

	  return SearchForm;
	}(_react.Component);

	exports.default = SearchForm;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _keyCode = __webpack_require__(49);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _textField = __webpack_require__(66);

	var _textField2 = _interopRequireDefault(_textField);

	var _menu = __webpack_require__(74);

	var _menu2 = _interopRequireDefault(_menu);

	var _menuItem = __webpack_require__(77);

	var _menuItem2 = _interopRequireDefault(_menuItem);

	var _divider = __webpack_require__(89);

	var _divider2 = _interopRequireDefault(_divider);

	var _popover = __webpack_require__(78);

	var _popover2 = _interopRequireDefault(_popover);

	var _propTypes = __webpack_require__(43);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _deprecatedPropType = __webpack_require__(91);

	var _deprecatedPropType2 = _interopRequireDefault(_deprecatedPropType);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var AutoComplete = _react2.default.createClass({
	  displayName: 'AutoComplete',

	  propTypes: {
	    /**
	     * Location of the anchor for the auto complete.
	     */
	    anchorOrigin: _propTypes2.default.origin,

	    /**
	     * Whether or not the auto complete is animated as it is toggled.
	     */
	    animated: _react2.default.PropTypes.bool,

	    /**
	     * Array of strings or nodes used to populate the list.
	     */
	    dataSource: _react2.default.PropTypes.array,

	    /**
	     * Disables focus ripple when true.
	     */
	    disableFocusRipple: _react2.default.PropTypes.bool,

	    /**
	     * Override style prop for error.
	     */
	    errorStyle: _react2.default.PropTypes.object,

	    /**
	     * The error content to display.
	     */
	    errorText: _react2.default.PropTypes.string,

	    /**
	     * Function used to filter the auto complete.
	     */
	    filter: _react2.default.PropTypes.func,

	    /**
	     * The content to use for adding floating label element.
	     */
	    floatingLabelText: _react2.default.PropTypes.string,

	    /**
	     * If true, the field receives the property `width: 100%`.
	     */
	    fullWidth: _react2.default.PropTypes.bool,

	    /**
	     * The hint content to display.
	     */
	    hintText: _react2.default.PropTypes.string,

	    /**
	     * Override style for list.
	     */
	    listStyle: _react2.default.PropTypes.object,

	    /**
	     * Delay for closing time of the menu.
	     */
	    menuCloseDelay: _react2.default.PropTypes.number,

	    /**
	     * Props to be passed to menu.
	     */
	    menuProps: _react2.default.PropTypes.object,

	    /**
	     * Override style for menu.
	     */
	    menuStyle: _react2.default.PropTypes.object,

	    /**
	     * Gets called when list item is clicked or pressed enter.
	     */
	    onNewRequest: _react2.default.PropTypes.func,

	    /**
	     * Gets called each time the user updates the text field.
	     */
	    onUpdateInput: _react2.default.PropTypes.func,

	    /**
	     * Auto complete menu is open if true.
	     */
	    open: _react2.default.PropTypes.bool,

	    /**
	     * Text being input to auto complete.
	     */
	    searchText: _react2.default.PropTypes.string,
	    showAllItems: (0, _deprecatedPropType2.default)(_react2.default.PropTypes.bool, 'showAllItems is deprecated, use noFilter instead'),

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Origin for location of target.
	     */
	    targetOrigin: _propTypes2.default.origin,

	    /**
	     * Delay for touch tap event closing of auto complete.
	     */
	    touchTapCloseDelay: _react2.default.PropTypes.number,

	    /**
	     * If true, will update when focus event triggers.
	     */
	    triggerUpdateOnFocus: _react2.default.PropTypes.bool,
	    updateWhenFocused: (0, _deprecatedPropType2.default)(_react2.default.PropTypes.bool, 'updateWhenFocused has been renamed to triggerUpdateOnFocus')
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      anchorOrigin: {
	        vertical: 'bottom',
	        horizontal: 'left'
	      },
	      targetOrigin: {
	        vertical: 'top',
	        horizontal: 'left'
	      },
	      animated: true,
	      fullWidth: false,
	      open: false,
	      searchText: '',
	      menuCloseDelay: 100,
	      disableFocusRipple: true,
	      onUpdateInput: function onUpdateInput() {},
	      onNewRequest: function onNewRequest() {},
	      filter: function filter(searchText, key) {
	        return searchText !== '' && key.includes(searchText);
	      },
	      triggerUpdateOnFocus: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      searchText: this.props.searchText,
	      open: this.props.open,
	      anchorEl: null,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.focusOnInput = false;
	    this.requestsList = [];
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.searchText !== nextProps.searchText) {
	      this.setState({
	        searchText: nextProps.searchText
	      });
	    }
	  },

	  componentClickAway: function componentClickAway() {
	    this._close();
	    this.focusOnInput = false;
	  },
	  _open: function _open() {
	    this.setState({
	      open: true,
	      anchorEl: _reactDom2.default.findDOMNode(this.refs.searchTextField)
	    });
	  },
	  _close: function _close() {
	    this.setState({
	      open: false,
	      anchorEl: null
	    });
	  },
	  setValue: function setValue(textValue) {
	    this.setState({
	      searchText: textValue
	    });
	  },
	  getValue: function getValue() {
	    return this.state.searchText;
	  },
	  _updateRequests: function _updateRequests(searchText) {

	    this.setState({
	      searchText: searchText,
	      open: true,
	      anchorEl: _reactDom2.default.findDOMNode(this.refs.searchTextField)
	    });

	    this.focusOnInput = true;

	    this.props.onUpdateInput(searchText, this.props.dataSource);
	  },
	  _handleItemTouchTap: function _handleItemTouchTap(e, child) {
	    var _this = this;

	    setTimeout(function () {
	      _this._close();
	    }, this.props.touchTapCloseDelay);

	    var dataSource = this.props.dataSource;

	    var chosenRequest = undefined;
	    var index = undefined;
	    var searchText = undefined;
	    if (typeof dataSource[0] === 'string') {
	      chosenRequest = this.requestsList[parseInt(child.key, 10)];
	      index = dataSource.indexOf(chosenRequest);
	      searchText = dataSource[index];
	    } else {
	      chosenRequest = child.key;
	      index = dataSource.indexOf(dataSource.filter(function (item) {
	        return chosenRequest === item.text;
	      })[0]);
	      searchText = chosenRequest;
	    }

	    this.setState({ searchText: searchText });

	    this.props.onNewRequest(chosenRequest, index, dataSource);
	  },
	  _handleKeyDown: function _handleKeyDown(e) {
	    switch (e.keyCode) {
	      case _keyCode2.default.ESC:
	        this._close();
	        break;
	      case _keyCode2.default.DOWN:
	        if (this.focusOnInput && this.state.open) {
	          e.preventDefault();
	          this.focusOnInput = false;
	          this._open();
	        }
	        break;
	      default:
	        break;
	    }
	  },
	  render: function render() {
	    var _this2 = this;

	    var _props = this.props;
	    var anchorOrigin = _props.anchorOrigin;
	    var animated = _props.animated;
	    var style = _props.style;
	    var errorStyle = _props.errorStyle;
	    var floatingLabelText = _props.floatingLabelText;
	    var hintText = _props.hintText;
	    var fullWidth = _props.fullWidth;
	    var menuStyle = _props.menuStyle;
	    var menuProps = _props.menuProps;
	    var listStyle = _props.listStyle;
	    var targetOrigin = _props.targetOrigin;

	    var other = _objectWithoutProperties(_props, ['anchorOrigin', 'animated', 'style', 'errorStyle', 'floatingLabelText', 'hintText', 'fullWidth', 'menuStyle', 'menuProps', 'listStyle', 'targetOrigin']);

	    var _state = this.state;
	    var open = _state.open;
	    var anchorEl = _state.anchorEl;

	    var styles = {
	      root: {
	        display: 'inline-block',
	        position: 'relative',
	        width: this.props.fullWidth ? '100%' : 256
	      },
	      input: {},
	      error: {},
	      menu: {
	        width: '100%'
	      },
	      list: {
	        display: 'block',
	        width: this.props.fullWidth ? '100%' : 256
	      }
	    };

	    var textFieldProps = {
	      style: this.mergeStyles(styles.input, style),
	      floatingLabelText: floatingLabelText,
	      hintText: !hintText && !floatingLabelText ? '' : hintText,
	      fullWidth: true,
	      multiLine: false,
	      errorStyle: this.mergeStyles(styles.error, errorStyle)
	    };

	    var mergedRootStyles = this.mergeStyles(styles.root, style);
	    var mergedMenuStyles = this.mergeStyles(styles.menu, menuStyle);

	    var requestsList = [];

	    this.props.dataSource.map(function (item) {
	      //showAllItems is deprecated, will be removed in the future
	      if (_this2.props.showAllItems) {
	        requestsList.push(item);
	        return;
	      }

	      switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
	        case 'string':
	          if (_this2.props.filter(_this2.state.searchText, item, item)) {
	            requestsList.push(item);
	          }
	          break;
	        case 'object':
	          if (typeof item.text === 'string') {
	            if (_this2.props.filter(_this2.state.searchText, item.text, item)) {
	              requestsList.push(item);
	            }
	          }
	          break;
	      }
	    });

	    this.requestsList = requestsList;

	    var menu = open && requestsList.length > 0 ? _react2.default.createElement(
	      _menu2.default,
	      _extends({}, menuProps, {
	        ref: 'menu',
	        key: 'dropDownMenu',
	        autoWidth: false,
	        onEscKeyDown: this._close,
	        initiallyKeyboardFocused: false,
	        onItemTouchTap: this._handleItemTouchTap,
	        listStyle: this.mergeStyles(styles.list, listStyle),
	        style: mergedMenuStyles
	      }),
	      requestsList.map(function (request, index) {
	        switch (typeof request === 'undefined' ? 'undefined' : _typeof(request)) {
	          case 'string':
	            return _react2.default.createElement(_menuItem2.default, {
	              disableFocusRipple: _this2.props.disableFocusRipple,
	              innerDivStyle: { overflow: 'hidden' },
	              key: index,
	              value: request,
	              primaryText: request
	            });
	          case 'object':
	            if (typeof request.text === 'string') {
	              return _react2.default.cloneElement(request.value, {
	                key: request.text,
	                disableFocusRipple: _this2.props.disableFocusRipple
	              });
	            }
	            return _react2.default.cloneElement(request, {
	              key: index,
	              disableFocusRipple: _this2.props.disableFocusRipple
	            });
	          default:
	            return null;
	        }
	      })
	    ) : null;

	    var popoverStyle = undefined;
	    if (anchorEl && fullWidth) {
	      popoverStyle = { width: anchorEl.clientWidth };
	    }

	    return _react2.default.createElement(
	      'div',
	      {
	        style: this.prepareStyles(mergedRootStyles),
	        onKeyDown: this._handleKeyDown
	      },
	      _react2.default.createElement(
	        'div',
	        {
	          style: {
	            width: '100%'
	          }
	        },
	        _react2.default.createElement(_textField2.default, _extends({}, other, {
	          ref: 'searchTextField',
	          value: this.state.searchText,
	          onEnterKeyDown: function onEnterKeyDown() {
	            setTimeout(function () {
	              _this2._close();
	            }, _this2.props.touchTapCloseDelay);
	            _this2.props.onNewRequest(_this2.state.searchText);
	          },
	          onChange: function onChange(e) {
	            var searchText = e.target.value;
	            _this2._updateRequests(searchText);
	          },
	          onBlur: function onBlur() {
	            if (_this2.focusOnInput && open) _this2.refs.searchTextField.focus();
	          },
	          onFocus: function onFocus() {
	            if (!open && (_this2.props.triggerUpdateOnFocus || _this2.props.updateWhenFocused //this line will be removed in the future
	             || _this2.requestsList > 0)) {
	              _this2._updateRequests(_this2.state.searchText);
	            }
	            _this2.focusOnInput = true;
	          }

	        }, textFieldProps))
	      ),
	      _react2.default.createElement(
	        _popover2.default,
	        {
	          style: popoverStyle,
	          anchorOrigin: anchorOrigin,
	          targetOrigin: targetOrigin,
	          open: open,
	          anchorEl: anchorEl,
	          useLayerForClickAway: false,
	          onRequestClose: this._close
	        },
	        menu
	      )
	    );
	  }
	});

	AutoComplete.levenshteinDistance = function (searchText, key) {
	  var current = [];
	  var prev = undefined;
	  var value = undefined;

	  for (var i = 0; i <= key.length; i++) {
	    for (var j = 0; j <= searchText.length; j++) {
	      if (i && j) {
	        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;else value = Math.min(current[j], current[j - 1], prev) + 1;
	      } else {
	        value = i + j;
	      }
	      prev = current[j];
	      current[j] = value;
	    }
	  }
	  return current.pop();
	};

	AutoComplete.noFilter = function () {
	  return true;
	};

	AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = function (searchText, key) {
	  return searchText !== '' && key.includes(searchText);
	};

	AutoComplete.caseInsensitiveFilter = function (searchText, key) {
	  return key.toLowerCase().includes(searchText.toLowerCase());
	};

	AutoComplete.levenshteinDistanceFilter = function (distanceLessThan) {
	  if (distanceLessThan === undefined) return AutoComplete.levenshteinDistance;else if (typeof distanceLessThan !== 'number') {
	    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
	  }
	  return function (s, k) {
	    return AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
	  };
	};

	AutoComplete.fuzzyFilter = function (searchText, key) {
	  if (searchText.length === 0) return false;
	  var subMatchKey = key.substring(0, searchText.length);
	  var distance = AutoComplete.levenshteinDistance(searchText.toLowerCase(), subMatchKey.toLowerCase());
	  return searchText.length > 3 ? distance < 2 : distance === 0;
	};

	AutoComplete.Item = _menuItem2.default;
	AutoComplete.Divider = _divider2.default;

	exports.default = AutoComplete;
	module.exports = exports['default'];

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TextField = __webpack_require__(67);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TextField2.default;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TextField = __webpack_require__(68);

	var _TextField2 = _interopRequireDefault(_TextField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TextField2.default;
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _colorManipulator = __webpack_require__(21);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _uniqueId = __webpack_require__(69);

	var _uniqueId2 = _interopRequireDefault(_uniqueId);

	var _enhancedTextarea = __webpack_require__(70);

	var _enhancedTextarea2 = _interopRequireDefault(_enhancedTextarea);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _contextPure = __webpack_require__(40);

	var _contextPure2 = _interopRequireDefault(_contextPure);

	var _TextFieldHint = __webpack_require__(71);

	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

	var _TextFieldLabel = __webpack_require__(72);

	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

	var _TextFieldUnderline = __webpack_require__(73);

	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Check if a value is valid to be displayed inside an input.
	 *
	 * @param The value to check.
	 * @returns True if the string provided is valid, false otherwise.
	 */
	function isValid(value) {
	  return Boolean(value || value === 0);
	}

	var TextField = _react2.default.createClass({
	  displayName: 'TextField',

	  propTypes: {
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The text string to use for the default value.
	     */
	    defaultValue: _react2.default.PropTypes.any,

	    /**
	     * Disables the text field if set to true.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * The style object to use to override error styles.
	     */
	    errorStyle: _react2.default.PropTypes.object,

	    /**
	     * The error content to display.
	     */
	    errorText: _react2.default.PropTypes.node,

	    /**
	     * The style object to use to override floating label styles.
	     */
	    floatingLabelStyle: _react2.default.PropTypes.object,

	    /**
	     * The content to use for the floating label element.
	     */
	    floatingLabelText: _react2.default.PropTypes.node,

	    /**
	     * If true, the field receives the property width 100%.
	     */
	    fullWidth: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the TextField's hint text element.
	     */
	    hintStyle: _react2.default.PropTypes.object,

	    /**
	     * The hint content to display.
	     */
	    hintText: _react2.default.PropTypes.node,

	    /**
	     * The id prop for the text field.
	     */
	    id: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the TextField's input element.
	     */
	    inputStyle: _react2.default.PropTypes.object,

	    /**
	     * If true, a textarea element will be rendered.
	     * The textarea also grows and shrinks according to the number of lines.
	     */
	    multiLine: _react2.default.PropTypes.bool,

	    /**
	     * Callback function that is fired when the textfield loses focus.
	     */
	    onBlur: _react2.default.PropTypes.func,

	    /**
	     * Callback function that is fired when the textfield's value changes.
	     */
	    onChange: _react2.default.PropTypes.func,

	    /**
	     * The function to call when the user presses the Enter key.
	     */
	    onEnterKeyDown: _react2.default.PropTypes.func,

	    /**
	     * Callback function that is fired when the textfield gains focus.
	     */
	    onFocus: _react2.default.PropTypes.func,

	    /**
	     * Callback function fired when key is pressed down.
	     */
	    onKeyDown: _react2.default.PropTypes.func,

	    /**
	     * Number of rows to display when multiLine option is set to true.
	     */
	    rows: _react2.default.PropTypes.number,

	    /**
	     * Maximum number of rows to display when
	     * multiLine option is set to true.
	     */
	    rowsMax: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * Specifies the type of input to display
	     * such as "password" or "text".
	     */
	    type: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the
	     * TextField's underline element when disabled.
	     */
	    underlineDisabledStyle: _react2.default.PropTypes.object,

	    /**
	     * Override the inline-styles of the TextField's
	     * underline element when focussed.
	     */
	    underlineFocusStyle: _react2.default.PropTypes.object,

	    /**
	     * If true, shows the underline for the text field.
	     */
	    underlineShow: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the TextField's underline element.
	     */
	    underlineStyle: _react2.default.PropTypes.object,

	    /**
	     * The value of the text field.
	     */
	    value: _react2.default.PropTypes.any
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_contextPure2.default, _stylePropable2.default],

	  statics: {
	    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
	      var textFieldTheme = muiTheme.textField;

	      return {
	        floatingLabelColor: textFieldTheme.floatingLabelColor,
	        focusColor: textFieldTheme.focusColor,
	        textColor: textFieldTheme.textColor,
	        disabledTextColor: textFieldTheme.disabledTextColor,
	        backgroundColor: textFieldTheme.backgroundColor,
	        hintColor: textFieldTheme.hintColor,
	        errorColor: textFieldTheme.errorColor
	      };
	    },
	    getChildrenClasses: function getChildrenClasses() {
	      return [_enhancedTextarea2.default];
	    }
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      multiLine: false,
	      fullWidth: false,
	      type: 'text',
	      underlineShow: true,
	      rows: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    var props = this.props.children ? this.props.children.props : this.props;

	    return {
	      isFocused: false,
	      errorText: this.props.errorText,
	      hasValue: isValid(props.value) || isValid(props.defaultValue) || props.valueLink && isValid(props.valueLink.value),
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._uniqueId = _uniqueId2.default.generate();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newState = {};
	    newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    newState.errorText = nextProps.errorText;
	    if (nextProps.children && nextProps.children.props) {
	      nextProps = nextProps.children.props;
	    }

	    var hasValueLinkProp = nextProps.hasOwnProperty('valueLink');
	    var hasValueProp = nextProps.hasOwnProperty('value');
	    var hasNewDefaultValue = nextProps.defaultValue !== this.props.defaultValue;

	    if (hasValueLinkProp) {
	      newState.hasValue = isValid(nextProps.valueLink.value);
	    } else if (hasValueProp) {
	      newState.hasValue = isValid(nextProps.value);
	    } else if (hasNewDefaultValue) {
	      newState.hasValue = isValid(nextProps.defaultValue);
	    }

	    if (newState) this.setState(newState);
	  },
	  getStyles: function getStyles() {
	    var props = this.props;

	    var _constructor$getRelev = this.constructor.getRelevantContextKeys(this.state.muiTheme);

	    var floatingLabelColor = _constructor$getRelev.floatingLabelColor;
	    var focusColor = _constructor$getRelev.focusColor;
	    var textColor = _constructor$getRelev.textColor;
	    var disabledTextColor = _constructor$getRelev.disabledTextColor;
	    var backgroundColor = _constructor$getRelev.backgroundColor;
	    var hintColor = _constructor$getRelev.hintColor;
	    var errorColor = _constructor$getRelev.errorColor;

	    var styles = {
	      root: {
	        fontSize: 16,
	        lineHeight: '24px',
	        width: props.fullWidth ? '100%' : 256,
	        height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
	        display: 'inline-block',
	        position: 'relative',
	        backgroundColor: backgroundColor,
	        fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	        transition: _transitions2.default.easeOut('200ms', 'height')
	      },
	      error: {
	        position: 'relative',
	        bottom: 2,
	        fontSize: 12,
	        lineHeight: '12px',
	        color: errorColor,
	        transition: _transitions2.default.easeOut()
	      },
	      floatingLabel: {
	        color: hintColor
	      },
	      input: {
	        tapHighlightColor: 'rgba(0,0,0,0)',
	        padding: 0,
	        position: 'relative',
	        width: '100%',
	        height: '100%',
	        border: 'none',
	        outline: 'none',
	        backgroundColor: 'transparent',
	        color: props.disabled ? disabledTextColor : textColor,
	        font: 'inherit'
	      }
	    };

	    styles.error = this.mergeStyles(styles.error, props.errorStyle);

	    styles.textarea = this.mergeStyles(styles.input, {
	      marginTop: props.floatingLabelText ? 36 : 12,
	      marginBottom: props.floatingLabelText ? -36 : -12,
	      boxSizing: 'border-box',
	      font: 'inherit'
	    });

	    if (this.state.isFocused) {
	      styles.floatingLabel.color = focusColor;
	    }

	    if (this.state.hasValue) {
	      styles.floatingLabel.color = _colorManipulator2.default.fade(props.disabled ? disabledTextColor : floatingLabelColor, 0.5);
	    }

	    if (props.floatingLabelText) {
	      styles.input.boxSizing = 'border-box';

	      if (!props.multiLine) {
	        styles.input.marginTop = 14;
	      }

	      if (this.state.errorText) {
	        styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
	      }
	    }

	    if (this.state.errorText) {
	      if (this.state.isFocused) {
	        styles.floatingLabel.color = styles.error.color;
	      }
	    }

	    return styles;
	  },
	  blur: function blur() {
	    if (this.isMounted()) this._getInputNode().blur();
	  },
	  clearValue: function clearValue() {
	    this.setValue('');
	  },
	  focus: function focus() {
	    if (this.isMounted()) this._getInputNode().focus();
	  },
	  getValue: function getValue() {
	    return this.isMounted() ? this._getInputNode().value : undefined;
	  },
	  setErrorText: function setErrorText(newErrorText) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'setErrorText() method is deprecated. Use the errorText property instead.') : undefined;

	    if (this.isMounted()) {
	      this.setState({ errorText: newErrorText });
	    }
	  },
	  setValue: function setValue(newValue) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'setValue() method is deprecated. Use the defaultValue property instead.\n      Or use the TextField as a controlled component with the value property.') : undefined;

	    if (this.isMounted()) {
	      if (this.props.multiLine) {
	        this.refs.input.setValue(newValue);
	      } else {
	        this._getInputNode().value = newValue;
	      }

	      this.setState({ hasValue: isValid(newValue) });
	    }
	  },
	  _getInputNode: function _getInputNode() {
	    return this.props.children || this.props.multiLine ? this.refs.input.getInputNode() : _reactDom2.default.findDOMNode(this.refs.input);
	  },
	  _handleInputBlur: function _handleInputBlur(e) {
	    this.setState({ isFocused: false });
	    if (this.props.onBlur) this.props.onBlur(e);
	  },
	  _handleInputChange: function _handleInputChange(e) {
	    this.setState({ hasValue: isValid(e.target.value) });
	    if (this.props.onChange) this.props.onChange(e);
	  },
	  _handleInputFocus: function _handleInputFocus(e) {
	    if (this.props.disabled) return;
	    this.setState({ isFocused: true });
	    if (this.props.onFocus) this.props.onFocus(e);
	  },
	  _handleInputKeyDown: function _handleInputKeyDown(e) {
	    if (e.keyCode === 13 && this.props.onEnterKeyDown) this.props.onEnterKeyDown(e);
	    if (this.props.onKeyDown) this.props.onKeyDown(e);
	  },
	  _handleTextAreaHeightChange: function _handleTextAreaHeightChange(e, height) {
	    var newHeight = height + 24;
	    if (this.props.floatingLabelText) newHeight += 24;
	    _reactDom2.default.findDOMNode(this).style.height = newHeight + 'px';
	  },
	  _isControlled: function _isControlled() {
	    return this.props.hasOwnProperty('value') || this.props.hasOwnProperty('valueLink');
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var disabled = _props.disabled;
	    var errorStyle = _props.errorStyle;
	    var errorText = _props.errorText;
	    var floatingLabelText = _props.floatingLabelText;
	    var fullWidth = _props.fullWidth;
	    var hintText = _props.hintText;
	    var hintStyle = _props.hintStyle;
	    var id = _props.id;
	    var multiLine = _props.multiLine;
	    var onBlur = _props.onBlur;
	    var onChange = _props.onChange;
	    var onFocus = _props.onFocus;
	    var style = _props.style;
	    var type = _props.type;
	    var underlineDisabledStyle = _props.underlineDisabledStyle;
	    var underlineFocusStyle = _props.underlineFocusStyle;
	    var underlineShow = _props.underlineShow;
	    var underlineStyle = _props.underlineStyle;
	    var rows = _props.rows;
	    var rowsMax = _props.rowsMax;

	    var other = _objectWithoutProperties(_props, ['className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax']);

	    var styles = this.getStyles();

	    var inputId = id || this._uniqueId;

	    var errorTextElement = this.state.errorText ? _react2.default.createElement(
	      'div',
	      { style: this.prepareStyles(styles.error) },
	      this.state.errorText
	    ) : null;

	    var floatingLabelTextElement = floatingLabelText ? _react2.default.createElement(
	      _TextFieldLabel2.default,
	      {
	        muiTheme: this.state.muiTheme,
	        style: this.mergeStyles(styles.floatingLabel, this.props.floatingLabelStyle),
	        htmlFor: inputId,
	        shrink: this.state.hasValue || this.state.isFocused,
	        disabled: disabled,
	        onTouchTap: this.focus
	      },
	      floatingLabelText
	    ) : null;

	    var inputProps = undefined;
	    var inputElement = undefined;

	    inputProps = {
	      id: inputId,
	      ref: 'input',
	      onBlur: this._handleInputBlur,
	      onFocus: this._handleInputFocus,
	      disabled: this.props.disabled,
	      onKeyDown: this._handleInputKeyDown
	    };
	    var inputStyle = this.mergeStyles(styles.input, this.props.inputStyle);

	    if (!this.props.hasOwnProperty('valueLink')) {
	      inputProps.onChange = this._handleInputChange;
	    }

	    if (this.props.children) {
	      inputElement = _react2.default.cloneElement(this.props.children, _extends({}, inputProps, this.props.children.props, {
	        style: this.mergeStyles(inputStyle, this.props.children.props.style)
	      }));
	    } else {
	      inputElement = multiLine ? _react2.default.createElement(_enhancedTextarea2.default, _extends({}, other, inputProps, {
	        style: inputStyle,
	        rows: rows,
	        rowsMax: rowsMax,
	        onHeightChange: this._handleTextAreaHeightChange,
	        textareaStyle: styles.textarea
	      })) : _react2.default.createElement('input', _extends({}, other, inputProps, {
	        style: this.prepareStyles(inputStyle),
	        type: type
	      }));
	    }

	    return _react2.default.createElement(
	      'div',
	      { className: className, style: this.prepareStyles(styles.root, this.props.style) },
	      floatingLabelTextElement,
	      hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	        muiTheme: this.state.muiTheme,
	        show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused),
	        style: hintStyle,
	        text: hintText
	      }) : null,
	      inputElement,
	      underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	        disabled: disabled,
	        disabledStyle: underlineDisabledStyle,
	        error: this.state.errorText ? true : false,
	        errorStyle: errorStyle,
	        focus: this.state.isFocused,
	        focusStyle: underlineFocusStyle,
	        muiTheme: this.state.muiTheme,
	        style: underlineStyle
	      }) : null,
	      errorTextElement
	    );
	  }
	});

	exports.default = TextField;
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var index = 0;

	exports.default = {
	  generate: function generate() {
	    return 'mui-id-' + index++;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var rowsHeight = 24;

	var styles = {
	  textarea: {
	    width: '100%',
	    resize: 'none',
	    font: 'inherit',
	    padding: 0
	  },
	  shadow: {
	    width: '100%',
	    resize: 'none',
	    // Overflow also needed to here to remove the extra row
	    // added to textareas in Firefox.
	    overflow: 'hidden',
	    // Visibility needed to hide the extra text area on ipads
	    visibility: 'hidden',
	    font: 'inherit',
	    padding: 0,
	    position: 'absolute'
	  }
	};

	var EnhancedTextarea = _react2.default.createClass({
	  displayName: 'EnhancedTextarea',

	  propTypes: {
	    defaultValue: _react2.default.PropTypes.any,
	    disabled: _react2.default.PropTypes.bool,
	    onChange: _react2.default.PropTypes.func,
	    onHeightChange: _react2.default.PropTypes.func,
	    rows: _react2.default.PropTypes.number,
	    rowsMax: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    textareaStyle: _react2.default.PropTypes.object,
	    value: _react2.default.PropTypes.string,
	    valueLink: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      rows: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      height: this.props.rows * rowsHeight,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._syncHeightWithShadow();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    if (nextProps.value !== this.props.value) {
	      this._syncHeightWithShadow(nextProps.value);
	    }
	    var newState = {};
	    newState.muiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	  },
	  getInputNode: function getInputNode() {
	    return _reactDom2.default.findDOMNode(this.refs.input);
	  },
	  setValue: function setValue(value) {
	    this.getInputNode().value = value;
	    this._syncHeightWithShadow(value);
	  },
	  _syncHeightWithShadow: function _syncHeightWithShadow(newValue, e) {
	    var shadow = _reactDom2.default.findDOMNode(this.refs.shadow);

	    if (newValue !== undefined) {
	      shadow.value = newValue;
	    }

	    var newHeight = shadow.scrollHeight;

	    if (this.props.rowsMax >= this.props.rows) {
	      newHeight = Math.min(this.props.rowsMax * rowsHeight, newHeight);
	    }

	    newHeight = Math.max(newHeight, rowsHeight);

	    if (this.state.height !== newHeight) {
	      this.setState({
	        height: newHeight
	      });

	      if (this.props.onHeightChange) {
	        this.props.onHeightChange(e, newHeight);
	      }
	    }
	  },
	  _handleChange: function _handleChange(e) {
	    this._syncHeightWithShadow(e.target.value);

	    if (this.props.hasOwnProperty('valueLink')) {
	      this.props.valueLink.requestChange(e.target.value);
	    }

	    if (this.props.onChange) {
	      this.props.onChange(e);
	    }
	  },
	  render: function render() {
	    var _props = this.props;
	    var onChange = _props.onChange;
	    var onHeightChange = _props.onHeightChange;
	    var rows = _props.rows;
	    var style = _props.style;
	    var textareaStyle = _props.textareaStyle;
	    var valueLink = _props.valueLink;

	    var other = _objectWithoutProperties(_props, ['onChange', 'onHeightChange', 'rows', 'style', 'textareaStyle', 'valueLink']);

	    var textareaStyles = this.mergeStyles(styles.textarea, textareaStyle, {
	      height: this.state.height
	    });

	    var shadowStyles = styles.shadow;

	    if (this.props.hasOwnProperty('valueLink')) {
	      other.value = this.props.valueLink.value;
	    }

	    if (this.props.disabled) {
	      style.cursor = 'default';
	    }

	    return _react2.default.createElement(
	      'div',
	      { style: this.prepareStyles(this.props.style) },
	      _react2.default.createElement('textarea', {
	        ref: 'shadow',
	        style: this.prepareStyles(shadowStyles),
	        tabIndex: '-1',
	        rows: this.props.rows,
	        defaultValue: this.props.defaultValue,
	        readOnly: true,
	        value: this.props.value,
	        valueLink: this.props.valueLink
	      }),
	      _react2.default.createElement('textarea', _extends({}, other, {
	        ref: 'input',
	        rows: this.props.rows,
	        style: this.prepareStyles(textareaStyles),
	        onChange: this._handleChange
	      }))
	    );
	  }
	});

	exports.default = EnhancedTextarea;
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _styles = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  /**
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,

	  /**
	   * True if the hint text should be visible.
	   */
	  show: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object,

	  /**
	   * The hint text displayed.
	   */
	  text: _react2.default.PropTypes.node
	};

	var defaultProps = {
	  show: true
	};

	var TextFieldHint = function TextFieldHint(props) {
	  var muiTheme = props.muiTheme;
	  var show = props.show;
	  var style = props.style;
	  var text = props.text;
	  var hintColor = muiTheme.textField.hintColor;

	  var styles = {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: (0, _styles.prepareStyles)(muiTheme, (0, _styles.mergeStyles)(styles.root, style)) },
	    text
	  );
	};

	TextFieldHint.propTypes = propTypes;
	TextFieldHint.defaultProps = defaultProps;

	exports.default = TextFieldHint;
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _styles = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  /**
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,

	  /**
	   * The css class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * The label contents.
	   */
	  children: _react2.default.PropTypes.node,

	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _react2.default.PropTypes.bool,

	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _react2.default.PropTypes.string,

	  /**
	   * Callback function for when the label is selected via a touch tap.
	   */
	  onTouchTap: _react2.default.PropTypes.func,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};

	var defaultProps = {
	  disabled: false,
	  shrink: false
	};

	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme;
	  var className = props.className;
	  var children = props.children;
	  var disabled = props.disabled;
	  var shrink = props.shrink;
	  var htmlFor = props.htmlFor;
	  var style = props.style;
	  var onTouchTap = props.onTouchTap;

	  var styles = {
	    root: {
	      position: 'absolute',
	      lineHeight: '22px',
	      top: 38,
	      transition: _transitions2.default.easeOut(),
	      zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	      cursor: disabled ? 'default' : 'text',
	      transform: shrink ? 'perspective(1px) scale(0.75) translate3d(2px, -28px, 0)' : 'scale(1) translate3d(0, 0, 0)',
	      transformOrigin: 'left top',
	      pointerEvents: shrink ? 'none' : 'auto',
	      userSelect: 'none'
	    }
	  };

	  return _react2.default.createElement(
	    'label',
	    {
	      className: className,
	      style: (0, _styles.prepareStyles)(muiTheme, (0, _styles.mergeStyles)(styles.root, style)),
	      htmlFor: htmlFor,
	      onTouchTap: onTouchTap
	    },
	    children
	  );
	};

	TextFieldLabel.propTypes = propTypes;
	TextFieldLabel.defaultProps = defaultProps;

	exports.default = TextFieldLabel;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _styles = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _react2.default.PropTypes.object,

	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _react2.default.PropTypes.object,

	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _react2.default.PropTypes.object,

	  /**
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};

	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};

	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled;
	  var disabledStyle = props.disabledStyle;
	  var error = props.error;
	  var errorStyle = props.errorStyle;
	  var focus = props.focus;
	  var focusStyle = props.focusStyle;
	  var muiTheme = props.muiTheme;
	  var style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var _muiTheme$textField = muiTheme.textField;
	  var borderColor = _muiTheme$textField.borderColor;
	  var disabledTextColor = _muiTheme$textField.disabledTextColor;
	  var errorColor = _muiTheme$textField.errorColor;
	  var focusColor = _muiTheme$textField.focusColor;

	  var styles = {
	    root: {
	      border: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };

	  var underline = (0, _styles.mergeStyles)(styles.root, style);
	  var focusedUnderline = (0, _styles.mergeStyles)(underline, styles.focus, focusStyle);

	  if (disabled) underline = (0, _styles.mergeStyles)(underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _styles.mergeStyles)(focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _styles.mergeStyles)(focusedUnderline, styles.error);

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('hr', { style: (0, _styles.prepareStyles)(muiTheme, underline) }),
	    _react2.default.createElement('hr', { style: (0, _styles.prepareStyles)(muiTheme, focusedUnderline) })
	  );
	};

	TextFieldUnderline.propTypes = propTypes;
	TextFieldUnderline.defaultProps = defaultProps;

	exports.default = TextFieldUnderline;
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsUpdate = __webpack_require__(37);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _clickAwayable = __webpack_require__(75);

	var _clickAwayable2 = _interopRequireDefault(_clickAwayable);

	var _autoPrefix = __webpack_require__(23);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _keyCode = __webpack_require__(49);

	var _keyCode2 = _interopRequireDefault(_keyCode);

	var _propTypes = __webpack_require__(43);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _list = __webpack_require__(76);

	var _list2 = _interopRequireDefault(_list);

	var _paper = __webpack_require__(62);

	var _paper2 = _interopRequireDefault(_paper);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Menu = _react2.default.createClass({
	  displayName: 'Menu',

	  propTypes: {
	    /**
	     * If true, the menu will apply transitions when added it
	     * gets added to the DOM. In order for transitions to
	     * work, wrap the menu inside a ReactTransitionGroup.
	     */
	    animated: _react2.default.PropTypes.bool,

	    /**
	     * If true, the width will automatically be
	     * set according to the items inside the menu
	     * using the proper keyline increment.
	     */
	    autoWidth: _react2.default.PropTypes.bool,

	    /**
	     * Children for the Menu. Usually MenuItems.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Indicates if the menu should render with compact desktop styles.
	     */
	    desktop: _react2.default.PropTypes.bool,

	    /**
	     * True if this item should be focused by the keyboard initially.
	     */
	    initiallyKeyboardFocused: _react2.default.PropTypes.bool,

	    /**
	     * The style object to use to override underlying list style.
	     */
	    listStyle: _react2.default.PropTypes.object,

	    /**
	     * The maxHeight of the menu in pixels. If
	     * specified, the menu will scroll if larger than the maxHeight.
	     */
	    maxHeight: _react2.default.PropTypes.number,

	    /**
	     * If true, the value can an array and allow the menu to be a multi-select.
	     */
	    multiple: _react2.default.PropTypes.bool,

	    /**
	     * Fired when a menu item is touchTapped and the menu item
	     * value is not equal to the current menu value.
	     */
	    onChange: _react2.default.PropTypes.func,

	    /**
	     * Fired when an Esc key is keyed down.
	     */
	    onEscKeyDown: _react2.default.PropTypes.func,

	    /**
	     * Fired when a menu item is touchTapped.
	     */
	    onItemTouchTap: _react2.default.PropTypes.func,

	    /**
	     * Fired when a key is pressed.
	     */
	    onKeyDown: _react2.default.PropTypes.func,

	    /**
	     * This is the placement of the menu relative to the IconButton.
	     */
	    openDirection: _propTypes2.default.corners,

	    /**
	     * Style for the selected Menu Item.
	     */
	    selectedMenuItemStyle: _react2.default.PropTypes.object,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The value of the selected menu item. If passed in,
	     * this will make the menu a controlled component.
	     * This component also supports valueLink.
	     */
	    value: _react2.default.PropTypes.any,

	    /**
	     * ValueLink for this component when controlled.
	     */
	    valueLink: _react2.default.PropTypes.object,

	    /**
	     * Sets the width of the menu. If not specified, the menu
	     * width will be dictated by its children. The rendered
	     * width will always be a keyline increment
	     * (64px for desktop, 56px otherwise).
	     */
	    width: _propTypes2.default.stringOrNumber,

	    /**
	     * Sets the width of the menu. If not specified,
	     * the menu width will be dictated by its children.
	     * The rendered width will always be a keyline increment
	     * (64px for desktop, 56px otherwise).
	     */
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default, _clickAwayable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      animated: false,
	      autoWidth: true,
	      desktop: false,
	      initiallyKeyboardFocused: false,
	      maxHeight: null,
	      multiple: false,
	      onChange: function onChange() {},
	      onEscKeyDown: function onEscKeyDown() {},
	      onItemTouchTap: function onItemTouchTap() {},
	      onKeyDown: function onKeyDown() {},
	      openDirection: 'bottom-left',
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    var filteredChildren = this._getFilteredChildren(this.props.children);
	    var selectedIndex = this._getSelectedIndex(this.props, filteredChildren);

	    return {
	      focusIndex: selectedIndex >= 0 ? selectedIndex : 0,
	      isKeyboardFocused: this.props.initiallyKeyboardFocused,
	      keyWidth: this.props.desktop ? 64 : 56,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.autoWidth) this._setWidth();
	    if (!this.props.animated) this._animateOpen();
	    this._setScollPosition();
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var filteredChildren = this._getFilteredChildren(nextProps.children);
	    var selectedIndex = this._getSelectedIndex(nextProps, filteredChildren);
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    this.setState({
	      focusIndex: selectedIndex >= 0 ? selectedIndex : 0,
	      keyWidth: nextProps.desktop ? 64 : 56,
	      muiTheme: newMuiTheme
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.autoWidth) this._setWidth();
	  },
	  componentClickAway: function componentClickAway(e) {
	    if (e.defaultPrevented) return;
	    this._setFocusIndex(-1, false);
	  },

	  // Do not use outside of this component, it will be removed once valueLink is deprecated
	  getValueLink: function getValueLink(props) {
	    return props.valueLink || {
	      value: props.value,
	      requestChange: props.onChange
	    };
	  },
	  setKeyboardFocused: function setKeyboardFocused(keyboardFocused) {
	    this.setState({
	      isKeyboardFocused: keyboardFocused
	    });
	  },
	  _getFilteredChildren: function _getFilteredChildren(children) {
	    var filteredChildren = [];
	    _react2.default.Children.forEach(children, function (child) {
	      if (child) {
	        filteredChildren.push(child);
	      }
	    });
	    return filteredChildren;
	  },
	  _animateOpen: function _animateOpen() {
	    var rootStyle = _reactDom2.default.findDOMNode(this).style;
	    var scrollContainerStyle = _reactDom2.default.findDOMNode(this.refs.scrollContainer).style;
	    var menuContainers = _reactDom2.default.findDOMNode(this.refs.list).childNodes;

	    _autoPrefix2.default.set(rootStyle, 'transform', 'scaleX(1)', this.state.muiTheme);
	    _autoPrefix2.default.set(scrollContainerStyle, 'transform', 'scaleY(1)', this.state.muiTheme);
	    scrollContainerStyle.opacity = 1;

	    for (var i = 0; i < menuContainers.length; ++i) {
	      menuContainers[i].style.opacity = 1;
	    }
	  },
	  _cloneMenuItem: function _cloneMenuItem(child, childIndex, styles) {
	    var _this = this;

	    var _props = this.props;
	    var desktop = _props.desktop;
	    var selectedMenuItemStyle = _props.selectedMenuItemStyle;

	    var selected = this._isChildSelected(child, this.props);
	    var selectedChildrenStyles = {};

	    if (selected) {
	      selectedChildrenStyles = this.mergeStyles(styles.selectedMenuItem, selectedMenuItemStyle);
	    }

	    var mergedChildrenStyles = this.mergeStyles(child.props.style || {}, selectedChildrenStyles);

	    var isFocused = childIndex === this.state.focusIndex;
	    var focusState = 'none';
	    if (isFocused) {
	      focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
	    }

	    return _react2.default.cloneElement(child, {
	      desktop: desktop,
	      focusState: focusState,
	      onTouchTap: function onTouchTap(e) {
	        _this._handleMenuItemTouchTap(e, child);
	        if (child.props.onTouchTap) child.props.onTouchTap(e);
	      },
	      ref: isFocused ? 'focusedMenuItem' : null,
	      style: mergedChildrenStyles
	    });
	  },
	  _decrementKeyboardFocusIndex: function _decrementKeyboardFocusIndex() {
	    var index = this.state.focusIndex;

	    index--;
	    if (index < 0) index = 0;

	    this._setFocusIndex(index, true);
	  },
	  _getCascadeChildrenCount: function _getCascadeChildrenCount(filteredChildren) {
	    var _props2 = this.props;
	    var desktop = _props2.desktop;
	    var maxHeight = _props2.maxHeight;

	    var count = 1;
	    var currentHeight = desktop ? 16 : 8;
	    var menuItemHeight = desktop ? 32 : 48;

	    //MaxHeight isn't set - cascade all of the children
	    if (!maxHeight) return filteredChildren.length;

	    //Count all the children that will fit inside the
	    //max menu height
	    filteredChildren.forEach(function (child) {
	      if (currentHeight < maxHeight) {
	        var childIsADivider = child.type && child.type.displayName === 'Divider';

	        currentHeight += childIsADivider ? 16 : menuItemHeight;
	        count++;
	      }
	    });

	    return count;
	  },
	  _getMenuItemCount: function _getMenuItemCount(filteredChildren) {
	    var menuItemCount = 0;
	    filteredChildren.forEach(function (child) {
	      var childIsADivider = child.type && child.type.displayName === 'Divider';
	      var childIsDisabled = child.props.disabled;
	      if (!childIsADivider && !childIsDisabled) menuItemCount++;
	    });
	    return menuItemCount;
	  },
	  _getSelectedIndex: function _getSelectedIndex(props, filteredChildren) {
	    var _this2 = this;

	    var selectedIndex = -1;
	    var menuItemIndex = 0;

	    filteredChildren.forEach(function (child) {
	      var childIsADivider = child.type && child.type.displayName === 'Divider';

	      if (_this2._isChildSelected(child, props)) selectedIndex = menuItemIndex;
	      if (!childIsADivider) menuItemIndex++;
	    });

	    return selectedIndex;
	  },
	  _handleKeyDown: function _handleKeyDown(e) {
	    var filteredChildren = this._getFilteredChildren(this.props.children);
	    switch (e.keyCode) {
	      case _keyCode2.default.DOWN:
	        e.preventDefault();
	        this._incrementKeyboardFocusIndex(filteredChildren);
	        break;
	      case _keyCode2.default.ESC:
	        this.props.onEscKeyDown(e);
	        break;
	      case _keyCode2.default.TAB:
	        e.preventDefault();
	        if (e.shiftKey) {
	          this._decrementKeyboardFocusIndex();
	        } else {
	          this._incrementKeyboardFocusIndex(filteredChildren);
	        }
	        break;
	      case _keyCode2.default.UP:
	        e.preventDefault();
	        this._decrementKeyboardFocusIndex();
	        break;
	    }
	    this.props.onKeyDown(e);
	  },
	  _handleMenuItemTouchTap: function _handleMenuItemTouchTap(e, item) {
	    var children = this.props.children;
	    var multiple = this.props.multiple;
	    var valueLink = this.getValueLink(this.props);
	    var menuValue = valueLink.value;
	    var itemValue = item.props.value;
	    var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);

	    this._setFocusIndex(focusIndex, false);

	    if (multiple) {
	      var index = menuValue.indexOf(itemValue);
	      var newMenuValue = index === -1 ? (0, _reactAddonsUpdate2.default)(menuValue, { $push: [itemValue] }) : (0, _reactAddonsUpdate2.default)(menuValue, { $splice: [[index, 1]] });

	      valueLink.requestChange(e, newMenuValue);
	    } else if (!multiple && itemValue !== menuValue) {
	      valueLink.requestChange(e, itemValue);
	    }

	    this.props.onItemTouchTap(e, item);
	  },
	  _incrementKeyboardFocusIndex: function _incrementKeyboardFocusIndex(filteredChildren) {
	    var index = this.state.focusIndex;
	    var maxIndex = this._getMenuItemCount(filteredChildren) - 1;

	    index++;
	    if (index > maxIndex) index = maxIndex;

	    this._setFocusIndex(index, true);
	  },
	  _isChildSelected: function _isChildSelected(child, props) {
	    var multiple = props.multiple;
	    var menuValue = this.getValueLink(props).value;
	    var childValue = child.props.value;

	    return multiple && menuValue.length && menuValue.indexOf(childValue) !== -1 || !multiple && menuValue && menuValue === childValue;
	  },
	  _setFocusIndex: function _setFocusIndex(newIndex, isKeyboardFocused) {
	    this.setState({
	      focusIndex: newIndex,
	      isKeyboardFocused: isKeyboardFocused
	    });
	  },
	  _setScollPosition: function _setScollPosition() {
	    var desktop = this.props.desktop;
	    var focusedMenuItem = this.refs.focusedMenuItem;
	    var menuItemHeight = desktop ? 32 : 48;

	    if (focusedMenuItem) {
	      var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;

	      //Make the focused item be the 2nd item in the list the
	      //user sees
	      var scrollTop = selectedOffSet - menuItemHeight;
	      if (scrollTop < menuItemHeight) scrollTop = 0;

	      _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
	    }
	  },
	  _setWidth: function _setWidth() {
	    var el = _reactDom2.default.findDOMNode(this);
	    var listEl = _reactDom2.default.findDOMNode(this.refs.list);
	    var elWidth = el.offsetWidth;
	    var keyWidth = this.state.keyWidth;
	    var minWidth = keyWidth * 1.5;
	    var keyIncrements = elWidth / keyWidth;
	    var newWidth = undefined;

	    keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
	    newWidth = keyIncrements * keyWidth;

	    if (newWidth < minWidth) newWidth = minWidth;

	    el.style.width = newWidth + 'px';
	    listEl.style.width = newWidth + 'px';
	  },
	  render: function render() {
	    var _this3 = this;

	    var _props3 = this.props;
	    var animated = _props3.animated;
	    var autoWidth = _props3.autoWidth;
	    var children = _props3.children;
	    var desktop = _props3.desktop;
	    var initiallyKeyboardFocused = _props3.initiallyKeyboardFocused;
	    var listStyle = _props3.listStyle;
	    var maxHeight = _props3.maxHeight;
	    var multiple = _props3.multiple;
	    var openDirection = _props3.openDirection;
	    var selectedMenuItemStyle = _props3.selectedMenuItemStyle;
	    var style = _props3.style;
	    var value = _props3.value;
	    var valueLink = _props3.valueLink;
	    var width = _props3.width;
	    var zDepth = _props3.zDepth;

	    var other = _objectWithoutProperties(_props3, ['animated', 'autoWidth', 'children', 'desktop', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'openDirection', 'selectedMenuItemStyle', 'style', 'value', 'valueLink', 'width', 'zDepth']);

	    var openDown = openDirection.split('-')[0] === 'bottom';
	    var openLeft = openDirection.split('-')[1] === 'left';

	    var muiTheme = this.state.muiTheme;
	    var rawTheme = muiTheme.rawTheme;

	    var styles = {
	      root: {
	        //Nested div bacause the List scales x faster than
	        //it scales y
	        transition: animated ? _transitions2.default.easeOut('250ms', 'transform') : null,
	        zIndex: muiTheme.zIndex.menu,
	        top: openDown ? 0 : null,
	        bottom: !openDown ? 0 : null,
	        left: !openLeft ? 0 : null,
	        right: openLeft ? 0 : null,
	        transform: 'scaleX(0)',
	        transformOrigin: openLeft ? 'right' : 'left'
	      },

	      divider: {
	        marginTop: 7,
	        marginBottom: 8
	      },

	      list: {
	        display: 'table-cell',
	        paddingBottom: desktop ? 16 : 8,
	        paddingTop: desktop ? 16 : 8,
	        userSelect: 'none',
	        width: width
	      },

	      menuItemContainer: {
	        transition: animated ? _transitions2.default.easeOut(null, 'opacity') : null,
	        opacity: 0
	      },

	      paper: {
	        transition: animated ? _transitions2.default.easeOut('500ms', ['transform', 'opacity']) : null,
	        transform: 'scaleY(0)',
	        transformOrigin: openDown ? 'top' : 'bottom',
	        opacity: 0,
	        maxHeight: maxHeight,
	        overflowY: maxHeight ? 'auto' : null
	      },

	      selectedMenuItem: {
	        color: rawTheme.palette.accent1Color
	      }
	    };

	    var mergedRootStyles = this.mergeStyles(styles.root, style);
	    var mergedListStyles = this.mergeStyles(styles.list, listStyle);

	    var filteredChildren = this._getFilteredChildren(children);

	    //Cascade children opacity
	    var cumulativeDelay = openDown ? 175 : 325;
	    var cascadeChildrenCount = this._getCascadeChildrenCount(filteredChildren);
	    var cumulativeDelayIncrement = Math.ceil(150 / cascadeChildrenCount);

	    var menuItemIndex = 0;
	    var newChildren = _react2.default.Children.map(filteredChildren, function (child) {
	      var childIsADivider = child.type && child.type.displayName === 'Divider';
	      var childIsDisabled = child.props.disabled;
	      var childrenContainerStyles = {};

	      if (animated) {
	        var focusIndex = _this3.state.focusIndex;
	        var transitionDelay = 0;

	        //Only cascade the visible menu items
	        if (menuItemIndex >= focusIndex - 1 && menuItemIndex <= focusIndex + cascadeChildrenCount - 1) {
	          cumulativeDelay = openDown ? cumulativeDelay + cumulativeDelayIncrement : cumulativeDelay - cumulativeDelayIncrement;
	          transitionDelay = cumulativeDelay;
	        }

	        childrenContainerStyles = _this3.mergeStyles(styles.menuItemContainer, {
	          transitionDelay: transitionDelay + 'ms'
	        });
	      }

	      var clonedChild = childIsADivider ? _react2.default.cloneElement(child, { style: styles.divider }) : childIsDisabled ? _react2.default.cloneElement(child, { desktop: desktop }) : _this3._cloneMenuItem(child, menuItemIndex, styles);

	      if (!childIsADivider && !childIsDisabled) menuItemIndex++;

	      return animated ? _react2.default.createElement(
	        'div',
	        { style: _this3.prepareStyles(childrenContainerStyles) },
	        clonedChild
	      ) : clonedChild;
	    });

	    return _react2.default.createElement(
	      'div',
	      {
	        onKeyDown: this._handleKeyDown,
	        style: this.prepareStyles(mergedRootStyles)
	      },
	      _react2.default.createElement(
	        _paper2.default,
	        {
	          ref: 'scrollContainer',
	          style: styles.paper,
	          zDepth: zDepth
	        },
	        _react2.default.createElement(
	          _list2.default,
	          _extends({}, other, {
	            ref: 'list',
	            style: mergedListStyles
	          }),
	          newChildren
	        )
	      )
	    );
	  }
	});

	exports.default = Menu;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _events = __webpack_require__(48);

	var _events2 = _interopRequireDefault(_events);

	var _dom = __webpack_require__(56);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  //When the component mounts, listen to click events and check if we need to
	  //Call the componentClickAway function.

	  componentDidMount: function componentDidMount() {
	    if (!this.manuallyBindClickAway) this._bindClickAway();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unbindClickAway();
	  },
	  _checkClickAway: function _checkClickAway(event) {
	    if (this.isMounted()) {
	      var el = _reactDom2.default.findDOMNode(this);

	      // Check if the target is inside the current component
	      if (event.target !== el && !_dom2.default.isDescendant(el, event.target) && document.documentElement.contains(event.target)) {
	        if (this.componentClickAway) this.componentClickAway(event);
	      }
	    }
	  },
	  _bindClickAway: function _bindClickAway() {
	    // On touch-enabled devices, both events fire, and the handler is called twice,
	    // but it's fine since all operations for which the mixin is used
	    // are idempotent.
	    _events2.default.on(document, 'mouseup', this._checkClickAway);
	    _events2.default.on(document, 'touchend', this._checkClickAway);
	  },
	  _unbindClickAway: function _unbindClickAway() {
	    _events2.default.off(document, 'mouseup', this._checkClickAway);
	    _events2.default.off(document, 'touchend', this._checkClickAway);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _propTypes = __webpack_require__(43);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _typography = __webpack_require__(38);

	var _typography2 = _interopRequireDefault(_typography);

	var _paper = __webpack_require__(62);

	var _paper2 = _interopRequireDefault(_paper);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var List = _react2.default.createClass({
	  displayName: 'List',

	  propTypes: {
	    /**
	     * These are usually ListItems that are passed to
	     * be part of the list.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * If true, the subheader will be indented by 72px.
	     */
	    insetSubheader: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The subheader string that will be displayed at the top of the list.
	     */
	    subheader: _react2.default.PropTypes.node,

	    /**
	     * The style object to override subheader styles.
	     */
	    subheaderStyle: _react2.default.PropTypes.object,

	    /**
	     * The zDepth prop passed to the Paper element inside list.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      insetSubheader: false,
	      zDepth: 0
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var insetSubheader = _props.insetSubheader;
	    var style = _props.style;
	    var subheader = _props.subheader;
	    var subheaderStyle = _props.subheaderStyle;
	    var zDepth = _props.zDepth;

	    var other = _objectWithoutProperties(_props, ['children', 'insetSubheader', 'style', 'subheader', 'subheaderStyle', 'zDepth']);

	    var styles = {
	      root: {
	        padding: 0,
	        paddingBottom: 8,
	        paddingTop: subheader ? 0 : 8
	      },

	      subheader: {
	        color: _typography2.default.textLightBlack,
	        fontSize: 14,
	        fontWeight: _typography2.default.fontWeightMedium,
	        lineHeight: '48px',
	        paddingLeft: insetSubheader ? 72 : 16
	      }
	    };

	    var subheaderElement = undefined;
	    if (subheader) {
	      var mergedSubheaderStyles = this.mergeStyles(styles.subheader, subheaderStyle);
	      subheaderElement = _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(mergedSubheaderStyles) },
	        subheader
	      );
	    }

	    return _react2.default.createElement(
	      _paper2.default,
	      _extends({}, other, {
	        style: this.mergeStyles(styles.root, style),
	        zDepth: zDepth
	      }),
	      subheaderElement,
	      children
	    );
	  }
	});

	exports.default = List;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _popover = __webpack_require__(78);

	var _popover2 = _interopRequireDefault(_popover);

	var _check = __webpack_require__(84);

	var _check2 = _interopRequireDefault(_check);

	var _listItem = __webpack_require__(85);

	var _listItem2 = _interopRequireDefault(_listItem);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _menu = __webpack_require__(74);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var nestedMenuStyle = {
	  position: 'relative'
	};

	var MenuItem = _react2.default.createClass({
	  displayName: 'MenuItem',

	  propTypes: {
	    /**
	     * If true, a left check mark will be rendered.
	     */
	    checked: _react2.default.PropTypes.bool,

	    /**
	     * Elements passed as children to inner ListItem.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Indicates if the menu should render with compact desktop styles.
	     */
	    desktop: _react2.default.PropTypes.bool,

	    /**
	     * Disables a menu item.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * Prop passed down to ListItem that tells it what kind of focus it has.
	     */
	    focusState: _react2.default.PropTypes.oneOf(['none', 'focused', 'keyboard-focused']),

	    /**
	     * Style overrides for the inner div.
	     */
	    innerDivStyle: _react2.default.PropTypes.object,

	    /**
	     * If true, the children will be indented.
	     * Only needed when there is no leftIcon.
	     */
	    insetChildren: _react2.default.PropTypes.bool,

	    /**
	     * This is the SvgIcon or FontIcon to be displayed on the left side.
	     */
	    leftIcon: _react2.default.PropTypes.element,

	    /**
	     * Nested MenuItems for this MenuItem. Used to make nested menus.
	     */
	    menuItems: _react2.default.PropTypes.node,

	    /**
	     * Fired when the element is touchTapped.
	     */
	    onTouchTap: _react2.default.PropTypes.func,

	    /**
	     * This is the SvgIcon or FontIcon to be displayed on the right side.
	     */
	    rightIcon: _react2.default.PropTypes.element,

	    /**
	     * This is the block element that contains the secondary text.
	     * If a string is passed in, a div tag will be rendered.
	     */
	    secondaryText: _react2.default.PropTypes.node,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * The value of the menu item.
	     */
	    value: _react2.default.PropTypes.any
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      checked: false,
	      desktop: false,
	      disabled: false,
	      focusState: 'none',
	      insetChildren: false
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      open: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._applyFocusState();
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });

	    if (this.state.open && nextProps.focusState === 'none') {
	      this._onRequestClose();
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._applyFocusState();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.state.open) {
	      this.setState({
	        open: false
	      });
	    }
	  },
	  _applyFocusState: function _applyFocusState() {
	    this.refs.listItem.applyFocusState(this.props.focusState);
	  },
	  _cloneMenuItem: function _cloneMenuItem(item) {
	    var _this = this;

	    return _react2.default.cloneElement(item, {
	      onTouchTap: function onTouchTap(event) {
	        if (!item.props.menuItems) {
	          _this._onRequestClose();
	        }

	        if (item.props.onTouchTap) {
	          item.props.onTouchTap(event);
	        }
	      },
	      onRequestClose: this._onRequestClose
	    });
	  },
	  _onTouchTap: function _onTouchTap(event) {
	    event.preventDefault();

	    this.setState({
	      open: true,
	      anchorEl: _reactDom2.default.findDOMNode(this)
	    });

	    if (this.props.onTouchTap) {
	      this.props.onTouchTap(event);
	    }
	  },
	  _onRequestClose: function _onRequestClose() {
	    this.setState({
	      open: false,
	      anchorEl: null
	    });
	  },
	  render: function render() {
	    var _props = this.props;
	    var checked = _props.checked;
	    var children = _props.children;
	    var desktop = _props.desktop;
	    var disabled = _props.disabled;
	    var focusState = _props.focusState;
	    var innerDivStyle = _props.innerDivStyle;
	    var insetChildren = _props.insetChildren;
	    var leftIcon = _props.leftIcon;
	    var menuItems = _props.menuItems;
	    var rightIcon = _props.rightIcon;
	    var secondaryText = _props.secondaryText;
	    var style = _props.style;
	    var value = _props.value;

	    var other = _objectWithoutProperties(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'value']);

	    var disabledColor = this.state.muiTheme.rawTheme.palette.disabledColor;
	    var textColor = this.state.muiTheme.rawTheme.palette.textColor;
	    var leftIndent = desktop ? 64 : 72;
	    var sidePadding = desktop ? 24 : 16;

	    var styles = {
	      root: {
	        color: disabled ? disabledColor : textColor,
	        lineHeight: desktop ? '32px' : '48px',
	        fontSize: desktop ? 15 : 16,
	        whiteSpace: 'nowrap'
	      },

	      innerDivStyle: {
	        paddingLeft: leftIcon || insetChildren || checked ? leftIndent : sidePadding,
	        paddingRight: sidePadding,
	        paddingBottom: 0,
	        paddingTop: 0
	      },

	      secondaryText: {
	        float: 'right'
	      },

	      leftIconDesktop: {
	        margin: 0,
	        left: 24,
	        top: 4
	      },

	      rightIconDesktop: {
	        margin: 0,
	        right: 24,
	        top: 4,
	        fill: _colors2.default.grey600
	      }
	    };

	    var mergedRootStyles = this.mergeStyles(styles.root, style);
	    var mergedInnerDivStyles = this.mergeStyles(styles.innerDivStyle, innerDivStyle);

	    //Left Icon
	    var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
	    if (leftIconElement && desktop) {
	      var mergedLeftIconStyles = this.mergeStyles(styles.leftIconDesktop, leftIconElement.props.style);
	      leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
	    }

	    //Right Icon
	    var rightIconElement = undefined;
	    if (rightIcon) {
	      var mergedRightIconStyles = desktop ? this.mergeStyles(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
	      rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
	    }

	    //Secondary Text
	    var secondaryTextElement = undefined;
	    if (secondaryText) {
	      var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
	      var mergedSecondaryTextStyles = secondaryTextIsAnElement ? this.mergeStyles(styles.secondaryText, secondaryText.props.style) : null;

	      secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(styles.secondaryText) },
	        secondaryText
	      );
	    }
	    var childMenuPopover = undefined;
	    if (menuItems) {
	      childMenuPopover = _react2.default.createElement(
	        _popover2.default,
	        {
	          anchorOrigin: { horizontal: 'right', vertical: 'top' },
	          anchorEl: this.state.anchorEl,
	          open: this.state.open,
	          useLayerForClickAway: false,
	          onRequestClose: this._onRequestClose
	        },
	        _react2.default.createElement(
	          _menu2.default,
	          { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
	          _react2.default.Children.map(menuItems, this._cloneMenuItem)
	        )
	      );
	      other.onTouchTap = this._onTouchTap;
	    }

	    return _react2.default.createElement(
	      _listItem2.default,
	      _extends({}, other, {
	        disabled: disabled,
	        innerDivStyle: mergedInnerDivStyles,
	        insetChildren: insetChildren,
	        leftIcon: leftIconElement,
	        ref: 'listItem',
	        rightIcon: rightIconElement,
	        style: mergedRootStyles
	      }),
	      children,
	      secondaryTextElement,
	      childMenuPopover
	    );
	  }
	});

	exports.default = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _windowListenable = __webpack_require__(79);

	var _windowListenable2 = _interopRequireDefault(_windowListenable);

	var _renderToLayer = __webpack_require__(80);

	var _renderToLayer2 = _interopRequireDefault(_renderToLayer);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _propTypes = __webpack_require__(43);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _paper = __webpack_require__(62);

	var _paper2 = _interopRequireDefault(_paper);

	var _lodash = __webpack_require__(81);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _popoverDefaultAnimation = __webpack_require__(83);

	var _popoverDefaultAnimation2 = _interopRequireDefault(_popoverDefaultAnimation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Popover = _react2.default.createClass({
	  displayName: 'Popover',

	  propTypes: {
	    /**
	     * This is the DOM element that will be used to set the position of the
	     * component.
	     */
	    anchorEl: _react2.default.PropTypes.object,

	    /**
	     * This is the point on the anchor where the popover
	     * targetOrigin will stick to.
	     * Options:
	     * vertical: [top, middle, bottom]
	     * horizontal: [left, center, right]
	     */
	    anchorOrigin: _propTypes2.default.origin,

	    /**
	     * If true, the popover will apply transitions when
	     * added it gets added to the DOM.
	     */
	    animated: _react2.default.PropTypes.bool,

	    /**
	     * Override the default animation component used.
	     */
	    animation: _react2.default.PropTypes.func,

	    /**
	     * If true, the popover will hide when the anchor scrolls off the screen
	     */
	    autoCloseWhenOffScreen: _react2.default.PropTypes.bool,

	    /**
	     * If true, the popover (potentially) ignores targetOrigin
	     * and anchorOrigin to make itself fit on screen,
	     * which is useful for mobile devices.
	     */
	    canAutoPosition: _react2.default.PropTypes.bool,

	    /**
	     * Use this property to render your component inside the `Popover`.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * This is a callback that fires when the popover
	     * thinks it should close. (e.g. clickAway or offScreen)
	     *
	     * @param {string} reason Determines what triggered this request.
	     */
	    onRequestClose: _react2.default.PropTypes.func,

	    /**
	     * Controls the visibility of the popover.
	     */
	    open: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,

	    /**
	     * This is the point on the popover which will stick to
	     * the anchors origin.
	     * Options:
	     * vertical: [top, middle, bottom]
	     * horizontal: [left, center, right]
	     */
	    targetOrigin: _propTypes2.default.origin,

	    /**
	     * If true, the popover will render on top of an invisible
	     * layer, which will prevent clicks to the underlying
	     * elements, and trigger an onRequestClose(clickAway) event.
	     */
	    useLayerForClickAway: _react2.default.PropTypes.bool,

	    /**
	     * This number represents the zDepth of the paper shadow.
	     */
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default, _windowListenable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      anchorOrigin: {
	        vertical: 'bottom',
	        horizontal: 'left'
	      },
	      animated: true,
	      autoCloseWhenOffScreen: true,
	      canAutoPosition: true,
	      onRequestClose: function onRequestClose() {},
	      open: false,
	      style: {
	        overflowY: 'auto'
	      },
	      targetOrigin: {
	        vertical: 'top',
	        horizontal: 'left'
	      },
	      useLayerForClickAway: true,
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    this.setPlacementThrottled = (0, _lodash2.default)(this.setPlacement, 100);
	    this.setPlacementThrottledScrolled = (0, _lodash2.default)(this.setPlacement.bind(this, true), 100);

	    return {
	      open: this.props.open,
	      closing: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var _this = this;

	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    if (nextProps.open !== this.state.open) {
	      if (nextProps.open) {
	        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
	        this.setState({
	          open: true,
	          closing: false,
	          muiTheme: newMuiTheme
	        });
	      } else {
	        if (nextProps.animated) {
	          this.setState({ closing: true });
	          this._timeout = setTimeout(function () {
	            if (_this.isMounted()) {
	              _this.setState({
	                open: false,
	                muiTheme: newMuiTheme
	              });
	            }
	          }, 500);
	        } else {
	          this.setState({
	            open: false,
	            muiTheme: newMuiTheme
	          });
	        }
	      }
	    }
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.setPlacement();
	  },

	  windowListeners: {
	    resize: 'setPlacementThrottled',
	    scroll: 'setPlacementThrottledScrolled'
	  },

	  renderLayer: function renderLayer() {
	    var _props = this.props;
	    var animated = _props.animated;
	    var animation = _props.animation;
	    var children = _props.children;
	    var style = _props.style;

	    var other = _objectWithoutProperties(_props, ['animated', 'animation', 'children', 'style']);

	    var Animation = animation || _popoverDefaultAnimation2.default;

	    if (!Animation) {
	      Animation = _paper2.default;
	      style = {
	        position: 'fixed'
	      };
	      if (!this.state.open) {
	        return null;
	      }
	    }

	    return _react2.default.createElement(
	      Animation,
	      _extends({}, other, { style: style, open: this.state.open && !this.state.closing }),
	      children
	    );
	  },
	  requestClose: function requestClose(reason) {
	    if (this.props.onRequestClose) {
	      this.props.onRequestClose(reason);
	    }
	  },
	  componentClickAway: function componentClickAway() {
	    this.requestClose('clickAway');
	  },
	  _resizeAutoPosition: function _resizeAutoPosition() {
	    this.setPlacement();
	  },
	  getAnchorPosition: function getAnchorPosition(el) {
	    if (!el) {
	      el = _reactDom2.default.findDOMNode(this);
	    }

	    var rect = el.getBoundingClientRect();
	    var a = {
	      top: rect.top,
	      left: rect.left,
	      width: el.offsetWidth,
	      height: el.offsetHeight
	    };

	    a.right = rect.right || a.left + a.width;
	    a.bottom = rect.bottom || a.top + a.height;
	    a.middle = a.left + (a.right - a.left) / 2;
	    a.center = a.top + (a.bottom - a.top) / 2;

	    return a;
	  },
	  getTargetPosition: function getTargetPosition(targetEl) {
	    return {
	      top: 0,
	      center: targetEl.offsetHeight / 2,
	      bottom: targetEl.offsetHeight,
	      left: 0,
	      middle: targetEl.offsetWidth / 2,
	      right: targetEl.offsetWidth
	    };
	  },
	  setPlacement: function setPlacement(scrolling) {
	    if (!this.state.open) {
	      return;
	    }

	    var anchorEl = this.props.anchorEl || this.anchorEl;

	    if (!this.refs.layer.getLayer()) {
	      return;
	    }

	    var targetEl = this.refs.layer.getLayer().children[0];
	    if (!targetEl) {
	      return;
	    }

	    var _props2 = this.props;
	    var targetOrigin = _props2.targetOrigin;
	    var anchorOrigin = _props2.anchorOrigin;

	    var anchor = this.getAnchorPosition(anchorEl);
	    var target = this.getTargetPosition(targetEl);

	    var targetPosition = {
	      top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
	      left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
	    };

	    if (scrolling && this.props.autoCloseWhenOffScreen) {
	      this.autoCloseWhenOffScreen(anchor);
	    }

	    if (this.props.canAutoPosition) {
	      target = this.getTargetPosition(targetEl); // update as height may have changed
	      targetPosition = this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
	    }

	    targetEl.style.top = Math.max(0, targetPosition.top) + 'px';
	    targetEl.style.left = Math.max(0, targetPosition.left) + 'px';
	    targetEl.style.maxHeight = window.innerHeight + 'px';
	  },
	  autoCloseWhenOffScreen: function autoCloseWhenOffScreen(anchorPosition) {
	    if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWith) {
	      this.requestClose('offScreen');
	    }
	  },
	  getOverlapMode: function getOverlapMode(anchor, target, median) {
	    if ([anchor, target].indexOf(median) >= 0) return 'auto';
	    if (anchor === target) return 'inclusive';
	    return 'exclusive';
	  },
	  getPositions: function getPositions(anchor, target) {
	    var a = _extends({}, anchor);
	    var t = _extends({}, target);

	    var positions = {
	      x: ['left', 'right'].filter(function (p) {
	        return p !== t.horizontal;
	      }),
	      y: ['top', 'bottom'].filter(function (p) {
	        return p !== t.vertical;
	      })
	    };

	    var overlap = {
	      x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
	      y: this.getOverlapMode(a.vertical, t.vertical, 'center')
	    };

	    positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
	    positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

	    if (overlap.y !== 'auto') {
	      a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
	      if (overlap.y === 'inclusive') {
	        t.vertical = t.vertical;
	      }
	    }

	    if (overlap.x !== 'auto') {
	      a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
	      if (overlap.y === 'inclusive') {
	        t.horizontal = t.horizontal;
	      }
	    }

	    return {
	      positions: positions,
	      anchorPos: a
	    };
	  },
	  applyAutoPositionIfNeeded: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
	    var _getPositions = this.getPositions(anchorOrigin, targetOrigin);

	    var positions = _getPositions.positions;
	    var anchorPos = _getPositions.anchorPos;

	    if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
	      var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
	      if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);else {
	        newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
	        if (newTop + target.bottom <= window.innerHeight) targetPosition.top = Math.max(0, newTop);
	      }
	    }
	    if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
	      var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
	      if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);else {
	        newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
	        if (newLeft + target.right <= window.innerWidth) targetPosition.left = Math.max(0, newLeft);
	      }
	    }
	    return targetPosition;
	  },
	  render: function render() {
	    return _react2.default.createElement(_renderToLayer2.default, {
	      ref: 'layer',
	      open: this.state.open,
	      componentClickAway: this.componentClickAway,
	      useLayerForClickAway: this.props.useLayerForClickAway,
	      render: this.renderLayer
	    });
	  }
	});

	exports.default = Popover;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _events = __webpack_require__(48);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  componentDidMount: function componentDidMount() {
	    var listeners = this.windowListeners;

	    for (var eventName in listeners) {
	      var callbackName = listeners[eventName];
	      _events2.default.on(window, eventName, this[callbackName]);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    var listeners = this.windowListeners;

	    for (var eventName in listeners) {
	      var callbackName = listeners[eventName];
	      _events2.default.off(window, eventName, this[callbackName]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _dom = __webpack_require__(56);

	var _dom2 = _interopRequireDefault(_dom);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
	var RenderToLayer = _react2.default.createClass({
	  displayName: 'RenderToLayer',

	  propTypes: {
	    componentClickAway: _react2.default.PropTypes.func,
	    open: _react2.default.PropTypes.bool.isRequired,
	    render: _react2.default.PropTypes.func.isRequired,
	    useLayerForClickAway: _react2.default.PropTypes.bool
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      useLayerForClickAway: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._renderLayer();
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      muiTheme: newMuiTheme
	    });
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderLayer();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._unrenderLayer();
	  },
	  onClickAway: function onClickAway(event) {
	    if (event.defaultPrevented) {
	      return;
	    }

	    if (!this.props.componentClickAway) {
	      return;
	    }

	    if (!this.props.open) {
	      return;
	    }

	    var el = this._layer;
	    if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
	      this.props.componentClickAway(event);
	    }
	  },
	  getLayer: function getLayer() {
	    return this._layer;
	  },

	  _unrenderLayer: function _unrenderLayer() {
	    if (!this._layer) {
	      return;
	    }

	    if (this.props.useLayerForClickAway) {
	      this._layer.style.position = 'relative';
	      this._layer.removeEventListener('touchstart', this.onClickAway);
	      this._layer.removeEventListener('click', this.onClickAway);
	    } else {
	      window.removeEventListener('touchstart', this.onClickAway);
	      window.removeEventListener('click', this.onClickAway);
	    }

	    _reactDom2.default.unmountComponentAtNode(this._layer);
	    document.body.removeChild(this._layer);
	    this._layer = null;
	  },

	  _renderLayer: function _renderLayer() {
	    var _this = this;

	    var _props = this.props;
	    var open = _props.open;
	    var render = _props.render;

	    if (open) {
	      if (!this._layer) {
	        this._layer = document.createElement('div');
	        document.body.appendChild(this._layer);

	        if (this.props.useLayerForClickAway) {
	          this._layer.addEventListener('touchstart', this.onClickAway);
	          this._layer.addEventListener('click', this.onClickAway);
	          this._layer.style.position = 'fixed';
	          this._layer.style.top = 0;
	          this._layer.style.bottom = 0;
	          this._layer.style.left = 0;
	          this._layer.style.right = 0;
	          this._layer.style.zIndex = this.state.muiTheme.zIndex.layer;
	        } else {
	          setTimeout(function () {
	            window.addEventListener('touchstart', _this.onClickAway);
	            window.addEventListener('click', _this.onClickAway);
	          }, 0);
	        }
	      }

	      // By calling this method in componentDidMount() and
	      // componentDidUpdate(), you're effectively creating a "wormhole" that
	      // funnels React's hierarchical updates through to a DOM node on an
	      // entirely different part of the page.

	      var layerElement = render();

	      if (layerElement === null) {
	        this.layerElement = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, null, this._layer);
	      } else {
	        this.layerElement = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, layerElement, this._layer);
	      }
	    } else {
	      this._unrenderLayer();
	    }
	  },
	  render: function render() {
	    return null;
	  }
	});

	exports.default = RenderToLayer;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(82);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed invocations. Provide an options object to indicate
	 * that `func` should be invoked on the leading and/or trailing edge of the
	 * `wait` timeout. Subsequent calls to the throttled function return the
	 * result of the last `func` call.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // avoid excessively updating the position while scrolling
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	 *   'trailing': false
	 * }));
	 *
	 * // cancel a trailing throttled call
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (options === false) {
	    leading = false;
	  } else if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = throttle;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var getNative = __webpack_require__(17);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it is invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function(changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = debounce;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(43);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _paper = __webpack_require__(62);

	var _paper2 = _interopRequireDefault(_paper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PopoverDefaultAnimation = _react2.default.createClass({
	  displayName: 'PopoverDefaultAnimation',

	  propTypes: {
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,
	    open: _react2.default.PropTypes.bool.isRequired,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    targetOrigin: _propTypes2.default.origin,
	    zDepth: _propTypes2.default.zDepth
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      style: {},
	      zDepth: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)(),
	      open: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.setState({ open: true }); //eslint-disable-line react/no-did-mount-set-state
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;

	    this.setState({
	      open: nextProps.open,
	      muiTheme: newMuiTheme
	    });
	  },
	  getStyles: function getStyles() {
	    var targetOrigin = this.props.targetOrigin;

	    var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

	    return {
	      base: {
	        opacity: 0,
	        transform: 'scale(0, 0)',
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        position: 'fixed',
	        zIndex: this.state.muiTheme.zIndex.popover,
	        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
	        maxHeight: '100%'

	      },
	      horizontal: {
	        maxHeight: '100%',
	        overflowY: 'auto',
	        transform: 'scaleX(0)',
	        opacity: 0,
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
	      },
	      vertical: {
	        opacity: 0,
	        transform: 'scaleY(0)',
	        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
	        transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
	      }
	    };
	  },
	  getOpenStyles: function getOpenStyles() {
	    return {
	      base: {
	        opacity: 1,
	        transform: 'scale(1, 1)'
	      },
	      horizontal: {
	        opacity: 1,
	        transform: 'scaleX(1)'
	      },
	      vertical: {
	        opacity: 1,
	        transform: 'scaleY(1)'
	      }
	    };
	  },
	  render: function render() {
	    var _props = this.props;
	    var className = _props.className;
	    var style = _props.style;
	    var zDepth = _props.zDepth;

	    var styles = this.getStyles();
	    var openStyles = {};
	    if (this.state.open) openStyles = this.getOpenStyles();

	    return _react2.default.createElement(
	      _paper2.default,
	      {
	        style: this.mergeStyles(styles.base, style, openStyles.base),
	        zDepth: zDepth,
	        className: className
	      },
	      _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(styles.horizontal, openStyles.horizontal) },
	        _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.vertical, openStyles.vertical) },
	          this.props.children
	        )
	      )
	    );
	  }
	});

	exports.default = PopoverDefaultAnimation;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(61);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationCheck = _react2.default.createClass({
	  displayName: 'NavigationCheck',

	  mixins: [_reactAddonsPureRenderMixin2.default],

	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
	    );
	  }
	});

	exports.default = NavigationCheck;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _colorManipulator = __webpack_require__(21);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _typography = __webpack_require__(38);

	var _typography2 = _interopRequireDefault(_typography);

	var _enhancedButton = __webpack_require__(44);

	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);

	var _iconButton = __webpack_require__(39);

	var _iconButton2 = _interopRequireDefault(_iconButton);

	var _arrowDropUp = __webpack_require__(86);

	var _arrowDropUp2 = _interopRequireDefault(_arrowDropUp);

	var _arrowDropDown = __webpack_require__(87);

	var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

	var _nestedList = __webpack_require__(88);

	var _nestedList2 = _interopRequireDefault(_nestedList);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ListItem = _react2.default.createClass({
	  displayName: 'ListItem',

	  propTypes: {
	    /**
	     * Generate a nested list indicator icon when
	     * nested list items are detected. Set to false
	     * if you do not want an indicator auto-generated.
	     * Note that an indicator will not be created if a
	     * rightIcon/Button has been specified.
	     */
	    autoGenerateNestedIndicator: _react2.default.PropTypes.bool,

	    /**
	     * Children passed into the ListItem.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * Does not allow the element to be focused by the keyboard.
	     */
	    disableKeyboardFocus: _react2.default.PropTypes.bool,

	    /**
	     * If true, the list-item will not be clickable
	     * and will not display hover affects.
	     * This is automatically disabled if leftCheckbox
	     * or rightToggle is set.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * Controls whether or not the child ListItems are initially displayed.
	     */
	    initiallyOpen: _react2.default.PropTypes.bool,

	    /**
	     * Style prop for the innder div element.
	     */
	    innerDivStyle: _react2.default.PropTypes.object,

	    /**
	     * If true, the children will be indented by 72px.
	     * Only needed if there is no left avatar or left icon.
	     */
	    insetChildren: _react2.default.PropTypes.bool,

	    /**
	     * This is the Avatar element to be displayed on the left side.
	     */
	    leftAvatar: _react2.default.PropTypes.element,

	    /**
	     * This is the Checkbox element to be displayed on the left side.
	     */
	    leftCheckbox: _react2.default.PropTypes.element,

	    /**
	     * This is the SvgIcon or FontIcon to be displayed on the left side.
	     */
	    leftIcon: _react2.default.PropTypes.element,

	    /**
	     * An array of ListItems to nest underneath the current ListItem.
	     */
	    nestedItems: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.element),

	    /**
	     * Controls how deep a ListItem appears.
	     * This property is automatically managed so modify at your own risk.
	     */
	    nestedLevel: _react2.default.PropTypes.number,

	    /**
	     * Override the inline-styles of the nestedItems NestedList.
	     */
	    nestedListStyle: _react2.default.PropTypes.object,

	    /**
	     * Called when the ListItem has keyboard focus.
	     */
	    onKeyboardFocus: _react2.default.PropTypes.func,

	    /**
	     * Called when the mouse is over the ListItem.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Called when the mouse is no longer over the ListItem.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Called when the ListItem toggles its nested ListItems.
	     */
	    onNestedListToggle: _react2.default.PropTypes.func,

	    /**
	     * Called when touches start.
	     */
	    onTouchStart: _react2.default.PropTypes.func,

	    /**
	     * Called when a touch tap event occures on the component.
	     */
	    onTouchTap: _react2.default.PropTypes.func,

	    /**
	     * This is the block element that contains the primary text.
	     * If a string is passed in, a div tag will be rendered.
	     */
	    primaryText: _react2.default.PropTypes.node,

	    /**
	     * If provided, tapping on the primary text
	     * of the item toggles the nested list.
	     */
	    primaryTogglesNestedList: _react2.default.PropTypes.bool,

	    /**
	     * This is the avatar element to be displayed on the right side.
	     */
	    rightAvatar: _react2.default.PropTypes.element,

	    /**
	     * This is the SvgIcon or FontIcon to be displayed on the right side.
	     */
	    rightIcon: _react2.default.PropTypes.element,

	    /**
	     * This is the IconButton to be displayed on the right side.
	     * Hovering over this button will remove the ListItem hover.
	     * Also, clicking on this button will not trigger a
	     * ListItem ripple. The event will be stopped and prevented
	     * from bubbling up to cause a ListItem click.
	     */
	    rightIconButton: _react2.default.PropTypes.element,

	    /**
	     * This is the Toggle element to display on the right side.
	     */
	    rightToggle: _react2.default.PropTypes.element,

	    /**
	     * This is the block element that contains the secondary text.
	     * If a string is passed in, a div tag will be rendered.
	     */
	    secondaryText: _react2.default.PropTypes.node,

	    /**
	     * Can be 1 or 2. This is the number of secondary
	     * text lines before ellipsis will show.
	     */
	    secondaryTextLines: _react2.default.PropTypes.oneOf([1, 2]),

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_reactAddonsPureRenderMixin2.default, _stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      autoGenerateNestedIndicator: true,
	      disableKeyboardFocus: false,
	      disabled: false,
	      initiallyOpen: false,
	      insetChildren: false,
	      nestedItems: [],
	      nestedLevel: 0,
	      onKeyboardFocus: function onKeyboardFocus() {},
	      onMouseEnter: function onMouseEnter() {},
	      onMouseLeave: function onMouseLeave() {},
	      onNestedListToggle: function onNestedListToggle() {},
	      onTouchStart: function onTouchStart() {},
	      primaryTogglesNestedList: false,
	      secondaryTextLines: 1
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      hovered: false,
	      isKeyboardFocused: false,
	      open: this.props.initiallyOpen,
	      rightIconButtonHovered: false,
	      rightIconButtonKeyboardFocused: false,
	      touch: false,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  applyFocusState: function applyFocusState(focusState) {
	    var button = this.refs.enhancedButton;
	    var buttonEl = _reactDom2.default.findDOMNode(button);

	    if (button) {
	      switch (focusState) {
	        case 'none':
	          buttonEl.blur();
	          break;
	        case 'focused':
	          buttonEl.focus();
	          break;
	        case 'keyboard-focused':
	          button.setKeyboardFocus();
	          buttonEl.focus();
	          break;
	      }
	    }
	  },
	  _createDisabledElement: function _createDisabledElement(styles, contentChildren, additionalProps) {
	    var _props = this.props;
	    var innerDivStyle = _props.innerDivStyle;
	    var style = _props.style;

	    var mergedDivStyles = this.mergeStyles(styles.root, styles.innerDiv, innerDivStyle, style);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, additionalProps, {
	        style: this.prepareStyles(mergedDivStyles)
	      }),
	      contentChildren
	    );
	  },
	  _createLabelElement: function _createLabelElement(styles, contentChildren, additionalProps) {
	    var _props2 = this.props;
	    var innerDivStyle = _props2.innerDivStyle;
	    var style = _props2.style;

	    var mergedLabelStyles = this.mergeStyles(styles.root, styles.innerDiv, innerDivStyle, styles.label, style);

	    return _react2.default.createElement(
	      'label',
	      _extends({}, additionalProps, {
	        style: this.prepareStyles(mergedLabelStyles)
	      }),
	      contentChildren
	    );
	  },
	  _createTextElement: function _createTextElement(styles, data, key) {
	    var isAnElement = _react2.default.isValidElement(data);
	    var mergedStyles = isAnElement ? this.mergeStyles(styles, data.props.style) : null;

	    return isAnElement ? _react2.default.cloneElement(data, {
	      key: key,
	      style: this.prepareStyles(mergedStyles)
	    }) : _react2.default.createElement(
	      'div',
	      { key: key, style: this.prepareStyles(styles) },
	      data
	    );
	  },
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, isKeyboardFocused) {
	    this.setState({ isKeyboardFocused: isKeyboardFocused });
	    this.props.onKeyboardFocus(e, isKeyboardFocused);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.state.touch) this.setState({ hovered: true });
	    this.props.onMouseEnter(e);
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    this.setState({ hovered: false });
	    this.props.onMouseLeave(e);
	  },
	  _handleNestedListToggle: function _handleNestedListToggle(e) {
	    e.stopPropagation();
	    this.setState({ open: !this.state.open });
	    this.props.onNestedListToggle(this);
	  },
	  _handleRightIconButtonKeyboardFocus: function _handleRightIconButtonKeyboardFocus(e, isKeyboardFocused) {
	    var iconButton = this.props.rightIconButton;
	    var newState = {};

	    newState.rightIconButtonKeyboardFocused = isKeyboardFocused;
	    if (isKeyboardFocused) newState.isKeyboardFocused = false;
	    this.setState(newState);

	    if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(e, isKeyboardFocused);
	  },
	  _handleRightIconButtonMouseDown: function _handleRightIconButtonMouseDown(e) {
	    var iconButton = this.props.rightIconButton;
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onMouseDown) iconButton.props.onMouseDown(e);
	  },
	  _handleRightIconButtonMouseLeave: function _handleRightIconButtonMouseLeave(e) {
	    var iconButton = this.props.rightIconButton;
	    this.setState({ rightIconButtonHovered: false });
	    if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(e);
	  },
	  _handleRightIconButtonMouseEnter: function _handleRightIconButtonMouseEnter(e) {
	    var iconButton = this.props.rightIconButton;
	    this.setState({ rightIconButtonHovered: true });
	    if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(e);
	  },
	  _handleRightIconButtonMouseUp: function _handleRightIconButtonMouseUp(e) {
	    var iconButton = this.props.rightIconButton;
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(e);
	  },
	  _handleRightIconButtonTouchTap: function _handleRightIconButtonTouchTap(e) {
	    var iconButton = this.props.rightIconButton;

	    //Stop the event from bubbling up to the list-item
	    e.stopPropagation();
	    if (iconButton && iconButton.props.onTouchTap) iconButton.props.onTouchTap(e);
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({ touch: true });
	    this.props.onTouchStart(e);
	  },
	  _pushElement: function _pushElement(children, element, baseStyles, additionalProps) {
	    if (element) {
	      var styles = this.mergeStyles(baseStyles, element.props.style);
	      children.push(_react2.default.cloneElement(element, _extends({
	        key: children.length,
	        style: styles
	      }, additionalProps)));
	    }
	  },
	  render: function render() {
	    var _props3 = this.props;
	    var autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator;
	    var children = _props3.children;
	    var disabled = _props3.disabled;
	    var disableKeyboardFocus = _props3.disableKeyboardFocus;
	    var innerDivStyle = _props3.innerDivStyle;
	    var insetChildren = _props3.insetChildren;
	    var leftAvatar = _props3.leftAvatar;
	    var leftCheckbox = _props3.leftCheckbox;
	    var leftIcon = _props3.leftIcon;
	    var nestedItems = _props3.nestedItems;
	    var nestedLevel = _props3.nestedLevel;
	    var nestedListStyle = _props3.nestedListStyle;
	    var onKeyboardFocus = _props3.onKeyboardFocus;
	    var onMouseLeave = _props3.onMouseLeave;
	    var onMouseEnter = _props3.onMouseEnter;
	    var onTouchStart = _props3.onTouchStart;
	    var onTouchTap = _props3.onTouchTap;
	    var rightAvatar = _props3.rightAvatar;
	    var rightIcon = _props3.rightIcon;
	    var rightIconButton = _props3.rightIconButton;
	    var rightToggle = _props3.rightToggle;
	    var primaryText = _props3.primaryText;
	    var primaryTogglesNestedList = _props3.primaryTogglesNestedList;
	    var secondaryText = _props3.secondaryText;
	    var secondaryTextLines = _props3.secondaryTextLines;
	    var style = _props3.style;

	    var other = _objectWithoutProperties(_props3, ['autoGenerateNestedIndicator', 'children', 'disabled', 'disableKeyboardFocus', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'onMouseLeave', 'onMouseEnter', 'onTouchStart', 'onTouchTap', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);

	    var textColor = this.state.muiTheme.rawTheme.palette.textColor;
	    var hoverColor = _colorManipulator2.default.fade(textColor, 0.1);
	    var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
	    var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
	    var twoLine = secondaryText && secondaryTextLines === 1;
	    var threeLine = secondaryText && secondaryTextLines > 1;
	    var hasCheckbox = leftCheckbox || rightToggle;

	    var styles = {
	      root: {
	        backgroundColor: (this.state.isKeyboardFocused || this.state.hovered) && !this.state.rightIconButtonHovered && !this.state.rightIconButtonKeyboardFocused ? hoverColor : null,
	        color: textColor,
	        display: 'block',
	        fontSize: 16,
	        lineHeight: '16px',
	        position: 'relative',
	        transition: _transitions2.default.easeOut()
	      },

	      //This inner div is needed so that ripples will span the entire container
	      innerDiv: {
	        marginLeft: nestedLevel * this.state.muiTheme.listItem.nestedLevelDepth,
	        paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
	        paddingRight: rightIcon || rightAvatar || rightIconButton ? 56 : rightToggle ? 72 : 16,
	        paddingBottom: singleAvatar ? 20 : 16,
	        paddingTop: singleNoAvatar || threeLine ? 16 : 20,
	        position: 'relative'
	      },

	      icons: {
	        height: 24,
	        width: 24,
	        display: 'block',
	        position: 'absolute',
	        top: twoLine ? 12 : singleAvatar ? 4 : 0,
	        margin: 12
	      },

	      leftIcon: {
	        color: _colors2.default.grey600,
	        fill: _colors2.default.grey600,
	        left: 4
	      },

	      rightIcon: {
	        color: _colors2.default.grey400,
	        fill: _colors2.default.grey400,
	        right: 4
	      },

	      avatars: {
	        position: 'absolute',
	        top: singleAvatar ? 8 : 16
	      },

	      label: {
	        cursor: 'pointer'
	      },

	      leftAvatar: {
	        left: 16
	      },

	      rightAvatar: {
	        right: 16
	      },

	      leftCheckbox: {
	        position: 'absolute',
	        display: 'block',
	        width: 24,
	        top: twoLine ? 24 : singleAvatar ? 16 : 12,
	        left: 16
	      },

	      primaryText: {},

	      rightIconButton: {
	        position: 'absolute',
	        display: 'block',
	        top: twoLine ? 12 : singleAvatar ? 4 : 0,
	        right: 4
	      },

	      rightToggle: {
	        position: 'absolute',
	        display: 'block',
	        width: 54,
	        top: twoLine ? 25 : singleAvatar ? 17 : 13,
	        right: 8
	      },

	      secondaryText: {
	        fontSize: 14,
	        lineHeight: threeLine ? '18px' : '16px',
	        height: threeLine ? 36 : 16,
	        margin: 0,
	        marginTop: 4,
	        color: _typography2.default.textLightBlack,

	        //needed for 2 and 3 line ellipsis
	        overflow: 'hidden',
	        textOverflow: 'ellipsis',
	        whiteSpace: threeLine ? null : 'nowrap',
	        display: threeLine ? '-webkit-box' : null,
	        WebkitLineClamp: threeLine ? 2 : null,
	        WebkitBoxOrient: threeLine ? 'vertical' : null
	      }
	    };

	    var contentChildren = [children];

	    if (leftIcon) {
	      this._pushElement(contentChildren, leftIcon, this.mergeStyles(styles.icons, styles.leftIcon));
	    }

	    if (rightIcon) {
	      this._pushElement(contentChildren, rightIcon, this.mergeStyles(styles.icons, styles.rightIcon));
	    }

	    if (leftAvatar) {
	      this._pushElement(contentChildren, leftAvatar, this.mergeStyles(styles.avatars, styles.leftAvatar));
	    }

	    if (rightAvatar) {
	      this._pushElement(contentChildren, rightAvatar, this.mergeStyles(styles.avatars, styles.rightAvatar));
	    }

	    if (leftCheckbox) {
	      this._pushElement(contentChildren, leftCheckbox, this.mergeStyles(styles.leftCheckbox));
	    }

	    //RightIconButtonElement
	    var hasNestListItems = nestedItems.length;
	    var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
	    var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;

	    if (rightIconButton || needsNestedIndicator) {
	      var rightIconButtonElement = rightIconButton;
	      var rightIconButtonHandlers = {
	        onKeyboardFocus: this._handleRightIconButtonKeyboardFocus,
	        onMouseEnter: this._handleRightIconButtonMouseEnter,
	        onMouseLeave: this._handleRightIconButtonMouseLeave,
	        onTouchTap: this._handleRightIconButtonTouchTap,
	        onMouseDown: this._handleRightIconButtonMouseUp,
	        onMouseUp: this._handleRightIconButtonMouseUp
	      };

	      // Create a nested list indicator icon if we don't have an icon on the right
	      if (needsNestedIndicator) {
	        rightIconButtonElement = this.state.open ? _react2.default.createElement(
	          _iconButton2.default,
	          null,
	          _react2.default.createElement(_arrowDropUp2.default, null)
	        ) : _react2.default.createElement(
	          _iconButton2.default,
	          null,
	          _react2.default.createElement(_arrowDropDown2.default, null)
	        );
	        rightIconButtonHandlers.onTouchTap = this._handleNestedListToggle;
	      }

	      this._pushElement(contentChildren, rightIconButtonElement, this.mergeStyles(styles.rightIconButton), rightIconButtonHandlers);
	    }

	    if (rightToggle) {
	      this._pushElement(contentChildren, rightToggle, this.mergeStyles(styles.rightToggle));
	    }

	    if (primaryText) {
	      var secondaryTextElement = this._createTextElement(styles.primaryText, primaryText, 'primaryText');
	      contentChildren.push(secondaryTextElement);
	    }

	    if (secondaryText) {
	      var secondaryTextElement = this._createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
	      contentChildren.push(secondaryTextElement);
	    }

	    var nestedList = nestedItems.length ? _react2.default.createElement(
	      _nestedList2.default,
	      { nestedLevel: nestedLevel + 1, open: this.state.open, style: nestedListStyle },
	      nestedItems
	    ) : undefined;

	    return _react2.default.createElement(
	      'div',
	      null,
	      hasCheckbox ? this._createLabelElement(styles, contentChildren, other) : disabled ? this._createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
	        _enhancedButton2.default,
	        _extends({}, other, {
	          disabled: disabled,
	          disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
	          linkButton: true,
	          onKeyboardFocus: this._handleKeyboardFocus,
	          onMouseLeave: this._handleMouseLeave,
	          onMouseEnter: this._handleMouseEnter,
	          onTouchStart: this._handleTouchStart,
	          onTouchTap: primaryTogglesNestedList ? this._handleNestedListToggle : onTouchTap,
	          ref: 'enhancedButton',
	          style: this.mergeStyles(styles.root, style)
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(styles.innerDiv, innerDivStyle) },
	          contentChildren
	        )
	      ),
	      nestedList
	    );
	  }
	});

	exports.default = ListItem;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(61);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationArrowDropUp = _react2.default.createClass({
	  displayName: 'NavigationArrowDropUp',

	  mixins: [_reactAddonsPureRenderMixin2.default],

	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M7 14l5-5 5 5z' })
	    );
	  }
	});

	exports.default = NavigationArrowDropUp;
	module.exports = exports['default'];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(45);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _svgIcon = __webpack_require__(61);

	var _svgIcon2 = _interopRequireDefault(_svgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationArrowDropDown = _react2.default.createClass({
	  displayName: 'NavigationArrowDropDown',

	  mixins: [_reactAddonsPureRenderMixin2.default],

	  render: function render() {
	    return _react2.default.createElement(
	      _svgIcon2.default,
	      this.props,
	      _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
	    );
	  }
	});

	exports.default = NavigationArrowDropDown;
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(36);

	var _list = __webpack_require__(76);

	var _list2 = _interopRequireDefault(_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NestedList = function (_React$Component) {
	  _inherits(NestedList, _React$Component);

	  function NestedList() {
	    _classCallCheck(this, NestedList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NestedList).apply(this, arguments));
	  }

	  _createClass(NestedList, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var open = _props.open;
	      var nestedLevel = _props.nestedLevel;
	      var style = _props.style;

	      var styles = {
	        root: {
	          display: open ? null : 'none'
	        }
	      };

	      return _react2.default.createElement(
	        _list2.default,
	        { style: (0, _styles.mergeStyles)(styles.root, style) },
	        _react2.default.Children.map(children, function (child) {
	          return _react2.default.isValidElement(child) ? _react2.default.cloneElement(child, {
	            nestedLevel: nestedLevel + 1
	          }) : child;
	        })
	      );
	    }
	  }]);

	  return NestedList;
	}(_react2.default.Component);

	NestedList.propTypes = {
	  children: _react2.default.PropTypes.node,
	  nestedLevel: _react2.default.PropTypes.number,
	  open: _react2.default.PropTypes.bool,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};
	NestedList.defaultProps = {
	  nestedLevel: 1,
	  open: false
	};
	exports.default = NestedList;
	module.exports = exports['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _muiThemeable = __webpack_require__(90);

	var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

	var _styles = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react2.default.PropTypes.string,

	  /**
	   * If true, the `Divider` will be indented `72px`.
	   */
	  inset: _react2.default.PropTypes.bool,

	  /**
	   * The material-ui theme applied to this component.
	   * @ignore
	   */
	  muiTheme: _react2.default.PropTypes.object.isRequired,

	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react2.default.PropTypes.object
	};

	var defaultProps = {
	  inset: false
	};

	var Divider = function Divider(props) {
	  var inset = props.inset;
	  var muiTheme = props.muiTheme;
	  var style = props.style;

	  var other = _objectWithoutProperties(props, ['inset', 'muiTheme', 'style']);

	  var styles = {
	    root: {
	      margin: 0,
	      marginTop: -1,
	      marginLeft: inset ? 72 : 0,
	      height: 1,
	      border: 'none',
	      backgroundColor: muiTheme.rawTheme.palette.borderColor
	    }
	  };

	  return _react2.default.createElement('hr', _extends({}, other, { style: (0, _styles.prepareStyles)(muiTheme, (0, _styles.mergeStyles)(styles.root, style)) }));
	};

	Divider.displayName = 'Divider';
	Divider.propTypes = propTypes;
	Divider.defaultProps = defaultProps;
	Divider = (0, _muiThemeable2.default)(Divider);

	exports.default = Divider;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = muiThemeable;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function muiThemeable(WrappedComponent) {
	  var MuiComponent = function MuiComponent(props, _ref) {
	    var _ref$muiTheme = _ref.muiTheme;
	    var muiTheme = _ref$muiTheme === undefined ? (0, _getMuiTheme2.default)() : _ref$muiTheme;

	    return _react2.default.createElement(WrappedComponent, _extends({}, props, { muiTheme: muiTheme }));
	  };

	  MuiComponent.displayName = getDisplayName(WrappedComponent);
	  MuiComponent.contextTypes = {
	    muiTheme: _react2.default.PropTypes.object
	  };
	  MuiComponent.childContextTypes = {
	    muiTheme: _react2.default.PropTypes.object
	  };

	  return MuiComponent;
	}
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deprecated;

	var _warning = __webpack_require__(22);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] != null) {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, '"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation) : undefined;
	    }

	    return propType(props, propName, componentName);
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(51);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _colorManipulator = __webpack_require__(21);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _children = __webpack_require__(46);

	var _children2 = _interopRequireDefault(_children);

	var _typography = __webpack_require__(38);

	var _typography2 = _interopRequireDefault(_typography);

	var _enhancedButton = __webpack_require__(44);

	var _enhancedButton2 = _interopRequireDefault(_enhancedButton);

	var _paper = __webpack_require__(62);

	var _paper2 = _interopRequireDefault(_paper);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function validateLabel(props, propName, componentName) {
	  if (!props.children && !props.label) {
	    return new Error('Required prop label or children was not ' + 'specified in ' + componentName + '.');
	  }
	}

	var RaisedButton = _react2.default.createClass({
	  displayName: 'RaisedButton',

	  propTypes: {
	    /**
	     * Override the background color. Always takes precedence unless the button is disabled.
	     */
	    backgroundColor: _react2.default.PropTypes.string,

	    /**
	     * This is what will be displayed inside the button.
	     * If a label is specified, the text within the label prop will
	     * be displayed. Otherwise, the component will expect children
	     * which will then be displayed. (In our example,
	     * we are nesting an `<input type="file" />` and a `span`
	     * that acts as our label to be displayed.) This only
	     * applies to flat and raised buttons.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * Disables the button if set to true.
	     */
	    disabled: _react2.default.PropTypes.bool,

	    /**
	     * Override the background color if the button is disabled.
	     */
	    disabledBackgroundColor: _react2.default.PropTypes.string,

	    /**
	     * Color of the label if disabled is true.
	     */
	    disabledLabelColor: _react2.default.PropTypes.string,

	    /**
	     * If true, then the button will take up the full
	     * width of its container.
	     */
	    fullWidth: _react2.default.PropTypes.bool,

	    /**
	     * URL to link to when button clicked if `linkButton` is set to true.
	     */
	    href: _react2.default.PropTypes.string,

	    /**
	     * Use this property to display an icon.
	     */
	    icon: _react2.default.PropTypes.node,

	    /**
	     * The label for the button.
	     */
	    label: validateLabel,

	    /**
	     * The color of the label for the button.
	     */
	    labelColor: _react2.default.PropTypes.string,

	    /**
	     * Place label before or after the passed children.
	     */
	    labelPosition: _react2.default.PropTypes.oneOf(['before', 'after']),

	    /**
	     * Override the inline-styles of the button's label element.
	     */
	    labelStyle: _react2.default.PropTypes.object,

	    /**
	     * Enables use of `href` property to provide a URL to link to if set to true.
	     */
	    linkButton: _react2.default.PropTypes.bool,

	    /**
	     * Callback function for when the mouse is pressed down inside this element.
	     */
	    onMouseDown: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the mouse enters this element.
	     */
	    onMouseEnter: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the mouse leaves this element.
	     */
	    onMouseLeave: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when the mouse is realeased
	     * above this element.
	     */
	    onMouseUp: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when a touchTap event ends.
	     */
	    onTouchEnd: _react2.default.PropTypes.func,

	    /**
	     * Callback function for when a touchTap event starts.
	     */
	    onTouchStart: _react2.default.PropTypes.func,

	    /**
	     * If true, colors button according to
	     * primaryTextColor from the Theme.
	     */
	    primary: _react2.default.PropTypes.bool,

	    /**
	     * If true, colors button according to secondaryTextColor from the theme.
	     * The primary prop has precendent if set to true.
	     */
	    secondary: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: false,
	      labelPosition: 'after',
	      fullWidth: false,
	      primary: false,
	      secondary: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    var zDepth = this.props.disabled ? 0 : 1;
	    return {
	      hovered: false,
	      touched: false,
	      initialZDepth: zDepth,
	      zDepth: zDepth,
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var zDepth = nextProps.disabled ? 0 : 1;
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      zDepth: zDepth,
	      initialZDepth: zDepth,
	      muiTheme: newMuiTheme
	    });
	  },
	  _getBackgroundColor: function _getBackgroundColor() {
	    var disabledColor = this.props.disabledBackgroundColor ? this.props.disabledBackgroundColor : this.getTheme().disabledColor;

	    return this.props.disabled ? disabledColor : this.props.backgroundColor ? this.props.backgroundColor : this.props.primary ? this.getTheme().primaryColor : this.props.secondary ? this.getTheme().secondaryColor : this.getTheme().color;
	  },
	  _getLabelColor: function _getLabelColor() {
	    var disabledColor = this.props.disabledLabelColor ? this.props.disabledLabelColor : this.getTheme().disabledTextColor;

	    return this.props.disabled ? disabledColor : this.props.labelColor ? this.props.labelColor : this.props.primary ? this.getTheme().primaryTextColor : this.props.secondary ? this.getTheme().secondaryTextColor : this.getTheme().textColor;
	  },
	  getThemeButton: function getThemeButton() {
	    return this.state.muiTheme.button;
	  },
	  getTheme: function getTheme() {
	    return this.state.muiTheme.raisedButton;
	  },
	  getStyles: function getStyles() {
	    var _props = this.props;
	    var icon = _props.icon;
	    var labelPosition = _props.labelPosition;
	    var primary = _props.primary;
	    var secondary = _props.secondary;

	    var amount = primary || secondary ? 0.4 : 0.08;
	    var styles = {
	      root: {
	        display: 'inline-block',
	        minWidth: this.props.fullWidth ? '100%' : this.getThemeButton().minWidth,
	        height: this.getThemeButton().height,
	        transition: _transitions2.default.easeOut()
	      },
	      container: {
	        position: 'relative',
	        height: '100%',
	        width: '100%',
	        padding: 0,
	        overflow: 'hidden',
	        borderRadius: 2,
	        transition: _transitions2.default.easeOut(),
	        backgroundColor: this._getBackgroundColor()
	      },
	      label: {
	        position: 'relative',
	        opacity: 1,
	        fontSize: '14px',
	        letterSpacing: 0,
	        textTransform: this.getTheme().textTransform ? this.getTheme().textTransform : this.getThemeButton().textTransform ? this.getThemeButton().textTransform : 'uppercase',
	        fontWeight: _typography2.default.fontWeightMedium,
	        margin: 0,
	        userSelect: 'none',
	        paddingLeft: this.state.muiTheme.rawTheme.spacing.desktopGutterLess,
	        paddingRight: this.state.muiTheme.rawTheme.spacing.desktopGutterLess,
	        lineHeight: this.props.style && this.props.style.height ? this.props.style.height : this.getThemeButton().height + 'px',
	        color: this._getLabelColor()
	      },
	      overlay: {
	        transition: _transitions2.default.easeOut(),
	        top: 0
	      },
	      overlayWhenHovered: {
	        backgroundColor: _colorManipulator2.default.fade(this._getLabelColor(), amount)
	      }
	    };

	    if (icon) {
	      if (labelPosition === 'before') {
	        styles.label.paddingRight = 8;
	      } else {
	        styles.label.paddingLeft = 8;
	      }
	    }

	    return styles;
	  },
	  _handleMouseDown: function _handleMouseDown(e) {
	    //only listen to left clicks
	    if (e.button === 0) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	    }
	    if (this.props.onMouseDown) this.props.onMouseDown(e);
	  },
	  _handleMouseUp: function _handleMouseUp(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onMouseUp) this.props.onMouseUp(e);
	  },
	  _handleMouseLeave: function _handleMouseLeave(e) {
	    if (!this.refs.container.isKeyboardFocused()) this.setState({ zDepth: this.state.initialZDepth, hovered: false });
	    if (this.props.onMouseLeave) this.props.onMouseLeave(e);
	  },
	  _handleMouseEnter: function _handleMouseEnter(e) {
	    if (!this.refs.container.isKeyboardFocused() && !this.state.touch) {
	      this.setState({ hovered: true });
	    }
	    if (this.props.onMouseEnter) this.props.onMouseEnter(e);
	  },
	  _handleTouchStart: function _handleTouchStart(e) {
	    this.setState({
	      touch: true,
	      zDepth: this.state.initialZDepth + 1
	    });
	    if (this.props.onTouchStart) this.props.onTouchStart(e);
	  },
	  _handleTouchEnd: function _handleTouchEnd(e) {
	    this.setState({ zDepth: this.state.initialZDepth });
	    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
	  },
	  _handleKeyboardFocus: function _handleKeyboardFocus(e, keyboardFocused) {
	    if (keyboardFocused && !this.props.disabled) {
	      this.setState({ zDepth: this.state.initialZDepth + 1 });
	      var amount = this.props.primary || this.props.secondary ? 0.4 : 0.08;
	      _reactDom2.default.findDOMNode(this.refs.overlay).style.backgroundColor = _colorManipulator2.default.fade(this.prepareStyles(this.getStyles().label, this.props.labelStyle).color, amount);
	    } else if (!this.state.hovered) {
	      this.setState({ zDepth: this.state.initialZDepth });
	      _reactDom2.default.findDOMNode(this.refs.overlay).style.backgroundColor = 'transparent';
	    }
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var children = _props2.children;
	    var disabled = _props2.disabled;
	    var icon = _props2.icon;
	    var label = _props2.label;
	    var labelPosition = _props2.labelPosition;
	    var labelStyle = _props2.labelStyle;
	    var primary = _props2.primary;
	    var secondary = _props2.secondary;

	    var other = _objectWithoutProperties(_props2, ['children', 'disabled', 'icon', 'label', 'labelPosition', 'labelStyle', 'primary', 'secondary']);

	    var styles = this.getStyles();

	    var labelElement = undefined;
	    if (label) {
	      labelElement = _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(styles.label, labelStyle) },
	        label
	      );
	    }

	    var rippleColor = styles.label.color;
	    var rippleOpacity = !(primary || secondary) ? 0.1 : 0.16;

	    var buttonEventHandlers = disabled ? null : {
	      onMouseDown: this._handleMouseDown,
	      onMouseUp: this._handleMouseUp,
	      onMouseLeave: this._handleMouseLeave,
	      onMouseEnter: this._handleMouseEnter,
	      onTouchStart: this._handleTouchStart,
	      onTouchEnd: this._handleTouchEnd,
	      onKeyboardFocus: this._handleKeyboardFocus
	    };

	    var iconCloned = undefined;

	    if (icon) {
	      iconCloned = _react2.default.cloneElement(icon, {
	        color: styles.label.color,
	        style: {
	          verticalAlign: 'middle',
	          marginLeft: labelPosition === 'before' ? 0 : 12,
	          marginRight: labelPosition === 'before' ? 12 : 0
	        }
	      });
	    }

	    // Place label before or after children.
	    var childrenFragment = labelPosition === 'before' ? {
	      labelElement: labelElement,
	      iconCloned: iconCloned,
	      children: children
	    } : {
	      children: children,
	      iconCloned: iconCloned,
	      labelElement: labelElement
	    };
	    var enhancedButtonChildren = _children2.default.create(childrenFragment);

	    return _react2.default.createElement(
	      _paper2.default,
	      {
	        style: this.mergeStyles(styles.root, this.props.style),
	        zDepth: this.state.zDepth
	      },
	      _react2.default.createElement(
	        _enhancedButton2.default,
	        _extends({}, other, buttonEventHandlers, {
	          ref: 'container',
	          disabled: disabled,
	          style: this.mergeStyles(styles.container),
	          focusRippleColor: rippleColor,
	          touchRippleColor: rippleColor,
	          focusRippleOpacity: rippleOpacity,
	          touchRippleOpacity: rippleOpacity
	        }),
	        _react2.default.createElement(
	          'div',
	          {
	            ref: 'overlay',
	            style: this.prepareStyles(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered)
	          },
	          enhancedButtonChildren
	        )
	      )
	    );
	  }
	});

	exports.default = RaisedButton;
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CardActions = _react2.default.createClass({
	  displayName: 'CardActions',

	  propTypes: {
	    actAsExpander: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    expandable: _react2.default.PropTypes.bool,
	    showExpandableButton: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        padding: 8,
	        position: 'relative'
	      }
	    };
	  },
	  render: function render() {
	    var _this = this;

	    var styles = this.getStyles();

	    var children = _react2.default.Children.map(this.props.children, function (child) {
	      return _react2.default.cloneElement(child, {
	        style: _this.mergeStyles({ marginRight: 8 }, child.props.style)
	      });
	    });

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { style: this.prepareStyles(styles.root, this.props.style) }),
	      children
	    );
	  }
	});

	exports.default = CardActions;
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(95);

	var _styles2 = _interopRequireDefault(_styles);

	var _avatar = __webpack_require__(101);

	var _avatar2 = _interopRequireDefault(_avatar);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CardHeader = _react2.default.createClass({
	  displayName: 'CardHeader',

	  propTypes: {
	    actAsExpander: _react2.default.PropTypes.bool,
	    avatar: _react2.default.PropTypes.node,
	    children: _react2.default.PropTypes.node,
	    expandable: _react2.default.PropTypes.bool,
	    showExpandableButton: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    subtitle: _react2.default.PropTypes.node,
	    subtitleColor: _react2.default.PropTypes.string,
	    subtitleStyle: _react2.default.PropTypes.object,
	    textStyle: _react2.default.PropTypes.object,
	    title: _react2.default.PropTypes.node,
	    titleColor: _react2.default.PropTypes.string,
	    titleStyle: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      titleColor: _styles2.default.Colors.darkBlack,
	      subtitleColor: _styles2.default.Colors.lightBlack,
	      avatar: null
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        height: 72,
	        padding: 16,
	        fontWeight: _styles2.default.Typography.fontWeightMedium,
	        boxSizing: 'border-box',
	        position: 'relative'
	      },
	      text: {
	        display: 'inline-block',
	        verticalAlign: 'top'
	      },
	      avatar: {
	        marginRight: 16
	      },
	      title: {
	        color: this.props.titleColor,
	        display: 'block',
	        fontSize: 15
	      },
	      subtitle: {
	        color: this.props.subtitleColor,
	        display: 'block',
	        fontSize: 14
	      }
	    };
	  },
	  render: function render() {
	    var styles = this.getStyles();
	    var rootStyle = this.mergeStyles(styles.root, this.props.style);
	    var textStyle = this.mergeStyles(styles.text, this.props.textStyle);
	    var titleStyle = this.mergeStyles(styles.title, this.props.titleStyle);
	    var subtitleStyle = this.mergeStyles(styles.subtitle, this.props.subtitleStyle);

	    var avatar = this.props.avatar;
	    if (_react2.default.isValidElement(this.props.avatar)) {
	      var avatarMergedStyle = this.mergeStyles(styles.avatar, avatar.props.style);
	      avatar = _react2.default.cloneElement(avatar, { style: avatarMergedStyle });
	    } else if (avatar !== null) {
	      avatar = _react2.default.createElement(_avatar2.default, { src: this.props.avatar, style: styles.avatar });
	    }

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { style: this.prepareStyles(rootStyle) }),
	      avatar,
	      _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(textStyle) },
	        _react2.default.createElement(
	          'span',
	          { style: this.prepareStyles(titleStyle) },
	          this.props.title
	        ),
	        _react2.default.createElement(
	          'span',
	          { style: this.prepareStyles(subtitleStyle) },
	          this.props.subtitle
	        )
	      ),
	      this.props.children
	    );
	  }
	});

	exports.default = CardHeader;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ZIndex = exports.getMuiTheme = exports.ThemeDecorator = exports.DarkRawTheme = exports.LightRawTheme = exports.lightBaseTheme = exports.Typography = exports.Transitions = exports.ThemeManager = exports.Spacing = exports.Colors = exports.AutoPrefix = undefined;

	var _autoPrefix = __webpack_require__(23);

	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _spacing = __webpack_require__(26);

	var _spacing2 = _interopRequireDefault(_spacing);

	var _themeManager = __webpack_require__(96);

	var _themeManager2 = _interopRequireDefault(_themeManager);

	var _transitions = __webpack_require__(42);

	var _transitions2 = _interopRequireDefault(_transitions);

	var _typography = __webpack_require__(38);

	var _typography2 = _interopRequireDefault(_typography);

	var _lightRawTheme = __webpack_require__(97);

	var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

	var _lightBaseTheme = __webpack_require__(25);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	var _darkRawTheme = __webpack_require__(98);

	var _darkRawTheme2 = _interopRequireDefault(_darkRawTheme);

	var _darkBaseTheme = __webpack_require__(99);

	var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

	var _themeDecorator = __webpack_require__(100);

	var _themeDecorator2 = _interopRequireDefault(_themeDecorator);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _zIndex = __webpack_require__(27);

	var _zIndex2 = _interopRequireDefault(_zIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.AutoPrefix = _autoPrefix2.default;
	exports.Colors = _colors2.default;
	exports.Spacing = _spacing2.default;
	exports.ThemeManager = _themeManager2.default;
	exports.Transitions = _transitions2.default;
	exports.Typography = _typography2.default;
	exports.lightBaseTheme = _lightBaseTheme2.default;
	exports.LightRawTheme = _lightRawTheme2.default;
	exports.DarkRawTheme = _darkRawTheme2.default;
	exports.ThemeDecorator = _themeDecorator2.default;
	exports.getMuiTheme = _getMuiTheme2.default;
	exports.ZIndex = _zIndex2.default;
	exports.default = {
	  AutoPrefix: _autoPrefix2.default,
	  Colors: _colors2.default,
	  Spacing: _spacing2.default,
	  ThemeManager: _themeManager2.default,
	  Transitions: _transitions2.default,
	  Typography: _typography2.default,
	  lightBaseTheme: _lightBaseTheme2.default,
	  LightRawTheme: _lightRawTheme2.default,
	  darkBaseTheme: _darkBaseTheme2.default,
	  DarkRawTheme: _darkRawTheme2.default,
	  ThemeDecorator: _themeDecorator2.default,
	  getMuiTheme: _getMuiTheme2.default,
	  ZIndex: _zIndex2.default
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactAddonsUpdate = __webpack_require__(37);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import deprecatedExport from '../utils/deprecatedExport';

	exports.default = // deprecatedExport(
	{
	  getMuiTheme: _getMuiTheme2.default,
	  modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, spacing) {
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { spacing: { $set: spacing } }));
	  },
	  modifyRawThemePalette: function modifyRawThemePalette(muiTheme, palette) {
	    var newPalette = (0, _lodash2.default)(muiTheme.baseTheme.palette, palette);
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { palette: { $set: newPalette } }));
	  },
	  modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, fontFamily) {
	    return (0, _getMuiTheme2.default)((0, _reactAddonsUpdate2.default)(muiTheme.baseTheme, { fontFamily: { $set: fontFamily } }));
	  }
	}; // ,
	//  'material-ui/lib/styles/theme-manager',
	//  'material-ui/lib/styles/themeManager'
	//);

	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lightBaseTheme = __webpack_require__(25);

	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _lightBaseTheme2.default;

	// import deprecatedExport from '../../utils/deprecatedExport';

	// export default deprecatedExport(
	//   lightBaseTheme,
	//   'material-ui/lib/styles/raw-themes/light-raw-theme',
	//   'material-ui/lib/styles/baseThemes/lightBaseTheme'
	// );

	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _darkBaseTheme = __webpack_require__(99);

	var _darkBaseTheme2 = _interopRequireDefault(_darkBaseTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _darkBaseTheme2.default;

	// import deprecatedExport from '../../utils/deprecatedExport';

	// export default deprecatedExport(
	//   darkBaseTheme,
	//   'material-ui/lib/styles/raw-themes/dark-raw-theme',
	//   'material-ui/lib/styles/baseThemes/darkBaseTheme'
	// );

	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _colorManipulator = __webpack_require__(21);

	var _colorManipulator2 = _interopRequireDefault(_colorManipulator);

	var _spacing = __webpack_require__(26);

	var _spacing2 = _interopRequireDefault(_spacing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors2.default.cyan700,
	    primary2Color: _colors2.default.cyan700,
	    primary3Color: _colors2.default.grey600,
	    accent1Color: _colors2.default.pinkA200,
	    accent2Color: _colors2.default.pinkA400,
	    accent3Color: _colors2.default.pinkA100,
	    textColor: _colors2.default.fullWhite,
	    alternateTextColor: '#303030',
	    canvasColor: '#303030',
	    borderColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.3),
	    disabledColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.3),
	    pickerHeaderColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.12),
	    clockCircleColor: _colorManipulator2.default.fade(_colors2.default.fullWhite, 0.12)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (customTheme) {

	  return function (Component) {

	    return _react2.default.createClass({

	      childContextTypes: {
	        muiTheme: _react2.default.PropTypes.object
	      },

	      getChildContext: function getChildContext() {
	        return {
	          muiTheme: customTheme
	        };
	      },
	      render: function render() {
	        return _react2.default.createElement(Component, this.props);
	      }
	    });
	  };
	};

	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _colors = __webpack_require__(20);

	var _colors2 = _interopRequireDefault(_colors);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Avatar = _react2.default.createClass({
	  displayName: 'Avatar',

	  propTypes: {
	    /**
	     * The backgroundColor of the avatar. Does not apply to image avatars.
	     */
	    backgroundColor: _react2.default.PropTypes.string,

	    /**
	     * Can be used, for instance, to render a letter inside the avatar.
	     */
	    children: _react2.default.PropTypes.node,

	    /**
	     * The css class name of the root `div` or `img` element.
	     */
	    className: _react2.default.PropTypes.string,

	    /**
	     * The icon or letter's color.
	     */
	    color: _react2.default.PropTypes.string,

	    /**
	     * This is the SvgIcon or FontIcon to be used inside the avatar.
	     */
	    icon: _react2.default.PropTypes.element,

	    /**
	     * This is the size of the avatar in pixels.
	     */
	    size: _react2.default.PropTypes.number,

	    /**
	     * If passed in, this component will render an img element. Otherwise, a div will be rendered.
	     */
	    src: _react2.default.PropTypes.string,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      backgroundColor: _colors2.default.grey400,
	      color: _colors2.default.white,
	      size: 40
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  render: function render() {
	    var _props = this.props;
	    var backgroundColor = _props.backgroundColor;
	    var color = _props.color;
	    var icon = _props.icon;
	    var size = _props.size;
	    var src = _props.src;
	    var style = _props.style;
	    var className = _props.className;

	    var other = _objectWithoutProperties(_props, ['backgroundColor', 'color', 'icon', 'size', 'src', 'style', 'className']);

	    var styles = {
	      root: {
	        height: size,
	        width: size,
	        userSelect: 'none',
	        borderRadius: '50%',
	        display: 'inline-block'
	      }
	    };

	    if (src) {
	      var borderColor = this.state.muiTheme.avatar.borderColor;

	      if (borderColor) {
	        styles.root = this.mergeStyles(styles.root, {
	          height: size - 2,
	          width: size - 2,
	          border: 'solid 1px ' + borderColor
	        });
	      }

	      return _react2.default.createElement('img', _extends({}, other, {
	        src: src,
	        style: this.prepareStyles(styles.root, style),
	        className: className
	      }));
	    } else {
	      styles.root = this.mergeStyles(styles.root, {
	        backgroundColor: backgroundColor,
	        textAlign: 'center',
	        lineHeight: size + 'px',
	        fontSize: size / 2 + 4,
	        color: color
	      });

	      var styleIcon = {
	        margin: 8
	      };

	      var iconElement = icon ? _react2.default.cloneElement(icon, {
	        color: color,
	        style: this.mergeStyles(styleIcon, icon.props.style)
	      }) : null;

	      return _react2.default.createElement(
	        'div',
	        _extends({}, other, {
	          style: this.prepareStyles(styles.root, style),
	          className: className
	        }),
	        iconElement,
	        this.props.children
	      );
	    }
	  }
	});

	exports.default = Avatar;
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(95);

	var _styles2 = _interopRequireDefault(_styles);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CardMedia = _react2.default.createClass({
	  displayName: 'CardMedia',

	  propTypes: {
	    actAsExpander: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    expandable: _react2.default.PropTypes.bool,
	    mediaStyle: _react2.default.PropTypes.object,
	    overlay: _react2.default.PropTypes.node,
	    overlayContainerStyle: _react2.default.PropTypes.object,
	    overlayContentStyle: _react2.default.PropTypes.object,
	    overlayStyle: _react2.default.PropTypes.object,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        position: 'relative'
	      },
	      overlayContainer: {
	        position: 'absolute',
	        top: 0,
	        bottom: 0,
	        right: 0,
	        left: 0
	      },
	      overlay: {
	        height: '100%',
	        position: 'relative'
	      },
	      overlayContent: {
	        position: 'absolute',
	        bottom: 0,
	        right: 0,
	        left: 0,
	        paddingTop: 8,
	        background: _styles2.default.Colors.lightBlack
	      },
	      media: {},
	      mediaChild: {
	        verticalAlign: 'top',
	        maxWidth: '100%',
	        minWidth: '100%',
	        width: '100%'
	      }
	    };
	  },
	  render: function render() {
	    var _this = this;

	    var styles = this.getStyles();
	    var rootStyle = this.mergeStyles(styles.root, this.props.style);
	    var mediaStyle = this.mergeStyles(styles.media, this.props.mediaStyle);
	    var overlayContainerStyle = this.mergeStyles(styles.overlayContainer, this.props.overlayContainerStyle);
	    var overlayContentStyle = this.mergeStyles(styles.overlayContent, this.props.overlayContentStyle);
	    var overlayStyle = this.mergeStyles(styles.overlay, this.props.overlayStyle);

	    var children = _react2.default.Children.map(this.props.children, function (child) {
	      return _react2.default.cloneElement(child, { style: _this.prepareStyles(styles.mediaChild, child.props.style) });
	    });

	    var overlayChildren = _react2.default.Children.map(this.props.overlay, function (child) {
	      if (child.type.displayName === 'CardHeader' || child.type.displayName === 'CardTitle') {
	        return _react2.default.cloneElement(child, {
	          titleColor: _styles2.default.Colors.darkWhite,
	          subtitleColor: _styles2.default.Colors.lightWhite
	        });
	      } else if (child.type.displayName === 'CardText') {
	        return _react2.default.cloneElement(child, {
	          color: _styles2.default.Colors.darkWhite
	        });
	      } else {
	        return child;
	      }
	    });

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { style: this.prepareStyles(rootStyle) }),
	      _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(mediaStyle) },
	        children
	      ),
	      this.props.overlay ? _react2.default.createElement(
	        'div',
	        { style: this.prepareStyles(overlayContainerStyle) },
	        _react2.default.createElement(
	          'div',
	          { style: this.prepareStyles(overlayStyle) },
	          _react2.default.createElement(
	            'div',
	            { style: this.prepareStyles(overlayContentStyle) },
	            overlayChildren
	          )
	        )
	      ) : ''
	    );
	  }
	});

	exports.default = CardMedia;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(95);

	var _styles2 = _interopRequireDefault(_styles);

	var _stylePropable = __webpack_require__(35);

	var _stylePropable2 = _interopRequireDefault(_stylePropable);

	var _getMuiTheme = __webpack_require__(2);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CardTitle = _react2.default.createClass({
	  displayName: 'CardTitle',

	  propTypes: {
	    actAsExpander: _react2.default.PropTypes.bool,
	    children: _react2.default.PropTypes.node,
	    expandable: _react2.default.PropTypes.bool,
	    showExpandableButton: _react2.default.PropTypes.bool,

	    /**
	     * Override the inline-styles of the root element.
	     */
	    style: _react2.default.PropTypes.object,
	    subtitle: _react2.default.PropTypes.node,
	    subtitleColor: _react2.default.PropTypes.string,
	    subtitleStyle: _react2.default.PropTypes.object,
	    title: _react2.default.PropTypes.node,
	    titleColor: _react2.default.PropTypes.string,
	    titleStyle: _react2.default.PropTypes.object
	  },

	  contextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2.default.PropTypes.object
	  },

	  mixins: [_stylePropable2.default],

	  getDefaultProps: function getDefaultProps() {
	    return {
	      titleColor: _styles2.default.Colors.darkBlack,
	      subtitleColor: _styles2.default.Colors.lightBlack
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({
	      muiTheme: newMuiTheme
	    });
	  },
	  getStyles: function getStyles() {
	    return {
	      root: {
	        padding: 16,
	        position: 'relative'
	      },
	      title: {
	        fontSize: 24,
	        color: this.props.titleColor,
	        display: 'block',
	        lineHeight: '36px'
	      },
	      subtitle: {
	        fontSize: 14,
	        color: this.props.subtitleColor,
	        display: 'block'
	      }
	    };
	  },
	  render: function render() {
	    var styles = this.getStyles();
	    var rootStyle = this.mergeStyles(styles.root, this.props.style);
	    var titleStyle = this.mergeStyles(styles.title, this.props.titleStyle);
	    var subtitleStyle = this.mergeStyles(styles.subtitle, this.props.subtitleStyle);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.props, { style: this.prepareStyles(rootStyle) }),
	      _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(titleStyle) },
	        this.props.title
	      ),
	      _react2.default.createElement(
	        'span',
	        { style: this.prepareStyles(subtitleStyle) },
	        this.props.subtitle
	      ),
	      this.props.children
	    );
	  }
	});

	exports.default = CardTitle;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _paper = __webpack_require__(62);

	var _paper2 = _interopRequireDefault(_paper);

	var _cardTitle = __webpack_require__(103);

	var _cardTitle2 = _interopRequireDefault(_cardTitle);

	var _list = __webpack_require__(76);

	var _list2 = _interopRequireDefault(_list);

	var _listItem = __webpack_require__(85);

	var _listItem2 = _interopRequireDefault(_listItem);

	var _searchResult = __webpack_require__(105);

	var _searchResult2 = _interopRequireDefault(_searchResult);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchResults = function (_Component) {
	  _inherits(SearchResults, _Component);

	  function SearchResults(props) {
	    _classCallCheck(this, SearchResults);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchResults).call(this, props));
	  }

	  _createClass(SearchResults, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'search-results', className: 'container-fluid' },
	        _react2.default.createElement(
	          _list2.default,
	          null,
	          this.props.results.map(function (result) {
	            return _react2.default.createElement(
	              _listItem2.default,
	              { disabled: true },
	              _react2.default.createElement(_searchResult2.default, { key: result.id, result: result })
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return SearchResults;
	}(_react.Component);

	exports.default = SearchResults;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _divider = __webpack_require__(89);

	var _divider2 = _interopRequireDefault(_divider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  siteName: {
	    marginBottom: '5px',
	    color: '#9E9E9E',
	    fontSize: '13px'
	  },
	  showMore: {
	    marginTop: '10px',
	    textAlign: 'right',
	    fontSize: '13px'
	  }
	};

	var SearchResult = function (_Component) {
	  _inherits(SearchResult, _Component);

	  function SearchResult(props) {
	    _classCallCheck(this, SearchResult);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchResult).call(this, props));
	  }

	  _createClass(SearchResult, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'search-result' },
	        _react2.default.createElement(
	          'div',
	          { className: 'search-result-site', style: styles.siteName },
	          this.props.result.site
	        ),
	        _react2.default.createElement(_divider2.default, null),
	        this.props.result.body,
	        _react2.default.createElement(
	          'div',
	          { style: styles.showMore },
	          'Show full content'
	        )
	      );
	    }
	  }]);

	  return SearchResult;
	}(_react.Component);

	exports.default = SearchResult;

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SHOW_SEARCH_RESULTS = exports.SHOW_SEARCH_AUTOCOMPLETE_RESULTS = undefined;
	exports.fetchAutocompleteResults = fetchAutocompleteResults;
	exports.showAutocompleteResults = showAutocompleteResults;
	exports.search = search;
	exports.showSearchResults = showSearchResults;

	var _isomorphicFetch = __webpack_require__(109);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SHOW_SEARCH_AUTOCOMPLETE_RESULTS = exports.SHOW_SEARCH_AUTOCOMPLETE_RESULTS = 'show-search-autocomplete-results';
	var SHOW_SEARCH_RESULTS = exports.SHOW_SEARCH_RESULTS = 'show-search-results';

	function fetchAutocompleteResults(input) {
	  return function (dispatch) {
	    return (0, _isomorphicFetch2.default)("/autocomplete?input=" + input).then(function (res) {
	      return res.json();
	    }).then(function (autocomplete) {
	      dispatch(showAutocompleteResults(autocomplete));
	    });
	  };
	}

	function showAutocompleteResults(results) {
	  return { type: SHOW_SEARCH_AUTOCOMPLETE_RESULTS, results: results };
	}

	function search(query) {
	  return function (dispatch) {
	    return (0, _isomorphicFetch2.default)("/search?query=" + query).then(function (res) {
	      return res.json();
	    }).then(function (results) {
	      return dispatch(showSearchResults(results));
	    });
	  };
	}

	function showSearchResults(results) {
	  return { type: SHOW_SEARCH_RESULTS, results: results };
	}

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(111);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(113)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(112)();
	// imports


	// module
	exports.push([module.id, "html {\n  background-color: #f2f2f2;\n  font-family: Helvetica, Arial, sans-serif;\n}\n#search-box {\n  margin: 30px auto 0 auto;\n  max-width: 600px;\n  padding: 20px 30px;\n}\n#search-results {\n  margin: 1px auto 1px auto;\n  max-width: 600px;\n  padding: 2px 30px;\n}\n#search-input {\n  padding: 10px;\n  margin: auto;\n  width: 50%;\n}\n#search-result-site {\n  font-size: 5px;\n  font-color: red;\n}\n#search-button {\n  margin: 5px auto;\n  text-align: right;\n  position: relative;\n}\n", ""]);

	// exports


/***/ },
/* 112 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);