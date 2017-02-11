import React, {Component} from 'react';

class LightningCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0
    };

    this.timerTick = this.timerTick.bind(this);
  }

  timerTick() {
    this.setState({
      strikes: this.state.strikes + 10
    })
  }

  componentDidMount() {
    setInterval(this.timerTick, 100)
  }


  render() {
    return (
      <h1>{this.state.strikes}</h1>
    )
  }
}

class CounterDisplay
  extends React.Component {
  render() {
    const divStyle = {
      width: 250,
      textAlign: 'center',
      backgroundColor: "black",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999"
    };
    return (
      <div style={divStyle}>
        <LightningCounter />
      </div>
    )

  }
}

class App extends Component {

  render() {
    return (
      <div>
        <CounterDisplay />
      </div>
    );
  }
}

export default App;
