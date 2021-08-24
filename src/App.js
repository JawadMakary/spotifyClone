import './App.css';
import React, { Component,lazy } from 'react';
import { HashRouter,BrowserRouter, Route, Switch } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import Login from './screens/Login';
import { useState,useEffect } from 'react';
import Home from './screens/Home';
import { getTokenFromResponse } from './api/spotify';

function App() {
  const [token,setToken]=useState(null)
 

 useEffect(()=>{
 
  const hash=getTokenFromResponse()
 window.location.hash=''
// _ => temporary
 const _token=hash.access_token;
 console.log(_token)
  if(_token){
    setToken(_token)
  }
},[])
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
           {token ?(
           <Route path="/" name="Home" render={props => {return (<Layout {...props}/>);}} />
           ):(
          <Login /> 
           )}
            </Switch>
          </React.Suspense>
      </HashRouter> 
  );
}

export default withNamespaces()(App);

