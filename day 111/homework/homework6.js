//შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად სტრინგი. და ობიექტის სახით დააბრუნეთ თითოეული ასო რამდენჯერ გვხვდება.



function countCharacters(str) {
    let result = {}
    for (let char of str) {
        if (char !== ' ') {
            result[char] = (result[char] || 0) + 1
        }
    }
    return result
}

console.log(countCharacters("hello world"))
