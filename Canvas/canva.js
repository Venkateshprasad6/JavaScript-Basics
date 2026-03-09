// =====================
// 2D CANVAS ANIMATION
// =====================

const canvas = document.getElementById("canvas2d");
const ctx = canvas.getContext("2d");

let x = 20;

// Particle array
let particles = [];

for (let i = 0; i <=20; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() + 0.5) * 2,
    dy: (Math.random() - 0.5) * 2
  });
}

const  animate2D =() => {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Moving Ball
  ctx.beginPath();
  ctx.arc(x, 150, 25, 0, Math.PI * 2);
  ctx.fillStyle = "silver";
  ctx.fill();

  x += 2;

  if (x > canvas.width) {
    x = 0;
  }

  // Particle animation
  particles.forEach(p => {

    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

  });

  requestAnimationFrame(animate2D);
}

animate2D();


// =====================
// 3D ANIMATION
// =====================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  400 / 300,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(400, 300);

const threedAnimation = document
  .getElementById("threeContainer")
  .appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({
  color: "yellow",
  wireframe: true
});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

function animate3D() {

  requestAnimationFrame(animate3D);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);

}

animate3D();