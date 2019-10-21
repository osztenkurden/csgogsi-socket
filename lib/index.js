"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var socket_io_client_1 = require("socket.io-client");
var csgogsi_1 = require("csgogsi");
function gsisocket(ip, eventName) {
    var GSI = new csgogsi_1["default"]();
    var socket = socket_io_client_1["default"].connect(ip);
    socket.on(eventName, function (data) {
        GSI.digest(data);
    });
    return GSI;
}
exports["default"] = gsisocket;
__export(require("csgogsi"));
