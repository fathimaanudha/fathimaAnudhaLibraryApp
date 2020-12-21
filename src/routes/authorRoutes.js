// create express variable
const express = require('express');



const authorRouter = express.Router();
const authordata = require('../model/authordata');
function router(nav,nav1,user){
   
    authorRouter.get('/',function(req,res){
        authordata.find()
            .then(function(authors){
                res.render("authors",
                {
                    nav,
                    user:'admin',
                    title: 'Library',
                    authors,user:'user'
                });
            })
        
    });
    // authorRouter.get('/addauthor',function(req,res){
    //     res.render("addAuthor",
    //      {
    //          nav,
    //          title: 'Library',
            
    //      });
    //      res.end();
    // });
    // authorRouter.get('/add',function(req,res){
    //     res.render("addAuthor",
    //      {
    //          nav,
    //          title: 'Library',
             
    //      });
    //      res.end();
    // });

    authorRouter.get('/:id',function(req,res){
       const id = req.params.id;
       authordata.findOne({_id: id})
       .then(function(author){
        res.render('author',
        {
            nav,
            user:'user',
            title: 'Library',
            author, id,user:'user'
    
        });
       })
      
    });

    return authorRouter;

}


module.exports = router;