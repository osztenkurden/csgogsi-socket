import { io } from 'socket.io-client';
import { CSGOGSI, CSGORaw, RoundDamage } from 'csgogsi';

const GSISocket = (address: string, eventName: string) => {
	if (!address || typeof address !== 'string') throw new Error('Missing address');
	if (!eventName || typeof eventName !== 'string') throw new Error('Missing target event name');

	const GSI = new CSGOGSI();
	const socket = io(address);
	socket.on(eventName, (data: CSGORaw, damage?: RoundDamage[]) => {
		if (damage) {
			GSI.damage = damage;
		}
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
	Observer,
	RawHurt,
	WeaponRaw,
	TeamRaw,
	PlayerRaw,
	PlayerObservedRaw,
	PlayersRaw,
	Provider,
	HurtEvent,
	RoundWins,
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
	RoundInfo,
	PlayerExtension,
	Orientation,
	mapSteamIDToPlayer,
	parseTeam,
	RoundDamage
} from 'csgogsi';
