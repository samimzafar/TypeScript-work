// interface can extends type,but type dont have extend options

type info = {
    name: string,
    age: number
}

type record = {
    marks: number,
    status: boolean
}


const std: info & record = {
    name: "samim",
    age: 10,
    marks: 200,
    status: true,
}

console.log(std)