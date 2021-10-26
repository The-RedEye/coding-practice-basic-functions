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

function fib(num){ // helper function to find fib
if (num<=1)
  return 1

return fib(num-1)  + fib(num-2)
}

function euler(num){// problem 8
  let arrEven = []
  let arrFull = []
  let sum = 0
  let maxSum = 0

  for (i=1; i<=num; i++){
    let currentVal = fib(i)
    sum += currentVal
    arrFull.push(currentVal)
    
    if (currentVal%2==0)
      arrEven.push(currentVal)

    if (sum<4000000)
      maxSum=sum
  }
  console.log(`Fib up to ${num} terms: ${arrFull}`)
  console.log(`Even Fibs: ${arrEven}`)
  console.log(`Largest sum under 4 mil up to ${num} terms: ${maxSum}`)
  return sum
}

function findNeedle(junk){
  for(let i=0; i<junk.length; i++)
    if (junk[i]=='needle')
      return `found the needle at position ${i}`
  return "I couldn't find the needle"
}

// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

function positiveSum(arr){
  sum = 0
  for(let i=0; i<arr.length; i++)
    if (arr[i] > 0)
      sum+= arr[i]
  return sum
}

// console.log(positiveSum([1, -4, 7, 12]))