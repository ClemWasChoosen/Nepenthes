const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || "5000";

app.get('*', (request, res) => { 
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, ()=>{
  console.log(`Listening to requests on http://localhost:${port}`);
});
