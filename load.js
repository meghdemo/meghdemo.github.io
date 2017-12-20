function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("cont").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "intro.html", true);
  xhttp.send();
}
function loadnext() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("cont").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "about.html", true);
  xhttp.send();
}
function loadback() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("cont").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "index.html", true);
  xhttp.send();
}