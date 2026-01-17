//https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers){
  let evencount = 0
  let oddcount = 0

  for(let i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0){
      evencount++
    } 
    else{
      oddcount++
    }
  }

  if(evencount > oddcount){
    for(let i = 0;i < integers.length;i++){
      if (integers[i] % 2 !== 0){
        return integers[i]
      }
    }
  }
  else{
    for (let i = 0; i < integers.length; i++){
      if (integers[i] % 2 === 0) {
        return integers[i]
      }
    }
  }
}