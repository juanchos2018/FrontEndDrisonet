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
        
             <!-- Listado tabla clienes -->
        
            <div class="">
              <b-table hover :items="items" :fields="fields">
                     
                      
                          <template v-slot:cell(acciones)="">
                        <b-button variant="primary" size="sm" class="m-1">Ver</b-button>

                      </template>
              </b-table>
            </div>
              
            <!-- Fin tabla -->
             </b-card> 
        </div>
      <div>

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
                Pagina:1,
                TamanoPagina:50,
                TotalRegistros:100,
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
                     
                  })
                  .then(response => {
                      console.log(response.data);
                      me.items = response.data;
                      

                  }).catch(function (error) {
                      console.log(error);
                  });
          },
         
          
 
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