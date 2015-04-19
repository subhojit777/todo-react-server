var React = require('react/addons');

var TodoFooter = React.createClass({
  render: function() {
    return (
      <div className="todoFooter row text-center">
        <div>A demo by <a href="https://github.com/subhojit777">subhojit777</a>.</div>
        <div>See in GitHub <a href="https://github.com/subhojit777/todo-react">todo-react</a>.</div>
      </div>
    );
  }
});

module.exports.TodoFooter = TodoFooter;
