<template>
  <div class="home-container">
    <div class="info">
     <img alt="Vue logo"  class="logo-cerezayo" src="../assets/logo.png">
      <h1 class="title">{{ title }}</h1>
      <p class="description">{{description}}</p>
    </div>
    <div class="img">
    <img alt="Vue logo"  class="logo" src="../assets/repostero.png">
    </div>    
  </div>
  <div class="home-container">
    <div class="info">
      
      <h1 class="title">{{ adress }}</h1>
      <p class="description">Av. Insurgentes Sur 601, Nápoles, Benito Juárez, 03810 Ciudad de México, CDMX <br></p>
      
   <h2>Horario:</h2>
   <hr>
   <br>
      <ul class="description">
        <li>Lunes / 9:00 - 20:00</li>
        <li>Martes / 9:00 - 20:00</li>
        <li>Miercoles / 9:00 - 20:00</li>
        <li>Jueves / 9:00 - 20:00</li>
        <li>Viernes / 9:00 - 20:00</li>
        <li>Sabado / 9:00 - 21:00</li>
        <li>Domingo / 9:00 - 21:00</li>
      </ul>
      <p class="description">Telefono: 56 1023-1990
      <br>
      <br>
      E-mail: pedidos@lcdp.com.mx
      </p>


      
    </div>
    <div class="img">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.337236522321!2d-99.17388188497172!3d19.397829746817806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6dbd8206fb%3A0x85504897333053ab!2sAv.%20Insurgentes%20Sur%20601%2C%20N%C3%A1poles%2C%20Benito%20Ju%C3%A1rez%2C%2003810%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1646579939476!5m2!1ses!2smx" width="100%" height="800" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>    
  </div>
</template>


<script>

export default {
    name: 'HomeView', 
    setup(){
    const title = "En La Cereza Del Pastel, nos gusta consentirte.";
    const description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque urna eros, at vehicula turpis eleifend eget. Integer porttitor, lectus quis dignissim ornare, nulla elit fermentum urna,"
    const adress="Encuentranos en la siguiente dirección:";
    
        return{
          title,
          description,
          adress,
         
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
  margin: 30px ;
  width: 30%;

}
.title{
  color:#dadbbd;
	text-shadow: 2px 3px 4px #6e5773;
  text-align: left;
  margin: 25px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 900;
}
.description{
  color: #de5b7b;
	text-shadow:2px 3px 4px #dadbbd;
  text-align: left;
  margin: 25px;
  font-weight: 900;

}
.home-container{
  display: grid;
  grid-template-columns: repeat(2,1fr);
 /* border: dashed 1px blue;*/
  font-family: 'Montserrat Alternates', sans-serif;
  background-color: #6e5773;
background-image: linear-gradient(225deg, #6e5773 0%, #de5b7b 24%, #6e5773 50%, #dadbbd 100%);



}
hr{
  width: 50%;
  height: 1px;
  border:solid 1px #98ded3;
  background-color: #98ded3;
  box-shadow: 5px 2px 5px #98ded3;
  
  }
@media (max-width:576px ) {
  .home-container{
  display: grid;
  grid-template-columns: repeat(1,1fr);
 
}   
 .logo-cerezayo{
 margin:5% 40% 5%;
  width: 20%;

} 
.description{
  color: #dadbbd;
	text-shadow:2px 3px 4px #6e5773;
  text-align: left;
  margin: 25px;
  font-weight: 900;

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
  margin:5% 40% 5%;

}   
.description{
  color: #dadbbd;
	text-shadow:2px 3px 4px #6e5773;
  text-align: left;
  margin: 25px;
  font-weight: 900;

}
    
}
</style>
