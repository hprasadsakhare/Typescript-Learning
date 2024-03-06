let score: number|string = 33
score = 44
score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hari: User | Admin = {name: "Hariprasad", id: 334455}

hari = {username: "hprasad", id: 334455}

function getDbId(id: number | string){
    console.log(`Db id is ${id}`)
}
getDbId(22)
getDbId("33")

// array

const data: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]
const data3: (string|number)[] = ["1",2,3]


export{}