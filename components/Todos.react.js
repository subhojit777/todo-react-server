/** @jsx React.DOM */

var React = require('react');
var Todo = require('./Todo.react.js');

module.exports = Todos = React.createClass({

  render: function(){

    var content = this.props.todos.map(function(todo){
      return (
        <Todo key={todo._id} todo={todo} />
      )
    });

    return (
      <div id="todo-list" class="row">{content}</div>
    )

  }

});
