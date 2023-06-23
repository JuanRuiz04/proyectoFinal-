import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private plane!: THREE.Mesh;

  ngOnInit() {
    this.initThree();
    this.render();
  }

  private initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(
      this.canvasContainer.nativeElement.offsetWidth,
      this.canvasContainer.nativeElement.offsetHeight
    );
    this.canvasContainer.nativeElement.appendChild(
      this.renderer.domElement
    );

    const loader = new OBJLoader();
    loader.load('assets/modelo_plano.obj', (obj) => {
      this.plane = obj.children[0] as THREE.Mesh;
      this.scene.add(this.plane);
      this.camera.position.z = 5;
    });
  }

  private render() {
    requestAnimationFrame(() => this.render());
    this.renderer.render(this.scene, this.camera);
  }
}
