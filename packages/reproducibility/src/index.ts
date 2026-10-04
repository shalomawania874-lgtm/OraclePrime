import {createHash} from 'node:crypto';
export function contentHash(value:unknown){return createHash('sha256').update(JSON.stringify(value)).digest('hex');}
export interface Experiment{id:string;codeHash:string;dataHash:string;modelHash:string;params:Record<string,unknown>;createdAt:number;}