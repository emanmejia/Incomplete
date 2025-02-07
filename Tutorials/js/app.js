// wow much JavaScript here
var pics = [
  "/IS445/Tutorials/imgs/kitty_bed.JPG", //0
  "/IS445/Tutorials/imgs/kitty_basket.JPG", //1
  "/IS445/Tutorials/imgs/kitty_laptop.JPG", //2
  "/IS445/Tutorials/imgs/kitty_door.JPG", //3
  "/IS445/Tutorials/imgs/kitty_sink.JPG", //4
  "/IS445/Tutorials/imgs/kitty_wall.JPG" //5
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
  if(counter === 6){
    counter = 0;
  }
  img.src = pics[counter];
  counter = counter + 1;
});
