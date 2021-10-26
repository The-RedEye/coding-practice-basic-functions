function calculateCube(num){
return num**3
}

console.log(calculateCube(5));

function isAVowel(char){
  let vowels = 'AEIOU'
  if (vowels.includes(char.toUpperCase()))
    return true
  
  return false
}

console.log(isAVowel('a'))
console.log(isAVowel('v'))
console.log(isAVowel('E'))

function getTwoLengths(str1, str2){
let result = [];
result.push(str1.length)
result.push(str2.length)
return result
}

function getMultipleLengths(arr){
  let result = []
  for (let i = 0; i<arr.length; i++)
    result.push(arr[i].length)
  return result
}

