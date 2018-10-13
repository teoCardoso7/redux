import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
            </div>
        );
    }
}
const mapStateToProps=state=> {
    return{
        posts:state.posts
    }
}

export default withRouter(connect(mapStateToProps)(App));

