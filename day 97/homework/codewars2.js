//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x){
  let res = ""

  for (let i = 0; i < x.length; i++){
    if (x[i] < 5){
      res += "0"
    }
    else{
      res += "1"
    }
  }
  return res
}