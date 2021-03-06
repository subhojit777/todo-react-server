var Todo = require('../models/todo');
var React = require('react/addons');
var TodoBox = React.createFactory(require('../components-build/TodoBox').TodoBox);

function getTodos(res){
	Todo.find(function(err, todos) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)

    res.json(todos); // return all todos in JSON format
  });
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		getTodos(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      getTodos(res);
    });

	});

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});

	app.get('/', function(req, res) {
    // React.renderToString takes your component
    // and generates the markup
    var reactHtml = React.renderToString(TodoBox({url: "/api/todos"}));
    // Output html rendered by react
    // console.log(myAppHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
  });
};
