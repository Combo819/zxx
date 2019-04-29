<template>
  <div>
    <v-layout justify-center align-center>
      <v-flex sm8>
        <v-card>
          <v-img
            @mouseover="mouseOverImage()"
            @mouseleave="mouseOutImage()"
            :src="require('../assets/IMG_20190321_004613.jpg')"
          >
            <div
              @mouseout="mouseOutImage()"
              v-if="hover"
              class="d-flex image-mask darken-2 v-card--reveal text-xs-center"
              style="height: 100%;"
            >
              <v-icon
                @mouseout="(e)=>{e.stopPropagation()}"
                style="width:20%,height:50%"
                v-show="playIcon"
                @click="playMusic()"
                class="play-icon"
                dark
                size="80"
              >play_arrow</v-icon>
              <v-icon
                @mouseout="(e)=>{e.stopPropagation()}"
                v-show="!playIcon"
                @click="pauseMusic()"
                class="play-icon pausePositon"
                dark
                size="80"
              >play_pause</v-icon>
            </div>
          </v-img>
          <v-container grid-list-md text-xs-center>
            <v-layout class="mt-5 mb-5" align-center justify-center>
            </v-layout>
            <Narratage :narratage="{text:'吾日三省吾身' }"/>
            <Dialog :dialog="{ position:'left',text:'关心女朋友了吗' }"/>
            <Dialog :dialog="{ position:'left',text:'学前端了吗' }"/>
            <Dialog :dialog="{ position:'left',text:'刷算法了吗' }"/>
          </v-container>
          <transition name="fade">
            <v-btn color="primary"  @click="nextPage()" large block>
              米奇♂妙妙屋
              <v-icon x-large>chevron_right</v-icon>
            </v-btn>
          </transition>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Dialog from "../components/Dialog.vue";
import Narratage from "../components/Narratage.vue";
export default {
   components: {
    Dialog,
    Narratage
  },
  data() {
    return {
      hover: false,
      bgm: this.$store.state.bgm
    };
  },
  computed: {
    playIcon() {
      return this.$store.state.playIcon;
    }
  },
  methods: {
    mouseOverImage() {
      this.hover = true;
    },
    mouseOutImage() {
      this.hover = false;
    },
    playMusic() {
      this.bgm.play();
      this.$store.commit("playMusic", "play");
    },
    pauseMusic() {
      this.bgm.pause();
      this.$store.commit("playMusic", "pause");
    },
    nextPage(){
        this.$router.push("/time");
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
.image-mask {
  background-color: rgba(0, 0, 0, 0.5);
}
.play-icon {
  cursor: pointer;
  user-select: none;
}
.text-center {
  display: block;
  text-align: center;
}
.pausePositon {
  display: inline-block;
  padding-top: 24%;
  padding-right: 42%;
}
</style>
