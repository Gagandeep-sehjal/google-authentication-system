const express = require('express');

const session=require("express-session");
const passport=require('passport');
require('./auth');


const app=express();

app.use(session({
    secret: 'catsyo', // Replace with a secure secret for production
    resave: false, // Set to false to prevent session from being saved on every request
    saveUninitialized: true, // Set to true to save uninitialized sessions
    cookie:{secure:false},
}));
app.use(passport.initialize());
app.use(passport.session());
function isLoggedIn(req,res,next){
    req.user?next():res.sendStatus(401);
}

app.get('/',(req,res)=>{
   res.send('<a href="/auth/google">Sign in with google </a>')
})

app.get('/auth/google',
passport.authenticate('google',{scope:['email','profile']})
)

app.get('/auth/google/callback',
passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/auth/failure',
}))

app.get('/auth/failure',(req,res)=>{
    res.send("something went wrong");
})
 
app.get('/protected',isLoggedIn,(req,res)=>{
    res.send(`hello ${req.user.displayName}`);
    console.log(req.user)
})

app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.send('Error logging out');
        }
        req.session.destroy((err) => {
            if (err) {
                return res.send('Error destroying session');
            }
            res.send('App has been signed out');
        });
    });
});


app.listen(5000,()=>console.log('listening on:5000'));  