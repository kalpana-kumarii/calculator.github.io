const defaultResult=0;
let currentResult=defaultResult;
let currentCalculation=9;
let logEntries=[];
// document.getElementById("demo").innerHTML=currentCalculation;

// alert("he");
// alert('the result is ');
// const defaultValue=30;


// let currentResult=defaultValue;
// let currentCalculation=7+" hello";
// let currentCalculation=`(${defaultValue}+10)*3/2-1`

//  ===================function start=====================


// function addition(num1, num2){
//     const result=num1+num2;
//     alert('the result is '+result);
// }
// addition(7,8);


// function addition(num1, num2){
//     const result=num1+num2;
//     return  result;
// }
// const additionResult=addition(7,8);
// currentResult=additionResult;

// function addition(num1, num2){
//     const result=num1+num2;
//     return result;
// }
// addition();




// -------it will concartenate the number like - 1+2= 12--------        
//     currentResult=currentResult + userInput.value;
//     outputResult(currentResult,'');      
//     alert(currentResult);
   
// }
// ------------it will add the Number and give integer value--------------



// function add(){
//     const calDescription=`${currentResult} + ${userInput.value}`;
//     currentResult=currentResult + parseInt(userInput.value);
//     // currentResult=currentResult + +userInput.value;
//     outputResult(currentResult,calDescription);
   
   
// }



function getUserInput(){
    return parseInt(userInput.value);
}
function createAndWriteOutput(opertor, resultBeforeCalc, calcNumber){
    const calDescription=`${resultBeforeCalc} ${opertor} ${calcNumber}`;
    outputResult(currentResult,calDescription);
} 
function writeToLog(operationIndentifier,prevResult,operationNumber,newResult){
 // =========object===========
 const logEntry={
    operation: operationIndentifier,
    prevResult:prevResult,
    number: operationNumber,
    result: newResult
 };
 logEntries.push(logEntry);
 console.log(logEntry.operation);
// ----Array--------
    // logEntries=[enteredNumber];
    // logEntries.push(enteredNumber);
    console.log(logEntries);
    // console.log(logEntries[1]);
}

function add(){
   
    const enteredNumber=getUserInput();    // const enteredNumber= parseInt(userInput.value);
    // const calDescription=`${currentResult} + ${enteredNumber}`;
    // currentResult=currentResult + enteredNumber;
    // currentResult=currentResult + +userInput.value;
    // outputResult(currentResult,calDescription);
    const initialResult=currentResult;
    currentResult=currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
    writeToLog('+',initialResult,enteredNumber,currentResult);
   
   
}



function sub(){
    const enteredNumber=getUserInput();  
    const initialResult=currentResult;
    currentResult=currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
    writeToLog('-',initialResult,enteredNumber,currentResult);

}
function mul(){
    const enteredNumber=getUserInput(); 
    const initialResult=currentResult;
    currentResult=currentResult*enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
    writeToLog('*',initialResult,enteredNumber,currentResult);
    
}
function div(){
    const enteredNumber=getUserInput(); 
    const initialResult=currentResult;
    currentResult=currentResult/enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
    writeToLog('/',initialResult,enteredNumber,currentResult);
    
}
function rem(){
    const enteredNumber=getUserInput(); 
    const initialResult=currentResult;
    currentResult=currentResult%enteredNumber;
    createAndWriteOutput('%',initialResult,enteredNumber);
    writeToLog('%',initialResult,enteredNumber,currentResult);
    
}

//  ===================Array start=====================

addBtn.addEventListener('click', add);
subBtn.addEventListener('click',sub);
mulBtn.addEventListener('click',mul);
divBtn.addEventListener('click',div);
remBtn.addEventListener('click',rem);



// outputResult(currentResult,currentCalculation);

// addEventListener( 'click',outputResult);




























