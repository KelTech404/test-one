// //Day 5 HOMEWORK PRACTICE: Variables and DataTypes in JavaScript

//SKILLS GROWTH NOTE: IN THIS LESSON, I WAS ABLE TO IDENTIFY SYNTAX ERRORS AND CORRECT THEM FASTER THAN THE PREVIOUS LESSON WHICH, AND WAS ABLE TO SEE GROWTH IN JUST ONE DAY.
//LESSON LEARNED: TO CONTINUE TO REVIEW CODE FOR SYNTAX ERRORS AND ASK FOR HELP IF I FEEL I'VE OVERLOOKED AN ERROR IN THE CODE.
// //Test user credentials - Strings
let username = 'TestUser123';
let password = 'SecurePass123!';
let email = 'test@automation.com';

// //Test counter - Numbers
let loginAttempts = 0;
let testPassed = 5;
let testFailed = 2;

// Test status - Boolean
let isLoggedIn = false;
let isTestComplete = true;
let debugMode = false;

//USING VARIABLES IN AUTOMATION LOGIC
console.log('=== Test Automation Data ===');
console.log('Username:', username);
console.log('Email:', email);
console.log('Login attempts:', loginAttempts);
console.log('Tests passed:', testPassed);
console.log('User logged in:', isLoggedIn);
console.log('Test complete:', isTestComplete);


//Day 5 PRACTICE: CONST vs LET.Variables and DataTypes in JavaScript
//const for values that never change in your tests
const websiteUrl = 'https://testamplify.com';
const maxRetries = 3;
const testTimeout = 30000;

//let for values that change during test execution; 
let currentPage = 'login'; 
let testResults =[]; 
let errorCount = 0;

//This would cause an error:
//websiteUrl = 'https://different.com'; ERROR because the 
//const variable was already set to a different website. 

//But this works fine:
// NOTE: HERE, I INITIALLY RECEIVED AN INCORRECT ERROR COUNT OF 0. I NEEDED TO UNCOMMENT 'errorCount' SO THE CODE WOULD RUN.
currentPage = 'dashboard';
errorCount = errorCount +1;
console.log('Website URL:', websiteUrl);
console.log('Current Page:', currentPage);
console.log('Error Count:', errorCount);
// THIS TEST PASSED SUCCESSFULLY AFTER FIXING THE ERROR.

//ADDITIONAL PRACTICE FROM LESSON 5
let testerName = 'Vanessa';
let experience = 2;
console.log('Name:', testerName);
console.log('Tester:', testerName + '| Years of QA Automation Experience:', experience);

//EXAMPLE 2
let testCases= ['Login', 'Signup', 'Checkout'];
console.log(testCases [0]); // Outputs: Login 

let user= {
'name': 'Anna',
'role': 'QA Engineer',
'location': 'Atlanta',
}
