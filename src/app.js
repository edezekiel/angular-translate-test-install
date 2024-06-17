const express = require('express');
const cors = require('cors');

const app = express();
const port = Number.parseInt(process.env.PORT || '3000');

async function main() {
  app.use(cors());

  app.use(express.static('public'))
  app.use('/vendor/', express.static('node_modules'))

  app.get('/', (req, res) => res.send(__dirname + '/public/index.html'))

  app.listen(port, () => {
    console.log(`Local URL: http://localhost:${port}`);
  });
}

main()
  .catch(err => console.warn('uncaught resolution', err))