
<template>
  <div class="home-container">
    <div class="info">
      <img alt="Vue logo"  class="logo-cerezayo" src="../assets/Cacahuat.png">
      <h1 class="title">{{ title }}</h1>
      <hr>
      <p class="description"><strong>{{description}}</strong></p>
      
      <p class="precio"><strong> {{precio}}.</strong></p>
    </div>

    <div class="img">
      
     
    <div id="app">
       <div class="panel panel-default">
         <div class="panel-heading">
            <h3 class="panel-title">Escoge tu combinación</h3>           
         </div>
         <hr class="c-2">
         
    <div class="panel-body">  
      <!--Only code you need is this label-->
      <label class="switch">
        <input type="checkbox" @click="toggleCheckbox">
        <div class="slider round"></div>
      </label>
      <p><strong>{{ checkbox1 }}</strong></p>
      <label class="switch">
        <input type="checkbox" @click="toggleCheckbox">
        <div class="slider round"></div>
      </label>
      <p><strong>{{ checkbox2 }}</strong></p>
      <label class="switch">
        <input type="checkbox" @click="toggleCheckbox">
        <div class="slider round"></div>
      </label>
      <p><strong>{{ checkbox3 }}</strong></p>
    </div>
     <hr class="c-3">
    <div class="atencion">
				<img src="../assets/logoCereza.png" alt="day-avatar" class="me" />
				<p id="thanks"><strong>Gracias por Visitarnos.</strong></p>
		</div>
  </div>
</div>
    </div>    
  </div>
</template>


<script>

export default {
    name: 'CacahuateAlmendra', 
    el: '#app',
    setup(){
    const title = "Cacahuate-Almendra";
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque urna eros, at vehicula turpis eleifend eget. Integer porttitor, lectus quis dignissim ornare, nulla elit fermentum urna, ";
    const precio = ("Precio: " + " $ " + 2200);
    //const checkbox= "true";
    
     
        return{
          title,
          description,
          precio,
          checkbox1: "Cacachuate / Nuez de Castilla",
          checkbox2: "Cacahuate / Nuez de la India",
          checkbox3: "Cacahuate / Avellana",
        }
  },
   methods: {
    toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
    }
  }
}

 
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&family=VT323&display=swap');


.info{
  display: grid;
  /*border: dashed 1px blue;*/

}
.img{
  /*border: dashed 1px blue;*/
}
.logo{
  width: 80%;
}
.logo-cerezayo{
  margin: 10px 200px;
  width: 30%;

}
.title{
  color:#6e5773;
	text-shadow: 2px 3px 4px #6e5773;
  text-align: left;
  margin: 75px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 900;
}
.description{
  color: #6e5773;
	text-shadow:2px 3px 4px #dadbbd;
  text-align: center;
  margin: 75px;

}
hr{
   width: 50%;
  height: 1px;
  border:solid 1px #98ded3;
  background-color: #98ded3;
  box-shadow: 5px 2px 5px #98ded3;
  
  }
  .c-2{
  width: 50%;
  height: 1px;
  border:solid 1px #98ded3;
  background-color: #98ded3;
  box-shadow: 5px 2px 5px #98ded3;
  
  margin-top: -100px;
  

  }
  .c-3{
  width: 50%;
  height: 1px;
  border:solid 1px #98ded3;
  background-color: #98ded3;
  box-shadow: 5px 2px 5px #98ded3;
  
  margin-top: 50px;
  

  }
.home-container{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  /*border: dashed 1px blue;*/
  font-family: 'Montserrat Alternates', sans-serif;
  background-image: url(../assets/bodyBack.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 
}
.info{
   background-image: url(../assets/backs-lacereza_01.jpg);
   background-repeat: no-repeat;
}
 
.img{
  height: 100vh;
  background-image: url(../assets/backs-lacereza_02.jpg);
  background-repeat: no-repeat;
 

}
.precio{
  width: 25%;
  border-radius: 10px;
  color: #dadbbd;
	text-shadow:2px 3px 5px #dadbbd; 
  text-align: center;
  margin: 10px 250px ;
  padding: 25px 10px 5px 10px;
  background-color: #6e5773;
  /*border: dashed 1px blue;*/
}
.panel-title{
  margin: 100px;
  height:5rem;
  color: #dadbbd;
  text-align: center;
  text-shadow:10px 2px 10px #dadbbd;
  
  /*border: dashed 1px red;*/
}
.switch {
  margin-top: 10px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
 
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #6e5773;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #de5b7b;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.atencion {
	width: 70%;
	margin: 0.5rem auto 0;
	text-align: center;
}

.atencion .me {
	margin-top: 9rem;
	width: 12rem;
/*	border: dashed 1px #23f034;*/
	
}

.atencion .flecha {
	width: 10rem;
	
}
@media (max-width:576px ) {
  .home-container{
  display: grid;
  grid-template-columns: repeat(1,1fr);
 
}   
 .logo-cerezayo{ 
  width: 20%;
} 
.precio{
  color: #dadbbd;
	text-shadow:2px 3px 4px #dadbbd; 
  margin: 35px;
   

}
.precio{
  margin: 20px 120px;
}
}
@media (max-width:768px ) {
  .home-container{
  display: grid;
  grid-template-columns: repeat(1,1fr);
 
}  
.logo-cerezayo{  
  width: 20%;
  margin:0% 40%;
}   

.precio{
  color: #dadbbd;
	text-shadow:2px 3px 4px #dadbbd; 
  margin: 35px;
   

}
.precio{
  margin: 20px 120px;
}
    
}




</style>

