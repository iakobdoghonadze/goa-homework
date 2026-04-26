//შექმენით სია სადაც შეინახავთ სტრინგებს,შენი დავალებაა რომ დაითვალო რამდენჯერ მეორდება სიაში ისეთი ელემენტი რომლის სიგრძე მეტია 4 ზე

let list = ["stringebi","stringi","bing"]

let count = 0
let index = 0

do{
    if(list[index].length > 4){
        count++
    }index++
}
while(index < list.length)