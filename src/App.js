import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { centerbuttontext: 'Now?' };
  }
  componentWillMount() {
    window.MyVars = {
      startgametime: '',
      timerstarttime: '',
      timerendtime: '',
      sheduleactuality: false,
    };
  }

  RandomSheduleHandler() {
    if (window.MyVars.sheduleactuality){
      this.setState({ centerbuttontext: 'CLICK IT FASTER!!!!' })
      window.MyVars.timerstarttime = new Date();
    }
  }

  CenterButtonClickEvent(e) {
    this.setState((prevState, props) => {
      if (prevState.centerbuttontext == 'Now?') {
        // Set time of start of game
        window.MyVars.startgametime = new Date();
        // min + Math.random() * (max - min)
        const RnadomSheduleTime =  3000 + Math.random() * (6000 - 3000);
        // Shedule time -> set new date, on click handler add
        window.MyVars.sheduleactuality = true;
        setTimeout(this.RandomSheduleHandler.bind(this), RnadomSheduleTime);
        return { centerbuttontext: 'Wait...' }
      }

      if (prevState.centerbuttontext == 'Wait...') {
        alert('nice pref :LOL')
        // Return player back to start
        window.MyVars.sheduleactuality = false;
        return { centerbuttontext: 'Now?' }
      }

      if (prevState.centerbuttontext == 'CLICK IT FASTER!!!!'){
        window.MyVars.timerendtime = new Date();
        return { centerbuttontext: window.MyVars.timerendtime.getTime()-window.MyVars.timerstarttime.getTime() }
      }
      else {
        return { centerbuttontext: 'Now?' }
      }
    })
  }
  render() {
    return (
      <div>
        <button style={{ "width": "100%", "height": "97vh", "fontSize": "xx-large" }} onClick={this.CenterButtonClickEvent.bind(this)}>{this.state.centerbuttontext}</button>
      </div>
    );
  }
}

export default App;
