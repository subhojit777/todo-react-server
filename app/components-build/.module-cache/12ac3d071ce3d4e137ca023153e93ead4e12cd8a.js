var react = require('react/addons');

var todoFooter = React.createClass({displayName: "todoFooter",
  render: function() {
    return (
      React.createElement("div", {className: "todoFooter row text-center"}, 
        React.createElement("div", null, "A demo by ", React.createElement("a", {href: "https://github.com/subhojit777"}, "subhojit777"), "."), 
        React.createElement("div", null, "See in GitHub ", React.createElement("a", {href: "https://github.com/subhojit777/todo-react"}, "todo-react"), ".")
      )
    );
  }
});

module.exports.todoFooter = todoFooter;
