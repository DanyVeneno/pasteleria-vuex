<template>
<div>
  
    
    <div class="background">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
</div>
 
</template>


<script>
export default {

}
</script>

<style>

@keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
  z-index: -5;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #6e5773;
    overflow: hidden;
}

.background span {
    width: 29vmin;
    height: 29vmin;
    border-radius: 29vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #de5b7b;
    top: 51%;
    left: 49%;
    animation-duration: 39s;
    animation-delay: -24s;
    transform-origin: -8vw -9vh;
    box-shadow: -58vmin 0 7.414501092359531vmin currentColor;
}
.background span:nth-child(1) {
    color: #98ded3;
    top: 31%;
    left: 30%;
    animation-duration: 28s;
    animation-delay: -20s;
    transform-origin: -22vw -14vh;
    box-shadow: 58vmin 0 8.071418396855433vmin currentColor;
}
.background span:nth-child(2) {
    color: #de5b7b;
    top: 48%;
    left: 70%;
    animation-duration: 32s;
    animation-delay: -34s;
    transform-origin: -24vw -15vh;
    box-shadow: 58vmin 0 7.617065124126375vmin currentColor;
}
.background span:nth-child(3) {
    color: #6e5773;
    top: 22%;
    left: 10%;
    animation-duration: 31s;
    animation-delay: -18s;
    transform-origin: 15vw -18vh;
    box-shadow: 58vmin 0 8.122339393349945vmin currentColor;
}
.background span:nth-child(4) {
    color: #6e5773;
    top: 15%;
    left: 87%;
    animation-duration: 42s;
    animation-delay: -24s;
    transform-origin: 23vw -8vh;
    box-shadow: 58vmin 0 7.741993053688505vmin currentColor;
}
.background span:nth-child(5) {
    color: #dadbbd;
    top: 16%;
    left: 98%;
    animation-duration: 55s;
    animation-delay: -40s;
    transform-origin: 17vw -20vh;
    box-shadow: 58vmin 0 7.615322067764561vmin currentColor;
}
.background span:nth-child(6) {
    color: #de5b7b;
    top: 37%;
    left: 17%;
    animation-duration: 35s;
    animation-delay: -37s;
    transform-origin: 9vw -7vh;
    box-shadow: 58vmin 0 8.00045897878348vmin currentColor;
}
.background span:nth-child(7) {
    color: #dadbbd;
    top: 4%;
    left: 98%;
    animation-duration: 40s;
    animation-delay: -26s;
    transform-origin: -14vw 10vh;
    box-shadow: -58vmin 0 7.955415032505567vmin currentColor;
}
.background span:nth-child(8) {
    color: #de5b7b;
    top: 74%;
    left: 52%;
    animation-duration: 32s;
    animation-delay: -33s;
    transform-origin: -5vw 5vh;
    box-shadow: 58vmin 0 8.036133676692154vmin currentColor;
}
.background span:nth-child(9) {
    color: #dadbbd;
    top: 84%;
    left: 42%;
    animation-duration: 34s;
    animation-delay: -39s;
    transform-origin: -24vw 6vh;
    box-shadow: 58vmin 0 8.157595926716349vmin currentColor;
}
.background span:nth-child(10) {
    color: #6e5773;
    top: 97%;
    left: 98%;
    animation-duration: 8s;
    animation-delay: -43s;
    transform-origin: 14vw 11vh;
    box-shadow: -58vmin 0 7.304505047153923vmin currentColor;
}






</style>
