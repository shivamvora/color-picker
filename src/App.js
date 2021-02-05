
import React from 'react';
import "./App.css";
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import Colors from './color';




class App extends React.Component {
  state = {
        colors:[
            purple[500],
            purple[200],
            purple[900],
            red[500],
            red[400],
            red[900],
            pink[500],
            pink[200],
            pink[900],
            blue[500],
            blue[200],
            blue[900],
            indigo[500],
            indigo[200],
            indigo[900],
            deepPurple[500],
            teal[400],
            green[500],
            orange[500]
  ]
};
  render(){
    return <div className="App">
      <Colors colorNames={this.state.colors}/>
    </div>;
  
  };

}

export default App;
