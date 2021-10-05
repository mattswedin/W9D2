const Index = require("./index")

class View {
  constructor(game, el) {}

  setupBoard() {}
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

function View() {
  this.game = new Game()
  this.el = document.querySelector(".ttt")
  this.setupBoard()
}

View.prototype.setupBoard = function () {
  console.log("In setupBoard! :)")
  let ul = document.createElement("ul");
  ul.style.display("flex");
  ul.style.width("50%");
  ul.style.flexWrap("wrap");

  for (let i = 0; i < 9; i++) {
    let li = document.createElement("li");
    li.setAttribute("data-index-number", i);

    ul.appendChild(li);
  };

  this.el.appendChild(ul);

};

module.exports = View;
