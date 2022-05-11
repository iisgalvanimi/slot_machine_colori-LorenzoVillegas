const domBtn = document.getElementById("btnStart");
const elementsClass = document.getElementsByClassName("quadrato");
const message = document.getElementById("message");
const elements_array=Array.from( elementsClass );
const quad0 = document.getElementById("q0");
const quad1 = document.getElementById("q1");
console.log(elementsClass);
let myInterval;
let num = 0;

function startCounter(){
    myInterval = setInterval( gambling , 2000);

    if (typeof(myInterval) != "undefined") { return ; }
  } 

function fineTimer(){
    clearInterval(myInterval)
 
   if (typeof(myInterval) == "undefined") { 
    return ; 
}

   
 }

  function gambling() {
    num++;
    if ( num <= 3) {
        for ( let i = 0; i < elementsClass.length; i++) {
            let rnd = Math.random()* 3;
            rnd = Math.trunc(rnd);
            if (rnd == 1) {
                elements_array[i].style.backgroundColor = "#FF0000";
                elements_array[i].innerHTML= "red";
            } 
            else if (rnd == 2) {
                elements_array[i].style.backgroundColor = "#00FF00";
                elements_array[i].innerHTML = "green";
            }
            else if (rnd == 3) {
                elements_array[i].style.backgroundColor = "#0000FF";
                elements_array[i].innerHTML = "blue";
            }
          }
    }

    if (num > 3) {
        if (quad0.style.backgroundColor == quad1.style.backgroundColor) {
            message.innerHTML = "Hai vinto!"
            num = 0;
            fineTimer();
        } else {
            message.innerHTML = "Hai perso!"
            num = 0;
            fineTimer();
        }
        
    }
      
  }

  domBtn.addEventListener( 'click' , startCounter);