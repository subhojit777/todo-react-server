var TodoList = React.createClass({displayName: "TodoList",
  handleTodoCheck: function(id) {
    this.props.onTodoCheck({id: id});
    return;
  },
  render: function() {
    var todoNodes = this.props.data.map(function(todo) {
      return (
        React.createElement(Todo, {id: todo._id, onTodoCheck: this.handleTodoCheck}, 
          todo.text
        )
      );
    }, this);

    var progressBarStyle = {
      width: '100%',
    };

    return (
      React.createElement("div", {className: "todoList row"}, 
        React.createElement("div", {className: "list"}, 
          React.createElement("div", {className: "col-md-4 col-md-offset-4"}, 
            todoNodes
          )
        ), 
        React.createElement("div", {class: "progress"}, 
          React.createElement("div", {class: "progress-bar progress-bar-striped active", role: "progressbar", "aria-valuenow": "45", "aria-valuemin": "0", "aria-valuemax": "100", style: progressBarStyle}
          )
        )
      )
    );
  }
});
