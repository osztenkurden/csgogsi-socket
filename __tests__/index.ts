import { Socket } from 'socket.io-client';
import GSISocket from './../tsc';

test("creates socket", () => {
    const { GSI, socket } = GSISocket("http://localhost:1339/", "update");

    socket?.close();

    expect(socket).toBeInstanceOf(Socket);
});
