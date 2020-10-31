function alarmClock(){

    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    let message = "";

    if (dayOfWeek == 6 || dayOfWeek == 0){
        message = "Sleep In";
    }
    else if (month == 12 && dayOfMonth == 25){
        message = "Sleep In";
    }
    else if ( month == 0 && dayOfMonth == 1){
        message = "Sleep In";
    }
    else if ( month == 7 && dayOfMonth == 1){
        message = "Sleep In";
    }
    else {
        message = "Get Up";    
    }

    return message;
}
