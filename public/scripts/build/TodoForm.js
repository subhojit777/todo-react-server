var TodoForm = React.createClass({displayName: "TodoForm",
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
      React.createElement("form", {className: "todoForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {type: "text", placeholder: "I want to buy a puppy that will love me forever", ref: "todo"}), 
        React.createElement("input", {type: "submit", value: "Add"})
      )
    );
  }
});
