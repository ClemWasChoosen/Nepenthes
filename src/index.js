import _ from 'lodash';
import './styles/style.css';
import './styles/brandLeftMain.css';
import { Hello } from './script/test';
import { gsap } from 'gsap';

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

const test = document.getElementsByClassName('.sbrandRightName_1');
const widthSelect = document.getElementsByClassName(".sbrandRightName_1").offsetWidth;

window.addEventListener("load", () => {
  console.log(document.getElementsByClassName(".sbrandRightName_1").offsetWidth);
  gsap.to(".sbrandRightName_1", {y: (0 * widthSelect), duration: 2});
  gsap.to(".sbrandRightName_2", {y: (1 * widthSelect), duration: 2});
  gsap.to(".sbrandRightName_3", {y: (2 * widthSelect), duration: 2});
  gsap.to(".sbrandRightName_4", {y: (3 * widthSelect), duration: 2});
  gsap.to(".sbrandRightName_5", {y: (4 * widthSelect), duration: 2});
  gsap.to(".sbrandRightName_6", {y: (5 * widthSelect), duration: 2});
  gsap.to(".sbrandRightName_7", {y: (6 * widthSelect), duration: 2});
  gsap.to(".sbrandRightName_8", {y: (7 * widthSelect), duration: 2});
})
