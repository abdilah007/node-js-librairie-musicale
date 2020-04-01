const express = require('express');
const fs = require('fs');
const router = express.Router();


   const  data = fs.readFileSync('artists.json');
let json = JSON.parse(data);



router.get('/', (req, res) => {
  let incre = 1;
  res.render('Home',{json,incre});
});





router.get('/artist/:id', (req, res) => {
  res.render('album',{
  	id:req.params.id,albdat
  });
});


router.get('/al', (req, res) => {
  res.render('songs');
});



router.post('/', (req, res) => {
  
     var bp = req.body;



 
  json.push(bp);

  // saving the array in a file
  const data = JSON.stringify(json);
  fs.writeFileSync('artists.json', data, 'utf-8');
    

  res.redirect('/');
});



 const  albms = fs.readFileSync('albums.json');
let albdat = JSON.parse(albms);

router.post('/artist', (req, res) => {
  
     var dh = req.body;
 
  albdat.push(dh);

  // saving the array in a file
  const albms = JSON.stringify(albdat);
  fs.writeFileSync('albums.json', albms, 'utf-8');
     
  res.redirect('/artist/1');
});




module.exports = router;