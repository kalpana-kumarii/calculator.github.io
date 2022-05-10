const defaultResult=0;
let currentResult=defaultResult;
let currentCalculation=9;
let logEntries=[];

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

