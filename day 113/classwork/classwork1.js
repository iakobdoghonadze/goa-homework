// შექმენი ობიექტი სადაც იქნება _number  , სადაც შეინახავ სტრინგ ტელეფონის ნომერს
// შენი დავალებაა შექმნა set tel ,რომელმაც უნდა შეცვალოს ტელეფონის ნომერი შემდგნაირად-->
// უნდა იყოს 6 ზე მეტი სიმბოლო და ეს სტრინგი უნდა შეიცავდეს მხოლოდ ციფრებს
// თუ პირობა დაკმაყოფილდა შეცვალე ნომერი თუ არა და გამოიტანე ALERT!!

// შემდეგ შექმენი GET რომელიც დააბრუნებს შეცვლილ მნშვნელობას შემდეგნაირად -->
// თუ სიგრძე არის 6 ზე მეტი დააბრუნე ნომერი,სხვა შემთხვევაშ დააბრუნე CANT RETURN NUMBER


let numbers = "1234567890" 
let letters = "qwertyuiopasdfghjklzxcvbnm"

let phoneNumber = {
    _number:"",
    set phone(newNumber){
        if(newNumber.length > 6 && newNumber.includes(numbers) === true && !newNumber.includes(letters)){
            this._number = newNumber
            alert("Phone number updated successfully!")
        }
        else {
            alert("Invalid phone number!")
        }
    },
    get phone(){
        if(this._number.length > 6){
            return this._number
        }
        else {
            return "CANT RETURN NUMBER"
        }
    }
}

//console.log(phoneNumber.phone) // CANT RETURN NUMBER
// phoneNumber.phone = "12345" // Invalid phone number!
 phoneNumber.phone = "1234567" // Phone number updated successfully!
// console.log(phoneNumber.phone) // 1234567
// phoneNumber.phone = "12345abc" // Invalid phone number!
// console.log(phoneNumber.phone) // 1234567