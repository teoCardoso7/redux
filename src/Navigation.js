import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Home from './Home'
import Posts from './Posts'
import PostDetail from './PostDetail'

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/posts" component={Posts}/>
                    <Route path="/posts/:id" component={PostDetail}/>
                </div>
            </Router>
        )
    }
}

export default Navigation