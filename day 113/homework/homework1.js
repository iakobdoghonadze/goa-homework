//გაქვს ობიექტი user

// მოთხოვნები:

// _age იყოს private property
// setter არ უნდა აძლევდეს უარყოფით მნიშვნელობას(შეამოწმე თუ უატყოფითა არ შეცვალო თუ დადებითია შეცვალე ახალი მნშვნელპბით)
// getter აბრუნებდეს ასაკს
// თუ არასწორი მნიშვნელობაა → console.log("არასწორი ასაკი")


user = {
    _age: 0,
    set age(value){
        if (value < 0){
            console.log("არასწორი ასაკი")
        }
        else {
            this._age = value
        }
    },

    get age(){
        return this._age
    }
}