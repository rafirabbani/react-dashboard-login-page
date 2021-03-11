const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'my_token_4_U'
  });
});

app.listen(8000, () => console.log('API is running'));