let codElement = document.querySelector('#funcaoSelecionada');
let input1 = document.querySelector('#firstNumber');
let input2 = document.querySelector('#secNumber');
let input3 = document.querySelector('#funcaoSelecionada')
let btnCampo = document.querySelector('#newInput');
let opcao = false;

function criaNovoCampo(){
    let btnCampo = document.querySelector('#newInput');
    let  input4 = document.createElement('input');
    input4.setAttribute('placeholder', 'Insira um valor');
    input4.setAttribute('id', 'entrada3');
    input4.setAttribute('type', 'number');
    document.getElementById('entrada').appendChild(input4); 
    btnCampo.setAttribute('value', '-');
    btnCampo.setAttribute('onclick', 'removeCampo()'); 
    opcao = true;   
}

function removeCampo(){
    let btnCampo = document.querySelector('#newInput');
    btnCampo.setAttribute('value', '+');
    let novocampo = document.querySelector('#entrada3');
    novocampo.remove();
    btnCampo.setAttribute('onclick', 'criaNovoCampo()'); 
    opcao = false;
}

function chamaCalc(){
    let input1 = document.querySelector('#firstNumber');
    let input2 = document.querySelector('#secNumber');
    let input3 = document.querySelector('#funcaoSelecionada');
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let funcao = input3.value;

    if(funcao == ""){
        alert("Selecione uma função!");
    }

    if(funcao == "Soma"){    
        let resultado = num1 + num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = resultado;
        displayForm.value = num1 + " + " + num2;
    }

    if(funcao == "Subtração"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
    
        let resultado = num1 - num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = resultado;
        displayForm.value = num1 + " - " + num2;
    }

    if(funcao == "Divisão"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
    
        let resultado = num1 / num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = resultado;
        displayForm.value = num1 + " / " + num2;
    }

    if(funcao == "Multiplicação"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
    
        let resultado = num1 * num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = resultado;
        displayForm.value = num1 + " * " + num2;
    }

    if(funcao == "Porcentagem"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
    
        let resultado = num1 * num2/100;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = resultado;
        displayForm.value = num1 + " * " + num2 + "/ 100";
    }

    if(funcao == "Raiz Quadrada"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
    
        let resultado = num1 * num2/2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = resultado;
        displayForm.value = 'v²' + num1 + " * " + num2;
    }

    if(funcao == "Baskara"){
        if (input1 && input2 == ""){
            alert('Adicione valores');
        } 
        else {
            let inputResult = document.querySelector('#displayResult');
            let displayForm = document.querySelector('#displayForm');
            let input1 = document.querySelector('#firstNumber');
            let input2 = document.querySelector('#secNumber');
            let input4 = document.querySelector('#entrada3');
            let num1 = parseFloat(input1.value);
            let num2 = parseFloat(input2.value);
            let num3 = parseFloat(input4.value);
            resultado = num1 + num2 + num3;
            inputResult.value = resultado;
            displayForm.value = 'N1 + N2 + N3';
        }
    }

    if(funcao == "Velocidade"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
        let resultado1 = num1/num2;
        let resultado = num1 * 1000/num2/60;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = 'Km/h: ' + `${resultado1}` + ' | m/s: ' + `${resultado}`;
        displayForm.value = 'ΔS / ΔT';
     
    }

    if(funcao == "Força"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
      
        let resultado = num1 * num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = 'F: ' + `${resultado}` + ' Newtons';
        displayForm.value = 'F = m * a';  
    }

    if(funcao == "Distancia"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
      
        let resultado = num1 * num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = 'D: ' + `${resultado}`;
        displayForm.value = 'D = v * t'; 
    }

    if(funcao == "Volts"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
      
        let resultado = num1 * num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = 'U: ' + `${resultado}`;
        displayForm.value = 'U = r * i'; 
    }

    if(funcao == "Densidade"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
      
        let resultado = num1 / num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = 'd: ' + `${resultado}`;
        displayForm.value = 'd = m * v';
    }

    if(funcao == "QuiloWatts"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
      
        let resultado = num1 * num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = 'R$: ' + `${resultado}`;
        displayForm.value = 'R$ = kwh  *  tarifa';
    }

    if(funcao == "Massa"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
      
        let resultado = num1 * num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = 'M: ' + `${resultado}`;
        displayForm.value = 'M = v * d';
    }

    if(funcao == "Volume"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
      
        let resultado = num1 / num2;
        let inputResult = document.querySelector('#displayResult');
        let displayForm = document.querySelector('#displayForm');
        inputResult.value = 'V: ' + `${resultado}`;
        displayForm.value = 'V = m / d';
    }

    if(funcao == "Personalizada"){
        let input1 = document.querySelector('#firstNumber');
        let input2 = document.querySelector('#secNumber');
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);        
    }
  
}


function chamaClear(){
    let input1 = document.querySelector('#firstNumber');
    let input2 = document.querySelector('#secNumber');
    let input3 = document.querySelector('#funcaoSelecionada');
    let inputResult = document.querySelector('#displayResult');
    let displayForm = document.querySelector('#displayForm');
    input1.value = "";
    input2.value = "";   
    input3.value = "";
    inputResult.value = "";
    displayForm.value = "";

    if(input1.value == ""){

    }
}


//Function Share

function compartilhar(){
	let inputResult = document.querySelector('#displayResult');
    let displayForm = document.querySelector('#displayForm');

	let shareResult = { 
	 text: "Fórmula: " + `${displayForm.value}` + " | Resultado: " + `${inputResult.value}`,
	}
	if (typeof navigator.share === 'function'){
	navigator.share(shareResult)
		.then(() =>
	 	alert('Resultado compartilhado com sucesso')
		)
		.catch((e) =>
	 	alert('Erro: ' + e)
	 )
	}
}



