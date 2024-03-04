interface User{
    readonly dbId: number
    name: string,
    email: string,
    userId: number,
    googleId?: string
}
const hitesh : User = {dbId: 22, name:"hitesh",email:"h@h.com",userId:2211}
hitesh.email = "hitesh@cl.dev"


export{}