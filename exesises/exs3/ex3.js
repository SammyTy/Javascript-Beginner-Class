// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const userAge = prompt('whats your age');
// get the html element to display the result instead of console.log
let feedback = document.querySelector(".feedBack")
if (userAge >= 18) {
    feedback.textContent = 'you are old enough to drive'
}else {
    let waitTime = 18 -userAge;
    feedback.textContent = `you have ${waitTime} years left to be eligible to drive`
};

