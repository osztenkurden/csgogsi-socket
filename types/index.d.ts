/// <reference types="socket.io-client" />
import CSGOGSI from 'csgogsi';
export default function gsisocket(ip: string, eventName: string): {
    GSI: CSGOGSI;
    socket: SocketIOClient.Socket;
};
export * from 'csgogsi';
