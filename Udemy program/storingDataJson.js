const book={
    title:"Eco is the Enemy",
    auther:"Ryan Holiday"
}
//convert javascript object into json string
const bookJson=JSON.stringify(book)
console.log(book.title)

//convert javascript JSON String into  object
const bookObject=JSON.parse(bookJson)
console.log(bookObject.title)
console.log(bookObject.auther)