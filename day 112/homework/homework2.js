// 2)შექმენი bankAccount:

// _balance

// მეთოდები:

// deposit(amount)
// withdraw(amount)

// წესები:

// amount > 0 ანუ შესატანი თანხა(0 ლარს ვერ შევიტანთ)
// withdraw არ უნდა აღემატებოდეს ბალანსს(თუ ბალანსზე 100 ლარი გვაქ 200 ვერ გამოვიტანთ D)

// შექმენი getter:
// რომელიც აბრუნებს 
// balance ს


let bankAccount = {
    _balance: 0,
    deposit(amount){
        if (amount > 0){
            this._balance += amount
            console.log(`Deposited ${amount}. Current balance: ${this._balance}`)
        }
        else {
            console.log("Deposit amount must be greater than 0")
        }
    },
    withdraw(amount){
        if (amount > this._balance){
            console.log("Withdrawal amount exceeds current balance. Withdrawal denied.")
        }           
        else {
            this._balance -= amount
            console.log(`Withdrew ${amount}. Current balance: ${this._balance}`)
        }
    },
    get balance(){
        return this._balance
    }
}