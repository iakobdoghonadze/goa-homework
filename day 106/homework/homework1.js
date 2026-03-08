//გააკეთეთ მარტივი კალკულატორი switch / case -ების გამოყენებით.

function calculator(num1, num2, operation){
  let result

  switch (operation){
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      if (num2 !== 0){
        result = num1 / num2
      }
      else {
        return 'შეცდომა: ნულზე გაყოფა არ შეიძლება!'
      }
      break
    case '%':
      result = num1 % num2
      break
    default:
      return 'შეცდომა: ამ ოპერაციის გამოყენება შეუძლებელია!'
  }
  return result
}


