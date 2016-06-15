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

var w = 500;
var h = 500;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45,  w / h, 0.1, 10000);
camera.position.x = -20;
camera.position.y = 30;
camera.position.z = 40;
camera.lookAt(new THREE.Vector3(10, 0, 0));

var geometry = new THREE.BoxGeometry(15, 15, 15);
// var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false } );
var material = new THREE.MeshLambertMaterial({ color: 0x00aaff });

var mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 3;
mesh.position.z = 2;
mesh.rotation.y = Math.PI / 4;
mesh.castShadow = true;
scene.add(mesh);
scene.add(camera);

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 100, 0);
spotLight.castShadow = true;
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 0.01;
spotLight.decay = 1;
spotLight.distance = 200;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 200;
scene.add(spotLight);
/*
var ambientLight = new THREE.AmbientLight(0x0c0c0c);
scene.add(ambientLight);
*/

var floorGeometry = new THREE.BoxGeometry(100, 1, 100);
var floorMesh = new THREE.Mesh(floorGeometry, material);
floorMesh.position.set(0, 0, 0);
floorMesh.receiveShadow = true;
scene.add(floorMesh);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// renderer.domElement is a canvas DOM object
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);

requestAnimationFrame(animate);

function animate() {
	mesh.rotation.y += Math.PI / 100;
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}
