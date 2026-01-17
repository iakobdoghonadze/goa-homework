//1.https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year){
  let cent = 0

  while (year > 0){
    year -= 100
    cent++
  }

  return cent
}