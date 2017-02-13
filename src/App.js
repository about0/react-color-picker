import React from 'react';

class Circle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };

    this.handleClickIncrement = this.handleClickIncrement.bind(this);
  }

  handleClickIncrement(e) {
    if (this.state.score >= 100) {
      this.setState({
        score: 100
      })
    } else if ((!!this.state) && this.state.score >= 100) {
      alert(`You have reached the maximum ${this.state.score}`);
    }

    let currentScore = this.state.score;
    e.shiftKey ? currentScore += 10 : currentScore += 1;

    this.setState({
      score: currentScore
    })

  }

  render() {
    const circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "45%",
      width: 100,
      height: 100,
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      fontFamily: 'helvetica',
      userSelect: 'none',
    };

    return (
      <div style={circleStyle}>
        {this.state.score}
        <PlusButton clickHandler={this.handleClickIncrement}/>
        </div>
    );
  }
}
const showCircle = () => {
  const colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363', '#D95A73',
    '#54D99A', '#D90600', '#4A264B'];


  const renderData = [];
  colors.forEach(color => {
    renderData.push(<Circle key={color} bgColor={color}/>)
  });
  return renderData;
};

class PlusButton extends React.Component{

  render() {
    return (
      <button onClick={this.props.clickHandler}>
        +
      </button>
    )
  }
}

class App extends React.Component {

  render() {
    return (
      <div>
        {showCircle()}
      </div>
    );
  }
}

export default
App;
