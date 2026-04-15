// შექმენით ფუნქცია, რომელიც არგუმენტად გადაცემულ სტრინგს დაშლის და ობიექტის სახით დაგვიბრუნებს რომელი სიმბოლო რამდენჯერ მეორდება.
// მაგალითად:
// "Goa Academy" 
// შედეგი: 
// g: 1,
// o: 1,
// a: 3,
// c: 1,
// d: 1,
// e: 1,
// m: 1,
// y: 1

function characters(str){
    let result = {}
    let lowerStr = str.toLowerCase()
    for ( let char of lowerStr){
        if (char !== ' '){
            result[char] = (result[char] || 0) + 1
        }
    }
    return result
}

// let arrow = (str) => {
//     let result = {}
//     let lowerStr = str.toLowerCase()
//     for (let char of lowerStr){
//         if (char !== ' ') {
//             result[char] = (result[char] || 0) + 1
//         }
//     }
//     return result
// }

