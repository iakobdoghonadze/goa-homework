//შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი. ფუნქციამ უნდა დააბრუნოს ობიექტი, სადაც ცალ-ცალკე დაითვლით რამდენი ხმოვანია და რამდენი თანხმოვანი.


function vowelsandconsonants(text) {
    return text.split('').reduce((counts, char) => {
        let lowerchar = char.toLowercase()
        if ('aeiou'.includes(lowerchar)){
            counts.vowelcount++
        } else if (lowerchar >= 'a' && lowerchar <= 'z'){
            counts.consonantcount++
        }
        return counts
    }, { vowelcount: 0, consonantcount: 0 })
}