//მოცემული გაქვთ სია: ['01001011100', '100111110', '110101010']. ამ სიის თითოეული ელემენტი არის ორობით სისტემაში. გადაიყვანეთ ათობითში და ჩაამატეთ ახალ სიაში.

let list = ['01001011100', '100111110', '110101010']

let result = []

for (let i = 0; i < list.length; i++) {
  let text = list[i] 
  let resultt = 0      
  let step = 0     

  for (let o = text.length - 1; o >= 0; o--) {
    let numb = text[o];
    resultt += numb * 2 ** step
    step++;
  }

  result.push(resultt)
}

console.log(result)