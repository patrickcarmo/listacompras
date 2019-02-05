import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './common/Header';
import Home from './home';
import CreateList from './create-list';

const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	palette: {
		primary: {
			main: '#2196f3'
		},
	 	 secondary: {
			main: '#ff9100',
	  	},
	},
  });

class App extends Component {
  render() {
	return (
		<MuiThemeProvider theme={theme}>
			<Router>
				<div>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/lista' component={CreateList} />
					</Switch>
				</div>
			</Router>
		</MuiThemeProvider>
    );
  }
}

export default App;