import './App.css';
import React, { Component,lazy } from 'react';
import { HashRouter,BrowserRouter, Route, Switch } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';

function App() {
  const Layout = lazy(() => import('./containers/Layout'));
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"> <CircularProgress />Loading ...</div>
    </div>
  )
  return (
    <HashRouter>
           <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/" name="Home" render={props => {return (<Layout {...props}/>);}} />
             
            </Switch>
          </React.Suspense>
      </HashRouter> 
  );
}

export default withNamespaces()(App);

