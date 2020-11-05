<template>
    <div>
    <div class="form-row">
        <b-form-group    class="col-md-6">
               <label class="control-label font-weight-bold text-info">Titulo </label> 
              <b-input type="text" ></b-input>
            </b-form-group> 
   </div>
   
   <div class="form-row">
          <b-form-group    class="col-md-6">
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
      ver(){
            this.$swal.fire (
                {title: "End Event!",
                animation: true,
                customClass: 'bounceInDown',
                showCancelButton: true,
                confirmButtonText: "Confirm",
                html: "<form id = 'formValidate' class = 'formValidate'> Write a resolution to end Event" +
                        "<input id = 'resolution' name = 'resolution' type = 'text' class = 'form_input' required minlenght = '2' placeholder = 'Describe why you are finalizing this event' required style = 'width: 80%; padding: 12px 20px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; '/> "+" </ br> "+
                        "<input id = 'date' name = 'date' type = 'text' class = 'form_input' required placeholder = 'Data' required style = 'width: 38%; height = 40%; padding: 12px 20px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; '/> "+" & nbsp & nbsp & nbsp & nbsp & nbsp "+
                        "<input id = 'end_time' name = 'end_time' type = 'text' class = 'form_input' required placeholder = 'Time' required style = 'width: 38%; height = 40%; padding: 12px 20px; margin: 8px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; '/> "+
                        "</ form>",
                       preconfirm: () => {
                      resolution = document.getElementById ('resolution'). value;
                      date = document.getElementById ('date'). value;
                      end_time = document.getElementById ('end_time'). value;
                        return [resolution, date, end_time]
                   }
               })
      },
      image(){
              const { value: file } =  this.$swal.fire({
              title: 'Select image',
              input: 'file',
              inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Upload your profile picture'
              }
            })

              if (file) {
                const reader = new FileReader()
                reader.onload = (e) => {
                  this.$swal.fire({
                    title: 'Your uploaded picture',
                    imageUrl: e.target.result,
                    imageAlt: 'The uploaded picture'
                  })
                }
                this.url = URL.createObjectURL(file);
                reader.readAsDataURL(file)
              // const file = e.target.files[0];
              
              }
          },
          Nuevo4(){
            this.$swal.mixin({
              text: 'First Input',
              content: "input",
              input: 'text',
              progressSteps: ['1', '2', '3'],
               confirmButtonText: 'Next &rarr;',
              showCancelButton: true,
            })
            .queue([
                  {
                    title: 'Question 1',
                    text: 'Chaining swal2 modals is easy',
                    preConfirm: function(value)
                            {
                                strAns1= value;
                            }
                  },

                  {
                    title: 'Question 2',
                    text: 'Chaining swal2 modals is easy',
                    preConfirm: function(value)
                            {
                                strAns2= value;
                            }
                  }
                ])
            .then(name => {
                this.$swal({
                    text: 'Second Input',
                    content: "input",
                     input: 'file',
                    button: {
                    text: "Add New",
                        closeModal: false,
                    },
                }).then(id => {
                  //save code here.
                }) 
            }).catch(err => { 
                this.$swal("Error");
            });
          },
          Nuevo3(){
             this.$swal({
            title: "Teste",   
            text: "Test:",   
            type: "input",
            showCancelButton: true,   
            closeOnConfirm: false,   
            animation: "slide-from-top",   
            inputPlaceholder: "User" 
        },
        function(inputValue){
            if (inputValue === false) return false;      
            if (inputValue === "") {
                swal.showInputError("Error");     
                return false;
            }
             this.$swal({
                title: "Teste",   
                text: "E-mail:",   
                type: "input",
                showCancelButton: true,   
                closeOnConfirm: false,   
                animation: "slide-from-top",   
                inputPlaceholder: "Digite seu e-mail" 
            },
                function(inputValue){
                    if (inputValue === false) return false;      
                    if (inputValue === "") {     
                        swal.showInputError("E-mail error");     
                        return false;
                    }
                    this.$swal("Nice!", "You wrote: " + inputValue, "success"); 
                });
            }); 
          },
          Nuevo2(){
               var strAns1;
                var strAns2;

                 this.$swal.mixin({
                  input: 'text',
                  confirmButtonText: 'Next &rarr;',
                  showCancelButton: true,
                  progressSteps: ['1', '2', '3']
                }).queue([
                  {
                    title: 'Question 1',
                    text: 'Chaining swal2 modals is easy',
                    preConfirm: function(value)
                            {
                                strAns1= value;
                            }
                  },

                  {
                    title: 'Question 2',
                    text: 'Chaining swal2 modals is easy',
                    preConfirm: function(value)
                            {
                                strAns2= value;
                            }
                  }
                ]).then((result) => {
                  if (result.value) {
                      const answers = JSON.stringify(result.value)
                       this.$swal({
                            text: 'Second Input',
                            content: "input",
                            input: 'file',
                            button: {
                            text: "Add New",
                                closeModal: false,
                            },
                        }).then(e => {

                                 if (e.value) {
                                  //var formData = new FormData();
                                //  var file = $('.swal2-file')[0].files[0];
                                  //formData.append("fileToUpload", file);
                                  const file = e.target.files[0];
                                    this.url = URL.createObjectURL(file);
                                    alert(this.url);
                                     reader.readAsDataURL(file)
                                 
                              }
                        })
                    }
                })
            },
            Nuevo(){
                 this.$swal.mixin({
                    input: 'text',
                    confirmButtonText: 'Next &rarr;',
                    showCancelButton: true,
                    progressSteps: ['1', '2', '3']
                  }).queue([
                    {
                      title: 'Titulo',
                      text: 'Titulo de publicacion'
                    },
                    'Descripcion',
                    'Imagen'
                  ]).then((result) => {
                    if (result.value) {
                      const answers = JSON.stringify(result.value)
                       this.$swal({
                            text: 'Second Input',
                            content: "input",
                            input: 'file',
                            button: {
                            text: "Add New",
                                closeModal: false,
                            },
                        }).then(e => {

                                 if (e.value) {
                                  //var formData = new FormData();
                                //  var file = $('.swal2-file')[0].files[0];
                                  //formData.append("fileToUpload", file);
                                  const file = e.target.files[0];
                                    this.url = URL.createObjectURL(file);
                                    alert(this.url);
                                     reader.readAsDataURL(file)
                                 
                              }
                        })
                    }
                  })
          },
          onFileChange(e) {
              const file = e.target.files[0];
              this.url = URL.createObjectURL(file);
            },
            handleFileUploads(e){
                 this.files = this.$refs.files.files;

                const file = e.target.files[0];
                 this.url = URL.createObjectURL(file);
            },
            
            upload(){
              // esto apra subir archivos we
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
         SubirArchivos(){              
       
            let formData = new FormData();

            for( var i = 0; i < this.files.length; i++ ){
            let file = this.files[i];
            formData.append('files[' + i + ']', file);
            }
          //  formData.append('descripcion_noticia', this.Noticias.descripcion_noticia);

            axios.post( 'Usuario/SubirArchivos',this.Noticias,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(function(response){
            console.log('Correcto!');
            console.log(response);
            })
            .catch(function(error){
                console.log(error)
            console.log('Error!');
            });
        }
           
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