const express = require('express');
const app = express();

let name='kinjal'
let password=1234
app.get('/', (req, res) => {
   
    res.send('This is login page');
  });
  app.use(loginMiddleware)

 app.get('/ProfilePage', (req, res) => {
   
    res.send('Profile Page');
  });
  app.get('/FeedPage', (req, res) => {
   
    res.send('Feed Page');
  });
  app.listen(8000, () => {
    console.log('Server is running on port 8000');
  });

  function loginMiddleware(req,res,next){
   if(name=='kinjal'&& password== 1234){
    next()
   }
   else{
     res.send('cannot authenticate the user')
   }
  }
  