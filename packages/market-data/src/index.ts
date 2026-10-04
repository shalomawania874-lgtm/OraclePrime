import type {MarketTick} from '@oracle/contracts';
export interface Quality{score:number;stale:boolean;crossed:boolean;missing:boolean;}
export function normalizeTick(t:MarketTick):MarketTick{if(t.bid<0||t.ask<0||t.last<0)throw new Error('INVALID_PRICE');return {...t,bid:Number(t.bid),ask:Number(t.ask),last:Number(t.last)};}
export function quality(t:MarketTick,now:number,maxAgeMs=5000):Quality{const stale=now-t.ts>maxAgeMs;const crossed=t.bid>t.ask;const missing=[t.bid,t.ask,t.last,t.bidSize,t.askSize].some(x=>!Number.isFinite(x));return{score:stale||crossed||missing?0:1,stale,crossed,missing};}
export class ReplayFeed{constructor(private readonly ticks:readonly MarketTick[]){} replay(from=0,to=Infinity){return this.ticks.filter(t=>t.ts>=from&&t.ts<=to).sort((a,b)=>a.ts-b.ts);}}