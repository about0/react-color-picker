import React, {Component} from 'react';

class Circle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      score: 0
    };

    this.handleClickIncrement = this.handleClickIncrement.bind(this);
  }

  handleClickIncrement(e) {
    if((!!this.state) && this.state.score >= 10){
      alert(`You have reached the maximum ${this.state.score}`);
      return
    }

    this.setState({
      score: this.state.score + 1
    });

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
      <div style={circleStyle} onClick={this.handleClickIncrement}><span>{this.state.score}</span></div>
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

class App extends Component {

  render() {
    return (
      <div>
        {showCircle()}

      </div>
    );
  }
}

export default App;
