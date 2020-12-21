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

const AuthorSchema = new Schema({
    name:String,
    genre:String,
    works:String,
    image:String
});

var Authordata=mongoose.model('authordata',AuthorSchema);

module.exports=Authordata;

