x = 0;

y = 0;
screen_width = 0;

screen_height = 0;

orange = "";

speak_data = "";

to_number = "";

draw_orange = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()

{

  document.getElementById("status").innerHTML = "System is listening please speak";  
  
  recognition.start();

} 
 
recognition.onresult = function(event) 

{

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
   
    to_number = Number(content);
   
    console.log(to_number);
    
    if(Number.isInteger(to_number))
    
    {

      document.getElementById("status").innerHTML = "Started Drawing orange"; 

      draw_orange = "set";

    }

    else
    
    {
       
      document.getElementById("status").innerHTML = "The speech has not recognized a number"; 
    
    }

}

function setup() 

{

  screen_width = window.innerWidth;

  screen_height = window.innerHeight;

  canvas = createCanvas(screen_width,screen_height-150);

  canvas.position(0,150);

}

function draw() 

{

  if(draw_orange == "set")
  
  {

    document.getElementById("status").innerHTML = to_number + " oranges drawn";

    draw_orange = "";

    speak_data = to_number + "oranges Drawn";

    speak();

    for(var i = 1; i <= to_number; i++)
    
    {

      x = Math.floor(Math.random() * 1400);

      y = Math.floor(Math.random() * 550);

      image(orange , x, y, 50, 50);

    }

  }

}

function speak()

{

  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";

}

function preload()

{

  orange = loadImage("Orange.png");

}