'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MsgBox = (function () {
    function MsgBox(m) {
        this.box = m;
    }
    MsgBox.prototype.regist = function (_) {
        return new MsgBox(Object.assign(_, this.box));
    };
    MsgBox.prototype.define = function (name, fn) {
        this.box[name] = fn;
        return this;
    };
    MsgBox.prototype.emit = function (name) {
        return this.box[name];
    };
    MsgBox.create = function () {
        return new this({});
    };
    return MsgBox;
}());

var MailBox = (function () {
    function MailBox() {
    }
    MailBox.prototype.listen = function (name, fn) {
        this.home.define(name, fn);
        return this;
    };
    MailBox.prototype.send = function (name) {
        return this.target.emit(name);
    };
    MailBox.create = function (home, target) {
        var res = new MailBox();
        res.target = target;
        res.home = home;
        return res;
    };
    return MailBox;
}());

exports.Mailbox = MailBox;
exports.Msgbox = MsgBox;
