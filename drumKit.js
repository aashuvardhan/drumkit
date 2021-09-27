function sound(key) {
    switch (key) {
        case "CRASH(Q)":
        const sound1 = new Audio("sounds/crash.mp3");
        sound1.play();
        break;
    
        case "KICK(W)":
        const sound2 = new Audio("sounds/kick-bass.mp3");
        sound2.play();
        break;
    
        case "SNARE(E)":
        const sound3 = new Audio('sounds/snare.mp3');
        sound3.play();
        break;
    
        case "TOM 1(R)":
        const sound4 = new Audio('sounds/tom-1.mp3');
        sound4.play();
        break;
    
        case "TOM 2(T)":
        const sound5 = new Audio('sounds/tom-2.mp3');
        sound5.play();
        break;
    
        case "TOM 3(Y)":
        const sound6 = new Audio('sounds/tom-3.mp3');
        sound6.play();
        break;
    
        case "TOM 4(U)":
        const sound7 = new Audio('sounds/tom-4.mp3');
        sound7.play();
        break;

        case "q":
        const sound8 = new Audio("sounds/crash.mp3");
        sound8.play();
        break;
    
        case "w":
        const sound9 = new Audio("sounds/kick-bass.mp3");
        sound9.play();
        break;
    
        case "e":
        const sound10 = new Audio('sounds/snare.mp3');
        sound10.play();
        break;
    
        case "r":
        const sound11 = new Audio('sounds/tom-1.mp3');
        sound11.play();
        break;
    
        case "t":
        const sound12 = new Audio('sounds/tom-2.mp3');
        sound12.play();
        break;
    
        case "y":
        const sound13 = new Audio('sounds/tom-3.mp3');
        sound13.play();
        break;
    
        case "u":
        const sound14 = new Audio('sounds/tom-4.mp3');
        sound14.play();
        break;
    
        default: console.log(key);
    }
}

function animation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
  }
    

const numberOfButtons = document.querySelectorAll("button").length;

for (let j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll("button")[j]
    .addEventListener("click", function() {
      const buttonStyle = this.innerText;
      sound(buttonStyle);
      const classes=this.classList;
      
      animation(classes[0]);
  });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
  });