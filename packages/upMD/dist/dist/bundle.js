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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var index_1 = __webpack_require__(/*! ./vDom/index */ "./src/vDom/index.ts");
new index_1["default"]().send('show');


/***/ }),

/***/ "./src/vDom/index.ts":
/*!***************************!*\
  !*** ./src/vDom/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msgbox_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'msgbox'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var Shelf = /** @class */ (function () {
    function Shelf(event, method) {
        this.mail = msgbox_1.Mailbox.create(msgbox_1.Msgbox.create().regist(Object.assign({}, event)), msgbox_1.Msgbox.create().regist(Object.assign({}, method)));
    }
    Shelf.prototype.send = function (name) {
        return this.mail.send(name);
    };
    Shelf.prototype.listen = function (name, fn) {
        this.mail.listen(name, fn);
        return this;
    };
    Shelf.prototype.emit = function (name) {
        return this.mail.emit(name);
    };
    Shelf.prototype.regist = function (name, fn) {
        this.mail.regist(name, fn);
        return this;
    };
    return Shelf;
}());
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super.call(this, {
            hide: function () { }
        }, {
            show: function () { }
        }) || this;
        var dom = document.createElement('div');
        document.body.appendChild(dom);
        Object.assign(dom.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(0,0,0,0.2)',
            display: 'none'
        });
        dom.innerHTML = "\n            <div style=\"position:absolute;height:600px;width:800px;top:50%;left:50%;margin-top:-300px;margin-left:-400px;background:red\">\n            \n            </div>\n        ";
        _this.regist('show', function (title, url) {
            dom.style.display = 'block';
        });
        return _this;
    }
    return Modal;
}(Shelf));
exports["default"] = Modal;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy92RG9tL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSw2RUFBZ0M7QUFHaEMsSUFBSSxrQkFBSyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QixxS0FBa0Q7QUFFakQ7SUFJRyxlQUFZLEtBQXNCLEVBQUUsTUFBd0I7UUFFeEQsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBTyxDQUFDLE1BQU0sQ0FDdEIsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUNoRCxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQ3BEO0lBRUwsQ0FBQztJQUVELG9CQUFJLEdBQUosVUFBNkIsSUFBTztRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUE4QixJQUFPLEVBQUUsRUFBWTtRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSTtJQUNmLENBQUM7SUFFUyxvQkFBSSxHQUFkLFVBQXNDLElBQU87UUFDekMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVTLHNCQUFNLEdBQWhCLFVBQXlDLElBQU8sRUFBRSxFQUFhO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7UUFDMUIsT0FBTyxJQUFJO0lBQ2YsQ0FBQztJQUVMLFlBQUM7QUFBRCxDQUFDO0FBT0Q7SUFBbUMseUJBSWpDO0lBRUU7UUFBQSxZQUVJLGtCQUFNO1lBQ0YsSUFBSSxFQUFFLGNBQVEsQ0FBQztTQUNsQixFQUFFO1lBQ0MsSUFBSSxFQUFFLGNBQVEsQ0FBQztTQUNsQixDQUFDLFNBeUJMO1FBdkJHLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBRXZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztRQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDckIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLEdBQUc7WUFDUixJQUFJLEVBQUUsR0FBRztZQUNULEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFFRixHQUFHLENBQUMsU0FBUyxHQUFHLDJMQUlmO1FBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUMzQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQy9CLENBQUMsQ0FBQzs7SUFFTixDQUFDO0lBRUwsWUFBQztBQUFELENBQUMsQ0F2Q2tDLEtBQUssR0F1Q3ZDIiwiZmlsZSI6Ii4vZGlzdC9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL3ZEb20vaW5kZXgnXHJcblxyXG5cclxubmV3IE1vZGFsKCkuc2VuZCgnc2hvdycpIiwiaW1wb3J0IHsgTXNnYm94LCBNYWlsYm94LCBGdW5jVHlwZSB9IGZyb20gJ21zZ2JveCdcclxuXHJcbiBhYnN0cmFjdCBjbGFzcyBTaGVsZjxFdmVudCwgTWV0aG9kPiB7XHJcblxyXG4gICAgcHJvdGVjdGVkIG1haWw6IE1haWxib3g8RXZlbnQsIE1ldGhvZD5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihldmVudDogRnVuY1R5cGU8RXZlbnQ+LCBtZXRob2Q6IEZ1bmNUeXBlPE1ldGhvZD4pIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYWlsID0gTWFpbGJveC5jcmVhdGUoXHJcbiAgICAgICAgICAgIE1zZ2JveC5jcmVhdGUoKS5yZWdpc3QoT2JqZWN0LmFzc2lnbih7fSwgZXZlbnQpKSxcclxuICAgICAgICAgICAgTXNnYm94LmNyZWF0ZSgpLnJlZ2lzdChPYmplY3QuYXNzaWduKHt9LCBtZXRob2QpKVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZDxLIGV4dGVuZHMga2V5b2YgTWV0aG9kPihuYW1lOiBLKTogTWV0aG9kW0tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWlsLnNlbmQobmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW48SyBleHRlbmRzIGtleW9mIEV2ZW50PihuYW1lOiBLLCBmbjogRXZlbnRbS10pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLm1haWwubGlzdGVuKG5hbWUsIGZuKVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGVtaXQ8SyBleHRlbmRzIGtleW9mIEV2ZW50PihuYW1lOiBLKTogRXZlbnRbS10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haWwuZW1pdChuYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWdpc3Q8SyBleHRlbmRzIGtleW9mIE1ldGhvZD4obmFtZTogSywgZm46IE1ldGhvZFtLXSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMubWFpbC5yZWdpc3QobmFtZSwgZm4pXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmludGVyZmFjZSB0b0RPTSB7XHJcbiAgICByZW5kZXI6ICgpID0+IEhUTUxFbGVtZW50XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFNoZWxmPHtcclxuICAgIGhpZGU6ICgpID0+IHZvaWRcclxufSwge1xyXG4gICAgc2hvdzogKHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKSA9PiB2b2lkXHJcbn0+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBoaWRlOiAoKSA9PiB7IH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNob3c6ICgpID0+IHsgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvbSlcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkb20uc3R5bGUsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnMCcsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzAnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwLjIpJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9tLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2hlaWdodDo2MDBweDt3aWR0aDo4MDBweDt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbi10b3A6LTMwMHB4O21hcmdpbi1sZWZ0Oi00MDBweDtiYWNrZ3JvdW5kOnJlZFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIHRoaXMucmVnaXN0KCdzaG93JywgKHRpdGxlLCB1cmwpID0+IHtcclxuICAgICAgICAgICAgZG9tLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=