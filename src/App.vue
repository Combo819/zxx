<template>
  <v-app>
    <v-content>

      <audio
        id="ado"
        :src=" require('./assets/A Winter Story.mp3')"
        type="audio/mpeg"
        ref="adoB"
        >
       </audio>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data () {
    return {
 
    }
  },

  mounted(){
 
    
    this.$store.commit('setBgm',this.$refs.adoB)
  },
  methods:{
    computedClick(){
      console.log(this.getTest);
      console.log(this);
      
    }
  }
}
</script>
