function calculateCube(num){
return num**3
}

function isAVowel(char){
  let vowels = 'AEIOU'
  if (vowels.includes(char.toUpperCase()))
    return true
  
  return false
}


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

function maxOfThree(num1, num2, num3){
  let largest = num1;
  if (num2> largest)
    largest = num2
  if (num3> largest)
    largest = num3
  
  return largest
}

function printLongestWord(arr){
  let longest  = arr[0]
  for(let i=0; i<arr.length; i++){
    if (arr[i].length>longest.length)
      longest = arr[i]
  }

  return longest
}

function transmogrify(num1, num2, num3){
  result = num1 * num2
  result = result ** num3
  return result
}
