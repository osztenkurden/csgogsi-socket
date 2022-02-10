"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTeam = exports.mapSteamIDToPlayer = exports.CSGOGSI = exports.GSISocket = void 0;
const socket_io_client_1 = require("socket.io-client");
const csgogsi_1 = require("csgogsi");
const GSISocket = (address, eventName) => {
    if (!address || typeof address !== 'string')
        throw new Error('Missing address');
    if (!eventName || typeof eventName !== 'string')
        throw new Error('Missing target event name');
    const GSI = new csgogsi_1.CSGOGSI();
    const socket = socket_io_client_1.io(address);
    socket.on(eventName, (data, damage) => {
        if (damage) {
            GSI.damage = damage;
        }
        GSI.digest(data);
    });
    return { GSI, socket };
};
exports.GSISocket = GSISocket;
var csgogsi_2 = require("csgogsi");
Object.defineProperty(exports, "CSGOGSI", { enumerable: true, get: function () { return csgogsi_2.CSGOGSI; } });
Object.defineProperty(exports, "mapSteamIDToPlayer", { enumerable: true, get: function () { return csgogsi_2.mapSteamIDToPlayer; } });
Object.defineProperty(exports, "parseTeam", { enumerable: true, get: function () { return csgogsi_2.parseTeam; } });
