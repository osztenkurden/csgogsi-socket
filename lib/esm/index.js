import { io } from 'socket.io-client';
import { CSGOGSI } from 'csgogsi';
const GSISocket = (address, eventName) => {
    if (!address || typeof address !== 'string')
        throw new Error('Missing address');
    if (!eventName || typeof eventName !== 'string')
        throw new Error('Missing target event name');
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
