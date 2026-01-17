//3)შექმენი ფუნქცია რომელსაც პარამეტრად გადაცსცემთ სიას რიცხვების,შენი დავალებაა რომ დააბუნო ახალი სია სადაც იქნება მხოლოდ ლუწი რიცხვები

function wasabi(list){
    let even = []
    for(let i = 0;i <= list.length;i++){
        if (list[i] % 2 === 0){
            even.push(list[i])
        }
    }
    return even
}

console.log(wasabi([32,55,87,56,89]))