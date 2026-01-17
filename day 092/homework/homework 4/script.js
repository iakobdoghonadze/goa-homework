//მომხმარებელს შემოატანინეთ რიცხვი. შემდეგ სიტყვები შემოატანინეთ იმდენჯერ რა რიცხვიც შემოიტანა. შემდეგ ახალ სიაში ჩაამატეთ ყველაშემოტანილისიტყვა.და გაფილტრეთ. თუ იქნება ისეთი სიტყვები რომლებიც მეორდება (ქეის სენსიტიურობა არ გაითვალისწინოს) ისინი ამოშალოს.



let number = Number(prompt("enter a number of how many times to repeat:"))

let words = []

for (let i = 0; i < number; i++){
    
    let word = prompt("enter a word:")
    words.push(word)
}

let filtered = []

for (let i = 0; i < words.length; i++){
    
    let current = words[i].toLowerCase()

    let count = 0
    
    for (let j = 0; j < words.length; j++){
        
        if (words[j].toLowerCase() === current){
            count++
        }
    }

    if (count === 1){
        filtered.push(words[i])
    }
}

console.log(filtered)