const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('static'));

const jsonData = fs.readFileSync('./data.json');
const jsObj = JSON.parse(jsonData);
const sorted = jsObj.smses.sms; // .reverse();
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const cutoffDate = new Date('1/1/2017');

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function textItem(text, formattedDate) {
  return `
  <div class="text-item">
    <div class="${text._type === '2' ? 'ben' : 'brooke'}">
      <div class="name">${text._type === '2' ? 'Ben' : 'Brooke'}</div>
      <span class="date">${formattedDate}</span>
      <div class="body">${text._body}</div>
    </div>
    <div class="clear"></div>
  </div>`;
}

const content = sorted.map(text => {
  const date = new Date(text._readable_date);
  if (date < cutoffDate) {
    return '';
  }

  const formattedDate = `${days[date.getDay()]} ${months[date.getMonth()]}, ${date.getDate()} - ${formatAMPM(date)}`;
  return textItem(text, formattedDate);
}).join('');

app.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Text history</title>
        <link href="/styles.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div class="text-wrapper">
          ${content}
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
