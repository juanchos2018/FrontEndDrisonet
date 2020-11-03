<template>
     <div>
        
    <div>   
      <div class="row" id="listaproyectos">             
       <div class="col-4" v-for="item in items" :key="item.key">  
              
        <b-card no-body class="overflow-hidden" style="max-width: 340px;"  bg-variant="dark" text-variant="white" footer-tag="footer">
            <b-row no-gutters>
            <b-col md="3">
                <div class="UserAvatar__IconImage-hmym9w-1 jtNJTZ" >
                    <center> 
                    <b-img src="https://picsum.photos/600/300/?image=25" alt="Avatar" class="avatar1"> </b-img>  
                    </center>
                </div>     
            </b-col>
            <b-col md="6">
                <b-card-body >                   
                <b-card-title> {{item.nombre}}  </b-card-title>                    
                <b-card-text>
                      {{item.dni}}
                </b-card-text>                
                </b-card-body>                
            </b-col>
            </b-row>            
                <template #footer>
                        <em> Datos </em>
                </template>
        </b-card>
              </div>
           </div>
    </div>
    </div>
</template>

<script>

import axios from  'axios';
export default {
    
    data(){
        return{
          items:[],
          datos:{
            key_noticia:''
             }
        }
    },
     mounted(){
      this.DatosId()
     
    },
    created(){

    },
    methods:{
         DatosId(){
            var id = this.$route.params.id
            if(id){
                console.log("recibe we");
               
               console.log(id);
                this.ListarSolicutdes(id);
            
            }            
         },
         ListarSolicutdes(id){
             let me = this;
              me.datos.key_noticia=id;
                  axios({
                      method: 'post',
                      url: 'Solicitude/GetSolicitudes',
                      data:me.datos,                     
                  })
                  .then(response => {
                      console.log(response.data);
                      me.items = response.data;                      

                  }).catch(function (error) {
                      console.log(error);
              });
         }
    }
}
</script>
<style src="./stile.scss" lang="scss"  />
