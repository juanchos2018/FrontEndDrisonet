<template>
    <div>
        <div>
          <!-- Menu Opciones -->
        <b-nav pills>
           <b-button type="button"  class="m-1 p-2 px-4 btn-xs" variant="primary" > 
            <i class="fa fa-plus-circle"></i> Nuevo
         </b-button>
          
        </b-nav>
        <!-- Fin Menu Opcionesv -->
      </div>
      <div>  
          <b-card class="mt-3" header="Listado de Publicaciones"             
            header-text-variant="white"
            header-tag="header"
            header-bg-variant="primary" >     
            
            <b-form >
            
            </b-form>
        
             <!-- Listado tabla publicaciones -->
        
            <div class="">
              <b-table hover :items="items" :fields="fields">
                 <template v-slot:cell(acciones)="{ item }">
                    <b-button variant="primary" size="sm" class="m-1" @click="IrSolicitudes(item.key_noticia)"> Ver Solicitudes</b-button>
                 </template>
              </b-table>
            </div>              
            <!-- Fin tabla -->
           </b-card> 
        </div>
      <div>
  </div>
 </div>
</template>
<script>

import axios from  'axios';

    export default{
     
        data(){
            return{
               
                
                datos:{
                  key_usuario:'IdEmpresa1',
                  nombre:'',
                      
                },
                fields: [                       
                         { label:"Titulo", key: 'titulo_noticia', sortable: false },
                         { label:"DEscripcion", key: 'descripcion_noticia', sortable: false },
                         { label:"FEcha", key: 'fecha_noticia', sortable: false },      
                         { label:"Acciones", key: 'acciones', sortable: false },
                ],
                items:[],
                Buscar:"",
                DialogCliente:false,
            }
        },

        created () {
         this.GetPublicaciones();
        },

        methods:{         
          GetPublicaciones(){
                  let me = this;
                  axios({
                      method: 'post',
                      url: 'Publicar/GetPublicaciones',
                      data:me.datos,                     
                  })
                  .then(response => {
                      console.log(response.data);
                      me.items = response.data;                      

                  }).catch(function (error) {
                      console.log(error);
              });
          },
          IrSolicitudes(ed){
              console.log(ed);
              var id= String(ed);
              
             // var id="1234";
              this.$router.push({name:"Solicitudes",params:{id} });

          }
    }

}
</script>

<style scoped>
  ::v-deep .my-class {
    background: black;
    color: white;
  }

  ::v-deep .my-second-class > .modal-dialog > .modal-content > .modal-header {
    background: black;
    color: white;
  }

  ::v-deep .myDiv {
      background-color: 	#FFFFFF;
  }
</style>