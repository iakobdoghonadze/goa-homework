//https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  let result = []
  let zerocount = 0

  for(let i = 0;i < arr.length;i++){
    if(arr[i] === 0){
      zerocount++
    }
    else{
      result.push(arr[i])
    }
  }

  for(let i = 0;i < zerocount;i++){
    result.push(0)
  }
  return result
}