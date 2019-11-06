import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
const Demo = lazy(() => import('./Demo/Demo'))
const Home = lazy(() => import('./Home/Home'))

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Root</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <h1>ROOT</h1>
          </Route>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/demo">
              <Demo />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
