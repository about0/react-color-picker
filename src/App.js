import React, {Component} from 'react';


const Square = React.createClass({
  render() {
    const squareStyle = {
      height: 150,
      backgroundColor: this.props.backgroundColor
    };
    return (
      <div style={squareStyle}>
      </div>
    );
  }
});

class Label extends React.Component {

  render() {
    const labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return (
      <p style={labelStyle} >{this.props.backgroundColor}</p>
    );
  }
}



class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {backgroundColor: "blue"};

   this._handelRandomColor = this._handelRandomColor.bind(this);
  };


  _handelRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let o = 0; o < 6; o++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    this.setState({
      backgroundColor: color
    });
  };

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
      <div style={cardStyle} onClick={this._handelRandomColor}>
        <Square {...this.state} />
        <Label {...this.state}/>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

export default App;
