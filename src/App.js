import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


import {
  BrowserRouter as Router,Switch,Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App =()=> {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  return (
      <div>
        <Router>
      <Navbar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
        
      />
       
      
      <Switch>
          <Route exact path="/">
            <News  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>
          </Route>
          <Route exact path="/business"><News  apiKey={apiKey} key="business" setProgress={setProgress} pageSize={pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News  apiKey={apiKey} key="entertainment" setProgress={setProgress} pageSize={pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News  apiKey={apiKey} key="general" setProgress={setProgress} pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/health"><News  apiKey={apiKey} key="health"setProgress={setProgress} pageSize={pageSize} country="in" category="health"/></Route>
          <Route exact path="/science"><News  apiKey={apiKey} key="science" setProgress={setProgress} pageSize={pageSize} country="in" category="science"/></Route>
          <Route exact path="/sports"><News  apiKey={apiKey} key="sports" setProgress={setProgress} pageSize={pageSize} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News  apiKey={apiKey} key="technology" setProgress={setProgress} pageSize={pageSize} country="in" category="technology"/></Route>
        </Switch>
      </Router>

      </div>
      
     
    )
    
    // state = {
    //   progress: 0
    // }
  
}
export default App;




