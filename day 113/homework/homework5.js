//)გაქვს textAnalyzer

// property:

// _text

// გააკეთე:

// setter text(value)
// უნდა იყოს string
// trim გააკეთე (საწყისი/ბოლო space წაიშალოს)(მოიძიეთ trim())

// getter length()
// ტექსტის სიგრძე

// getter wordCount()
// რამდენი სიტყვაა

// getter isLong()
// true თუ 20+ სიმბოლოა

let textAnalyzer = {
    _text: "",
    set text(value) {
        if (typeof value === "string"){
            this._text = value.trim()
        }
        else {
            console.log("text უნდა იყოს string ტიპის")
        }
    },
    get length(){
        return this._text.length
    },
    get wordCount(){
        if (this._text === ""){
            return 0
        }
        return this._text.split(" ").length
    },
    get isLong(){
        return this._text.length > 20
    }
}
