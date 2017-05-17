
import React, { Component } from 'react';
import "./index.scss";
import axios from "axios";
class App extends Component {
   
    constructor(props) {
        super(props);
        this.state={
            info:null
        }
    }

    componentWillMount() {
        axios.get(`/v4/api/film/${this.props.match.params.kerwinId}`).then(res=>{
            this.setState({
                info:res.data.data.film
            })
        })

    }

    render() {
        return (
            <div>
                {
                    this.state.info
                    ?<div className="detailContent">
                        <img src={this.state.info.cover.origin}/>
                        <h3>{this.state.info.name}</h3>
                        <p>{this.state.info.synopsis}</p>
                      </div>
                    :null
                }
            </div>
        );
    }
}

export default App;
