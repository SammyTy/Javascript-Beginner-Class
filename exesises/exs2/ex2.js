// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName){
    let fullName = `${firstName} ${lastName}`;
    return fullName
};

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const  addNumbers = (num1, num2) => {
   // Check if the inputs are numbers
   if (isNaN(num1) && isNaN(num2)) {
    return  false
   }

   return  num1 + num2;
   };

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle  = (length, width) => length * width;

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => {
   let perimeter =length + width;
   return  2*perimeter 
};

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism =  (length,width,height)=>{
   return  length*width*height
};

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (radius) => {
    let pi=3.14159;
    let rSquare = radius*radius;
    return pi*rSquare;
};

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (radius) => {
    let pi=3.14159;
    return 2*pi*radius;
};

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density
const density = (mass, volume) => {
    let  dens = mass/volume
    return dens
}

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speed = (distance , time )=>{
    
    let  spd = distance  /time ;
    return spd
};


// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => {
    return mass * gravity
};

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (oC ) => {
    let fah=oC*9/5;
    return fah + 32
};

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
const bmiCal = (height, weight)=> {
    // weight in kilogram 
    const weightInKg = weight/1000;
    // height squared
    let heightSquared = height * height;

    const bmi = weightInKg / heightSquared;
    return  bmi
};

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
 let checkMoth = month.slice(0, 3);

 let message;
    
 if (checkMoth === 'dec' || checkMoth == 'jan' | checkMoth == 'feb') {
    message = `its ${month} and its Summer period`;
 }else if(checkMoth === 'mar' || checkMoth == 'apr' | checkMoth == 'may'){
    message = `its ${month} and its Spring period`;
 }else if(checkMoth === 'jun' || checkMoth == 'jul' | checkMoth == 'aug'){
    message = `its ${month} and its Winter period`;
 }else if(checkMoth === 'sep' || checkMoth == 'oct' | checkMoth == 'nov'){
    message = `its ${month} and its Autumn period`;
 }
 
 return message
};
console.log(checkSeason('apri'));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (num1, num2, num3) => {
    let maxNum1 = (num1 > num2) ? num1 : num2;

    let maxNum2 = (maxNum1 > num3) ? maxNum1 : num3;

    return maxNum2;
};

console.log(findMax(0, 10, 5));

console.log(findMax(0, -10, -2));