const express = require ('express');
const helmet = require ('helmet');
const cors = require ('cors');
const cookieParser = require ('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');

const app = express ();

//connect mongo


app.use(express.json());
app.use (express.urlencoded({ extended: true}));
app.use(helmet());
app.use (cors());
app.use(cookieParser());
app.use(bodyParser.json());
// Define a simple route

mongoose
.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('Database connected');
})
.catch((err) =>{console.log(err);

});
app.use('/api/auth', authRouter);
app.get('/', (req, res) => {
    res.json({message: 'hello from server'});
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000');
});
 