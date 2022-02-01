import { io } from 'socket.io-client';
import { CSGOGSI } from 'csgogsi';
import assert from 'assert';
const GSISocket = (address, eventName) => {
    assert(address && typeof address === 'string');
    assert(eventName && typeof eventName === 'string');
    const GSI = new CSGOGSI();
    const socket = io(address);
    socket.on(eventName, (data, damage) => {
        if (damage) {
            GSI.damage = damage;
        }
        GSI.digest(data);
    });
    return { GSI, socket };
};
export { GSISocket };
export { CSGOGSI, mapSteamIDToPlayer, parseTeam } from 'csgogsi';
