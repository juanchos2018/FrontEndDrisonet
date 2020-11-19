<template>
    <div>
        	<div class="container-fluid p-0">					
					<div class="row">
						<div class="col-md-4 col-xl-3">
							<div class="card mb-3">
								<div class="card-header">
									<h5 class="card-title mb-0">Perfil </h5>
								</div>
								<div class="card-body text-center">
									<img :src="img_usuario" alt="Christina Mason" class="img-fluid rounded-circle mb-1" width="128" height="138" />
									<h5 class="card-title mb-0">{{nombre_usuario}}</h5>
									<div class="text-muted mb-2">Taxista</div>

									<div>
										
										<a class="btn btn-primary btn-sm" href="#"><span data-feather="message-square"></span> Mensaje</a>
									</div>
								</div>
								<hr class="my-0" />
							<div class="card-body">
									<h5 class="h6 card-title">Informacion</h5>
									<ul class="list-unstyled mb-0">
										<li class="mb-1"><span data-feather="home" class="feather-sm mr-1"></span> Correo : <h5>{{correo_usuario}}</h5></li>

										
										<li class="mb-1"><span data-feather="map-pin" class="feather-sm mr-1">Dni : </span> <h5>{{dni_usuario}}</h5></li>
									</ul>
								</div>
								<hr class="my-0" />
								
								<hr class="my-0" />
								<div class="card-body">
									<h5 class="h6 card-title">Redes Sociales</h5>
									<ul class="list-unstyled mb-0">
									
										<li class="mb-1"><span class="fab fa-facebook fa-fw mr-1"></span> <a href="#">Facebook</a></li>
										<li class="mb-1"><span class="fab fa-instagram fa-fw mr-1"></span> <a href="#">Instagram</a></li>
										<li class="mb-1"><span class="fab fa-linkedin fa-fw mr-1"></span> <a href="#">LinkedIn</a></li>
									</ul>
								</div>
							</div>
						</div>

						<div class="col-md-8 col-xl-9">
							<div class="card">
								<div class="card-header">

									<h5 class="card-title mb-0">Informacion Laboral</h5>
								</div>
								<div class="card-body h-100">

									<div class="d-flex align-items-start">
										<img :src="img_usuario" width="36" height="36" class="rounded-circle mr-2" alt="Vanessa Tucker">
										<div class="flex-grow-1">
											<small class="float-right text-navy">5m ago</small>
											<strong>PEpe </strong> started following <br />
											<small class="text-muted">Today 7:51 pm</small><br />
										</div>
									</div>

									<hr />
									<div class="d-flex align-items-start">
										<img src="../../assets/imgusuario.png" width="36" height="36" class="rounded-circle mr-2" alt="Charles Hall">
										<div class="flex-grow-1">
											<small class="float-right text-navy">30m ago</small>
											<strong>Pepe</strong> papeleta<br />
											<small class="text-muted">Today 7:21 pm</small>

											<div class="border text-sm text-muted p-2 mt-1">
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia architecto quis odio provident, voluptates libero molestias eveniet iste? Cupiditate quasi nihil consequuntur eaque reiciendis reprehenderit eligendi voluptatem quisquam nam?
											</div>

										</div>
									</div>								
									<hr />
                                    <br>
									<a href="#" class="btn btn-primary btn-block" v-b-modal.modalPopover >Reponder</a>
								</div>
							</div>
						</div>
				</div>

			</div>

			
			<b-modal id="modalPopover" title="REsponder" ok-only>
				
			  <b-card>				
				<b-card-text>
					YA no Necesitamos
				</b-card-text>
			  <b-button squared variant="primary" @click="Rechazado" >Enviar</b-button>
				</b-card>
				 <b-card>				
			<b-card-text>
					LLamanos para Cordinar
				</b-card-text>			
				  <b-button squared variant="primary" @click="Oportunidad">Enviar</b-button>
			</b-card>
			 <b-card>				
			<b-card-text>
					Te estamos enviado la Requisitos
				</b-card-text>			
				  <b-button squared variant="primary" @click="Aceptado">Enviar</b-button>
			</b-card>
			</b-modal>

    </div>
</template>

<script>

import axios from  'axios';
export default {
	
	data(){
		return{
		dni_usuario:'',
		nombre_usuario:'',
		apellido_usuario:'',
		id_usu:'',
		img_usuario:'',
		token_usuario:'',
		correo_usuario:'',
		img_empresa:'https://firebasestorage.googleapis.com/v0/b/fir-app-cf755.appspot.com/o/NuevoProducto%2Fimgjuancho.jpg?alt=media&token=b48c6e91-3f3e-4f13-81cc-87d1e6e1908a',
              

		notificar:{
			nombre_empresa:'',
			fecha:'',
			mensaje:'',
			detalle:'',
			ruta_documento:'',
			image_empresa:'',
			id_usuario:'',
		}
		}
	},
	created(){
	
	},
	mounted(){
        this.GetDatos()
    },
	methods:{
	   GetDatos(){
			var item = this.$route.params.id_usuario
			if(item){   				
				 
				this.DatosTaxista(item);  
			}         
	   }, 
	   DatosTaxista(id_usuario){		  
			 let me = this;
			 me.notificar.id_usuario=id_usuario;            
                  axios({
                      method: 'get',
                      url: 'Usuario/ObtenerUsuario/'+id_usuario,                                       
                  })
                  .then(response => {
					  console.log(response.data);
					  me.nombre_usuario=response.data.data.nombre_usuario;
					  me.dni_usuario=response.data.data.dni_usuario;
					  me.correo_usuario=response.data.data.correo_usuario;
					  me.img_usuario=response.data.data.image_usuario;
					  me.token_usuario=response.data.data.token;                                       

                  }).catch(function (error) {
                      console.log(error);
            });
	   },
	   Rechazado(){
			let me =this;
			 me.notificar.nombre_empresa="RAdioTaxi";
			 me.notificar.mensaje="Pdoria ser";
			 me.notificar.detalle="Te Necesitamos";
			 me.notificar.ruta_documento="Htt.RutaDocumento";    
			 me.notificar.image_empresa=me.img_empresa;           
             axios.post('Notificacion/Notificar',me.notificar,{ emulateJSON: true})                
               .then(function(response){
                   console.log(response)
                                     
                }).catch(function(error){
                    console.log(error);
                     
             });
	   },
	   Oportunidad(){
		  let me =this;
			 me.notificar.nombre_empresa="RAdioTaxi";
			 me.notificar.mensaje="Pdoria ser";
			 me.notificar.detalle="Te Necesitamos";
			 me.notificar.ruta_documento="Htt.RutaDocumento";    
			 me.notificar.image_empresa=me.img_empresa;           
             axios.post('Notificacion/Notificar',me.notificar,{ emulateJSON: true})                
               .then(function(response){
                   console.log(response)
                                     
                }).catch(function(error){
                    console.log(error);
                     
             });
	   },
	   Aceptado(){
		 let me =this;
			 me.notificar.nombre_empresa="RAdioTaxi";
			 me.notificar.mensaje="Pdoria ser";
			 me.notificar.detalle="Te Necesitamos";
			 me.notificar.ruta_documento="Htt.RutaDocumento";    
			 me.notificar.image_empresa=me.img_empresa;           
             axios.post('Notificacion/Notificar',me.notificar,{ emulateJSON: true})                
               .then(function(response){
                   console.log(response)
                                     
                }).catch(function(error){
                    console.log(error);
                     
             });
	   }
	}
}
</script>