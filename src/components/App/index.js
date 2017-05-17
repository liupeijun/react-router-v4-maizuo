import React, { Component } from 'react';
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
 NavLink
} from 'react-router-dom'
class App extends Component {
   
    constructor(props) {
        super(props);
        this.state={
            isShow:false,
            firstShow:true
        }
    }

    render() {
        return (
        	<div>
        	   <header>
	        	   	<div className="left">
	        	   		<i className="icon-category iconfont" onClick={()=>{
                            this.setState({
                                isShow:!this.state.isShow,
                                firstShow:false
                            })
                        }}></i> 
	        	   		<span>卖座电影</span>
	        	   	</div>
	        	   	<div className="right">
	        	   		
	        	   		<span>青岛</span>
	        	   		<i className="icon-account iconfont"></i>
	        	   	</div>
        	   </header>

                <nav className={this.state.isShow?'show':'hide'} style={{display:this.state.firstShow?'none':'block'}}>
                    <ul onClick={()=>{
                         this.setState({
                                isShow:!this.state.isShow
                         })
                    }}>
                        <li><NavLink
                              to="/home"
                              activeClassName="selected"
                            >主页</NavLink>
                        </li>
                         <li><NavLink
                              to="/film"
                              activeClassName="selected"
                            >影片</NavLink>
                        </li>
                         <li><NavLink
                              to="/cinema"
                              activeClassName="selected"
                            >影院</NavLink>
                        </li>
                         <li><NavLink
                              to="/me"
                              activeClassName="selected"
                            >我的</NavLink>
                        </li>
                         <li><NavLink
                              to="/card"
                              activeClassName="selected"
                            >卖座卡</NavLink>
                        </li>
                    </ul>

                </nav>

        	   <section>
        	       {this.props.children}
        	   </section>

        	</div>
        );
    }
}

export default App;
