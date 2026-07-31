const dropDate = new Date("August 1, 2026 00:00:00").getTime();


const countdown = setInterval(function() {


    const now = new Date().getTime();

    const distance = dropDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;



    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
        "drop 001 is live";

    }


}, 1000);
const sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            section.classList.add("show");
        }

    });

});
