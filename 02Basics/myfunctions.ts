function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid:boolean=false) => {}   


addTwo(5)
getUpper("hariprasad")
signUpUser("hitesh","hiesah@cl.dev",false)
loginUser("h","h@cl.dev")

//function getValue(myVal: number):boolean{
//    if(myVal > 5){
//        return true
//    }
//    return "200 OK"
// }

const getHello =(s: string):string => {
    return""
}

const heros = ["thor","spiderman","ironman"]
//const heros = [1,2,3]
heros.map((hero)=>{
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export{} 