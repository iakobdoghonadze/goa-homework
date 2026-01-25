//https://www.codewars.com/kata/587731fda577b3d1b0001196

//Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):

//   "hello case" --> "HelloCase"
//   "camel case word" --> "CamelCaseWord"


function camelcase(str){
    let result = ""
    str = ' ' + str

    for(let i = 0;i < str.length;i++){
        if(str[i] === " "){
            i++
            result += str[i].toUpperCase()
        }
        else{
            result += str[i]
        }
    }
    return result
}