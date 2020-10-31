<template>
  <div class="dashboard-page">
    <h1 class="page-title">Inicio</h1>
  
 <Widget title="<h5> <span class='fw-semi-bold'>Grafico</span></h5>"  close collapse customHeader>
               <div  class="form-row">
      
               </div>               
             <area-chart :data="{'2017-01-01 00:00:00 -0800': 2, '2017-01-01 00:01:00 -0800': 5}" :legend="true" > </area-chart>
      </Widget>

  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Dashboard',
  components: {
    Widget,  
  },
  data() {
    return {
     valor:''
    
    };
  },
  methods: {
    
   
    
  }
};
</script>

<style src="./Dashboard.scss" lang="scss" />
