/*
type FuncType = (n:number,m:number,l:number) => number;

const func: FuncType = (n,m,l) => {
    return n * m * l
};

func(23,32,43)
*/

type FuncType = (n:number, m:number, ) => number;

const func: FuncType = (n,m,) => {
    if(typeof 1 ==="undefined") return n*m;
    return n*m;
};

func(25,23);