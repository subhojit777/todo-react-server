/** @jsx React.DOM */

var React = require('react');

// Export the TweetsApp component
module.exports = TodoApp = React.createClass({

  // Render the component
  render: function() {

    return (
      <div className="container">
        <HeaderTodoCount count={this.state.count} />
        <Todos todos={this.state.todos} />
        <CreateTodo />
      </div>
    )

  }

});
