<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" sm4></v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" sm4>
        <span class="display-1 text-center">我们在一起已经:</span>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-2" sm5>
        <v-sheet style="border-radius:15px" class="d-flex" color="blue-grey lighten-3" height="100">
          <v-layout align-center justify-center>
            <v-flex>
              <span class="text-center display-3 font-color">{{this.days}}天 {{this.hours}}小时 {{this.minutes}}分钟</span>
            </v-flex>
          </v-layout>
        </v-sheet>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" sm3>
        <img style="border-radius:50%;width:100%" src="../assets/WechatIMG4869.jpeg" alt>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" sm8 text-xs-center>
        <span class="display-1">这是我写给你的情书</span><br>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex class="mt-5" sm8 text-xs-center>
        <span class="display-1">希望我们能保持这段感情</span><br>
      </v-flex>
    </v-layout>
     <v-layout align-center justify-center>
      <v-flex class="mt-5" sm8 text-xs-center>
        <span class="display-1">直到永远</span><br>
      </v-flex>
    </v-layout>
    <v-layout align-center justify-center>
      <v-flex text-xs-center class="mt-5 mb-5" sm4 >
        <v-btn @click="()=>{this.$router.push('/')}" color="primary" large>home page</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginTime: new Date("2019-04-13T20:20:00")
    };
  },
  components: {},
  computed: {
    days() {
      let totalTime = new Date() - this.beginTime;
      return Math.floor(totalTime / 86400000);
    },
    hours() {
      let totalTime = new Date() - this.beginTime;
      return Math.floor((totalTime * 24) / 86400000) % 24;
    },
    minutes() {
      let totalTime = new Date() - this.beginTime;
      return Math.floor((totalTime * 24 * 60) / 86400000) % 60;
    }
  }
};
</script>

<style scoped>
.text-center {
  display: block;
  text-align: center;
}
.font-color{
color: #212121
}
</style>


