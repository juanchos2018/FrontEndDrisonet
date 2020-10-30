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
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<input ref="email" required type="text" name="email"  placeholder="Correo" >
           		   </div>
           		</div>
                   <div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    <input  ref="name" required type="text" name="name"   placeholder="Nomnre">
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
export default {
 
  components: { Widget },
  data() {
    return {
      errorMessage: null,
    };
  },
  methods: {
    Login()
    {
       this.$router.push('/login')
    },
   
  },
  created() {
   
  }

};
</script>
<style src="./stilo.scss" scoped lang="scss"></style>