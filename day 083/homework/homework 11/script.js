//მომხმარებელს შემოატანინე თვე (რიცხვი 1–12) და გამოიტანე რომელი თვე და სეზონია.

let userinp = Number(prompt("enter a number 1-12"))

if (userinp === 1){
    console.log("იანვარი")
}
if (userinp === 2){
    console.log("თებერვალი")
}
if (userinp === 3){
    console.log("მარტი")
}
if (userinp === 4){
    console.log("აპრილი")
}
if (userinp === 5){
    console.log("მაისი")
}
if (userinp === 6){
    console.log("ივნისი")
}
if (userinp === 7){
    console.log("ივლისი")
}
if (userinp === 8){
    console.log("აგვისტო")
}
if (userinp === 9){
    console.log("სექტემბერი")
}
if (userinp === 10){
    console.log("ოქტომბერი")
}
if (userinp === 11){
    console.log("ნოემბერი")
}
if (userinp === 12){
    console.log("დეკემბერი")
}
if (userinp === 12 || userinp === 1 || userinp === 2){
    console.log("ზამთარი")
}
if (userinp === 3 || userinp === 4 || userinp === 5){
    console.log("გაზაფხული")
}
if (userinp === 6 || userinp === 7 || userinp === 8){
    console.log("ზაფხული")
}
if (userinp === 9 || userinp === 10 || userinp === 11){
    console.log("შემოდგომა")
}