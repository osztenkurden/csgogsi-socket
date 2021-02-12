import CSGOGSI from 'csgogsi';
import { Socket } from 'socket.io-client';
import GSISocket from './../tsc';

test("constructor > creates socket", () => {
    const { socket } = GSISocket("http://localhost:1339/", "update");

    socket?.close();

    expect(socket).toBeInstanceOf(Socket);
});

test("constructor > creates CSGOGSI object", () => {
    const { GSI, socket } = GSISocket("http://localhost:1339/", "update");

    socket?.close();

    expect(GSI).toBeInstanceOf(CSGOGSI);
});

test("constructor > throws on missing address", () => {
    const createWIthNoAddress = () => {
        GSISocket('', 'update');
    }
    expect(createWIthNoAddress).toThrow();
});

test("constructor > throws on non-string address #1", () => {
    const createWIthNoAddress = () => {
        const address: any = 123;
        GSISocket(address, 'update');
    }
    expect(createWIthNoAddress).toThrow();
});

test("constructor > throws on non-string address #2", () => {
    const createWIthNoAddress = () => {
        const address: any = [];
        GSISocket(address, 'update');
    }
    expect(createWIthNoAddress).toThrow();
});

test("constructor > throws on non-string address #3", () => {
    const createWIthNoAddress = () => {
        const address: any = {};
        GSISocket(address, 'update');
    }
    expect(createWIthNoAddress).toThrow();
});

test("constructor > throws on non-string address #4", () => {
    const createWIthNoAddress = () => {
        const address: any = null;
        GSISocket(address, 'update');
    }
    expect(createWIthNoAddress).toThrow();
});

test("constructor > throws on non-string address #5", () => {
    const createWIthNoAddress = () => {
        const address: any = undefined;
        GSISocket(address, 'update');
    }
    expect(createWIthNoAddress).toThrow();
});