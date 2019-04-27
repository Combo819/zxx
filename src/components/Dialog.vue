<template>
  <v-layout align-center justify-center>
    <v-flex v-if="left" sm10 text-xs-left>
      <transition name="fade">
        <h1 v-if="textShow" class="headline font-weight-light">{{dialog.text}}</h1>
      </transition>
      <transition name="fade"></transition>
    </v-flex>
    <v-flex v-if="right" sm10 text-xs-right>
      <transition name="fade">
        <h1 v-if="textShow" class="headline font-weight-light">{{dialog.text}}</h1>
      </transition>
      <transition name="fade"></transition>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["dialog"],
  data() {
    return {
      textShow: false,
      left: this.dialog.position === "left" ? true : false,
      right: this.dialog.position === "right" ? true : false
    };
  },
  mounted() {
    console.log(this.dialog);

    window.setTimeout(() => {
      this.textShow = true;
      window.setTimeout(()=>{
          window.scrollTo(0,document.body.scrollHeight);
        },0)
    }, 300);
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
