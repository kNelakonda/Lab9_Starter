let form = document.querySelector('form');
    form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));


errorBtns[0].addEventListener("click", () => {
    console.log("used console.log on this button");
});

errorBtns[1].addEventListener("click", ()=>{
    console.error("used console.error on this button");
});

errorBtns[2].addEventListener("click", ()=>{
    console.count("used console.count on this button");
});

errorBtns[3].addEventListener("click", ()=>{
    console.warn("used console.warn when this button is clicked");
});

errorBtns[4].addEventListener("click", ()=>{
    console.assert( "".length > 1 ,"used console.assert when this button is clicked because an empty string's length is not greater than 1");
});

errorBtns[5].addEventListener("click", ()=>{
    console.clear("used console.clear when this button is clicked");
});

errorBtns[6].addEventListener("click", ()=>{
    console.dir(document.querySelector("#error-btns"));
});

errorBtns[7].addEventListener("click", ()=>{
    console.dirxml(document.querySelector("#error-btns"));
});

errorBtns[8].addEventListener("click", ()=>{
    console.group();
    console.log("the first grouped message");
    console.log("the second grouped message");
    console.log("the last grouped message");
});

errorBtns[9].addEventListener("click", ()=>{
    console.groupEnd();
});

errorBtns[10].addEventListener("click", ()=>{
    console.table(errorBtns);
    console.log("wow that's a large table above me");
});

errorBtns[11].addEventListener("click", ()=>{
    console.time();
    let count = 1;
    for( let i = 0; i < 50; i += 1 ){
        count += count;
        console.log(count);
        
    }
});

errorBtns[12].addEventListener("click", ()=>{
    console.timeEnd();
    console.log("ended the timer");
});

errorBtns[13].addEventListener("click", ()=>{
    console.log("using trace below");
    first();
});

function first(){
    second();
}

function second(){
    third();
}

function third(){
    console.trace("hello");
}

errorBtns[14].addEventListener("click", () =>{
    
        try{
            let firstInput = document.querySelector("#first-num");
            let secondInput = document.querySelector("#second-num");
            const priority = checkSpaces(firstInput, secondInput);

        } catch(err) {
            console.error("you had an undefined function, see why", err);
            throw new CalculationError("Some characters are not numbers");
            
        } finally {
            console.log("make sure you only use numbers in the calculator");
        }
})

class CalculationError extends Error {
    constructor(message){
        super(message);
        this.name = "Calculation Error";
    }
}

window.onerror = function(message, url, lineNum, columnNum, error){
    console.log("there was an error at line: ", lineNum, "and column:", columnNum);
    alert("an error occured");
};

TrackJS.track("Testing TrackJS!");