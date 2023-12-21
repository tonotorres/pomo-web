<template>
    <div id="pomo-app">
      <div id="magic"></div>
      <div class="playground">
      </div>  
    </div>
</template>
  
  <script>
  import * as THREE from 'three';
  import { FontLoader } from 'three/addons/loaders/FontLoader.js';
  import { Environment } from '../assets/utils/envi-particles.js'
  import { onMounted, ref } from 'vue';
  import { gsap } from 'gsap';

  
  export default {
      components: {
      },
      setup() {
  
      var manager, font = null
  
      function preload() {
        
        const fontLoader = new FontLoader();
        fontLoader.load( './MantikaBook.json', function (font) {
          const particle = new THREE.TextureLoader( manager ).load( './gold-dot.png');
          const environment = new Environment( font, particle );
        })
        
  
      }
        onMounted(() => {
        
          if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
            preload ();
          else
            document.addEventListener("DOMContentLoaded", preload ); 
  
        });
      },
  };
  </script>
  
  <style scoped lang="scss">
  #pomo-app {
    
  }
  #magic {
  
  position: fixed;
  width: 100%;
  height: 100vh;
  display: block;
  top: 0;
  left: 0;
  z-index: 9999;
  }
  
  .playground{
    // background-image: url('../assets/images/pomo/marmol-blanco-negro.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: block;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  
  }
  .bottomPosition{
  
  text-align: center;
  margin-bottom: 50px;
  
  }
  .minText{
  
  font-size: 14px;
  }
  
  a {
  color: black;
  font-size: 12px;
  text-decoration: none;
  }
  
  .logo {
    width: 50px;
    height: 50px;
  }
  
  
  
  </style>
  