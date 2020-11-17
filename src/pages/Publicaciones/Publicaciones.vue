<template>
    <div>
    <div class="form-row">
        <b-form-group    class="col-md-6">
               <label class="control-label font-weight-bold text-info">Titulo </label> 
              <b-input type="text" ></b-input>
          </b-form-group> 
   </div>   
   <div class="form-row">
      <b-form-group  class="col-md-6">
            <label class="control-label font-weight-bold text-info">Descripcion </label> 
            <b-form-textarea
              id="textarea"
              v-model="descripcion"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
        </b-form-group>                
   </div>
   <div class="form-row">
          <b-form-group  class="col-md-2">
              <label class="control-label font-weight-bold text-info">Imagen </label> <br>
              <input type="file" id="files" ref="files" multiple v-on:change="handleFileUploads"/>
                      <div id="preview">
                        <img v-if="url" :src="url"  width="200"/>
                      </div>  
          </b-form-group>
          <b-overlay :show="show"  no-wrap>      
         </b-overlay>
         <b-form-group class="col-md-4">
            <b-button variant="primary"  style="display: inline-block;margin-left:50%;margin-top:15px;width:50% " 
              :disabled="show"   @click="upload">Subir</b-button>    
          </b-form-group>
     </div>  
    </div>
</template>

<script>

import axios from  'axios';
export default {
    data()
      {
       return{              
               descripcion:'',
               IdEmpresa:'IdEmpresa1',
               NombreEmpresa:'EmpresaTaxi',
               img_empresa:'https://firebasestorage.googleapis.com/v0/b/fir-app-cf755.appspot.com/o/NuevoProducto%2Fimgjuancho.jpg?alt=media&token=b48c6e91-3f3e-4f13-81cc-87d1e6e1908a',
              
              files: [],
               url: null,
               show: false
        }
    },
    created()
    {

    },
    methods:{             
            handleFileUploads(e){
                // this.files = this.$refs.files.files;
                 const file = e.target.files[0];
                 this.url = URL.createObjectURL(file);
            },            
            upload(){
              // esto apra subir archivos 
                    this.show = true;
                    let data = new FormData();                
                    for( var i = 0; i < this.files.length; i++ ){
                            let file = this.files[i];
                            data.append('files[' + i + ']', file);
                    }
                    data.append('nombre_usuario', this.NombreEmpresa)
                    data.append('descripcion_noticia',this.descripcion)
                    data.append('image_empresa',this.img_empresa)
                    data.append('key_usuario',this.IdEmpresa)
                    let config = {
                      header : {
                      'Content-Type' : 'multipart/form-data'
                      }
                    }
                    axios.post('Publicar/SubirPublicacion', data, config).then(response => {
                         console.log(response);
                         this.show = false;
                         if (response.status==200){
                            this.Confirmacion()
                         }  
                         
                    }) .catch(function(error){
                        console.log(error)
                         this.show = false;
                        console.log('Error!');
                });
             },
            Notificar(){
              axios.post('Publicar/Set_Notificar').then(response => {
                         console.log(response);
                         this.show = false;
                    }) .catch(function(error){
                        console.log(error)
                         this.show = false;
                        console.log('Error!');
              });
                     
            },
            Confirmacion(){
              this.$swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Publicado ..',
                  showConfirmButton: false,
                  timer: 1500
                })
             },
        
           
      }
}
</script>
<style scoped>


#fileso {
  position: relative;
  top: 150px;
  font-family: calibri;
  width: 150px;
  padding: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border: 1px dashed #BBB;
  text-align: center;
  background-color: #DDD;
  cursor: pointer;
}
</style>