//შექმენით ფუნქცია რომელიც გადაცემულ სტრინგში სიმბოლოებს შეუცვლის ქეისებს. (რომელი ასოც წერია პატარად იმას დიდად დაწერს და პირიქით)


function swapchar(text) {
    let result = ""

    for (let i = 0; i < text.length; i++) {
        let char = text[i]

        if (char === char.toLowerCase()) {
            result = result + char.toUpperCase()
        } else {
            result = result + char.toLowerCase()
        }
    }

    return result
}
let txt = prompt("enter a text:")
console.log(swapchar(txt))