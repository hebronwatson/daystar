import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import query from './query.mjs';

const DEFAULT_SERVER_PORT = 3002;
const port = process.env.PORT || DEFAULT_SERVER_PORT;

const app = express();
app.use(cors());
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
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});