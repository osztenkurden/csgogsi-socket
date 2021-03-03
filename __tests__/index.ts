import { CSGOGSI } from 'csgogsi';
import { Server } from 'socket.io';
import http from 'http';
import { GSISocket } from './../tsc';
import { createGSIPacket } from './data';

let io: Server;
let httpServer: http.Server;

const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

beforeAll(done => {
	httpServer = http.createServer();
	io = new Server(httpServer);

	httpServer.listen(3000, done);
});

afterAll(done => {
	io.close();
	httpServer.close();
	done();
});

test('constructor > creates socket', () => {
	const { socket } = GSISocket('http://localhost:1339/', 'update');

	socket?.close();
	expect(socket).toBeDefined();
});

test('constructor > connects to socket.io', async () => {
	const callback = jest.fn(() => {});
	const { socket } = GSISocket('http://localhost:3000/', 'update');

	socket.on('connect', callback);

	await wait(150);

	expect(callback.mock.calls.length).toBe(1);
	expect(socket.connected).toBe(true);

	socket.disconnect();
});

test('constructor > gets data incoming', async () => {
	const GSICallback = jest.fn(() => {});
	const callback = () => {
		io.emit('update', createGSIPacket());
	};
	const { GSI, socket } = GSISocket('http://localhost:3000/', 'update');

	GSI.on('data', GSICallback);

	socket.on('connect', callback);

	// Hubercik kocha Beatkę <3 <3 <3;

	await wait(150);

	expect(GSICallback.mock.calls.length).toBe(1);

	socket.disconnect();
});

test('constructor > creates CSGOGSI object', () => {
	const { GSI, socket } = GSISocket('http://localhost:1339/', 'update');

	socket?.close();

	expect(GSI).toBeInstanceOf(CSGOGSI);
});

test('constructor > throws on missing address', () => {
	const createWIthNoAddress = () => {
		GSISocket('', 'update');
	};
	expect(createWIthNoAddress).toThrow();
});

test('constructor > throws on non-string address #1', () => {
	const createWIthNoAddress = () => {
		const address: any = 123;
		GSISocket(address, 'update');
	};
	expect(createWIthNoAddress).toThrow();
});

test('constructor > throws on non-string address #2', () => {
	const createWIthNoAddress = () => {
		const address: any = [];
		GSISocket(address, 'update');
	};
	expect(createWIthNoAddress).toThrow();
});

test('constructor > throws on non-string address #3', () => {
	const createWIthNoAddress = () => {
		const address: any = {};
		GSISocket(address, 'update');
	};
	expect(createWIthNoAddress).toThrow();
});

test('constructor > throws on non-string address #4', () => {
	const createWIthNoAddress = () => {
		const address: any = null;
		GSISocket(address, 'update');
	};
	expect(createWIthNoAddress).toThrow();
});

test('constructor > throws on non-string address #5', () => {
	const createWIthNoAddress = () => {
		const address: any = undefined;
		GSISocket(address, 'update');
	};
	expect(createWIthNoAddress).toThrow();
});
