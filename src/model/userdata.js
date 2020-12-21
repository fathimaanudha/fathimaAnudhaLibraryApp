const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.slzuy.mongodb.net/<LIBRARYAPP>?retryWrites=true&w=majority',
    {   useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{ type: String, required: true},
    email:{ type: String, required: true},
    password:{ type: String, required: true}
});
const Userdata = mongoose.model('userdata',userSchema);
module.exports=Userdata;