function time(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let sec = date.getSeconds();

    if (hour < 10){
        hour = '0' + hour;
    }

    if (min < 10){
        min = '0' + min;
    }

    switch (month){
        case 1:
            day = "January";
            break;

        case 2:
            month = "February";
            break;
            
        case 3:
            month = "March";
            break;
            
        case 4:
            month = "April";
            break;

        case 5:
            month = "May";
            break;
            
        case 6:
            month = "June";
            break;

        case 7:
            month = "July";
            break;

        case 8:
            month = "August";
            break;
            
        case 9:
            month = "September";
            break;

        case 10:
            month = "October";
            break;

        case 11:
            month = "November";
            break;
            
        case 12:
            month = "December";
            break;

        default:
            month = "Broken";
            break;
    }

    document.getElementById("hour").innerHTML = `${hour},`;
    document.getElementById("minute").innerHTML = `${min},`;
    document.getElementById("day").innerHTML = `${day},`;
    document.getElementById("month").innerHTML = `${month},`;
    document.getElementById("year").innerHTML = `${year},`;
    document.getElementById("second").innerHTML = `${sec},`;
}

time();

setInterval(time, 1000);

const clock = {
    month: 1,
    day: 1
}