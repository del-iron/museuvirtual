// Configuração do Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

// Criar objetos para representar obras
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const artwork = new THREE.Mesh(geometry, material);
scene.add(artwork);

// Luz
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Configuração da câmera
camera.position.z = 5;

// Renderização e animação
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Interação com a obra
artwork.userData = { description: "Obra: Cubo Verde - Representação da geometria moderna." };

window.addEventListener('click', () => {
  document.getElementById('info-modal').classList.remove('hidden');
  document.getElementById('description').innerText = artwork.userData.description;
});

// Fechar modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('info-modal').classList.add('hidden');
});
