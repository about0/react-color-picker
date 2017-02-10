import React, {Component} from 'react';


const Square = React.createClass({
  render() {
    const squareStyle = {
      height: 150,
      backgroundColor: this.props.color
    };
    return (
      <div style={squareStyle}>
      </div>
    );
  }
});


class Label extends React.Component {
  constructor(prop) {
    super(prop);

    this._handelColorPick = this._handelColorPick.bind(this);
  };

  _handelColorPick() {
    this.setState = {
      backgroundColor: "green"
    }
  };

  render() {
    const labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return (
      <p style={labelStyle} onClick={this._handelColorPick}>{this.props.color}</p>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "blue"
    }
  }

  render() {
    const cardStyle = {
      height: 200,
      width: 150,
      padding: 0,
      backgroundColor: "#FFF",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
      filter: "drop-shadow(0px 0px 5px #666)"
    };

    return (
      <div style={cardStyle}>
        <Square color={this.props.color}/>
        <Label color={this.props.color}/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Card color="#FF6123"/>

      </div>
    );
  }
}

export default App;
