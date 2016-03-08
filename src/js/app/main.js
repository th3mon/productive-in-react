// App
var App = React.createClass({
  render: function() {
    return (
      <div className="foo">Hello, world!</div>
    )
  }
});

React.render(<App/>, document.querySelector("#main"));