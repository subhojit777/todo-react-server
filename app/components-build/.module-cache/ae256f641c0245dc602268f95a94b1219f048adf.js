var React = require('react/addons');

var TodoForm = React.createClass({displayName: "TodoForm",
  handleSubmit: function(e) {
    e.preventDefault();
    var todo = React.findDOMNode(this.refs.todo).value.trim();
    if (!todo) {
      return;
    }
    this.props.onTodoSubmit({text: todo});
    React.findDOMNode(this.refs.todo).value = '';
    return;
  },
  render: function() {
    return (
      React.createElement("div", {className: "todoForm row"}, 
        React.createElement("div", {className: "col-sm-8 col-sm-offset-2 text-center"}, 
          React.createElement("form", {onSubmit: this.handleSubmit}, 
            React.createElement("div", {className: "form-group"}, 
              React.createElement("input", {type: "text", placeholder: "I want to buy a puppy that will love me forever", ref: "todo", className: "form-control input-lg"})
            ), 
            React.createElement("div", {className: "form-group"}, 
              React.createElement("input", {type: "submit", value: "Add", className: "btn btn-lg btn-success"})
            )
          )
        )
      )
    );
  }
});

module.exports.TodoForm = TodoForm;
