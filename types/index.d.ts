import { CSGOGSI } from 'csgogsi';
declare const GSISocket: (
	address: string,
	eventName: string
) => {
	GSI: CSGOGSI;
	socket: import('socket.io-client').Socket;
};
export default GSISocket;
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
