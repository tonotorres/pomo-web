import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { TextureLoader } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export class Environment {
  constructor(font, particle) {
    this.font = font;
    this.particle = particle;
    this.scene = new THREE.Scene();
    this.container = document.querySelector( '#magic' );
    this.onMouseMove = this.onMouseMove.bind(this);
    window.addEventListener('mousemove', this.onMouseMove);
    
    // Llamar a los métodos para crear el texto y las partículas
    this.createText();
    // this.createParticles();
    this.createCamera();
    this.createRenderer();

    // Definir el método animate antes de llamar a bind
    this.animate = function() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    }.bind(this);
    
  }

  render() {
    this.composer.render();
  }
  createCamera() {
    this.camera = new THREE.PerspectiveCamera( 65, this.container.clientWidth /  this.container.clientHeight, 1, 10000 );
    this.camera.position.set( 0,-30, 100 );
  
  }
  render() {
    this.composer.render();
    this.renderer.render( this.scene, this.camera )
  }
  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
    this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.appendChild( this.renderer.domElement );
    this.renderer.setAnimationLoop(() => { this.render() })
  
    // Configurar el EffectComposer y el UnrealBloomPass
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);
  
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(this.container.innerWidth, this.container.innerHeight), 1.5, 0.4, 0.85);
    this.composer.addPass(bloomPass);
  }
  
  createText() {
    // Crear la geometría para 'POMO'
    const pomoGeometry = new TextGeometry('POMO', {
      font: this.font,
      size: 30, // tamaño del texto 'POMO'
      height: 2, // altura del texto
    });
    pomoGeometry.center();
  
    // Crear la geometría para 'couture'
    const coutureGeometry = new TextGeometry('\ncouture', {
      font: this.font,
      size: 20, // tamaño del texto 'couture'
      height: 2, // altura del texto
    });
    coutureGeometry.center();
  
    // Cargar la textura de oro líquido
    const textureLoader = new THREE.TextureLoader();
    const matcapTexture = textureLoader.load('./liquid-gold.jpg');
  
    matcapTexture.minFilter = THREE.NearestFilter;
    matcapTexture.magFilter = THREE.NearestFilter;
    matcapTexture.wrapS = THREE.ClampToEdgeWrapping;
    matcapTexture.wrapT = THREE.ClampToEdgeWrapping;
  
    // Crear el material
    const textMaterial = new THREE.MeshMatcapMaterial({
      matcap: matcapTexture,
    });
  
    // Crear el texto 'POMO'
    this.pomoMesh = new THREE.Mesh(pomoGeometry, textMaterial);
    this.pomoMesh.position.set(0, 0, 0); // Centrar el texto 'POMO'
    this.scene.add(this.pomoMesh);
  
    // Crear el texto 'couture'
    this.coutureMesh = new THREE.Mesh(coutureGeometry, textMaterial);
    this.coutureMesh.position.set(0, -30, 0); // Posicionar el texto 'couture' debajo de 'POMO'
    this.scene.add(this.coutureMesh);
  }
  
  
  

  onMouseMove(event) {
    // Calcula la posición del ratón en coordenadas normalizadas de dispositivo
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = - (event.clientY / window.innerHeight) * 2 + 1;
  
    // Calcula el ángulo de rotación basado en la posición del ratón
    const angle = Math.atan2(mouseY - this.pomoMesh.position.y, mouseX - this.pomoMesh.position.x);
  
    // Aplica la rotación en el eje X a ambos textos

    this.pomoMesh.rotation.y = mouseX * 0.03;
    this.coutureMesh.rotation.y = mouseX * 0.03;
  }
}