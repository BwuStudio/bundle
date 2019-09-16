'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Option = (function () {
    function Option() {
    }
    return Option;
}());
var SomeTag = Symbol("SOME");
var Some = (function (_super) {
    __extends(Some, _super);
    function Some(v) {
        var _this = _super.call(this) || this;
        _this._tag = SomeTag;
        _this.value = v;
        return _this;
    }
    Some.create = function (a) {
        return new Some(a);
    };
    Some.prototype.exists = function (p) { return p(this.value); };
    Some.prototype.filter = function (p) { return p(this.value) ? this : None.create(); };
    Some.prototype.filterNot = function (p) { return p(this.value) ? None.create() : this; };
    Some.prototype.flatMap = function (f) { return f(this.value); };
    Some.prototype.fold = function (ifEmpty) {
        var _this = this;
        return function (f) { return f(_this.value); };
    };
    Some.prototype.forAll = function (p) { return p(this.value); };
    Some.prototype.forEach = function (f) { f(this.value); };
    Some.prototype.getOrElse = function (defaultValue) { return this.value; };
    Some.prototype.map = function (f) { return Some.create(f(this.value)); };
    Some.prototype.orElse = function (alternative) { return this; };
    return Some;
}(Option));
var NoneTag = Symbol("None");
var None = (function (_super) {
    __extends(None, _super);
    function None() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tag = NoneTag;
        return _this;
    }
    None.create = function () { return new None(); };
    None.prototype.exists = function (p) { return false; };
    None.prototype.filter = function (p) { return this; };
    None.prototype.filterNot = function (p) { return this; };
    None.prototype.flatMap = function (f) { return None.create(); };
    None.prototype.fold = function (ifEmpty) { return function () { return ifEmpty(); }; };
    None.prototype.forAll = function (p) { return true; };
    None.prototype.forEach = function (f) { };
    None.prototype.getOrElse = function (defaultValue) { return typeof defaultValue === 'function' ? defaultValue() : defaultValue; };
    None.prototype.map = function (f) { return None.create(); };
    None.prototype.orElse = function (alternative) { return alternative(); };
    return None;
}(Option));

exports.None = None;
exports.Option = Option;
exports.Some = Some;
