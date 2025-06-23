1.
<!DOCTYPE html>
<html>
<head><title>Addition</title></head>
<body>
<script>
  let num1 = parseInt(prompt("Enter first number:"));
  let num2 = parseInt(prompt("Enter second number:"));
  alert("The sum is: " + (num1 + num2));
</script>
</body>
</html>


2........................................
function alphabetOrder(str) {
  return str.split('').sort().join('');
}
console.log(alphabetOrder("webmaster"));

3.....................................
function uniqueChars(str) {
  return [...new Set(str)].join('');
}
console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));

4.............................................
<!DOCTYPE html>
<html>
<head><title>UTC Time</title></head>
<body>
  <button onclick="convertToUTC()">Show UTC</button>
  <div id="utcResult"></div>
  <button onclick="startTimer()">Start Timer</button>
  <div id="timerResult"></div>

<script>
function convertToUTC() {
  const now = new Date();
  document.getElementById("utcResult").innerText = now.toUTCString();
}

function startTimer() {
  setTimeout(() => {
    document.getElementById("timerResult").innerText = new Date().toLocaleString();
  }, 3000);
}
</script>
</body>
</html>
5..................................................
<!DOCTYPE html>
<html>
<body>
<img src="image1.jpg" id="myImg" onclick="this.src='image2.jpg'">
</body>
</html>

6..............................................
<!DOCTYPE html>
<html>
<body>
<button onclick="changeColor()">Change Background</button>
<script>
function changeColor() {
  document.body.style.backgroundColor = 'blue';
}
</script>
</body>
</html>
7.................................................
<!DOCTYPE html>
<html>
<body>
<p>First paragraph.</p>
<p id="insertAfter">Second paragraph.</p>

<script>
const newPara = document.createElement("p");
newPara.textContent = "This is the new paragraph.";
document.body.insertBefore(newPara, document.getElementById("insertAfter"));

newPara.addEventListener("mouseover", () => {
  newPara.style.color = "red";
});

newPara.addEventListener("mouseout", () => {
  newPara.style.color = "";
});
</script>
</body>
</html>

8.................................................
<!DOCTYPE html>
<html>
<body>
<img id="slide" src="img1.jpg" width="300">
<script>
let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let index = 0;
setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}, 2000);
</script>
</body>
</html>
9...........................................
<!DOCTYPE html>
<html>
<body>
<button id="back" onclick="prev()" style="display:none">Back</button>
<img id="slide" src="img1.jpg" width="300">
<button id="next" onclick="next()">Next</button>

<script>
let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let index = 0;

function updateButtons() {
  document.getElementById("back").style.display = index === 0 ? "none" : "inline";
  document.getElementById("next").style.display = index === images.length - 1 ? "none" : "inline";
}

function next() {
  if (index < images.length - 1) index++;
  document.getElementById("slide").src = images[index];
  updateButtons();
}

function prev() {
  if (index > 0) index--;
  document.getElementById("slide").src = images[index];
  updateButtons();
}

updateButtons();
</script>
</body>
</html>

10.............................................

<!DOCTYPE html>
<html>
<head><style>
#marble { width: 50px; height: 50px; background: red; border-radius: 50%; position: absolute; }
</style></head>
<body>
<div id="marble"></div>

<script>
let marble = document.getElementById("marble");
let pos = 0;
let interval;

function animate() {
  interval = setInterval(() => {
    marble.style.left = pos++ + 'px';
  }, 30);
}

marble.addEventListener("mouseover", () => clearInterval(interval));
marble.addEventListener("mouseout", animate);

animate();
</script>
</body>
</html>

11.....................................
<!DOCTYPE html>
<html>
<body>
<script>
document.write("Browser Info: " + navigator.userAgent + "<br>");
document.write("Screen Resolution: " + screen.width + "x" + screen.height + "<br>");
document.write("Last Modified: " + document.lastModified);
</script>
</body>
</html>

12......................................

<!DOCTYPE html>
<html>
<body>
<img src="img1.jpg" onmouseover="this.src='img2.jpg'" onmouseout="this.src='img1.jpg'">
<img src="img3.jpg" onmouseover="this.src='img4.jpg'" onmouseout="this.src='img3.jpg'">
</body>
</html>

13.......................................
<!DOCTYPE html>
<html>
<body>
<form onsubmit="return validateForm()">
  Name: <input type="text" id="name"><br>
  Email: <input type="email" id="email"><br>
  <input type="submit">
</form>
<script>
function validateForm() {
  if (!document.getElementById("name").value || !document.getElementById("email").value) {
    alert("All fields required!");
    return false;
  }
  return true;
}
</script>
</body>
</html>

14........................................
<!DOCTYPE html>
<html>
<body>
<div id="visitInfo"></div>
<script>
let visits = parseInt(localStorage.getItem("visits")) || 0;
let lastVisit = localStorage.getItem("lastVisit");
visits++;
localStorage.setItem("visits", visits);
localStorage.setItem("lastVisit", new Date());
document.getElementById("visitInfo").innerHTML = 
  "You have visited " + visits + " times.<br>" + 
  (lastVisit ? "Your last visit was on " + lastVisit : "You have never visited before.");
</script>
</body>
</html>

15..............................................
<!DOCTYPE html>
<html>
<body>
<script>
let name = prompt("Enter your name:");
let word1 = prompt("Enter a noun:");
let word2 = prompt("Enter a verb:");
let word3 = prompt("Enter an adjective:");
let word4 = prompt("Enter another noun:");
let word5 = prompt("Enter a place:");
let color = prompt("Enter a color:");

document.write("<p>Once upon a time, " + name + " saw a <div style='color:" + color + "'>" + word1 + "</div> " +
               "that could <div style='color:" + color + "'>" + word2 + "</div> like a <div style='color:" + color + "'>" + word3 + "</div> " +
               "<div style='color:" + color + "'>" + word4 + "</div> in <div style='color:" + color + "'>" + word5 + "</div>.</p>");
</script>
</body>
</html>
