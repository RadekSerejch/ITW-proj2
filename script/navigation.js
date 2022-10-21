function show_menu() {
    var temp = document.getElementById("nav_id");
    if (temp.className === "nav") {
      temp.className += " responsive";
    } else {
      temp.className = "nav";
    }
  }