import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import MovieList from "./MovieList";
// import Nav from "./Nav";
// import { MovieProvider } from "./MovieContext";
// import AddMovie from './AddMovie';

import SearchArea from "./SearchArea";
import WatchArea from "./WatchArea";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchArea} />
        <Route path='/watch/:id' component={WatchArea } />
      </Switch>
      </BrowserRouter>

    </div>
    /* /* <div className="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'100%'}}/>
              <div className="container">
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
              </div>
      </div>
      <div className="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'100%'}}/>
              <div className="container">
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
              </div>
      </div>
      <div className="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'100%'}}/>
              <div className="container">
                <h4><b>John Doe</b></h4> 
                <p>Architect & Engineer</p> 
              </div>
      </div> */

    // <MovieProvider>
    //   <div className="App">
    //     <Nav />
    //     <AddMovie/>
    //     <MovieList />
    //   </div>
    // </MovieProvider> */}
  );
}

export default App;
