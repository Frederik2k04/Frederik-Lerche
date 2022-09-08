
function draw (){
    background(255);
  }
  
  function moveButton() {
    button.position (random(width), random(height));
  }
  
  let img;
  var x = 0;
  var yellipse = 425;
  var yrect = 425;
  var yboat = 280;
  var xm = 1;
  var tid = 0;
  var fiskstart = false;
  var xpos = -200
  var x2pos = 900
  var xhas = 2
  var ximg4 = 0;
  var ximg5 = 0;
  var ximg6 = 0;
  var ximg7 = 0;
  var ximg8 = 0;
  var ximg9 = 0;
  var ximg10 = 0;
  var ximg11 = 0;
  var ximg12 = 0;
  var ximg13 = 0;
  var ximg14 = 0;
  var ximg15 = 0;
  function preload() {
    img1 = loadImage('images/boat.png');
    img2 = loadImage('images/fisher.png');
    img3 = loadImage('images/hook.png');
    img4 = loadImage('images/fish1.png');
    img5 = loadImage('images/fish2.png');
    img6 = loadImage('images/turtle.png');
    img7 = loadImage('images/sprutte.png');
    img8 = loadImage('images/fish1.png');
    img9 = loadImage('images/fish2.png');
    img10 = loadImage('images/turtle.png');
    img11 = loadImage('images/trash.png');
    img12 = loadImage('images/can.png');
    img13 = loadImage('images/trash.png');
    img14 = loadImage('images/can.png');
    img15 = loadImage('images/trash.png');
  
    
  
  }
  
  let button;
  
  function setup() {
    ximg4 = random(0,1000);
    ximg5 = random(0,1000);
    ximg6 = random(0,1000);
    ximg7 = random(0,1000);
    ximg8 = random(0,1000);
    ximg9 = random(0,1000);
    ximg10 = random(0,1000);
    ximg11 = random(0,1000);
    ximg12 = random(0,1000);
    ximg13 = random(0,1000);
    ximg14 = random(0,1000);
    ximg15 = random(0,1000);
    
    createCanvas(windowWidth,windowHeight);
    startbutton = createButton("START");
    startbutton.size(200, 55);
    startbutton.position(650,200);
    startbutton.style("font-family", "Bodoni");
    startbutton.style("font-size", "48px");
    startbutton.mousePressed(liftwater);
  
    
    
    }
  
  function draw() {
    //luften//
   background(50,120,200);
  
    fill(255, 255, 255);
    for (let i = 0; i < 60; i++) {
    ellipse (x + i * 80-1000, yellipse + 30, 100, 100);
   
  
  
  
      tid +=1;
      if(tid>40){
        tid=0;
      x += xm; 
      xpos += xhas;
      x2pos -= xhas;
      }
    if(x>600){
      x=0;
    }
  
        if(xpos>1300){
      xpos=-900;
    }
      
          if(x2pos<-900){
      x2pos=1300;
    }
      
  }
    rect(0,yrect + 30,10000,-1000)
    rect(0,yrect + 30,10000,-1000)
    
    noStroke();
    noFill();
      image(img1, 300, yboat);
      image(img2, 470, yboat + 40, 150, 150);
      image(img3, mouseX - 40, mouseY - 19, 70, 70 );
    
      strokeWeight(3);
      stroke(0,0,0);
      line(590, yboat + 43,mouseX, mouseY)
      noStroke();
    noFill();
    
    
    if (fiskstart){
  
  
      image(img4, xpos+ximg4, 200, 60, 60);
      image(img5, xpos+ximg5, 500, 60, 60);
      image(img6, xpos+ximg6, 400, 60, 60);
      image(img7, xpos+ximg7, 300, 60, 60);
      image(img8, x2pos+ximg8, 100, 60, 60);
      image(img9, x2pos+ximg9, 420, 60, 60);
      image(img10, x2pos+ximg10, 650, 60, 60);
      image(img11, x2pos+ximg11, 350, 60, 60);   
      image(img12, x2pos+ximg12, 100, 60, 60);
      image(img13, xpos+ximg13, 650, 60, 60);
      image(img14, xpos+ximg14, 350, 60, 60);   
      image(img15, xpos+ximg15, 100, 60, 60);
      
  if (mouseX<xpos+ximg4 + 35&& mouseX>xpos+ximg4-35&&mouseY<200 + 35&& mouseY>200-35){
      
      let s = 'hallo adem, Husk nu at fange skraldet og       ikke fiskne.';
      fill(250);
      textSize(60);
      text(s, 500, 300, 600, 300); 
      }
  if (mouseX<xpos+ximg5 + 35&& mouseX>xpos+ximg5-35&&mouseY<500 + 35&& mouseY>500-35){
      let s = 'hallo adem, Husk nu at fange skraldet og       ikke fiskne.';
      fill(250);
      textSize(60);
      text(s, 500, 300, 600, 300); 
      } 
   if (mouseX<xpos+ximg6 + 35&& mouseX>xpos+ximg6-35&&mouseY<400 + 35&& mouseY>400-35){
      let s = 'hallo adem, Husk nu at fange skraldet og       ikke fiskne.';
      fill(250);
      textSize(60);
      text(s, 500, 300, 600, 300); 
      }
  if (mouseX<xpos+ximg7 + 35&& mouseX>xpos+ximg7-35&&mouseY<300 + 35&& mouseY>300-35){
      let s = 'hallo adem, Husk nu at fange skraldet og       ikke fiskne.';
      fill(250);
      textSize(60);
      text(s, 500, 300, 600, 300); 
      }
  if (mouseX<x2pos+ximg8 + 35&& mouseX>x2pos+ximg8-35&&mouseY<100 + 35&& mouseY>100-35){
      let s = 'hallo adem, Husk nu at fange skraldet og       ikke fiskne.';
      fill(250);
      textSize(60);
      text(s, 500, 300, 600, 300); 
      }
  if (mouseX<x2pos+ximg9 + 35&& mouseX>x2pos+ximg9-35&&mouseY<420 + 35&& mouseY>420-35){
      let s = 'hallo adem, Husk nu at fange skraldet og       ikke fiskne.';
      fill(250);
      textSize(60);
      text(s, 500, 300, 600, 300); 
      }
  if (mouseX<x2pos+ximg10 + 35&& mouseX>x2pos+ximg10-35&&mouseY<650 + 35&& mouseY>650-35){
      let s = 'hallo adem, Husk nu at fange skraldet og       ikke fiskne.';
      fill(250);
      textSize(60);
      text(s, 500, 300, 600, 300); 
      }
  if (mouseX<x2pos+ximg11 + 35&& mouseX>x2pos+ximg11-35&&mouseY<350 + 35&& mouseY>350-35){
        print("hurra");
        ximg11 =2000;
      }
  if (mouseX<x2pos+ximg12 + 35&& mouseX>x2pos+ximg12-35&&mouseY<100 + 35&& mouseY>100-35){
        print("hurra");
        ximg12 =2000;
      }
  if (mouseX<xpos+ximg13 + 35&& mouseX>xpos+ximg13-35&&mouseY<650 + 35&& mouseY>650-35){
        print("hurra");
        ximg13 =2000;
      }
  if (mouseX<xpos+ximg14 + 35&& mouseX>xpos+ximg14-35&&mouseY<350 + 35&& mouseY>350-35){
        print("hurra");
        ximg14 =2000;
      }
  if (mouseX<xpos+ximg15 + 35&& mouseX>xpos+ximg15-35&&mouseY<100 + 35&& mouseY>100-35){
        print("hurra");
        ximg15 =2000;
      }
      
      
      
      
      
      }
  
  
  
    }
  
  function liftwater()
  {
    yellipse = 0;
    yrect = 0;
    yboat = 0 - 145;
    startbutton.hide();
    fiskstart = true;
  }
    
  
  function notworking(){
   
  }
  
  
  