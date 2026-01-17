//5.https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array){
  let answer = []
  for(let i = 0; i < array.length; i++){
    answer.push(-array[i])
  }
   return answer
}

