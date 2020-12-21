const express = require('express');
const bookdata = require('../model/bookdata');
const Authordata = require('../model/authordata');
const bodyParser= require('body-parser')
const multer = require('multer');

const path = require('path');


// addbook
// Set The Storage Engine
  const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
// Init Upload
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  }).single('image');

  // Check File Type
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
  }




const adminRouter = express.Router();





function router(nav,user){
    adminRouter.get('/', function(req,res){
        res.render("addbook",
        {
           
            nav,
            
            title: 'Library',
            
            
        });
        res.end();
    
    })
    adminRouter.post('/addb',(req,res)=>{
        upload(req,res,(err)=>{
           
            var mine=`images/${req.file.filename}`
            
            var item= {
                title: req.body.title,
                author:  req.body.author,
                genre: req.body.genre,
                image:req.file.filename
               }
               console.log("image here"+item.image)
               var book = bookdata(item);
               book.save();
               res.redirect('/admin/b');
               res.end();
        
    })
});
         
      
      
       
// showbooks
        adminRouter.get('/b',function(req,res){
            bookdata.find()
            .then(function(books){
                
                res.render("books",
                {
                    
                    title: 'Library',
                    books,user:'admin'
                });
            })
           
        
             
        });
    
        adminRouter.get('/back', function(req,res){
            res.render("admin",
            {
               
                nav,
                
                title: 'Library',
                
                
            });
            res.end();
        
        })
                  
//show authors
adminRouter.get('/a',function(req,res){
    Authordata.find()
    .then(function(authors){
        
        res.render("authors",
        {
            
            title: 'Library',
            authors,user:'admin'
        });
    })
   

     
});
  // to show single book
  adminRouter.get('/b/:id',function(req,res){
    const id = req.params.id;
    bookdata.findOne({_id: id})
    .then(function(book){
     res.render('book',{
         nav,
         title: 'Library',
         book, id,user:'admin'
         
 
     });
   
 })
})
 // to show single author
  adminRouter.get('/a/:id',function(req,res){
    const id = req.params.id;
    Authordata.findOne({_id: id})
    .then(function(author){
     res.render('author',{
         nav,
         title: 'Library',
         author, id,user:'admin'
         
 
     });
   
 })
})
    
              
          
        
       
// addauthor

    adminRouter.get('/author', function(req,res){
        res.render("addAuthor",
        {
            nav,
            title: 'Library',
            
        });
        
    
    })
    adminRouter.post('/adda',(req,res)=>{  
        upload(req,res,(err)=>{
         var item= {
         name: req.body.name,
         genre:  req.body.genre,
         works: req.body.works,
         image:req.file.filename
        }
       var author = Authordata(item);
       author.save();
       res.redirect('/admin/a');
        res.end();

    })
    });
        
   
//  updatebook    

    adminRouter.get('/update/:id',function(req,res){
        const id = req.params.id;
        console.log("my update id is"+  req.params.id);

        bookdata.findById(req.params.id, function(err){
            if(err){
                console.log(err);
            }
            else{
                res.render('updateBook',{
                            nav,
                            title: 'Library',id
                        });
            }
        })
       

    });

    adminRouter.post('/update/:id',function(req,res){
        const id = req.params.id;
        console.log('here i am'+req.params.id)
        upload(req,res,(err)=>{
        var item= {
                    
                    title: req.body.title,
                    author:  req.body.author,
                    genre: req.body.genre,
                    image:req.file.filename
                }
         console.log("im the same id"+req.params.id);
        bookdata.findByIdAndUpdate(req.params.id,item,function(err){
        if(err){
        res.redirect('update/'+req.params.id);
        }
        else{
            res.redirect('/admin/b');
        }
     })
    })
                
    });

    // delete book

    adminRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        console.log("my delete id is"+ id);
        bookdata.findOneAndDelete({_id:id})
        .then(function(){
            res.redirect('/admin/b');
                
        
            });
        }); 
       
  
// update author

adminRouter.get('/author/update/:id',function(req,res){
    const id = req.params.id;
    console.log("my update id is"+  req.params.id);

    Authordata.findById(req.params.id, function(err){
        if(err){
            console.log(err);
        }
        else{
            res.render('updateAuthor',{
                        nav,
                        title: 'Library',id
                    });
        }
    })
   

});

adminRouter.post('/update/author/:id',function(req,res){
    const id = req.params.id;
    console.log('here i am'+req.params.id)
    upload(req,res,(err)=>{
    var item= {
                
                name: req.body.name,
                genre: req.body.genre,
                works:  req.body.works,
                image:req.file.filename
            }
     console.log("im the same id"+req.params.id);
    Authordata.findByIdAndUpdate(req.params.id,item,function(err){
    if(err){
    res.redirect('update/author/'+req.params.id);
    }
    else{
        res.redirect('/admin/a');
    }
 })
})
            
});
    
   // delete author

   adminRouter.get('/author/delete/:id',function(req,res){
    const id = req.params.id;
    console.log("my delete id is"+ id);
    Authordata.findOneAndDelete({_id:id})
    .then(function(){
        res.redirect("/admin/a")
            
    
        });
    }); 

  






    






 
    return adminRouter;
}
module.exports = router;
