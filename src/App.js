import React from 'react';
import Counter from './Counter';
import Dashboard from './Dashboard'
import Second from './Second'
import StuffList from './StuffList';
import { Switch, Route, Link } from 'react-router-dom'

/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <nav>
          <Link to="/dashboard">Test</Link>
          <Link to="/second">Second</Link>
        </nav>
        <div>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/second" component={Second}/>
        </div>
        <StuffList />
      </div>



    );
  }
}

export default App;
