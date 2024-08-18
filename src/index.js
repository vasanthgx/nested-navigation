import React from 'react';
import ReactDOM from 'react-dom/client';
import NestedNavigation from './NestedNavigation';
import menus from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NestedNavigation menus={menus}/>
  </React.StrictMode>
);


