<template>
      <div class="container py-4">
         <div class="alert alert-danger" role="alert">
            {{msg}}
        </div>  
  </div>

</template>

<script>

import $ from 'jquery'

export default {
    props:['msg'],
    mounted () {
        $(document).ready(function () {        
            window.setTimeout(function() {
                $(".alert").fadeTo(1000, 0).slideUp(1000, function(){
                    $(this).remove(); 
                });
            }, 5000);    
        });
   }
}

</script>
