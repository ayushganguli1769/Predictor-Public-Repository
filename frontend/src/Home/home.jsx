import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageLoader from './Components/api_loader/page_loader'


const Home = lazy(() => import('./Components/Home/home'))

class App extends Component {
  render() {
    return (
      <Suspense fallback={<PageLoader className="page-loader"/>}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
