var TodoHeader = React.createClass({displayName: "TodoHeader",
  render: function() {
    return (
      React.createElement("div", {className: "todoHeader"}, 
        "I'm a Todo-aholic ", this.props.count
      )
    );
  }
});
