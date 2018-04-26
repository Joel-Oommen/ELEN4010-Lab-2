let path = require('path');
let express = require('express');
let router = express.Router();
let todoList = []; //our todo list array


//RESTful apt
router.get('/api/list', function (req, res) {
  res.json(todoList); //Respond with JSON
});

router.get('/api/get/:id', function (req, res) {
  res.json(todoList[req.params.id]); //Notice the wildcard in the URL?
              //Try browsing to /api/get/0 once you've added some entries
});

router.post('/api/create', function(req, res){
  console.log("Creating the following todo:", req.body.todo);
  todoList.push(req.body.todo);
  res.redirect(req.baseUrl + '/api/list');
});
/*
router.post('/api/create', function(req, res){
  console.log("Creating your shopping List");
  res.redirect(req.baseUrl + '/addtolist');
});

router.get('/addtolist', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'todo', 'addtolist.html'));
});

router.post('/api/addtolist', function(req, res){
  console.log("Adding to shopping List:", req.body.Itemname);

  tempitem = {name:req.body.Itemname, price:req.body.Itemprice}
  todoList.push(tempitem);
  res.redirect(req.baseUrl + '/api/list');
});


*/

router.post('/api/delete', function(req, res){
  console.log("deleting a todo entry");
});

router.post('/api/edit', function(req, res){
  console.log("editing a todo entry");
});

// ----------------------------- URL additions ------------------------------ //

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'todo', 'index.html'));
});


router.get('/create', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'todo', 'create.html'));
});

router.get('/delete', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'todo', 'delete.html'));
});

router.post('/edit', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'todo', 'edit.html'));
});

module.exports = router;
