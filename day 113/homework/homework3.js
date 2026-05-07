// გაქვს profile

// მოთხოვნები:

// _username private
// setter:
// ყველა ასო უნდა იყოს პატარა (lowercase)
// getter:
// აბრუნებს "@" + username

let profile = {
    _username: "",
    set username(value){
        this._username = value.toLowerCase()
    },

    get username(){
        return "@" + this._username
    }
}

