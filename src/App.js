import React, {useState} from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <h1>LoginScreen</h1>
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
