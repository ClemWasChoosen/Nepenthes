//Webpack
import _ from 'lodash';

//Css files
import './styles/style.css';
import './styles/brandLeftMain.css';
import './styles/hamburger.css'

//Script
import { mainPageAnimation } from './script/test';

//Library dependencies
import { gsap } from 'gsap';

//Code


// function component() {
//   const element = document.createElement('div');
//
//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//
//   return element;
// }
//
// document.body.appendChild(component());

mainPageAnimation();
const test = document.getElementsByClassName('.sbrandRightName_1');
// const widthSelect = document.getElementsByClassName("sbrandRightName_1").offsetWidth;
