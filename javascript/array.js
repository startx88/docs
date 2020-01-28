const reducer = (array, combine, inital)=>{
    for(let i=0; i<array.length;i++){
        inital = combine(inital,array[i])
    }
    return inital
}

const add = (a,b)=>a+b;

console.log(reducer([1,2,3],add,0))