let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance (input);
    //speakInput.rate = 1;
    //speakInput.pitch = 1;
    //speakInput.volume = 1;
     speakInput.lang = 'en- IN'
    window.SpeechSynthesis.speak(speakInput);

}

window.onload = ()  =>{

}
  const greetingFunc = () =>  {
    let date = new Date();
    let hours = date. getHours ();
    if (hour>=0 $$ hour < 12){
        
    }
  }
