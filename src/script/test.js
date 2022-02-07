//Library dependencies
import { gsap } from 'gsap';


export function mainPageAnimation() {
  var widthLetter = 140;

  window.addEventListener("load", () => {
    // console.log(test.offsetWidth);
    gsap.fromTo(".sbrandRightName_1", {opacity: 0}, {y: -(0 * widthLetter), duration: 1, opacity: 1});
    gsap.fromTo(".sbrandRightName_2", {opacity: 0}, {y: -(1 * widthLetter), duration: 3, opacity: 1});
    gsap.fromTo(".sbrandRightName_3", {opacity: 0}, {y: -(2 * widthLetter), duration: 1, opacity: 1});
    gsap.fromTo(".sbrandRightName_4", {opacity: 0}, {y: -(3 * widthLetter), duration: 2.5, opacity: 1});
    gsap.fromTo(".sbrandRightName_5", {opacity: 0}, {y: -(4 * widthLetter), duration: 3, opacity: 1});
    gsap.fromTo(".sbrandRightName_6", {opacity: 0}, {y: -(5 * widthLetter), duration: 1.5, opacity: 1});
    gsap.fromTo(".sbrandRightName_7", {opacity: 0}, {y: -(6 * widthLetter), duration: 1, opacity: 1});
    gsap.fromTo(".sbrandRightName_8", {opacity: 0}, {y: -(7 * widthLetter), duration: 2, opacity: 1});

    gsap.fromTo(".sbrandLeftName_1", {opacity: 0, y: 50}, {y: 0, duration: 1.9, opacity: 1});
    gsap.fromTo(".sbrandLeftName_2", {opacity: 0, y: 50}, {y: 0, duration: 2, opacity: 1});
    gsap.fromTo(".sbrandLeftName_3", {opacity: 0, y: 50}, {y: 0, duration: 2, opacity: 1});
    gsap.fromTo(".sbrandLeftName_4", {opacity: 0, y: 50}, {y: 0, duration: 2.1, opacity: 1});
    gsap.fromTo(".sbrandLeftName_5", {opacity: 0, y: 50}, {y: 0, duration: 1.8, opacity: 1});
    gsap.fromTo(".sbrandLeftName_6", {opacity: 0, y: 50}, {y: 0, duration: 1.9, opacity: 1});
    gsap.fromTo(".sbrandLeftName_7", {opacity: 0, y: 50}, {y: 0, duration: 2.1, opacity: 1});
    gsap.fromTo(".sbrandLeftName_8", {opacity: 0, y: 50}, {y: 0, duration: 2, opacity: 1});


  });


}
