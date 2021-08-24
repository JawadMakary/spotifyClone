import React from 'react';
// only screens
const Home = React.lazy(() => import('./screens/Home'));

let routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', exact: true,  name: 'Home', component: Home },
];


export default routes;