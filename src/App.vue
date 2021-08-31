<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <FlashMessage :position="'right top'"></FlashMessage>
      <!-- <Errors v-if="error" :msg="error" />
      <Successes v-if="authStatus&&!error" :msg="authStatus" /> -->
       <router-view/>   
    </div>
    <Footer />
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'


import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import Errors from '@/components/Errors'
// import Successes from '@/components/Successes'


export default {

  components: {
    Navbar,
    Footer,
    // Successes,
    // Errors
  },
  computed: {
    ...mapGetters(['error','authStatus'])
  }

};
</script>





