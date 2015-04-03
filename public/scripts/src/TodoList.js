var TodoList = React.createClass({
  handleTodoCheck: function(id) {
    this.props.onTodoCheck({id: id});
    return;
  },
  render: function() {
    var todoNodes = this.props.data.map(function(todo) {
      return (
        <Todo id={todo._id} onTodoCheck={this.handleTodoCheck}>
          {todo.text}
        </Todo>
      );
    }, this);

    var progressBarStyle = {
      width: '100%',
    };

    return (
      <div className="todoList row">
        <div className="list">
          <div className="col-md-4 col-md-offset-4">
            {todoNodes}
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={progressBarStyle}>
          </div>
        </div>
      </div>
    );
  }
});
