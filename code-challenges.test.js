// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe method that lists the name of the function
// test method describes what function does
// an expect method calls the function to test arguments

  describe("capitalizeName",() => {
  it('an array of objects and returns an array with a sentence about each person with their name capitalized.',() =>{
  expect(capitalizeName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
  })

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



// b) Create the function that makes the test pass.

//define a function named capitalizeName
//map is used to iterate array 
//declate variable called strings 
//split the strimg 
//use map to iterate the string and make the first character to uppercase
//join the string 
//add strings to `is occupation value`

 const capitalizeName = (array)=>{
 return array.map(value => {
  let Strings = (value.name).toLowerCase().split(' ').map(value=> value.charAt(0).toUpperCase() + value.substring(1)).join(' ') 
  return Strings + " " + `is ${value.occupation}.`
})
 }
 





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// describe method that lists the name of the function
// test method describes what function does
// an expect method calls the function to test arguments

describe("remainderNum",() => {
  it('a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.',() =>{
  expect(remainderNum(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(remainderNum(hodgepodge2)).toEqual([ 2, 1, -1 ])

  })
  })

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]



// b) Create the function that makes the test pass.

//define a function named reamainderNum
//declare a newarray 
//declare numarray and filter the array typeof number
//for loop to iterate the array 
//declare  num as numarray module 3
//.push(num) into newarray

 const remainderNum = (array)=>{
  let newarray = []
  let numarray=array.filter(value=>typeof value ==="number")
  for(let i=0;i<numarray.length;i++){
    let num = numarray[i]%3
    newarray.push(num)
 }return newarray
   }
console.log(remainderNum(hodgepodge1))
console.log(remainderNum(hodgepodge2))



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// describe method that lists the name of the function
// test method describes what function does
// an expect method calls the function to test arguments

describe("sumCube",() => {
  it('an array of numbers and returns the sum of all the numbers cubed.',() =>{
  expect(sumCube(cubeAndSum1)).toEqual(99)
  expect(sumCube(cubeAndSum2)).toEqual(1125)

  })
  })

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.

//declare a function named sumCube
//map is used to iterate an array
//value**3 is used to get cube number
//.reduce is used for addtion of numbers in an array
const sumCube = (array)=> {
 return newarrray = array.map(value=>value**3).reduce((accumulator,current)=>accumulator+current,0)
  
}


