//შექმენით სია სადაც რიცხვები. თუ რიცხვი არის 3-ის ჯერადი მაშინ დაუმატეთ თავისი ინდექსი. სხვა შემთხვევაში გაამრავლეთ ორზე.
let list = [1,6,8,4]

let thing = list.map((num,index)=>{
    if(num % 3){
        return num+index
    }
    else{
        return num*2
    }
})