import { existsSync, readdirSync, statSync } from 'node:fs'
const budgets={vue:180_000,elements:600_000}
for(const [pkg,budget] of Object.entries(budgets)){
 const dir=`packages/${pkg}/dist`;if(!existsSync(dir))throw new Error(`${dir} is missing`)
 const total=readdirSync(dir).filter(f=>/\.(js|cjs)$/.test(f)).reduce((sum,f)=>sum+statSync(`${dir}/${f}`).size,0)
 if(total>budget)throw new Error(`${pkg} JavaScript output is ${total} bytes; budget is ${budget}`)
 console.log(`${pkg}: ${total} / ${budget} bytes`)
}
