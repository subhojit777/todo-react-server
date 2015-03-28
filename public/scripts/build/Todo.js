var Todo = React.createClass({displayName: "Todo",
  handleCheck: function(key) {
    this.props.onTodoCheck({id: key});
    return;
  },
  render: function() {
    return (
      React.createElement("div", {className: "todo"}, 
        React.createElement("input", {type: "checkbox", onChange: this.handleCheck.bind(this, this.props.id), ref: "todoCheck"}), 
        React.createElement("label", {htmlFor: "todo"}, this.props.children)
      )
    );
  }
});
