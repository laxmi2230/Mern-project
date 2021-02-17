const express = require('express');
const app = express();
const connectDB = require('./modules/Connection');
const routerUrls = require('./routes/routes');
const cors = require('cors');

connectDB();


app.use(express.json())
app.use(cors());
app.use('/app', routerUrls)
app.listen(3001, () => console.log("server is running"))


