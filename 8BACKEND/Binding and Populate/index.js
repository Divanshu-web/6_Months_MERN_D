const express = require('express');
const app = express();
const connectDB = require('./config/db.js')

//middleware to parse json data, otherwise re.body is undefined
app.use(express.json());
app.use(express.urlencoded());

connectDB();


const logger = require('./middlewares/logger')
app.use(logger);


const MovieRoutes = require('./routes/movieRoutes');
app.use('/movies', MovieRoutes);

const ProductRoutes = require('./routes/productRoutes');
app.use('/products', ProductRoutes);

const CategoryRoutes = require('./routes/categoryRoutes');
app.use('/category', CategoryRoutes);

app.get('/', async (req, res) => {
    res.status(200).send('Server is running');
})

app.listen(3000, (req, res) => {
    console.log('server is running');
})