const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

const port = express();

app.use(bodyParser.json());

var serverArray = [
  {
    name: Tim,
    color: blue
  },
  {
    name: Spongebob,
    color: yellow
  },
  {
    name: PapaSmarf,
    color: white
  }

]

app.get('api/dog', (req, res) => {
  res.status(200).send('This is getting hit')
});

app.post('api/cat', (req, res) => {
  let { input, color } = req.body;
  
  res.status(200).send(req.body.input)
})

const port = 3005;

app.listen(port, console.log('All the magic happens on port' + port));

