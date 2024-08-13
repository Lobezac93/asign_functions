//***PART 1 THINKING FYNCTIONALLY  */

//1.) 
let num = [1,4,2,-10,6,8,9,12,0,45]
function sumArray(arr){
    let sum = 0
    arr.forEach(element=> {
        sum+=element
    });
    return sum;
}

console.log(sumArray(num))

//2.)

function arrayAverage(){
    const sum = sumArray
    return arr.length ? sum / arr.length : 0;
}

console.log(arrayAverage(num));

//3.)
function longestString(arr) {
    if (arr.length === 0) return ''; // Handle empty array
  
    let longest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    
    return longest;
  }
  
  const strings = ["apple", "banana", "kiwi", "strawberry"];
  console.log(longestString(strings)); // Output: "strawberry"
  

  //4.) 

function StringLongerThan(arr, number){
    return arr.filter(item => item.length > number);
}

const result = StringLongerThan(['banana', 'mangoes', 'fish','strawberry', 'pineapple']);
console.log(result);


//5)

let counter = 0

function printHello(){
    console.log('hello') // printHello is called 
    counter ++           // counter is iniitialized to 1
    console.log(counter) // counter is log to the console

    if(counter > 10){   // condition checks if counter is greater than 10, if counter is less than 10, the functioncall itself again until counter is 11
        return;
    }
    printHello()
}

printHello();


//** PART 2 : THONKING METHODOLOGICALLY */

arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },{ id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

arr.sort((a,b) =>{
    return parseInt(a.age) - parseInt(b.age); // sorts the arr b age 
})

console.log(arr);

// filters the array where the age is greater than 50
const filterArr = arr.filter(item => item.age > 50);

console.log(filterArr);

//mapping the array to chnage the occupation key to job

const newArr = arr.map(setOccupation)
function setOccupation(item){
    return {
        ...item,
        job : item.occupation
    };
}

console.log(newArr);

// using reduce method to calculate the sum of the ages and then use the result to calculate average age 

const sumAge= arr.reduce((acumulator, currentValue) => {
    return acumulator + Number(currentValue.age)
}, 0)


console.log(sumAge); // sum ofage = 254

averageAge = sumAge / arr.length
console.log(averageAge);  // average = 50.8





