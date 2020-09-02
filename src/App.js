import React, {useState} from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../src/components/Login'
import { useStateValue } from './Reducer/StateProvider';

function App() {

const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ):(
    <div className="app_body">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/rooms/:roomId">
              <Chat />
          </Route>
          <Route path="/" >
            <Chat />
          </Route>
      </Switch>
      </Router>
    </div>
       )}
    </div>
  );
}

export default App;
