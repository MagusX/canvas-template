const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server running port 3000');
});