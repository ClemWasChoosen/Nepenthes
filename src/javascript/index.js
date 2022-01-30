// For the styles css
import "../styles/style.css";
import redMarble from "../resources/white-marble.png" ;
import redMarbleMap from "../resources/white-marble-NormalMap.png" ;


// Import external js
import { setupGui } from './debug';

// Import for the three library
import * as THREE from 'three'
import * as dat from 'dat.gui'


// Get the html element
const canvas = document.querySelector('.webgl');

// Scene
const scene = new THREE.Scene();

// Bloc 1
const geometry = new THREE.BoxGeometry(2, 0.5, 1);
const material = new THREE.MeshPhongMaterial();
const redM = new THREE.TextureLoader().load(redMarble);
const redMMap = new THREE.TextureLoader().load(redMarble);
redMMap.minFilter = THREE.LinearFilter;
redM.minFilter = THREE.LinearFilter;
material.map = redM;
material.normalMap = redMMap;
// material.color = new THREE.Color('#566D7E')
const bloc = new THREE.Mesh(geometry,material);

let blocs = [];
let xAxisBloc = 0;
let nbBlocs = 10;

// Display blocs like necessary on screen (blocs sets inside blocs[] array)
for (var i = 0; i < nbBlocs / 2; i++) {
  blocs.push(new THREE.Mesh(geometry,material));
  blocs[i].rotation.set(0, 0, 0);
  blocs[i].position.set(xAxisBloc, 0, 0);
  scene.add(blocs[i]);
  xAxisBloc += 2.5;
}

xAxisBloc = 0;

for (var i = nbBlocs / 2; i < nbBlocs; i++) {
  blocs.push(new THREE.Mesh(geometry,material));
  blocs[i].rotation.set(0, 0, 0);
  blocs[i].position.set(xAxisBloc, 0, 1.5);
  scene.add(blocs[i]);
  xAxisBloc += 2.5;
}


//position of the bloc
bloc.rotation.set(0, 0, 0);
bloc.position.set(0, 0, 0);


// Lights
const ambiantPointLight = new THREE.AmbientLight(0x404040);
// ambiantPointLight.position.set(0, 5, 3);
scene.add(ambiantPointLight);

const pointLight = new THREE.PointLight('#E8BEA0', 0.6);
pointLight.position.set(2.1, 2, -1);
scene.add(pointLight);


// Set the Help light point
const lightHelp = new THREE.PointLightHelper(pointLight, 1, 'red');
scene.add(lightHelp);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

//Resize of the content when I change the height and width window
window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 5;
camera.position.z = 3;
camera.rotation.set(-0.95, 0, -0.5);
scene.add(camera);

//Gui camera position
setupGui(camera, pointLight);


// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // bloc.rotation.y = .5 * elapsedTime
    // bloc.rotation.x = .5 * elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
};

canvas.addEventListener("webglcontextlost", function(event) {
    event.preventDefault();
}, false);
canvas.addEventListener(
    "webglcontextrestored", () => location.reload(), false);

tick();
