const mongoose = require('mongoose');

// mongodb://localhost:27017/projectName

mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Db Connected");
}).catch((err) => {
    console.log("Erro in Db", err);
})