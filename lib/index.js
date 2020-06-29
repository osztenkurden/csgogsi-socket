"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
var io = require("socket.io-client");
var csgogsi_1 = require("csgogsi");
function gsisocket(ip, eventName) {
    var GSI = new csgogsi_1["default"]();
    var socket = io.connect(ip);
    socket.on(eventName, function (data) {
        GSI.digest(data);
    });
    return { GSI: GSI, socket: socket };
}
exports["default"] = gsisocket;
__exportStar(require("csgogsi"), exports);
