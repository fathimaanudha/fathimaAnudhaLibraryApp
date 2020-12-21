// create express variable
const express = require('express');

const port = process.env.PORT || 3000

// navbar
const nav =  [
    {
        link:"/books", name:'Books'
       },
       {
           link:"/authors",name: "Authors"
       },
      
       {
           link:"/login",name: "Login"
       },
       {
           link:"/login/signup",name: "Signup"
       },
       {
           link:"/login/logout",name: "Logout"
       }

 ];

 const user =[{user:'admin'},{user:'user'} ]

  
// create express application
const app = new express();


// const user = require('./src/routes/authenticRoutes')
const authorRouter = require('./src/routes/authorRoutes')(nav,user)
const booksRouter = require('./src/routes/bookRoutes')(nav,user)
const authenticRouter = require('./src/routes/authenticRoutes')(nav,user)
const adminRouter = require('./src/routes/adminRoutes')(nav,user)

app.use(express.urlencoded({extended:true}));

app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',authenticRouter);
app.use('/admin',adminRouter);


    
    
    
  

app.get('/',function(req,res){

    
    res.render("index",
     {
         nav,
         title: 'LIBRARY',
         user
         
     });
});
app.get('/main',function(req,res){
    res.render("main",
     {
         nav,
         title: 'LIBRARY',
         user
         
     });
});





app.listen(port,()=>{console.log("server ready at"+port)});
