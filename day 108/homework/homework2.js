//შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი. ფუნქციამ უნდა დააბრუნოს ობიექტი სადაც იქნება რამდენი დიდი  და პატარა ასო არის მოცემულ ტექსტში.
function countLetters(text) {
    return text.split('').reduce((counts, char) => {
        if (char >= 'A' && char <= 'Z') {
            counts.uppercasecount++
        } else if (char >= 'a' && char <= 'z') {
            counts.lowercasecount++
        }
        return counts
    }, { uppercasecount: 0, lowercasecount: 0 })
}