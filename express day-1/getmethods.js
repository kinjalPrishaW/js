var express=require('express');
var app =express()


app.get('/',function(req,res){
    console.log("Req",req.method)
    res.send("hello world");

})

app.get('/Name/:nameId/page/:pageNo',function(req,res){
    console.log("Req",req.method)
    res.send(req.params);

})

app.get('/page/:pageNo',function(req,res){
    console.log("Req",req.method)
    res.send(req.params);

})
app.get('/page/:from-:to',function(req,res){
    console.log("Req",req.method)
    res.send(req.params);

})

app.get('/about.html',function(req,res){
    console.log("Req",req.method)
    res.send("goodbye world");
})

app.get('/abc?d',function(req,res){
    console.log("Req",req.method)
    res.send(" world");
})

app.get('/ab(cd)e',function(req,res){
    console.log("Req",req.method)
    res.send("everything will be fine");
})
app.listen(3000);