
//document.querySelector('button') will only select the first button
// addEventListener info: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//document.querySelector('button').addEventListener('click', handleClick)

numberOfButtons = document.querySelectorAll('.Animal').length;


for (var i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll('.Animal')[i].addEventListener("click", getAnimalName);

    console.log(this);
    
}


function getAnimalName() {
    //var audio = new Audio('Sounds/elephant.mp3');
    //audio.play();
    let animalName = this.querySelector('.Label').textContent.toLowerCase();

    var soundToPlay = new Audio('Sounds/' + animalName + '.mp3');
    soundToPlay.play();

}