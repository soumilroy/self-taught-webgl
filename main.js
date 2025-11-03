import * as THREE from "three";

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 2);  

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector("#canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

/**
 * Object(s)
*/
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(1, 12, 12);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 64);
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);
/**
 * Animation
 */
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  sphere.rotation.y += 0.005;
  torus.rotation.x += 0.005;
  torus.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();