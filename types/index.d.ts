import { Socket } from 'socket.io-client';
import CSGOGSI from 'csgogsi';
export default function gsisocket(
	address: string,
	eventName: string
): {
	GSI: CSGOGSI;
	socket: Socket;
};
export {
	CSGO,
	CSGORaw,
	Side,
	RoundOutcome,
	WeaponRaw,
	TeamRaw,
	PlayerRaw,
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
	PlayerExtension
} from 'csgogsi';
