//6.https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints){
  let numb = 0
  let count = 0
  
  for(let i=0; i<classPoints.length;i++){
    numb += classPoints[i]
    count ++
  }
  numb = numb/count
  
  if (numb >= yourPoints){
    return false
  }
  else{
    return true
  }
}