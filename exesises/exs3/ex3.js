// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const userAge = prompt('whats your age');
// get the html element to display the result in instead of console.log
let feedback = document.querySelector(".feedBack")
if (userAge >= 18) {
    feedback.textContent = 'you are old enough to drive'
}else {
    let waitTime = 18 - userAge;
    feedback.textContent = `you have ${waitTime} years left to be eligible to drive`
};

// Enter your age:15
// You are left with 3 years to drive.
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.
// let a = 4;
// let b = 3;
//   4 is greater than 3
                                        //   ^   \\
// *************** i dont understand this   / \****************** */



// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const evenNumbers = (nums) => {
    const checkEven = nums % 2;
    const check = checkEven != 0 ? `${nums} is an odd number` :  `${nums} is an even number`

    return check
};

console.log(evenNumbers(2));

console.log(evenNumbers(9));

// Write a code which can give grades to students according to their scores:
const studentsScores = [
    {
        id: 1,
        name: 'samson olaide',
        scores: 60
    },

    {
        id: 2,
        name: 'fumbi tola',
        scores: 10
    },

    {
        id: 3,
        name: 'temi loluwa',
        scores: 49
    },

    {
        id: 4,
        name: 'ajoke ade',
        scores: 80
    },

    {
        id: 5,
        name: 'ola tunde',
        scores: 60
    },

    {
        id: 6,
        name: 'temi ade',
        scores: 70
    },

    {
        id: 7,
        name: 'samson buki',
        scores: 42
    }
];
const getGrade = () => {
    let  output;
    // studentsScores.map(grade => {
    //     let grades
    //     if (grade.scores >= 80 && grade.scores <= 100 ) {
    //                 grades = 'A'
    //         }else if (grade.scores >= 70 && grade.scores <= 79 ) {
    //             grades = 'B'
    //         }else if (grade.scores >= 60 && grade.scores <= 69 ) {
    //             grades = 'C'
    //         }else if (grade.scores >= 50 && grade.scores <= 59 ) {
    //             grades = 'D'
    //         }else if (grade.scores >= 50 && grade.scores <= 59 ) {
    //             grades = 'E'
    //         }else if (grade.scores >= 0 && grade.scores <= 49 ) {
    //             grades = 'F'
    //         }
    //     output = `${grade.name} has a score of ${grade.scores}, and a  Grade of :${grades}`;
    //     console.log(output);
    // })
    
    studentsScores.every(grade => {
        const {name, scores} = grade;
        let grades;
        if (grade.scores >= 80 && scores <= 100 ) {
            grades = 'A'
        }else if (scores >= 70 && scores <= 79 ) {
            grades = 'B'
        }else if (scores >= 60 && scores <= 69 ) {
            grades = 'C'
        }else if (scores >= 50 && scores <= 59 ) {
            grades = 'D'
        }else if (scores >= 50 && scores <= 59 ) {
            grades =  'E'
        }else if (grade.scores >= 0 && grade.scores <= 49 ) {
            grades = 'F'
        }
         output = `${grade.name} has a score of ${grade.scores}, and a  Grade of :${grades}` ;
         console.log(output);
           return true;
    } )
}

getGrade();

// Check if the season is Autumn, Winter, Spring or Summer.
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

// Check if a day is weekend day or a working 
const  checkDay = (day) => {
    const daysArray = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let days = daysArray[day];
    let result;
    if (days == 'Saturday' || days == 'Sunday' ) {
        result = `Today is ${days} and it is Weekend`
    }else{
        result = `Today is ${days} and it is a working day`
    }
   return result
}

const getDay = new Date().getDay();
console.log(checkDay(getDay));
// hardcoded date for testing purposes only!
// console.log(checkDay(6));

//  Write a program which tells the number of days in a month.

const  numDaysInMonth = (month) => {
    let result; 
    
    switch (month) {
        case 'January':
        case 'March': 
        case 'August':
        case 'July':
        case 'October':
        case 'December':
            result = `it's ${month} and ${month} has 31 days`
            break;
        case 'Febuary':
            result = `it's ${month} and ${month} has 28 days`
            break;
        case 'April': 
        case 'june':
        case 'September':
        case 'November':
            result = `it's ${month} and ${month} has 30 days`
            break;
        default:
            break;
    }

    return result
}

console.log(numDaysInMonth('January'));
console.log(numDaysInMonth('Febuary'));
console.log(numDaysInMonth('April'));
