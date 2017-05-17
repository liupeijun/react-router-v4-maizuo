import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import App from "./components/App/index"; 
import Home from "./components/Home/index"; 
import Cinema from "./components/Cinema/index"; 
import Me from "./components/Me/index"; 
import Card from "./components/Card/index"; 
import Film from "./components/Film/index"; 
import NowPlaying from "./components/NowPlaying/index"; 
import ComingSoon from "./components/ComingSoon/index"; 
import Detail from "./components/Detail/index"; 
const router = (
  <Router>
    <App>
      <Switch> {/*Renders the first child <Route> or <Redirect> that matches the location.*/}
      <Route path="/home" component={Home} />
      <Route path="/film" render={()=>
        <Film>
          <Switch>{/*Renders the first child <Route> or <Redirect> that matches the location.*/}
             <Route path="/film/now-playing" component={NowPlaying}/>
             <Route path="/film/coming-soon" component={ComingSoon}/>
             <Redirect from="/film" to="/film/now-playing"/> {/*重定向*/}
          </Switch>
        </Film>
      }>
      </Route>
      <Route path="/cinema" component={Cinema}>
      </Route>
      <Route path="/me" component={Me}>
      </Route>
      <Route path="/card" component={Card} >
      </Route>
      <Route path="/detail/:kerwinId" render={props=>
          <Detail {...props} kerwin="OK"/>
      }>
      </Route>
      <Redirect from="/" to="/home"/> {/*重定向*/}

      </Switch>
    </App>
  </Router>
) 

export default router; 