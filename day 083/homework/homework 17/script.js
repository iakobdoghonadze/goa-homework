//მომხმარებელს შემოატანინეთ რიცხვი. თუ ეს რიცხვი მეტია 20-ზე შეამოწმეთ ლუწია თუ კენტი. თუ ლუწია მაშინ გაამრავლეთ 2-ზე. თუ კენტია გაამრავლეთ სამზე. თუ 20-ზე ნაკლებია ან ტოლი მაშინ შეამოწმეთ, თუ 3-ზე იყოფა სამზე გაყავით. სხვა დანარჩენ შემთხვევაში რა რიცხვიცაა ის გამოიტანეთ


let userinpnum = Number(prompt("enter a number:"))

if (userinpnum > 20 ){
    if (userinpnum % 2 === 0){
        console.log(userinpnum * 2)
    }
    if (userinpnum % 2 !== 0){
        console.log(userinpnum * 3)
    }
}

if (userinpnum <= 20){
    if (userinpnum % 3 === 0){
        console.log(userinpnum / 3)
    }
    else {
    console.log(userinpnum)
    }
}

