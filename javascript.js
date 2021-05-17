const countdown = () => {
    const countDate = new Date('May 22, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24; 

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;
};

setInterval(countdown, 1000);



function clock() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;



if (hourNow > 18) {
    greeting = "Good afternoon";
}else if (hourNow > 12) {
    greeting = "Good evening";
}else if (hourNow > 0) {
    greeting = "Good morning";
}else {
    greeting = "Welcome!";
}

document.querySelector(".greeting_txt").innerHTML = greeting;

};

clock();

