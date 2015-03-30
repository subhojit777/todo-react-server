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
    return (
      React.createElement("div", {className: "todoList"}, 
        todoNodes
      )
    );
  }
});
