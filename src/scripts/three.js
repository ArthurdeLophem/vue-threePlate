import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export default class Donunq {
    constructor(viewport) {
        this.viewport = viewport;
        this.scene;
        this.camera;
        this.renderer;
    }

    createScene() {
        // create scene + camera
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.viewport.offsetWidth / this.viewport.offsetHeight, 0.1, 500);
        this.camera.position.set(1, 1, 2);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.viewport.offsetWidth, this.viewport.offsetHeight);
        this.viewport.appendChild(this.renderer.domElement);
        this.renderer.setClearColor(0x000000, 0);

        this.render();
        this.createOrbitctrl()
        this.lights();
        this.createModel();
        this.animate();
    }

    createModel() {
        // create box
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
    }

    createOrbitctrl() {
        // generate orbit controls (around the world around the world)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
        this.controls.autoRotate = true;
    }

    animate = () => {
        // function to let the orbitctrl and others to animate
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.render()
    }

    lights() {
        // add light to scene
        const hemi = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6)
        this.scene.add(hemi)
    }

    render() {
        // render the whole thing
        this.renderer.render(this.scene, this.camera);
    }
}