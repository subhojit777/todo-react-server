var TodoHeader = React.createClass({
  render: function() {
    return (
      <div className="todoHeader">
        I'm a Todo-aholic {this.props.count}
      </div>
    );
  }
});
