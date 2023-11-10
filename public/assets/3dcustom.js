import { OBJLoader } from './OBJLoader.js';
import { OrbitControls } from './OrbitControls.js';

$(document).ready(function(){

const { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, PointLight} = THREE; 
// Set up the scene, camera, and renderer as global variables.
var scene, camera, renderer, model;

init();
animate();

function init() {
    // Set up the scene
    scene = new Scene();

    // Add a camera
    camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Create a renderer and add it to the DOM.
    renderer = new WebGLRenderer({antialias: true});
    var container = document.getElementById('model-container')
    renderer.setSize(container.clientWidth - 60, window.innerHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Add lighting
    var ambientLight = new AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    var pointLight = new PointLight(0xffffff, 0.5);
    camera.add(pointLight);
    scene.add(camera); // This adds the camera to the scene with the light

    // Dropdown for color change
    const colorSelector = document.getElementById('colorSelector');
    colorSelector.addEventListener('change', updateModelColor);

    // Load the OBJ file
    var loader = new OBJLoader();
    loader.load('public/assets/Dallah_v2.0.obj', function (object) {
        model = object;
        object.scale.set(10, 10, 10);
        scene.add(object);
    });

    // Handle window resizing
    window.addEventListener('resize', onWindowResize, false);
}

function updateModelColor() {
    const colorValue = document.getElementById('colorSelector').value;
    if (model) {
        model.traverse(function (child) { // For each part of the model
            if (child instanceof THREE.Mesh) {
                child.material.color.set(colorValue); // Set the color
            }
        });
    }
}
function animate() {
    requestAnimationFrame(animate);
    // Any updates to the scene or camera go here
    renderer.render(scene, camera);
}

function onWindowResize() {
    // camera.aspect = window.innerWidth / window.innerHeight;
    // camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    var container = document.getElementById('model-container')
    renderer.setSize(container.clientWidth - 60, window.innerHeight);
}


});
