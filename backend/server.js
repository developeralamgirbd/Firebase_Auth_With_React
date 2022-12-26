const express = require('express');
const app = express();

require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const {readdirSync} = require('fs');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

app.use(limiter);

mongoose
    .connect(process.env.DATABASE)
    .then(()=> console.log('DB Connected'))
    .catch((err) => console.log(err));

readdirSync('./src/routes').map(r => app.use('/api/v1', require(`./src/routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`Server connected on port ${port}`);
})