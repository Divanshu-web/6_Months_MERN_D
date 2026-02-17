function Fun1() {
      var p = document.getElementById('box1').value
      document.getElementById("box1").readOnly="true"
      
      if (p == '1') {
        document.getElementById('img1').src = "./boom1.png";
      }
     else {
        document.getElementById('img1').src = "./boom2.png";
      }
    }
function Fun2() {
      var p = document.getElementById('box2').value
            document.getElementById("box2").readOnly="true"

      if (p == '9') {
        document.getElementById('img2').src = "./boom1.png";
      }
     else {
        document.getElementById('img2').src = "./boom2.png";
      }
    }
function Fun3() {
      var p = document.getElementById('box3').value
            document.getElementById("box3").readOnly="true"

      if (p == '2') {
        document.getElementById('img3').src = "./boom1.png";
      }
     else {
        document.getElementById('img3').src = "./boom2.png";
      }
    }
function Fun4() {
      var p = document.getElementById('box4').value
            document.getElementById("box4").readOnly="true"

      if (p == '0') {
        document.getElementById('img4').src = "./boom1.png";
      }
     else {
        document.getElementById('img4').src = "./boom2.png";
      }
    }
function movetoNext(current, nextFieldID) {
      if (current.value.length >= current.maxLength) {
        document.getElementById(nextFieldID).focus();
      }
    }
    
