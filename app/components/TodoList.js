var React = require('react/addons');
var Todo = React.createFactory(require('./Todo').Todo);

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

    var style = {
      width: '100%'
    };

    return (
      <div className="row todoList">
        <div className="col-md-4 col-md-offset-4">
          <div className="progress">
            <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={style}>
              <span className="sr-only">100% Complete</span>
            </div>
          </div>
          <div className="list">
            {todoNodes}
          </div>
        </div>
      </div>
    );
  }
});

module.exports.TodoList = TodoList;
