import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/Header/';
import List from './containers/List/';
import Detail from './containers/Detail/';
import 'antd/dist/antd.css';
import './style.css';

const { Header, Footer, Content } = Layout;

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout style={{ minWidth: 1260, height: '100%' }}>
		      <Header className="header">
		      	<AppHeader />
		      </Header>
		      <Content className="content">
	      		<Switch>
	      			<Route path='/detail/:id' component={Detail} />
		      		<Route path='/:id?' component={List} />
		      	</Switch>
		      </Content>
		      <Footer className="footer">@ Vins-wang 2019</Footer>
	    	</Layout>
    	</BrowserRouter>
		)
	}
}


ReactDom.render(<App />, document.getElementById('root'));
