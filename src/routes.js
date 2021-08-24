import React from 'react';
// only screens
const Home = React.lazy(() => import('./screens/Home'));
const Login = React.lazy(() => import('./screens/Login'));

let routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/login', exact: true,  name: 'Login', component: Login },
  { path: '/home', exact: true,  name: 'Home', component: Home },
];


export default routes;