var React = require('react/addons');

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
      <div className="todoForm row">
        <div className="col-sm-8 col-sm-offset-2 text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="I want to buy a puppy that will love me forever" ref="todo" className="form-control input-lg" />
            </div>
            <div className="form-group">
              <input type="submit" value="Add" className="btn btn-lg btn-success" />
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports.TodoForm = TodoForm;
