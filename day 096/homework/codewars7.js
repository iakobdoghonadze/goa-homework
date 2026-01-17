//7.https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let vow = 0
  for(let i = 0;i <= str.length;i++){
    if(str[i] === "a"){
      vow = vow + 1
    }
  }
  return vow
}