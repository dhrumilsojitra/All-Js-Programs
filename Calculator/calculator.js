function display(txt) {
  document.getElementById("output").value += txt;
}
function erase() {
  let x = document.getElementById("output").value;
  let y = x.slice(0, -1);
  document.getElementById("output").value = y;
}
function solve() {
  let x = document.getElementById("output").value;
  let y = eval(x);
  document.getElementById("output").value = y;
  if (x == "") {
    document.getElementById("output").value = "Please Enter Some Value.";
  }
}
function blank() {
  document.getElementById("output").value = "";
}
