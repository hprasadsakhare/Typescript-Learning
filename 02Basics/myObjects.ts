const User = {
    name: "Hariprasad",
    email: "hari@lco.dev",
    isActive: true
}

function crewateUser({name: string, isPaid: boolean}){}

crewateUser({name:"hari",isPaid:false})

function createCourse():{name: string, isPaid: number}{
    return{name:"reactjs",isPaid: 399}
}

/*
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User{
    return{
        name: "",
        email: "",
        isActive: true
    }
}

createUser({name:"hitesh",email:"hitesh@cl.dev",isActive: true})
*/

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
}

let myUser: User = {
    _id: "1245",
    name: "hart",
    email: "hari  @cl.dev",
    isActive: false
}

myUser.email = "h@gmail.com"
//myUser._id= "1234"

export {}