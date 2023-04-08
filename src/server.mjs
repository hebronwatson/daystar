import express from 'express';
import bodyParser from 'body-parser';
import query from './query.mjs';

const app = express();
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  const { book, chapter, verse } = req.query;
  res.json(query(book, chapter, verse));
});

app.get('/api/:book/:chapter/:verse', (req, res) => {
  const { book, chapter, verse } = req.params;
  res.json(query(book, chapter, verse));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});