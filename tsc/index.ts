import { io } from 'socket.io-client';
import { CSGOGSI, CSGORaw } from 'csgogsi';
import assert from 'assert';

const GSISocket = (address: string, eventName: string) => {
	assert(address && typeof address === 'string');
	assert(eventName && typeof eventName === 'string');

	const GSI = new CSGOGSI();
	const socket = io(address);
	socket.on(eventName, (data: CSGORaw) => {
		GSI.digest(data);
	});
	return { GSI, socket };
};

export { GSISocket };

export {
	CSGO,
	CSGORaw,
	Side,
	CSGOGSI,
	RoundOutcome,
	WeaponType,
	WeaponRaw,
	TeamRaw,
	PlayerRaw,
	PlayerObservedRaw,
	PlayersRaw,
	Provider,
	MapRaw,
	RoundRaw,
	BombRaw,
	PhaseRaw,
	Events,
	Team,
	Player,
	Bomb,
	Map,
	Round,
	Score,
	KillEvent,
	RawKill,
	TeamExtension,
	PlayerExtension,
	Orientation
} from 'csgogsi';
