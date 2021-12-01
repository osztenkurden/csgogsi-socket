import { CSGOGSI } from 'csgogsi';
declare const GSISocket: (
	address: string,
	eventName: string
) => {
	GSI: CSGOGSI;
	socket: import('socket.io-client').Socket<
		import('socket.io-client/build/typed-events').DefaultEventsMap,
		import('socket.io-client/build/typed-events').DefaultEventsMap
	>;
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
	parseTeam
} from 'csgogsi';
