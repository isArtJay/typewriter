var b = 0;
var c = 0;
var iftypewriter = true;
var isLoop = true;
var ifPlaceholder = false;
var i = 0;
var speed = 100;
var deleteSpeed = 40;
var waitTime = 600;
setTimeout("typewriter()", waitTime);

function typewriter() {
  if (ifPlaceholder == true) {
    document.getElementById("words").placeholder = strings[i].substring(c, b);
  } else {
    document.getElementById("words").innerHTML = strings[i].substring(c, b);
  }

  if (b == strings[i].length) {
    setTimeout("b=0, c=strings[i].length, iftypewriter=true", waitTime);
  } else {
    if (c != 0) {
      c--;
      if (i == strings.length - 1 && isLoop == false) {
        return;
      }

      if (c == 0) {
        i++;
        if (i == strings.length) {
          i = 0;
        }
      }
    } else {
      var iftypewriter = false;
      b++;
    }
  }

  if (iftypewriter == false) {
    setTimeout("typewriter()", speed);
  } else {
    setTimeout("typewriter()", deleteSpeed);
  }
}
