/** @jsx React.DOM */

var React = require('react/addons');
var TodoBox = React.createFactory(require('./components-build/TodoBox').TodoBox);
var mountNode = document.getElementById("content");
React.renderComponent(new TodoBox({url: "/api/todos"}), mountNode);
