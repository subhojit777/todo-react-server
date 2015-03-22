/** @jsx React.DOM */

var React = require('react');

module.exports = Todo = React.createClass({
  render: function(){
    var todo = this.props.todo;
    return (
      <div class="col-sm-4 col-sm-offset-4">

        <div class="checkbox">
          <label>
            <input type="checkbox"> {{ todo.text }}
          </label>
        </div>

        <p class="text-center">
          <span class="fa fa-spinner fa-spin fa-3x"></span>
        </p>

      </div>
    )
  }
});
