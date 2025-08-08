// let audio=document.querySelector("audio")

// let audio = document.createElement("audio"); 
// audio.src = "Saiyaara Title Track Mp3 Song 2025 singer by Tanishk Bagchi, Faheem Abdullah, Arslan Nizami, Irshad Kamil from Saiyaara 2025.mp3"
// let bodyref = document.querySelector(".player"); 

// audio.volume = 0.5; // 0.0 to 1.0
// bodyref.appendChild(audio); 

//    audio.addEventListener("timeupdate", () => {
//     const timeline = document.querySelector(".timeline");
//     timeline.max = audio.duration;
//     timeline.value = audio.currentTime;
//   });


// function play() {
//   audio.play();                    
// }

// function increase(){

//     audio.volume=Math.min(1,audio.volume + 0.1);


// }

// function decrease(){

//     audio.volume=Math.max(0,audio.volume-0.1);
// }

// function seekAudio(input) {
//     audio.currentTime = input.value;
//   }



let audio=document.createElement("audio");
let player=document.querySelector(".player");
audio.src="Saiyaara Title Track Mp3 Song 2025 singer by Tanishk Bagchi, Faheem Abdullah, Arslan Nizami, Irshad Kamil from Saiyaara 2025.mp3"
audio.volume=0.5;
player.prepend(audio);
let select=document.querySelector(".ri-play-fill");

function play(){

 
  if(select.className=="ri-play-fill"){
select.className="ri-pause-line"
audio.play();
  }
  else{
audio.pause();
select.className="ri-play-fill";


  }



}

function increase(){

  audio.volume=Math.min(1,audio.volume+0.1);

}

function decrease(){

  audio.volume=Math.max(0,audio.volume-0.1);

}











