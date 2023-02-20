const html = [
  "<!DOCTYPE html>",
  "<html lang=\"en\">",
  "<head>",
  " <meta charset=\"UTF-8\">",
  " <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
  " <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
  " <title>Document</title>",
  " <link rel=\"stylesheet\" href=\"style.css\">",
  "</head>",
  "<body>",
  " <script src=\"index.js\"></script>",
  "</body>",
  "</html>",
]

const js = "console.log('Hello from app.js')"

const css = [
  "body{",
  " background: darkblue",
  "}"
]

const formatLines = lines => {
  let output = ""
  lines.forEach((line) => {
    output += `${line} \n`
  })
  return output
}

var fs = require('fs');

fs.appendFile('index.html', formatLines(html), function (err) {
  if (err) throw err;
  console.log('Saved index.html');
})

fs.appendFile('style.css', formatLines(css), function (err) {
  if (err) throw err;
  console.log('Saved style.css');
})

fs.appendFile('index.js', js, function (err) {
  if (err) throw err;
  console.log('Saved index.js');
})