/** @jsx React.DOM */

var React = require('react');

module.exports = Todo = React.createClass({
  render: function(){
    return (
			<div id="todo-form" class="row">
				<div class="col-sm-8 col-sm-offset-2 text-center">
					<form>
						<div class="form-group">
							<input type="text" class="form-control input-lg text-center" placeholder="I want to buy a puppy that will love me forever">
						</div>

						<button type="submit" class="btn btn-primary btn-lg">Add</button>
					</form>
				</div>
			</div>
    )
  }
});
