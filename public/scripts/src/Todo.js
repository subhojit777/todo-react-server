var Todo = React.createClass({
  handleCheck: function(key) {
    this.props.onTodoCheck({id: key});
    return;
  },
  render: function() {
    return (
      <div className="todo">
        <input type="checkbox" onChange={this.handleCheck.bind(this, this.props.id)} ref="todoCheck" />
        <label htmlFor="todo">{this.props.children}</label>
      </div>
    );
  }
});
