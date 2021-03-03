"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSGOGSI = void 0;
const socket_io_client_1 = require("socket.io-client");
const csgogsi_1 = require("csgogsi");
const assert_1 = __importDefault(require("assert"));
const GSISocket = (address, eventName) => {
    assert_1.default(address && typeof address === 'string');
    assert_1.default(eventName && typeof eventName === 'string');
    const GSI = new csgogsi_1.CSGOGSI();
    const socket = socket_io_client_1.io(address);
    socket.on(eventName, (data) => {
        GSI.digest(data);
    });
    return { GSI, socket };
};
exports.default = GSISocket;
var csgogsi_2 = require("csgogsi");
Object.defineProperty(exports, "CSGOGSI", { enumerable: true, get: function () { return csgogsi_2.CSGOGSI; } });
