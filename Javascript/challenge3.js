let change = document.getElementById("change");

function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

change.addEventListener("mouseover", function(event) {
    event.target.style.color = "orange";
});
