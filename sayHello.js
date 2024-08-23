function sayHello(name){
    console.log(`Good morning ${name}`)
}


function area(width, length){
    return(width * length);
}

const area = (a,b) => a*b;  // arrow functions 


function areBothEven (n1, n2){  // the functionc checks if both numbers are even 
    return !(n1 % 2) && !(n2 % 2);
}
areBothEven(22,10); // returns true 

EXcercises 
EXC1

const computeArea = (width, height) => {
   console.log(`The area of the reactangle with width of $${width} and a height of ${height} is ${width*height} square meter`)};


function computeArea(width, height) {
    const area = width * height;
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
}

console.log(computeArea(5,10));

EXC2

const planetHasWater= function(planet){
    const normalizePlanet = planet.toUppercase();
    if (normalizePlanet==='Earth' || normalizePlanet==='Mars'){
        return true
    } else {
        return false 
    }
}


planetHasWater('earth');