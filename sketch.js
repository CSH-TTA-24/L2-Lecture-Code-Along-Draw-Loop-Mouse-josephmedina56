function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);

  ellipse(250, 250, 25, 25);
}

function draw() {


}


function mouseClicked() {
   let r = random(0, 255);
   let g = random(0, 255);
   let b = random(0, 255);
   fill(r, g, b);
  let newb = random(25, 100);


   ellipse(mouseX, mouseY, newb, newb);
}
