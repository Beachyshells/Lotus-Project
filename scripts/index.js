function updateHeading(newHeading) {
  let heading = document.querySelector("h1");
  heading.innerHTML = newHeading;
}

function breatheIn() {
  let name = prompt("What is your name?");
  let favFlower = prompt("What is your favorite flower");

  if (favFlower === "rose") {
    updateHeading(
      `<span id="flower">${favFlower}🌹</span><br/><span id="greeting"> Hello ${name}</span><br /><span class="encouragement"> Just breathe...you've got this!</span> `
    );
  } else {
    updateHeading(
      `${favFlower}💐<br/><span id= "greeting"> Hello ${name}</span><br/><span class="encouragement">Just breathe...you've got this! `
    );
  }
}

let positivityButton = document.querySelector("button");

positivityButton.addEventListener("click", breatheIn);
