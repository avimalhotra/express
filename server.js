const express=require('express');

const app=express();

const admin=require('./admin');
const user=require('./user');

app.use(express.static('src/public'))

// app.use((req,res)=>{
//     res.status(200);
//     res.setHeader('Content-Type','text/html');
//     //res.end('<h1>Hello Express JS</h1>');
//     res.end();
// });

// app.use((req,res,next)=>{
//     console.log("app started");  
//     next()
// })

app.get('/',(req,res)=>{
    res.redirect('index.html');
    //res.status(200).send("<h1>root page</h1>");
    //res.send("hi Express APp");
   
});

// routes

app.use('/admin',admin);
app.use('/user',user);


app.post('/post',(req,res)=>{
    //res.status(200).send("POST data")
    //res.json({"data":req.query});
    res.send(req.query);
})


app.get('/formdata',(req,res)=>{
    res.status(200).send(req.query) 
});
app.get('/product/:phone/:model',(req,res)=>{
    res.status(200).send(req.params) 
});

        /*wildcard handler*/ 
app.get('/**',(req,res)=>{
    res.status(404).send("404, Error Found")
});



app.listen(3000,()=>{
    console.log(`Server running at http://127.0.0.1:3000`)
});