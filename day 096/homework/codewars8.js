//8.https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  let str = String(n)
  let result = []

  for (let i = str.length - 1;i >= 0;i--) {
    result.push(Number(str[i]))
  }
  return result
}

