<template>
  <div class="auth-page">
    <img class="wave" src="../../assets/wabe2.png">
	<div class="container" >
		
		<div class="img">
			<img src="../../assets/form.svg">
		</div>
		<div class="login-content">
			<form class="mt" @submit.prevent="submit">				
				<h2 class="title">Registrar</h2>
				
				 <div class="div">
           		   		<input ref="ruc" required type="number" v-model="datos.ruc" name="ruc"  placeholder="Ruc" >
           		   </div>	
					  <button type="button" @click="Consultar">consultar</button>
           		<div class="input-div one">
   	

           		   <div class="i">
           		   	<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<input ref="email" required type="text"  name="email"  placeholder="Correo" >
					
           		   </div>
           		</div>
                   <div class="input-div pass">
           		   <div class="i"> 
           		   <i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    <input  ref="name" required type="text" v-model="nombre" name="name"   placeholder="Nomnre">
           		    </div>
            	</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    <input  ref="password" required type="password" name="password"   placeholder="Contraseña">
           		    </div>
            	</div>
            	
            	  <b-button  type="submit"  style="  padding: 10px 10px 10px;
                            
                                border-radius: 4px;
                                font-size: 17px;
                                font-weight: bold;
                                line-height: 20px; 
                                margin-bottom: 24px;"
                                >Registrar</b-button>
                     <b-button type="button" @click="Login">login</b-button>
            </form>
           
        </div>
        
    </div>
   </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import firebase from '@/firebase'
import axios from  'axios';
export default {
 
  components: { Widget },
  data() {
    return {
	  errorMessage: null,
	  datos:{ruc:''},
	  nombre:'',
    };
  },
  methods: {
    Login()
    {
       this.$router.push('/login')
    },   
    Consultar(){ 
		 axios({
                  method: 'post',
                  url: 'Usuario/ConsultaRuc',
                  data:this.datos,
                  })
                  .then(response => {
                      
					   console.log(response)
					   this.nombre=response.data.nombre;
                  }).catch(function (error) {
                      console.log(error);
                  }) .finally(() => {
                     
                  })
    }
  },
  created() {
   
  }

};
</script>
<style src="./stilo.scss" scoped lang="scss"></style>