import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Custom Components
import TitleBar from './TitleBar';
import TableElement from './TableElement';
// -----------------

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TitleBar/>
        <TableElement/>
      </MuiThemeProvider>
    );
  }
}

export default App;
