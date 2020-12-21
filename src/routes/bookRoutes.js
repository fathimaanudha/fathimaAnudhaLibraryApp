// create express variable
const express = require('express');


const booksRouter = express.Router();
const bookdata = require('../model/bookdata');
function router(nav,user){
    // var books = [
    //     {
    //         title: 'THE ALCHEMIST',
    //         author: 'PAULO COELHO',
    //         genre: ' Drama, Quest, Fantasy Fiction',
    //         img: 'alchemist.jpg'
    //     },
    //     {
    //         title: 'THE LOST SYMBOL',
    //         author: 'DAN BROWN',
    //         genre: 'Thriller, Mystery, Suspense',
    //         img: 'lostSymbol.jpg'
    //     },
    //     {
    //         title: 'AARACHAR',
    //         author: 'K.R MEERA',
    //         genre: 'Novel',
    //         img: 'aarachar.jpg'
    //     },
    //     {
    //         title: 'WINGS OF FIRE',
    //         author: 'A.P.J ABDULKALAM',
    //         genre: 'Autobiography, Inspirational Fiction',
    //         img: 'Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg'  
    //     },
    //     {
    //         title: 'NALUKETTU',
    //         author: 'M.T VASUDEVAN NAIR',
    //         genre: 'Novel',
    //         img: 'nalukettu.jpg'

    //     }
    
    // ]
//    to get all the books
    booksRouter.get('/',function(req,res){
        bookdata.find()
        .then(function(books){
            
            res.render("books",
            {
                nav,
                title: 'Library',
                books,user
            });
        })
       
    
         
    });

    // to get single book
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        bookdata.findOne({_id: id})
        .then(function(book){
         res.render('book',{
             nav,
             title: 'Library',
             book, id,user
             
     
         });
       
     })
             
});     
 


   

    return booksRouter;

}


module.exports = router;