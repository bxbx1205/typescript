let response:any= "42"

let numericlength:number = (response as string).length

type Book = {
    name: string;
}

let bookString= '{"name":"bxbx"}'

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.name)

const inputElement = document.getElementById("username") as HTMLInputElement

let value:any

value = "chai"
value = [1,4,5,6]
value = 2.5
value.toUpperCase()

if(typeof value === 'string'){
    value.toUpperCase()
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }  
    console.log("error");
      
    
}



