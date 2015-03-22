/** @jsx React.DOM */

var React = require('react');

module.exports = HeaderTodoCount = React.createClass({
  render: function(){
    var count = this.props.count;
    return (
			<div class="jumbotron text-center">
				<h1>Im a Todo-aholic <span class="label label-info"> {count} </span></h1>
			</div>
    )
  }
});
