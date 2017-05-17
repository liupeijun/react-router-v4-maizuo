import React, { Component } from 'react';
import "./index.scss";
import axios from "axios";
class App extends Component {
   
    constructor(props) {
        super(props);

        this.state={
            datalist:[]
        }
    }

    componentWillMount() {
        axios.get("/v4/api/film/now-playing",{
            params:{
                page:1,
                count:7
            }
        }).then(res=>{
            console.log(res.data);
            this.setState({
                datalist:res.data.data.films
            })
        })
    }

    componentDidMount() {
        window.onscroll = function(){
            console.log("准备无限加载判断");
        }
    }
   
    componentWillUnmount() {
        //在这里可以cancelToken ,取消请求
        window.onscroll = null;

    }

    render() {
        return (
            <div>
                <ul className="playinglist">
                    {this.state.datalist.map((item,index)=>
                        <li key={item.id} onClick={()=>{
                            this.props.history.push(`/detail/${item.id}`)
                        }}>
                            <img src={item.poster.thumbnail}/>
                            <div className="content">
                                <h3>{item.name}</h3>
                                <p>{item.intro}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
