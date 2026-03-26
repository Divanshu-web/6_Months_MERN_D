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

const UserRoutes = require('./routes/userRoutes');
app.use('/user', UserRoutes);

const TrainerRoutes = require('./routes/trainerRoutes.js');
app.use('/trainer', TrainerRoutes)

const SkillRoutes = require('./routes/skillRoutes.js');
app.use('/skill', SkillRoutes)

const ChatRoutes = require('./routes/chatRoutes.js');
app.use('/chat', ChatRoutes)


app.get('/', async (req, res) => {
    res.status(200).send('Server is running');
})

app.listen(7000, () => {
    console.log('server is running');
})