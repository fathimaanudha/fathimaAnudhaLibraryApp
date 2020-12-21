// accessing mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.slzuy.mongodb.net/<LIBRARYAPP>?retryWrites=true&w=majority',
    {   useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
// Schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});

var Bookdata=mongoose.model('bookdata',BookSchema);

module.exports=Bookdata;

