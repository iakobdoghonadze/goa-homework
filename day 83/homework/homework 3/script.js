//მომხმარებელს შემოატანინეთ სახელი და გამოიტანეთ alert-ში 'გილოცავ' თუ ერთნაირი სახელები გაქვთ. (არ აქვს დიდად დაწერთ თუ პატარა ასოებად, უნდა იმუშავოს) სხვა დანარჩენ შემთხვევაში უბრალოდ სახელი გამოიტანეთ.

let username = prompt("enter your name:")
let mename = "iakobi"

if (username === mename || username.toLowerCase === mename){
    alert(username + "გილოცავ!")
}
else{
    alert(username)
}