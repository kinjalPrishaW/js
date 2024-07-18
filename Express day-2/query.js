const express = require('express');
const app = express();
const port = 3000;

// GET route with query parameters
app.get('/search', (req, res) => {
  const { q } = req.query; // Extract 'q' query parameter
  if (!q) {
    res.status(400).send('Missing query parameter');
    return;
  }
  res.send(`Search query: ${q}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
