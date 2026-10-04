export type Side='BUY'|'SELL';
export type OrderType='MARKET'|'LIMIT'|'STOP'|'STOP_LIMIT';
export type Venue='NYSE'|'NASDAQ'|'CME'|'BINANCE'|'COINBASE'|'FOREX'|'PAPER';
export interface OrderIntent{id:string;tenantId:string;symbol:string;venue:Venue;side:Side;type:OrderType;quantity:number;limitPrice?:number;stopPrice?:number;strategyId:string;signalId:string;createdAt:number;idempotencyKey:string;}
export interface MarketTick{symbol:string;venue:Venue;ts:number;bid:number;ask:number;last:number;bidSize:number;askSize:number;volume:number;}
export interface RiskContext{equity:number;cash:number;grossExposure:number;netExposure:number;dailyPnl:number;drawdown:number;symbolExposure:number;sectorExposure:number;leverage:number;marketDataTs:number;now:number;}
export interface RiskDecision{approved:boolean;reasons:string[];adjustedQuantity:number;limits:Record<string,number>;decisionId:string;}
export interface PortfolioSnapshot{ts:number;equity:number;cash:number;positions:Record<string,number>;prices:Record<string,number>;}
export interface Signal{ id:string;symbol:string;ts:number;direction:number;confidence:number;uncertainty:number;modelId:string;features:Record<string,number>; }