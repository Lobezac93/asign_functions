
// creates a function that gives us an object with devName and list the skills

let learner1= getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

//   console.log(getDevObject(learner1))


  // another way of the above is use a rest parameter 


  function getDevObject(name, ...skills) {
    return {
      devName: name,
      jobSkills: skills
    };
  }

  console.log(getDevObjbect(learner1))


  numbers = [1,2,3,4,5,6,7,8]

  function double(number){
    console.log(number*2)
  }

  numbers.forEach(double);