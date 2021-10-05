const Index = require("./index");

let MOVE_NUM = 0;

class View {
  constructor(options) {
    this.game = options.game;
    this.el = options.el;
    this.setupBoard();
  }

  setupBoard() {
    let ul = document.createElement("ul");
    ul.style.display = "flex";
    ul.style.width = "600px";
    ul.style.height = "600px";
    ul.style.flexWrap = "wrap";
    ul.style.margin = "0 auto";
    ul.style.paddingLeft = "20px";
    ul.style.listStyleType = "none";

    for (let i = 0; i < 9; i++) {
      let li = document.createElement("li");
      li.style.display = "inline-block";
      li.style.width = "180px";
      li.style.height = "180px";
      li.style.marginRight = "20px";
      li.style.backgroundColor = "red";
      li.style.display = "flex";
      li.style.justifyContent = "center";
      li.style.alignItems = "center";
      

      li.setAttribute("data-index-number", i);

      li.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "blue";
      });

      li.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "red";
      });

      li.addEventListener("click", (e) => this.handleClick(e));

      ul.appendChild(li);
    };

    this.el.appendChild(ul);
  }
  
  bindEvents() {}

  handleClick(e) {
    if(MOVE_NUM % 2 === 0){
      e.target.innerHTML = "<img style='width: 150px; height: 150px;' src='https://images.theconversation.com/files/129851/original/image-20160708-24096-1mslcn7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'></img>";
    }else{
      e.target.innerHTML = "<img style='width: 150px; height: 150px;' src='https://m.media-amazon.com/images/I/81t1BZc5CNL._AC_UL1500_.jpg'></img>";
    }
    MOVE_NUM++;
  }

  makeMove(square) {}

}

module.exports = View;
