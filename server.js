const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const dbConfiguration = require('./connect');

const app = express();


app.use(express.json());
app.use(cors());

const userRoute = require('./routes/user');
const movieRoute = require('./routes/movies');

app.use('/api', userRoute)
app.use('/movies', movieRoute);

app.listen(process.env.PORT, () => console.log(`listening to the port 5000`))