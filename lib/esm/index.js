import { io } from 'socket.io-client';
import { CSGOGSI } from 'csgogsi';
import assert from 'assert';
const GSISocket = (address, eventName) => {
    assert(address && typeof address === 'string');
    assert(eventName && typeof eventName === 'string');
    const GSI = new CSGOGSI();
    const socket = io(address);
    socket.on(eventName, (data) => {
        GSI.digest(data);
    });
    return { GSI, socket };
};
export default GSISocket;
export { CSGOGSI } from 'csgogsi';
