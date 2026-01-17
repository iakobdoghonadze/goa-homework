//https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(sentence){
  let words = sentence.split(" ")
  let result = ""

  for (let i = 0; i < words.length; i++){
    let word = words[i]

    if (word.length >= 5){
      let reversed = ""
      for(let j = word.length - 1;j >= 0;j--){
        reversed += word[j]
      }
      word = reversed
    }
    result += word

    if (i < words.length - 1){
      result += " "
    }
  }
  return result
}