//შექმენი ფუნქცია რომელსაც პარამეტრად გადაეცემა სტრინგების და რიცხვების შერეული სია,შენი დავალებაა რომ დაითვალო ამ სიაში სტრინგ ტიპის მონაცეემების რაოდენობა


function numorstr(list){
    
    for(let i = 0;i<= list.length;i++){
       let count = 0 
        if(typeof(list[i] == "string")){
            count++
            return count
        }
    
    }
}

console.log(numorstr(["bwah", "awsdf", 45, "wadf", 78, "bhw", 22, "waswdas"]))
console.log(numorstr(["asd", "wasfgre",65,"wasdf",23,"wbkjbsdn",]))