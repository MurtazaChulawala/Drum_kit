var array = document.querySelectorAll("button");          //selecting all the buttons from html
for (var i = 0; i < array.length ; i++){                  //running for loop to iterate through each and every button
    array[i].addEventListener("click",function() {        //adding an eventlistener so to get the click of the button and perform the task.
        var value = this.innerHTML;                       //using this keyword to find out which particular button was responsible and to get its innerhtml content.
        playSound(value);                                 //calling the playSound function and passing in the value.
        buttonAnimation(value);
      });}
document.addEventListener("keydown",function(event) {     //adding an eventlistener to whole page so that can track the keypresses.
  playSound(event.key);                                   //capturing the key responsible for the event to happen.
  buttonAnimation(event.key);
})
function playSound(value){                                //A function responsible to play the sounds when the switch case is true for certain value.
  switch (value) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");           //creating an object using default Audio constructor and sending in the location.
      tom1.play();                                        //calling the inbuilt play() function attached to the object to play the sound.
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default: console.log(value);                          //logging in the value apart from the desired one.
      break;
  }
}

function buttonAnimation(key){                            //creating a function to change the styling of the pressed key.
  var currentkey = document.querySelector("."+key);
  currentkey.classList.add("pressed");                    //adding a new class of pressed to the class list of the button to apply the new styling.
  setTimeout(function(){                                  //setting a timeout function to remove the class after 150ms to get the actual button effect.
    currentkey.classList.remove("pressed")},150);
}