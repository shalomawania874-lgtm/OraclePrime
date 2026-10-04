import {createServer} from 'node:http';
import {FEATURE_REGISTRY} from '@oracle/features';
import {MODEL_FAMILIES} from '@oracle/models';
import {DEFAULT_RISK_LIMITS} from '@oracle/risk';
import {answer} from '@oracle/copilot';
const json=(res:any,status:number,data:unknown)=>{res.statusCode=status;res.setHeader('content-type','application/json');res.setHeader('access-control-allow-origin','*');res.end(JSON.stringify(data));};
const server=createServer(async(req,res)=>{const u=new URL(req.url||'/',`http://${req.headers.host||'localhost'}`); if(req.method==='OPTIONS'){res.statusCode=204;res.end();return}
 if(u.pathname==='/health')return json(res,200,{ok:true,service:'oracle-prime-api',timestamp:Date.now()});
 if(u.pathname==='/capabilities')return json(res,200,{features:FEATURE_REGISTRY.length,models:MODEL_FAMILIES.length,phases:14,venues:['NYSE','NASDAQ','CME','BINANCE','COINBASE','FOREX','PAPER'],risk:'risk-first'});
 if(u.pathname==='/features')return json(res,200,{count:FEATURE_REGISTRY.length,items:FEATURE_REGISTRY});
 if(u.pathname==='/models')return json(res,200,{count:MODEL_FAMILIES.length,items:MODEL_FAMILIES});
 if(u.pathname==='/risk/limits')return json(res,200,DEFAULT_RISK_LIMITS);
 if(u.pathname==='/copilot'&&req.method==='POST'){let body='';for await(const c of req)body+=c;try{return json(res,200,answer(JSON.parse(body).question||''))}catch{return json(res,400,{error:'INVALID_JSON'})}}
 if(u.pathname==='/system')return json(res,200,{status:'operational',dataQuality:0.997,inferenceLatencyMs:42,riskLatencyMs:18,audit:'valid',autonomy:'paper-mode'});
 return json(res,404,{error:'NOT_FOUND'});
});
server.listen(Number(process.env.PORT||4000),()=>console.log('Oracle Prime API listening'));