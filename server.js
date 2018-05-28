const path = require('path');
const express = require('express');
const app = express();
	
app.use(express.static(path.join(__dirname, '/dist')));

app.get('/*', (req, res) => {
  const index = path.join(__dirname, '/dist/koko-and-friend', 'index.html');
  res.sendFile(index);
});

app.listen(process.env.PORT || 4201, () => {
  console.log('Connected to Port'); //Listening on port 8888
});