// create express variable
const express = require('express');
const userdata=require('../model/userdata');
var bodyParser = require('body-parser');
const { name } = require('ejs');
const authenticRouter = express.Router();
authenticRouter.use(bodyParser.json());
var session        = require('express-session'),
  cookieParser   = require('cookie-parser'),
  flash          = require('connect-flash');
const user =[{user:'admin'},{user:'user'} ]

authenticRouter.use(bodyParser.urlencoded({extended:true}))
authenticRouter.use(cookieParser());
authenticRouter.use(session({
  secret: 'secret', 
  cookie: { maxAge: 60000 },
  resave: false,    // forces the session to be saved back to the store
  saveUninitialized: false  // dont save unmodified
}));
authenticRouter.use(flash());
//flash message middleware
authenticRouter.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});





function router(nav,user){
    authenticRouter.get('/',function(req,res){
        res.render("login",
         {
             alert:flash('alert'),
             nav,
             title: 'Library',
             user
             

         });
         
         res.end();
    });
    
    authenticRouter.post('/',
       async(req,res)=>{
           const {name,password} = req.body;
           const user = await userdata.findOne({name,password}).lean()

           if(name=='admin'&&password=='Admin.123'){
               
            res.render('admin', {
                nav,
                title: 'Admins only!',
                user:'admin'
              });
              
           }
          else if(user){
            res.render('main', {
                nav,
                title: 'Library',
                role:'user'
              });

         }  

          else if(!user){
            
            req.flash('warning','please give valid information');
                res.redirect('/login');
               
            }
           





       
           
        
          
      });


    authenticRouter.get('/signup',
        function(req,res){
             res.render('signup', {
             nav,
             title: 'Library'
           });
           
           res.end();
    });
    authenticRouter.post('/signup',function(req,res){
        var item = {
            name:req.body.name,
            email:req.body.email,
            password : req.body.pwd
        }
   

        var user = userdata(item);
        console.log(user);
        user.save();
        res.redirect('/login');
        res.end();

    })
  
    
    
    authenticRouter.get('/logout',function(req,res){
        res.render('index',
         {
             nav,
             title: 'Library',
             

         });
         res.end();
    });
     






 


   
    return authenticRouter;
}



module.exports = router,user;
