const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3050;

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`💾💾listening on proxy server port ${PORT}💾💾`)
});

