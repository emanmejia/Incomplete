// wow much JavaScript here
var pics = [
  "/IS445/NewSite/imgs/ford.JPG", //0
  "/IS445/NewSite/imgs/honda.JPG", //1
  "/IS445/NewSite/imgs/merc.JPG", //2
  "/IS445/NewSite/imgs/tauras.JPG", //3
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
  if(counter === 4){
    counter = 0;
  }
  img.src = pics[counter];
  counter = counter + 1;
});
