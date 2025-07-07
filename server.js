const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});



app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});