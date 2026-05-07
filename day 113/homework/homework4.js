//გაქვს profile

// property:

// _username
// გააკეთე:

// setter username(value)
// არ უნდა შეიცავდეს space-ს
// უნდა იყოს მინიმუმ 3 ციფრი ამ სტრინგში
// შეინახე lowercase-ში
// getter username()
// დააბრუნე "@" + username
// getter length()
// აბრუნებს username-ის სიგრძეს

let profile = {
    _username: "",
    set username(value) {
        if (value.includes(" ")){
            console.log("username არ უნდა შეიცავდეს space-ს")
        }
        else {
            let digitCount = 0
            for (let i = 0;i < value.length;i++){
                let char = value[i]
                if (char >= '0' && char <= '9'){
                    digitCount++
                }
            }
            if (digitCount < 3) {
                console.log("username უნდა შეიცავდეს მინიმუმ 3 ციფრს")
            }
            else{
                this._username = value.toLowerCase()
            }
        }
    },

    get username(){
        return "@" + this._username
    },
    get length(){
        return this._username.length
    }
}

