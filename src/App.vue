<template>
  <nav>
    <router-link to="/"><img src="./assets/logo-cereza.png" alt="" id="m-0" class="show"></router-link> /
    <router-link to="/cacahuate-almendra"><img src="./assets/Cacahuat.png" alt="" id="m-1"></router-link> /
    <router-link to="/ciruela-vainilla"><img src="./assets/Ciruelas.png" alt="" id="m-2"></router-link> /
    <router-link to="/caferojo"><img src="./assets/cafe-rojo.png" alt="" id="m-3"></router-link> /
    <router-link to="/chocolate-amargo"><img src="./assets/Chocolateamargo.png" alt="" id="m-4"></router-link> /
    <router-link to="/frutasrojas"><img src="./assets/frutas-rojas.png" alt="" id="m-5"></router-link> /
    <router-link to="/pedido"><img src="./assets/file-lines-solid.svg" alt="" id="m-5-2"></router-link>
  </nav>
  <router-view/>
  
  </template>

<script>
  

  

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #6e5773;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#m-0{

  width:70px;
  transition: 1s ease-in-out;
}

#m-0:hover{
  width: 85px;
   
}
#m-1{
  width:70px;
  transition: .5s ease-in-out;
}
#m-1:hover{
  width: 85px;
}
#m-2{
  width:70px;
  transition: .5s ease-in-out;
}
#m-2:hover{
  width: 85px;
}
#m-3{
  width:70px;
  transition: .5s ease-in-out;
}
#m-3:hover{
  width: 85px;
}
#m-4{
  width:70px;
  transition: .5s ease-in-out;
}
#m-4:hover{
  width: 85px;
}
#m-5{
  width:70px;
  transition: .5s ease-in-out;
}
#m-5:hover{
  width: 85px;
}
#m-5-2{
  width:50px; 
  transition: .5s ease-in-out;
}
#m-5-2:hover{
  width:60px;  
  transition: .5s ease-in-out;
}
</style>
