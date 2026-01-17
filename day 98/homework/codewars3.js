//https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  while(n >= 10){
    let digits = n.toString().split("")
    let sum = 0

    for(let i = 0;i < digits.length;i++){
      sum += Number(digits[i])
    }
    n = sum
  }
  return n
}