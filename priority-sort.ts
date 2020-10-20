import * as dot from 'dot-object'
const compare =  (...args)=> {
    let properies = args[0]
    let first = args[1];
    let second = args[2];
    let ret = 1;        
    for(let i of properies){
        let a = dot.pick(i, first);
        let b = dot.pick(i, second);
        if(a === b){
            continue;
        } else if (a > b) {
            ret = 1;
        } else {
            ret = -1;
        }
        break;
    }    
    return ret;
}

export const prioritySort = (properties:string[]) =>{
    return compare.bind(null,properties)
}