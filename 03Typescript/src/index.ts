/*
const obj: {
    height: number;
    weight: number;
    gender: boolean;
}; 

const obj: Obj = {
    height: 3434,
    weight:32,
};

*/

type FuncType = (n:number,m:number,l:number) => number;

const func: FuncType = (n,m,l) => {
    return n * m * l
};

func(23,32,43)
