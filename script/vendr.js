const userInput=document.getElementById("input1");
const addBtn=document.getElementById("add");
const subBtn=document.getElementById("sub");
const mulBtn=document.getElementById("mul");
const divBtn=document.getElementById("div");
const remBtn=document.getElementById("rem");
const currentCalculationOutput=document.getElementById("current-calculation");
const currentResultOutput=document.getElementById("current-result");




function outputResult(result,text){
    currentResultOutput.textContent=result;
    currentCalculationOutput.textContent=text;
}
