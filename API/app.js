const express = require('express');
const router =  require('./router');
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors());

app.use('/api', router);

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => console.log(`test app listening on port: ${port}`));