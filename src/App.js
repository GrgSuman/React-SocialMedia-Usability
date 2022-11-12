import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Error from './components/ErrorPage/Error';
import Main from './components/Main Container/Main';
import Main2 from './components/Main Container/Main2';
import Navigation from './components/Navigation/Navigation';
import SearchSmall from './components/SearchForSmall/SearchSmall';
import { ClickContextProvider } from './Global/GlobalState';
import './root.css';

function App() {


  return (
    <div className="App">
      <ClickContextProvider>
      <Navigation/>
      <Switch>
      <Route exact path="/profile" component={Main2}/>
      <Route exact path="/search" component={SearchSmall}/>
      <Route exact path="/" component={Main}/>
      <Route exact component={Error}/>
      </Switch>
      </ClickContextProvider>
    </div>
  );
}

export default App;
