import * as io from 'socket.io-client';
import CSGOGSI, { CSGORaw } from 'csgogsi';

export default function gsisocket(ip: string, eventName: string): { GSI: CSGOGSI, socket: SocketIOClient.Socket } {
    const GSI = new CSGOGSI();
    const socket = io.connect(ip);
    socket.on(eventName, (data: CSGORaw) => {
        GSI.digest(data);
    });
    return { GSI, socket};
}

export * from 'csgogsi';