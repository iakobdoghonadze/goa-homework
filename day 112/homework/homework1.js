// //1)შექმენი user ობიექტი:

// _password
// username

// მოთხოვნები:

// შექმენი getter password → ყოველთვის აბრუნებს "******" (რეალური პაროლი არ უნდა ჩანდეს)
// შექმენი მეთოდი changePassword(oldPass, newPass)

// წესები:

// თუ oldPass არ ემთხვევა → არ შეცვალოს
// newPass უნდა იყოს მინიმუმ 6 სიმბოლო


const user = {
    _password: "123456",
    username: "user1",
    get password(){
        return "******"
    },
    changePassword(oldPass, newPass){
        if (oldPass === this._password){
            if (newPass.length >= 6){
                this._password = newPass
                console.log("Password changed successfully")
            }
            else {
                console.log("New password must be at least 6 characters long")
            }
        }
        else {
            console.log("Old password is incorrect. Password has not been changed")
        }
    }
}