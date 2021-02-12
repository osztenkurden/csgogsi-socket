import * as io from 'socket.io-client';
import CSGOGSI, { CSGORaw } from 'csgogsi';
import assert from 'assert';

export default function gsisocket(address: string, eventName: string): { GSI: CSGOGSI; socket: SocketIOClient.Socket } {
	assert(address && typeof address === 'string');
	assert(eventName && typeof eventName === 'string');

	const GSI = new CSGOGSI();
	const socket = io.connect(address);
	socket.on(eventName, (data: CSGORaw) => {
		GSI.digest(data);
	});
	return { GSI, socket };
}

export * from 'csgogsi';
