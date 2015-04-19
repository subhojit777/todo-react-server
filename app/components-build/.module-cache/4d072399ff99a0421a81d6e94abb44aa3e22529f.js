var React = require('react/addons');

var todo = React.createClass({displayName: "todo",
  handleCheck: function(key) {
    this.props.onTodoCheck({id: key});
    return;
  },
  render: function() {
    return (
      React.createElement("div", {className: "todo checkbox"}, 
        React.createElement("label", null, 
          React.createElement("input", {type: "checkbox", onChange: this.handleCheck.bind(this, this.props.id), ref: "todoCheck"}), " ", this.props.children
        )
      )
    );
  }
});

module.exports.todo = todo;
