<template>
  <div id="secciones">
      <div class="slider js-slider">
          <div class="slider__inner js-slider__inner"></div>
          
          <div class="slide js-slide">
              <div class="slide__content">
                <!-- <figure class="slide__img js-slide__img">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo1.jpg">
                </figure>
                <figure class="slide__img js-slide__img">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/photo2.jpg">
                </figure>
                </div>
                
                <div class="slider__text js-slider__text">
                <div class="slider__text-line js-slider__text-line"><div>Black is</div></div>
                <div class="slider__text-line js-slider__text-line"><div>timeless. Black is</div></div>
                <div class="slider__text-line js-slider__text-line"><div>the colour of</div></div>
                <div class="slider__text-line js-slider__text-line"><div>Eternity.</div></div> -->
                <Secciones/>
              </div>
              
          </div>
          
          <div class="slide js-slide">
              <div class="slide__content">
              <figure class="slide__img js-slide__img">
                  <img src="../assets/images/pomo/1.jpg">
              </figure>
              <figure class="slide__img js-slide__img">
                  <img src="../assets/images/pomo/2.jpg">
              </figure>
              </div>
          </div>
          
          <div class="slide js-slide">
              <div class="slide__content">
              <figure class="slide__img js-slide__img">
                  <img src="../assets/images/pomo/3.jpg">
              </figure>
              <figure class="slide__img js-slide__img">
                  <img src="../assets/images/pomo/4.jpg">
              </figure>
              </div>
          </div>
          
          <nav class="slider__nav js-slider__nav">
              <div class="slider-bullet js-slider-bullet">
              <span class="slider-bullet__text js-slider-bullet__text">01</span>
              <span class="slider-bullet__line js-slider-bullet__line"></span>
              </div>
              <div class="slider-bullet js-slider-bullet">
              <span class="slider-bullet__text js-slider-bullet__text">02</span>
              <span class="slider-bullet__line js-slider-bullet__line"></span>
              </div>
              <div class="slider-bullet js-slider-bullet">
              <span class="slider-bullet__text js-slider-bullet__text">03</span>
              <span class="slider-bullet__line js-slider-bullet__line"></span>
              </div>
          </nav>
          
          <div class="scroll js-scroll">Scroll</div>
          
      </div>

  </div>
</template>
<script>
import { Slider } from '../assets/utils/slider.js'
import { onMounted } from 'vue';
import Secciones from './Secciones.vue';

export default {
    components: {
      Secciones
    },
    setup() {

      onMounted(() => {
    
        // Init classes
        const slider = new Slider()

      });
    },
};
</script>

<style scoped lang="scss">
#secciones{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111;
  font-family: 'helvetica neue', helvetica, sans-serif;
  overflow: hidden;
}

a{
  color: #fff;
  text-decoration: none;
}

.scroll{
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(#fff, 0.5);
  font-family: 'font-2';
  font-size: calc(0.5rem + 0.35vw);
  z-index: 10;
}

.logo{
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
  margin: 0;
  z-index: 10;
  
  img{
    display: block;
    height: 1rem;
    width: auto;
  }
}

ul, li{
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav{
  position: absolute;
  top: 2rem;
  z-index: 10;
  
  &--left{
    left: 1rem;
  }
  
  &--right{
    right: 1rem;
  }
  
  ul{
    display: flex;
    align-items: center;
    height: 1rem;
  }
  
  li{
    display: block;
    margin: 0 1rem;
    padding: 0;
  }
  
  a{
    position: relative;
    display: flex;
    align-items: center;
    font-size: calc(0.5rem + 0.35vw);
    font-family: 'helvetica neue', helvetica, sans-serif;
    
    span{
      position: relative;
      
      &:before{
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.35rem;
        width: 100%;
        height: 1px;
        background-color: rgba(#fff, 0.25);
        transition: transform .75s ease;
        transform-origin: right;
        transform: scaleX(0);
      }
    }
    
    &:hover,
    &.is-active {

      span{
        
        &:before{
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
  }
}

.vert-text{
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 15rem;
  display: flex;
  align-items: center;
  z-index: 10;
  
  span{
    display: block;
    color: #fff;
    text-transform: uppercase;
    line-height: 1.1;
    transform: rotate(-90deg) translateY(15rem);
    transform-origin: bottom left;
    font-size: 1.35rem;
  }
}

.cart-total{
  display: block;
  height: 2rem;
  width: 2rem;
  background-color: rgba(#fff, 0.25);
  border-radius: 50%;
  text-align: center;
  line-height: 2rem;
  margin-left: 1rem;
}

.slider{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  
  &__text{
    position: absolute;
    bottom: calc(2rem + 3vw);
    left: calc(2rem + 3vw);
    z-index: 10;
    font-size: calc(1rem + 4vw);
    text-transform: uppercase;
    transform-origin: top;
    line-height: 1.075;
    color: #fff;
    font-weight: 500;
    
    &-line{
      overflow: hidden;
    }
  }
  
  &__inner{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  
  &__nav{
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 10;
  }
  
  &-bullet{
    display: flex;
    align-items: center;
    padding: 1rem 0;
    
    &__text{
      color: #fff;
      font-size: 0.65rem;
      margin-right: 1rem;
    }
    
    &__line{
      background-color: #fff;
      height: 1px;
      width: 1rem;
    }
  }
  
  canvas{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
}

.slide{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  
  &__content{  
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  
  &__img{
    position: relative;
    width: 25vw;
    height: 70vh;
    padding: 0;
    margin: 0;
    min-width: 12.5rem;
    transform-origin: top;
    
    &:first-child{
      top: -1.5rem;
    }
    
    &:last-child{
      bottom: -1.5rem;
    }
    
    img{
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
