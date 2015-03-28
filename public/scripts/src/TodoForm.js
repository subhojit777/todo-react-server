var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var todo = React.findDOMNode(this.refs.todo).value.trim();
    if (!todo) {
      return;
    }
    this.props.onTodoSubmit({text: todo});
    React.findDOMNode(this.refs.todo).value = '';
    return;
  },
  render: function() {
    return (
      <form className="todoForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="I want to buy a puppy that will love me forever" ref="todo" />
        <input type="submit" value="Add" />
      </form>
    );
  }
});
