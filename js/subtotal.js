
//INPUT FROM USER
 function calculateSubtotal(){
    let dayOfWeek = new Date().getDay();
    let subTotal = parseFloat(document.getElementById('subtotal').value);
    let newTotal;
    
    dayOfWeek = 1;

    //SUBTRACT 10% FROM SUBTOTAL IF GREATER THAN 50
    if ((dayOfWeek == 2 || dayOfWeek == 3) && subTotal > 50){
        newTotal = (subTotal - .10 * subTotal) * 1.06;
    }
    else{
        newTotal = subTotal * 1.06; 
    }

    return newTotal;
}
