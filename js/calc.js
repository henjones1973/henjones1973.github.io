
function calculator() {
    // INPUT: This is where we will get the numbers and operators
    let number1 = document.getElementById("number1").value;
    let operator = document.getElementById("operator").value;
    let number2 = document.getElementById("number2").value;
    let answer = document.getElementById("answer").value;

    // Converts input from string to a float by using parsFloat
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    answer = parseFloat(answer);
   
  // assign the proper message according to the operator and answer  
  let message;

  switch (operator) {
    case '+':        
        if (number1 + number2 == answer){
            message = "Correct! Great Job!"
        }else {
            message = "Incorrect, please try again."
        }
        break;
    case '-':
        if (number1 - number2 == answer){
            message = "Correct! Great Job!"
        }else { 
            message = "Incorrect, please try again."
        }
        break;
    case '*':
            if (number1 * number2 == answer){
                message = "Correct! Great Job!"
            }else { 
                message = "Incorrect, please try again."
            }    
        break;
    case '/':            
            if (number1 / number2 == answer){
                message = "Correct! Great Job!"
            }else { 
                message = "Incorrect, please try again."
        }
        break;  
}          
document.getElementById('output').innerHTML = message
}