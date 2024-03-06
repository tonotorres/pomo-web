<template>
  <main class="provisional-background">
    <div class="logo"></div>
    <div class="texto"><h1>Coming soon</h1></div>
    <div class="hero">
      <div class="blob-cont">
        <div class="yellow blob"></div>
        <div class="red blob"></div>
        <div class="green blob"></div>
      </div>
    </div>
    <svg>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='1.6' 
          stitchTiles='stitch'/>
        <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
            <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
            <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
      </filter>
    </svg>
  </main>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const pomo = ref(null)

</script>

<style scoped lang="scss">
body {
  background-color: #151515;
}
.logo {
  height: 60vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
}
.texto {
  height: 40vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  color: white
}
.texto h1 {
  font-size: 5.5rem !important;
}
.provisional-background {
  height: 100vh;
  width: 100vw;
}
.provisional-background {
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3em;
  background-color: rgb(20, 20, 20);
  font-family: "Cardo";
}
.provisional-background::before,
.provisional-background::after {
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 30%;
}

.provisional-background::before {
  background: rgb(29, 29, 29);
  filter: url(#noiseFilter);
}


/* Blobs */
.blob-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  height: 500px;
  width: 500px;
  position: relative;
  right: 5em;
}


.blob {
  border-radius: 100px;
  filter: blur(60px);
}

.yellow {
  background-color: #EDB74D;
  position: absolute;
  top: 200px;
  left: 100px;
  height: 100px;
  width: 100px;
  
  animation: yellow 8s infinite ease;
}

.green {
  background-color: rgb(214, 238, 224);
  position: absolute;
  top: 80px;
  right: -20px;
  height: 100px;
  width: 120px;
  
  animation: green 8s infinite ease;
}

.red {
  background-color: rgb(236, 236, 236);
  position: absolute;
  right: 0;
  top: 300px;
  height: 125px;
  width: 100px;
  
  animation: red 8s infinite linear;
}

@keyframes yellow {
  0% {top: 200px; left: 100px; transform: scale(1);}
  30% {top: 300px; left: 150px; transform: scale(1.2);}
  60% {top: 100px; left: 200px; transform: scale(1.3);}
  100% {top: 200px; left: 100px; transform: scale(1);}
}

@keyframes green {
  0% {top: 80px; right: -20px; transform: scale(1.2);}
  30% {top: 300px; right: -20px;transform: scale(1);}
  60% {top: 200px; right: 100px;transform: scale(1);}
  100% {top: 80px; right: -20px; transform: scale(1.2);}
}

@keyframes red {
  0% {top: 250px; right: 0px; transform: scale(1);}
  30% {top: 150px; right: 150px;transform: scale(1.4);}
  60% {top: 250px; right: 100px;transform: scale(1);}
  100% {top: 250px; right: 0px; transform: scale(1);}
}

.hero {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 130%;
  gap: 3em;
  background:
        linear-gradient(to right, #151515 1px, transparent 1px) 0 0,
        linear-gradient(to right, #151515 1px, transparent 1px) 0 100%,
        linear-gradient(to left, #151515 1px, transparent 1px) 100% 0,
        linear-gradient(to left, #151515 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, #151515 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, #151515 1px, transparent 1px) 100% 0,
        linear-gradient(to top, #151515 1px, transparent 1px) 0 100%,
        linear-gradient(to top, #151515 1px, transparent 1px) 100% 100%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
      
}

.primary {
  background-color: var(--text);
  color: #DED3B6;
}

@media only screen and (max-width: 1000px) {
  .provisional-background {
    margin: 1em;
  }
}

</style>
