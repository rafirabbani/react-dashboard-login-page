const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'my_token_4_U'
  });
});

app.use('/dashboard', (req, res) => {
    res.send([
        {
            date: '2021-03-01',
            value: 0.5
        },
        {
            date: '2021-03-02',
            value: 0.7
        },
        {
            date: '2021-03-03',
            value: 0.3
        }
    ])
  });

app.listen(8000, () => console.log('API is running'));