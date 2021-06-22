const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(4000);

app.get('/', (req,res) =>{
    // res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', {root: __dirname});
    res.render('index');
});
    app.get('/about', (req,res) =>{
        // res.send('<p>about page</p>');
        res.render('about', {root: __dirname});
    //redirects
        app.get('/about-us', (req,res)=>{
            res.render('/about');
        });
        app.get('/blogs/create', (req,res) =>{
            res.render('/create');
        });
        //404 middleware functions in express
        app.use((req,res) => {
            // res.status(404).sendFile('./views/404.html', {root: __dirname});
            res.status(404).render('404');
        });

});