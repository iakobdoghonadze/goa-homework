//4)შექმენი ფუქნცია რომელსაც გადაეცემა სტრინგების სავსე სია პარამეტრად ,შენი დავალებაა რომ ახალ სიაში დაამატო მხოლოდ ის სტრინგები რომლის სიგრძძე მეტია 5 ზე

function func(list){
    let str = []
    for(let i = 0;i < list.length;i++){
        if(list[i].length > 5){
            str.push(list[i])
        }
    }
    return str
}
console.log(func(["swffds","wasfwegd","bjh","wrdsw"]))