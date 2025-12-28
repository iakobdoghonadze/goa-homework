//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემული სტრინგიდან ხმოვნებს ჩაანაცვლებს და მათ მაგივრად *-ს გამიაჩენს.

function replacevowels(text) {
    let result = ""
    let vowels = "aeiouAEIOUაეიოუ"

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            result = result + "*"
        } 
        else {
            result = result + text[i]
        }
    }
    return result
}

let word = prompt("enter a word:")

console.log(replacevowels(word))