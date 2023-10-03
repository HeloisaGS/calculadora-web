const input =  document.getElementById("display")
let equation = "";
function showValue(element) {
    equation += element.value;
    console.log(`equação value: ${equation}`);
    //para aparecer no input
   input.value = equation
}
function showResult() {
    const result = eval(equation)
    console.log(`equação:${equation}`);
    console.log(`Resultado:${result}`);
    //para aparecer no input    
    input.value = result;
    let operacao = document.querySelector(".operacao");
    if (operacao) {
        equation=result;
    }
}
//--------------------------------------------------
clear.addEventListener("click", () =>
    clearInput()
);
cancelEntry.addEventListener("click", () =>
    removeLastAdd()
);
//--------------------------------------------------
function clearInput() {
    input.value = "";
    equation = "";
}

function removeLastAdd() {
    equation = equation.slice(0, -1);//remove ultimo caracter
    input.value = equation;
}





//eval  = transforma string em operaçao matemática

//tem que ajeitar a parte do resultado
//tem que colocar um botão de apagar


//Capturar valor no teclado

