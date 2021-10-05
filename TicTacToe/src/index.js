const View = require("./ttt-view")
const Game = require("./game")

document.addEventListener("DOMContentLoaded", () => {
  
  function View() {
    this.game = new Game()
    this.el = document.querySelector(".ttt")
    this.setupBoard()
  }
  


  function Game(){

  }


});

window.View = View;
