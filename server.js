const express=require('express');

// express().use((req,res)=>{
//     res.end('hello express');
// }).listen(3000);

const app=express();

//app.use(express.static('src/public'))

// app.use((req,res)=>{
//     res.status(200);
//     res.setHeader('Content-Type','text/html');
//     //res.end('<h1>Hello Express JS</h1>');
//     res.end();
// });

app.get('/',(req,res)=>{
    //res.redirect('index.html');
    res.status(200).send("<h1>root page</h1>")
});

app.get('/admin',(req,res)=>{
    res.status(200).send("<h1>admin page</h1>")
    //res.redirect('admin.html');
});

        /*wildcard handler*/ 
app.get('/**',(req,res)=>{
    res.status(404).send("404, Error Found")
});



app.listen(3000);