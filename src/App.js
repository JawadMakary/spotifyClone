import './App.css';
import React, { Component,lazy } from 'react';
import { HashRouter,BrowserRouter, Route, Switch } from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";
import i18n from './i18n';
import { withNamespaces } from 'react-i18next';
import Login from './screens/Login';
import { useState,useEffect } from 'react';
import Home from './screens/Home';
import {useStateValue} from './state/StateProvider'
import { getTokenFromResponse } from './api/spotify';
// to connect spotify to reactjs
import SpotifyWebApi from 'spotify-web-api-js';
const spotify=new SpotifyWebApi()
function App() {
  const[{user,token,playlists},dispatch]=useStateValue()

 useEffect(()=>{
  const hash=getTokenFromResponse()
 window.location.hash=''
// _ => temporary
 const _token=hash.access_token;
  if(_token){
    
    dispatch({
      type:"SET_TOKEN",
      token:_token,
    })
    spotify.setAccessToken(_token)
    spotify.getMe().then((user)=>{
      dispatch({
        type:'SET_USER',
        user:user
      })
    })
    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type:'SET_PLAYLISTS',
        playlists:playlists
      })
    })
  }
  console.log('this is my playlist data--->',playlists)
   console.log('this is my token---->',token)
   console.log('this is the username--->',user)
},[token,user,playlists])
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
           <Route path="/"  render={props => {return (<Layout spotify={spotify}/>);}} />
           ):(
          <Login /> 
           )}
            </Switch>
          </React.Suspense>
      </HashRouter> 
  );
}

export default withNamespaces()(App);

