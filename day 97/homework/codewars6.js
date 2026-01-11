//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  let res = ""
  let vowels = "aeiouAEIOU"

  for (let i = 0; i < str.length;i++){
    if (!vowels.includes(str[i])){
      res += str[i]
    }
  }
  return res
}