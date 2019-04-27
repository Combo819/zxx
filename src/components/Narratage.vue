<template>
  <v-layout align-center justify-center>
    <v-flex class="mt-5 mb-5" sm8 text-xs-center>
      <transition name="fade">
        <h1 v-show="textShow" class="display-1">{{narratage.text}}</h1>
      </transition>
      <transition name="fade">
        <v-img @load="imageLoad()" v-if="imageShow" :src="require('../assets/'+narratage.image)"></v-img>
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["narratage"],
  data() {
    return {
      textShow: false,
      imageShow: false
    };
  },
  mounted() {
    console.log(this.narratage);

    if (this.narratage.text) {
      window.setTimeout(() => {
        this.textShow = true;
        window.setTimeout(()=>{
          window.scrollTo(0,document.body.scrollHeight);
        },0)
        
      }, 300);
    } else if (this.narratage.image) {
      console.log(this.narratage.image);

      window.setTimeout(() => {
        this.imageShow = true;
        
      }, 300);
    }
  },
  methods:{
    imageLoad(){
      window.setTimeout(()=>{
          window.scrollTo(0, document.body.scrollHeight);
        },0)
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
