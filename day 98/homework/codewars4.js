//https://www.codewars.com/kata/51e0007c1f9378fa810002a9

function parse ( data ) {
  let value = 0
  let result = []

  for(let i = 0;i < data.length;i++){
    let command = data[i]

    if (command === "i"){
      value++
    }
    
    else if (command === "d"){
      value--
    }
    
    else if (command === "s"){
      value *= value
    }
    
    else if (command === "o"){ 
      result.push(value)
    }
  }
  return result
}