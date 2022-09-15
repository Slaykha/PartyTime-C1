function getTime(){
    var interval = 1000
    var now = "00:00:00"

    document.getElementById("clock").innerText = new Date().toLocaleTimeString()

    setInterval(() => {
        now = new Date().toLocaleTimeString()
        
        document.getElementById("clock").innerText = now

    }, interval);
}

function buttonClick(){
    document.body.style.background = "black";
    var button = document.getElementById("button")
    var h1 = document.getElementById("h1")
    var h3 = document.getElementById("clock")

    h1.classList.add("animateH1")
    h3.classList.add("animateH3")
   
    button.classList.remove("button")
    button.classList.add("buttonPosition")

    setTimeout(() => {
        opening.play()
        button.classList.add("animateButton")
        setTimeout(() => {
            button.classList.remove("animateButton")
            button.classList.add("buttonFade")
            setTimeout(() => {
                lifeGoesOn()
            }, 600);
        }, 2000);
    }, 1500);

}

function lifeGoesOn(){
    var background = document.body
    var lifeGoesOn = true

        setTimeout(() => {
            background.style.background = "red"
            setTimeout(() => {
                background.style.background = "blue"
                setTimeout(() => {
                    background.style.background = "green"
                    setTimeout(() => {
                        background.style.background = "yellow"
                        setTimeout(() => {
                            background.style.background = "red"
                            setTimeout(() => {
                                background.style.background = "blue"
                                setTimeout(() => {
                                    background.style.background = "green"
                                    setTimeout(() => {
                                        background.style.background = "yellow"
                                        setTimeout(() => {
                                            opening.pause()
                                        }, 500);
                                    }, 750);
                                }, 1500);
                            }, 1500);
                        }, 1500);
                    }, 750);
                }, 750);
            }, 1500);
        }, 1500);


}

var opening = new Audio("sounds/openinng2.wav")
document.getElementById("button").classList.add("buttonFeatures")


getTime()