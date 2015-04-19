var React = require('react/addons');
var TodoHeader = React.createFactory(require('./TodoHeader').TodoHeader);
var TodoList = React.createFactory(require('./TodoList').TodoList);
var TodoForm = React.createFactory(require('./TodoForm').TodoForm);
var TodoFooter = React.createFactory(require('./TodoFooter').TodoFooter);

var TodoBox = React.createClass({
  ajaxProgress: function () {
    $('.todoList .progress').removeClass('hidden');
    $('.todoList .list').addClass('hidden');
  },
  ajaxComplete: function() {
    $('.todoList .progress').addClass('hidden');
    $('.todoList .list').removeClass('hidden');
  },
  loadTodosFromServer: function() {
    this.ajaxProgress();

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.ajaxComplete();

        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  handleTodoSubmit: function(todo) {
    var todos = this.state.data;
    var newTodos = todos.concat([todo]);
    this.setState({data: newTodos});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: todo,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this),
    });
  },
  handleTodoCheck: function(id) {
    this.ajaxProgress();

    $.ajax({
      url: this.props.url + '/' + id.id.id,
      dataType: 'json',
      type: 'DELETE',
      success: function(data) {
        this.ajaxComplete();

        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    this.loadTodosFromServer();
  },
  render: function() {
    return (
      <div className="todoBox container">
        <TodoHeader count={this.state.data.length} />
        <TodoList data={this.state.data} onTodoCheck={this.handleTodoCheck} />
        <TodoForm onTodoSubmit={this.handleTodoSubmit} />
        <TodoFooter />
      </div>
    );
  }
});

module.exports.TodoBox = TodoBox;
