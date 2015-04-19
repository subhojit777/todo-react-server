var React = require('react/addons');

var TodoHeader = React.createClass({
  render: function() {
    return (
      <div className="todoHeader jumbotron text-center row">
        <h1>I'm a Todo-aholic <label className="label label-info">{this.props.count}</label></h1>
      </div>
    );
  }
});

module.exports.TodoHeader = TodoHeader;
