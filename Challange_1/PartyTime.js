function getTime(){
    var interval = 1000
    var now = "00:00:00"

    document.getElementById("clock").innerText = new Date().toLocaleTimeString()

    setInterval(() => {
        now = new Date().toLocaleTimeString()
        
        document.getElementById("clock").innerText = now

    }, interval);
}

function audioAnalyzer(){
    const ctx = new AudioContext();
    const audioSrc = ctx.createMediaElementSource(opening);
    const analyser = ctx.createAnalyser();

    audioSrc.connect(analyser);
    analyser.connect(ctx.destination);

    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount
    const frequencyData = new Uint8Array(bufferLength)

    setInterval(() => {
        analyser.getByteTimeDomainData(frequencyData);
        let dataArray = Object.values(frequencyData);
        if (dataArray[50] > 100) {  
          /*window.requestAnimationFrame(
            await changeBgColor(dataArray)
          )*/
          changeBgColor()
        }
      }, 500);
}

const changeBgColor = () => {
    var colorArray = ["red", "yellow", "green", "blue"]
    var background = document.body

    background.style.background = colorArray[number]

    if(number < 3){
        number = number + 1;
    }else{
        number = 0
    }
}

const jumpEffect = () => {
    var h3 = document.getElementById("clock")
    h3.classList.add("jumpH3")

    h3.classList.add("jumpDownH3")
    setTimeout(() => {
        h3.classList.remove("jumpDownH3")
        
    }, 50);

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

const expandSquare = () => {
    square.classList.add("squareExpand")
}

const Square = () => {
    square.classList.add("square")
}

function lifeGoesOn(){
    var h3 = document.getElementById("clock")
    h3.classList.remove("animateH3")

        setTimeout(() => {            
            changeBgColor()
            jumpEffect()


            setTimeout(() => {
                jumpEffect()

                changeBgColor()
                setTimeout(() => {
                    changeBgColor()
                    jumpEffect()

                    setTimeout(() => {
                        changeBgColor()
                        jumpEffect()

                        setTimeout(() => {
                            changeBgColor()
                            jumpEffect()

                            setTimeout(() => {
                                changeBgColor()
                                jumpEffect()

                                setTimeout(() => {
                                    changeBgColor()
                                    jumpEffect()

                                    setTimeout(() => {
                                        changeBgColor()
                                        jumpEffect()

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
var number = 0
const square = document.getElementById("square")


var opening = new Audio("sounds/openinng2.wav")

document.getElementById("button").classList.add("buttonFeatures")


getTime()