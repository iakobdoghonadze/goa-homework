//მომხმარებელს შემოატანინეთ კვირის დღე და თანხა. თუ 
/*
ორშაბათია, გაუკეთეთ 5% ფასდაკლება,
სამშაბათი - 10%
ოთხშაბათი - 15%
ხუთშაბათი - 20%
პარასკევი - 25%
შაბათი - 50%
კვირა - 50%
სხვა შემთხვევაში, "ასეთი დღე ან თანხა არ არსებობს"
*/

let day = prompt("enter a day:")
let amount = prompt("enter an amount:")
switch (day){
    case "ორშაბათი":
        amount -= amount * 0.05
        break
    case "სამშაბათი":
        amount -= amount * 0.1
        break
    case "ოთხშაბათი":
        amount -= amount * 0.15
        break
    case "ხუთშაბათი":
        amount -= amount * 0.2
        break
    case "პარასკევი":
        amount -= amount * 0.25
        break
    case "შაბათი":
    case "კვირა":
        amount -= amount * 0.5
        break
    default:
        console.log("ასეთი დღე ან თანხა არ არსებობს")
}