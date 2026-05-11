//შექმენი ობიექი რომელშიც იქნება მხოლოდ name 

// შენი დავალებაა დაამატო ამ ობიექტშში გარედან author , year და amount

// შემდეგ შეამოწმე არის თუ არა ობიექტში key სახელად name 

// ასევე შემაოწმე არის თუ არა ობიექტშში key სახელად color

let book = {
    name: "The Great Gatsby"
}

book.author = "F. Scott Fitzgerald"
book.year = 1925
book.amount = 10
console.log("Does the book object have a 'name' key? " + book.hasOwnProperty("name"))
console.log("Does the book object have a 'color' key? " + book.hasOwnProperty("color"))

