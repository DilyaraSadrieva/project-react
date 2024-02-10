
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const PORT = 3000;

app.get('/', (req, res) => {
   res.send('Привет!');
 });

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
