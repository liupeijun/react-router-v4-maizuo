import React, { Component } from 'react';
import "./index.scss";
import NowPlaying from "../NowPlaying/index"; 
import ComingSoon from "../ComingSoon/index"; 
import {
  NavLink
} from 'react-router-dom'
class App extends Component {
   
    constructor(props) {
        super(props);
    }


    componentWillMount() {
      
    }

    render() {
        return (
            <div>
                <ul className="filmnav">
                     <li><NavLink
                              to="/film/now-playing"
                              activeClassName="filmselected"
                            >正在热映</NavLink>
                     </li>
                     <li><NavLink
                              to="/film/coming-soon"
                              activeClassName="filmselected"
                            >即将上映</NavLink>
                     </li>
                </ul>

               {this.props.children}
            </div>
        );
    }
}

export default App;
