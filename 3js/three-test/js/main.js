/*
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "1px solid black";
*/

/*
var ctx = canvas.getContext("webgl");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(10, 10);
ctx.stroke();
*/

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 1000;

var geometry = new THREE.BoxGeometry(200, 200, 200);
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

var mesh = new THREE.Mesh(geometry, material);
mesh.rotation.y = Math.PI / 4;
scene.add(mesh);
scene.add(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);
// renderer.domElement is a canvas DOM object
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

requestAnimationFrame(animate);

function animate() {
	mesh.rotation.y += Math.PI / 100;
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}
