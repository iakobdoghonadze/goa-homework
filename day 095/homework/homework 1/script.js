//შექმენით ფუნქცია რომელიც შეამოწმებს არგუმენტად გადაცემული მნიშვნელიბა არის თუ არა პალინდრომე.


function palindroma(value) {
    let text = value.toString()
    let reversed = ""

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i]
    }

    if (text === reversed) {
        return true
    } else {
        return false
    }
}

console.log(palindroma("level"))
