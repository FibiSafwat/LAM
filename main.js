function myFunction() {
    document.getElementById("list").classList.toggle("dropdown-content");
  }


  document.getElementById('cart').addEventListener('click', () => {
    window.location = 'cart.html';
})


function show_hide() {
  var click = document.getElementById("list");
  if (click.style.display === "none") {
     click.style.display = "block";
  } else {
     click.style.display = "none";
  }
}