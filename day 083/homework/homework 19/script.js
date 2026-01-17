//მომხმარებელს შემოატანინეთ პაროლი, თუ სწორად შემოიტანა მაშინ შემოატანინეთ სახელი, გვარი, ასაკი. თუ გვარი დაემთხვა თქვენსას მაშინ გამოიტანეთ კონსოლში, თქვენ წარმატებით გაიარეთ რეგისტრაცია. სხვა შემთხვევაში, რეგისტრაციის დროს რაღაც ხარვეზი მოხდა. თუ პაროლი არ დაემთხვევა მაშინ კონსოლში გამოიტანეთ. 'არასწორია პაროლი'


let userpass = prompt("enter you password:")
let pass = "password"

let lastname = "dogonadze"

let username = ""
let userlastname = ""
let userage = ""

if (userpass === pass){
    userlastname = prompt("enter your lastname:")
    username = prompt("enter your name:")
    userage = prompt("enter your age:")

    if (userlastname === lastname){
        console.log("თქვენ წარმატებით გაიარეთ რეგისტრაცია!")
    }
    if (pass !== userpass){
        console.log("არასწორია პაროლი")
    }
    else {
        console.log("რეგისტრაციის დროს რაღაც ხარვეზი მოხდა.")
    }
}
