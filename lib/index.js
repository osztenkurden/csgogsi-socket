"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
const csgogsi_1 = __importDefault(require("csgogsi"));
const assert_1 = __importDefault(require("assert"));
function gsisocket(address, eventName) {
    assert_1.default(address && typeof address === 'string');
    assert_1.default(eventName && typeof eventName === 'string');
    const GSI = new csgogsi_1.default();
    const socket = socket_io_client_1.io(address);
    socket.on(eventName, (data) => {
        GSI.digest(data);
    });
    return { GSI, socket };
}
exports.default = gsisocket;
