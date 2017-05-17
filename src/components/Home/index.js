import React, { Component } from 'react';
import "./index.scss";
import ReactSwipe from 'react-swipe';
import axios from "axios";
class App extends Component {
   
    constructor(props) {
        super(props);
        this.state={
            datalist:[],
            playinglist:[]
        }
    }

    componentWillMount() {
        console.log(this.state.datalist.length)
        axios.get("/v4/api/billboard/home").then(res=>{
            //接口错误排除
            if(res.data.data.billboards){
                this.setState({
                    datalist:res.data.data.billboards
                })
            }
            
        })
        axios.get("/v4/api/film/now-playing").then(res=>{
            this.setState({
                playinglist:res.data.data.films
            })

        })         
    }

    render() {
        return (
            <div className="home">
               <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 3000,
}} key={this.state.datalist.length}>
                {
                    this.state.datalist.map((item)=>
                        <div key={item.id} >
                            <img src={item.imageUrl} style={{width:"100%"}}/>
                        </div>
                    )
                }

                
               </ReactSwipe>
               <ul className="homeplayinglist">
                    {
                        this.state.playinglist.map((item,index)=>
                        <li key={item.id} onClick={()=>{
                            this.props.history.push(`/detail/${item.id}`);
                        }}>
                            <img src={item.cover.origin}/>
                            <h3>{item.name}</h3>
                            <p>{item.cinemaCount+"家影院上映  "+item.watchCount+"人购票"}</p>
                        </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default App;
