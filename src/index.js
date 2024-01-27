import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';

Date.prototype.toTemporalInstant = toTemporalInstant;
globalThis.Temporal = Temporal;

export default {
	async fetch() {
		return new Response(`Hello World! ${Temporal.Now.plainDateTimeISO()}`);
	},
};
