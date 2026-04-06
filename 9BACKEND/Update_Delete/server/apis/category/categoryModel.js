const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName :{type : string, default:""},
    name  : {type : string, default:""},
    class  : {type : string, default:""},

    
     
})

module.exports = mongoose.model('category',categorySchema)



