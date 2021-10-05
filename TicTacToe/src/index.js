const View = require("./ttt-view")
const Game = require("./game")

document.addEventListener("DOMContentLoaded", () => {
  
  let view1 = new View({
    game: new Game(),
    el: document.querySelector(".ttt")
  });

  function Game(){
  }

});

window.View = View;
