import React from 'react';
import { render } from 'react-dom';
//import Playlist from './src/playlist/components/playlist.js';
import APIdata from '../api.json';
import Home from '../pages/containers/home';

//To render components into DOM
//import ReactDOM from 'react-dom';
//ReactDOM.render(what to render, where to render);


//Reference where the element will be rendered
const app = document.getElementById('app');

//What to render and where
const test = <h1>Test React App</h1>; //Can be put in render(test, app)

//title:string
//author:string
//image:string
render( <Home data={APIdata} />, app);