/**
 * Library Management System Project
 * Object-oriented implementation with Book class
 * Demonstrates encapsulation and state management
 */

class Book{
    //variables
    title;
    author;
    pages;
    isAvailable=true

    //constructor to initialize the object
    constructor(title,author,pages){
        this.title=title
        this.author=author
        this.pages=pages
    }
    
    borrow(){
        this.isAvailable=false
        return this.isAvailable
    }
    returnBook(){
        this.isAvailable=true
        return this.isAvailable
    }
    getInfo(){
        return(`${this.title} by ${this.author}(${this.pages}pages)`)
    }
    isLongBook(){
        return (this.pages>300)?true:false
    }
}
//creating 5 objects...
let book1=new Book("Python","Reema Thareja",350)
let book2=new Book("Java","Ramesh",500)
let book3=new Book("DBMS","Suresh",200)
let book4=new Book("WT","Raju",700)
let book5=new Book("FCA","Harry",650)

//creating an array to store the objects created...
let books=[]
books.push(book1)
books.push(book2)
books.push(book3)
books.push(book4)
books.push(book5)

//Display info of all books
console.log("List of all books:")
console.log(book1.getInfo())
console.log(book2.getInfo())
console.log(book3.getInfo())
console.log(book4.getInfo())
console.log(book5.getInfo())

//Borrow 2 books and show availability
console.log(book1.borrow())
console.log(book3.borrow())

//return book and print updated status
console.log(book1.returnBook())

//counting long books
let count=0
for(v in books){
    if(books[v].isLongBook())
        count++;        
}
console.log("Number of Long Books: ",count)

//display all available books
for(i in books){
if(books[i].isAvailable===true)
console.log(books[i])
}