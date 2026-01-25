//https://www.codewars.com/kata/581a52d305fe7756720002eb

function validateNumber(str){
  
  let res = ""
  
  for(let i of str){
    if(i !== "-"){
      res += i
    }
  }
  if(res.slice(0,2) === "07" && res.length === 11){
    return "In with a chance"
  }
  else if(res.slice(0,3) === "+44" && res.length === 13){
    return "In with a chance"
  }
  else{
    return "Plenty more fish in the sea"
  }
}