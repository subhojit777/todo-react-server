var React = require('react/addons');

var Todo = React.createClass({
  handleCheck: function(key) {
    this.props.onTodoCheck({id: key});
    return;
  },
  render: function() {
    return (
      <div className="todo checkbox">
        <label>
          <input type="checkbox" onChange={this.handleCheck.bind(this, this.props.id)} ref="todoCheck" /> {this.props.children}
        </label>
      </div>
    );
  }
});

module.exports.Todo = Todo;
