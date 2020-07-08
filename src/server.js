const express=require('express');
const bp=require('body-parser');
const app=express();
const cookieParser=require('cookie-parser');
const session=require('express-session');
const parseurl=require('parseurl');

app.set('trust proxy', 1); 
app.use(session({
    secret:"session",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}));



const admin=require('./admin');
const user=require('./user');


app.use(cookieParser());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(express.static('src/public'))



// app.use((req,res)=>{
//     res.status(200);
//     res.setHeader('Content-Type','text/html');
//     //res.end('<h1>Hello Express JS</h1>');
//     res.end();
// });

app.use((req,res,next)=>{
    
    if (!req.session.views) { 
        req.session.views = {}
      }
    
      // get the url pathname
      var pathname = parseurl(req).pathname
    
      // count the views
      req.session.views[pathname] = (req.session.views[pathname] || 0) + 1; 
    console.log("Session id: ", req.sessionID, ", views "+ req.session.views['/'] );  
    next()
})

// app.use((req,res,next)=>{
//     console.log("Session starts at "+ new Date().getTime());
//     next()
// });

app.get('/',(req,res)=>{
    //res.redirect('index.html');
    res.status(200).send("<h1>Hello Express</h1>");
    //res.send("hi Express APp");
});

// routes

app.use('/admin',admin);
app.use('/user',user);


app.post('/post',(req,res)=>{
    //res.status(200).send("POST data")
    //res.json({"data":req.query});
    //res.send(req.query);
    res.status(200).json(req.query);
   
});

// data from  html form element
app.post('/login',(req,res)=>{
    let mail=req.body.email, pass=req.body.pass, gender=req.body.gender, terms=req.body.chk;    
    
    res.json(req.body);
});

app.get('/setCookie',(req,res)=>{
    res.cookie('sesis','avi123456');
    res.send("cookie saved");
});

app.get('/getCookie',(req,res)=>{
    //console.log(req.cookies)
    res.send(req.cookies);

})





app.get('/login',(req,res)=>{
    res.redirect("login.html");
});
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