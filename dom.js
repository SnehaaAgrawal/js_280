1.......................................
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>JS DOM paragraph style</title>
</head>
<body>
  <p id="text">JavaScript Exercises - w3resource</p>
  <div>
    <button id="jsstyle" onclick="js_style()">Style</button>
  </div>

  <script>
    function js_style() {
      const para = document.getElementById("text");
      para.style.color = "blue";
      para.style.fontSize = "20px";
      para.style.fontFamily = "Arial, sans-serif";
      para.style.backgroundColor = "lightyellow";
      para.style.padding = "10px";
    }
  </script>
</body>
</html>

2................................................

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Return first and last name from a form - w3resource</title>
</head>
<body>
  <form id="form1" onsubmit="getFormvalue(event)">
    First name: <input type="text" name="fname" value="David"><br>
    Last name: <input type="text" name="lname" value="Beckham"><br>
    <input type="submit" value="Submit">
  </form>

  <script>
    function getFormvalue(event) {
      event.preventDefault(); // Prevent actual form submission

      const form = document.getElementById("form1");
      const firstName = form.fname.value;
      const lastName = form.lname.value;

      alert("First Name: " + firstName + "\nLast Name: " + lastName);
      // or use console.log(firstName, lastName);
    }
  </script>
</body>
</html>

3............................................................
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Change Paragraph Background</title>
</head>
<body>

  <p id="myPara">This is a sample paragraph.</p>
  <button onclick="changeBackground()">Change Background</button>

  <script>
    function changeBackground() {
      const para = document.getElementById("myPara");
      para.style.backgroundColor = "lightblue"; // You can change to any color
    }
  </script>

</body>
</html>

4..............................................
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Get Link Attributes</title>
</head>
<body>

  <p>
    <a id="w3r" 
       type="text/html" 
       hreflang="en-us" 
       rel="nofollow" 
       target="_self" 
       href="http://www.w3resource.com/">
       w3resource
    </a>
  </p>

  <button onclick="getAttributes()">Click here to get attributes value</button>

  <script>
    function getAttributes() {
      const link = document.getElementById("w3r");
      alert(
        "href: " + link.getAttribute("href") + "\n" +
        "hreflang: " + link.getAttribute("hreflang") + "\n" +
        "rel: " + link.getAttribute("rel") + "\n" +
        "target: " + link.getAttribute("target") + "\n" +
        "type: " + link.getAttribute("type")
      );
    }
  </script>

</body>
</html>

5............................................................
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Insert row in a table - w3resource</title>
</head>
<body>

  <table id="sampleTable" border="1">
    <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
    <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
  </table>
  <br>
  <input type="button" onclick="insert_Row()" value="Insert row">

  <script>
    function insert_Row() {
      const table = document.getElementById("sampleTable");
      
      // Create a new row
      const newRow = table.insertRow();

      // Insert two new cells
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);

      // Add text to the cells
      cell1.innerHTML = "New Cell1";
      cell2.innerHTML = "New Cell2";
    }
  </script>

</body>
</html>

6..............................................................
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Change the content of a cell</title>
</head>
<body>

  <table id="myTable" border="1">
    <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
    <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
    <tr><td>Row3 cell1</td><td>Row3 cell2</td></tr>
  </table>

  <br>

  <form>
    Row: <input type="number" id="row" placeholder="e.g., 0"><br><br>
    Column: <input type="number" id="col" placeholder="e.g., 1"><br><br>
    New Content: <input type="text" id="content" placeholder="New text"><br><br>
    <input type="button" onclick="changeContent()" value="Change content">
  </form>

  <script>
    function changeContent() {
      const row = parseInt(document.getElementById("row").value);
      const col = parseInt(document.getElementById("col").value);
      const newText = document.getElementById("content").value;

      const table = document.getElementById("myTable");

      // Check if row and column exist
      if (row < table.rows.length && col < table.rows[row].cells.length) {
        table.rows[row].cells[col].innerHTML = newText;
      } else {
        alert("Invalid row or column index.");
      }
    }
  </script>

</body>
</html>

7.............................................................

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Change the content of a cell</title>
  <style type="text/css">
    body { margin: 30px; }
    input { margin: 5px; }
  </style>
</head>
<body>

  <label>Number of Rows:</label>
  <input type="number" id="rows" placeholder="e.g. 3">
  <br>

  <label>Number of Columns:</label>
  <input type="number" id="cols" placeholder="e.g. 4">
  <br>

  <input type="button" onclick="createTable()" value="Create the table">
  
  <br><br>

  <table id="myTable" border="1"></table>

  <script>
    function createTable() {
      const rows = parseInt(document.getElementById("rows").value);
      const cols = parseInt(document.getElementById("cols").value);
      const table = document.getElementById("myTable");

      // Clear any existing table content
      table.innerHTML = "";

      // Create rows and cells
      for (let i = 0; i < rows; i++) {
        const newRow = table.insertRow();

        for (let j = 0; j < cols; j++) {
          const newCell = newRow.insertCell();
          newCell.innerHTML = `Row-${i} Column-${j}`;
        }
      }
    }
  </script>

</body>
</html>


8...............................................................

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Remove items from a dropdown list</title>
</head>
<body>

  <form>
    <select id="colorSelect">
      <option>Red</option>
      <option>Green</option>
      <option>White</option>
      <option>Black</option>
    </select>
    <input type="button" onclick="removecolor()" value="Select and Remove">
  </form>

  <script>
    function removecolor() {
      const select = document.getElementById("colorSelect");
      const selectedIndex = select.selectedIndex;

      if (selectedIndex !== -1) {
        select.remove(selectedIndex);
      } else {
        alert("Please select an option to remove.");
      }
    }
  </script>

</body>
</html>


9.....................................................................
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style type="text/css">
    body { margin: 30px; }
  </style>
  <title>Count and display items of a dropdown list - w3resource</title>
</head>
<body>

  <form>
    Select your favorite Color :
    <select id="mySelect">
      <option>Red</option>
      <option>Green</option>
      <option>Blue</option>
      <option>White</option>
    </select>
    <input type="button" onclick="getOptions()" value="Count and Output all items">
  </form>

  <script>
    function getOptions() {
      const select = document.getElementById("mySelect");
      const count = select.options.length;
      let message = `Total options: ${count}\n`;

      for (let i = 0; i < count; i++) {
        message += `${i + 1}. ${select.options[i].text}\n`;
      }

      alert(message);
    }
  </script>

</body>
</html>

10...............................................................

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Calculate Sphere Volume</title>
  <style>
    body { margin: 30px; font-family: Arial; }
    label, input { margin: 5px; }
  </style>
</head>
<body>

  <h2>Calculate the Volume of a Sphere</h2>

  <form onsubmit="calculateVolume(event)">
    <label for="radius">Radius:</label>
    <input type="number" id="radius" required>
    <br><br>
    <label for="volume">Volume:</label>
    <input type="text" id="volume" readonly>
    <br><br>
    <input type="submit" value="Calculate">
  </form>

  <script>
    function calculateVolume(event) {
      event.preventDefault(); // Prevent form from refreshing the page
      
      const radius = parseFloat(document.getElementById("radius").value);
      if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for radius.");
        return;
      }

      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      document.getElementById("volume").value = volume.toFixed(2);
    }
  </script>

</body>
</html>

11..............................................................
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Random Image Display</title>
  <style>
    body { margin: 30px; font-family: Arial; }
    #randomImage { margin-top: 20px; }
  </style>
</head>
<body>

  <h2>Click the button to display a random image</h2>
  <button onclick="showRandomImage()">Show Random Image</button>

  <div id="randomImage"></div>

  <script>
    const images = [
      {
        url: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        width: 240,
        height: 160
      },
      {
        url: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        width: 320,
        height: 195
      },
      {
        url: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: 500,
        height: 343
      }
    ];

    function showRandomImage() {
      const randomIndex = Math.floor(Math.random() * images.length);
      const imageInfo = images[randomIndex];

      const imgTag = `<img src="${imageInfo.url}" width="${imageInfo.width}" height="${imageInfo.height}" alt="Random Image">`;

      document.getElementById("randomImage").innerHTML = imgTag;
    }
  </script>

</body>
</html>

12................................................

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Highlight Bold Words</title>
  <style>
    body { margin: 30px; font-family: Arial; }
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>

  <p>
    <a href="#" 
       onmouseover="highlightBold()" 
       onmouseout="removeHighlight()">
       On mouse over here bold words of the following paragraph will be highlighted
    </a>
  </p>

  <p>
    We have just started this section for the users 
    (<b>beginner</b> to <b>intermediate</b>) 
    who want to work with various JavaScript problems and write scripts online 
    to test their <b>JavaScript</b> skill.
  </p>

  <script>
    function highlightBold() {
      const boldWords = document.getElementsByTagName("b");
      for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].classList.add("highlight");
      }
    }

    function removeHighlight() {
      const boldWords = document.getElementsByTagName("b");
      for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].classList.remove("highlight");
      }
    }
  </script>

</body>
</html>

13.............................................................

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Window Resize Dimensions</title>
  <style>
    body { margin: 30px; font-family: Arial; }
    #dimensions {
      font-size: 18px;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <h2>Resize the browser window to see dimensions update</h2>
  <div id="dimensions"></div>

  <script>
    function updateWindowSize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      document.getElementById("dimensions").textContent =
        `Width: ${width}px, Height: ${height}px`;
    }

    // Run initially
    updateWindowSize();

    // Update on resize
    window.onresize = updateWindowSize;
  </script>

</body>
</html>
