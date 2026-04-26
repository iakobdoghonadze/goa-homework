// შექმენით სია,სადაც მოათავსებ რაიმე სტრინგენბს, შემნი დავალებაა რომ do while ის გამოყენებით დაითვალო თუ რამდენი სტრინგია სიაში ისეთი რომლის სიგრძე არის ლუწი

let list = ["stringebi","kide stringebi","stringi"]
let count = 0
let counteventhing = 0
do{
    if(list[count].length % 2 === 0){
        counteventhing++
    }count++
}
while(count<list.length)