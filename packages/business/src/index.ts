export type Plan='FREE'|'PRO'|'INSTITUTIONAL';
export interface Tenant{id:string;name:string;plan:Plan;createdAt:number;}
export const PLAN_LIMITS:Record<Plan,{users:number;requestsPerMinute:number}>={FREE:{users:1,requestsPerMinute:30},PRO:{users:10,requestsPerMinute:300},INSTITUTIONAL:{users:1000,requestsPerMinute:10000}};