const button = document.querySelectorAll("button");
const result=document.getElementById("result");
const numbers=document.getElementsByClassName("number");

for(let i=0;i<button.length;i++){
   button[i].addEventListener("click",()=>{
    const btnValue=button[i].textContent;
    
    if(btnValue==="C"){
        clearResult();
    }
    else if(btnValue==="="){
        calculateResult();
    }
    else{
        appendValue(btnValue);
    }
   })                                     
}
function clearResult(){
    result.value="";
}
function calculateResult(){
    result.value=eval(result.value);
}
function appendValue(){
    result.value=result.value+btnValue;
}

