<template>
  <v-layout align-center justify-center>
    <audio id="ado" :src=" require('../assets/A Winter Story.mp3')" type="audio/mpeg" ref="ado"></audio>

    <v-flex sm8>
      <v-card>
        <v-img
          @mouseover="mouseOverImage()"
          @mouseleave="mouseOutImage()"
          :src="require('../assets/DSC_0286_4.jpg')"
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
            <v-flex>
              <transition name="fade">
                <h1 v-show="titleShow" class="display-2 font-weight-medium">Apirl 13 2019</h1>
              </transition>
            </v-flex>
          </v-layout>
          <Narratage v-if="renderList[0]" :narratage="{text:'Harbor Park Toronto' }"/>
          <Narratage v-if="renderList[1]" :narratage="{image:'DSC_0286_4.jpg' }"/>

          <Dialog v-if="renderList[2]" :dialog="{ position:'left',text:'每天都想见到老姐' }"/>
          <Dialog v-if="renderList[3]" :dialog="{ position:'right',text:'我有点儿冷' }"/>
          <Dialog v-if="renderList[4]" :dialog="{ position:'left',text:'我们到那边去吧' }"/>
          <Narratage v-if="renderList[5]" :narratage="{text:'... ...' }"/>
          <Narratage v-if="renderList[6]" :narratage="{image:'DSC_0302.jpg' }"/>
          <Dialog v-if="renderList[7]" :dialog="{ position:'left',text:'我们好像还没有合照啊' }"/>
          <Dialog v-if="renderList[8]" :dialog="{ position:'right',text:'为啥要合照啊' }"/>
          <Dialog v-if="renderList[9]" :dialog="{ position:'left',text:'站到前面去，看着晚霞' }"/>

          <Narratage v-if="renderList[10]" :narratage="{image:'DSC_0307.jpg' }"/>
          <Dialog v-if="renderList[11]" :dialog="{ position:'left',text:'很好，回来给我拍一张' }"/>
          <Narratage v-if="renderList[12]" :narratage="{image:'DSC_0319.jpg' }"/>
          <Dialog v-if="renderList[13]" :dialog="{ position:'left',text:'我们去前面的码头' }"/>
          <Dialog v-if="renderList[14]" :dialog="{ position:'right',text:'踢你' }"/>
          <Narratage v-if="renderList[15]" :narratage="{text:'... ...' }"/>
          <Dialog v-if="renderList[16]" :dialog="{ position:'right',text:'这门居然没有关' }"/>
          <Dialog v-if="renderList[17]" :dialog="{ position:'left',text:'前面那俩人拍照姿势好兄贵啊' }"/>
          <Dialog v-if="renderList[18]" :dialog="{ position:'right',text:'你要不要加♂入他们' }"/>
          <Dialog v-if="renderList[19]" :dialog="{ position:'left',text:'我怕也被当成兄贵了' }"/>
          <Narratage v-if="renderList[20]" :narratage="{image:'DSC_0329.jpg' }"/>
          <Dialog v-if="renderList[21]" :dialog="{ position:'left',text:'晚霞好好看啊' }"/>
          <Dialog v-if="renderList[22]" :dialog="{ position:'left',text:'你站到边边去，我给你拍个剪影' }"/>
          <Dialog v-if="renderList[23]" :dialog="{ position:'left',text:'最美侧颜' }"/>
          <Narratage v-if="renderList[24]" :narratage="{text:'8:19 pm Last Picture' }"/>
          <Narratage v-if="renderList[25]" :narratage="{image:'DSC_0342_1.jpg' }"/>
          <Dialog v-if="renderList[26]" :dialog="{ position:'right',text:'我们走吧，好冷啊' }"/>
          <Dialog v-if="renderList[27]" :dialog="{ position:'left',text:'老姐，能再陪我一会儿吗...' }"/>
          <Narratage v-if="renderList[28]" :narratage="{text:'转身' }"/>
          <Dialog v-if="renderList[29]" :dialog="{ position:'left',text:'请当我女朋友吧！' }"/>
          <Dialog v-if="renderList[30]" :dialog="{ position:'right',text:'干嘛吗' }"/>
          <Dialog v-if="renderList[31]" :dialog="{ position:'right',text:'为什么要说这个' }"/>
          <Narratage v-if="renderList[32]" :narratage="{text:'往岸边的亭子' }"/>
          <Dialog v-if="renderList[33]" :dialog="{ position:'left',text:'（神智不清）快说好啊' }"/>
          <Dialog v-if="renderList[34]" :dialog="{ position:'right',text:'我们一定要在这儿说吗' }"/>
          <Dialog v-if="renderList[35]" :dialog="{ position:'right',text:'唉，傻死了' }"/>
          <Narratage v-if="renderList[36]" :narratage="{text:'进入商场' }"/>
          <Dialog v-if="renderList[37]" :dialog="{ position:'right',text:'你等一会儿我上个厕所' }"/>
          <Dialog v-if="renderList[38]" :dialog="{ position:'left',text:'（意识混乱）' }"/>
          <Narratage v-if="renderList[39]" :narratage="{text:'... ...' }"/>
          <Dialog v-if="renderList[40]" :dialog="{ position:'right',text:'或许我们可以试试~' }"/>
          <Dialog v-if="renderList[41]" :dialog="{ position:'left',text:'哇!' }"/>
          <Narratage v-if="egg[0]" :narratage="{text:'后记' }"/>
          <Dialog  v-if="egg[1]" :dialog="{ position:'left',text:'照顾晓潇直到永远！' }"/>
        </v-container>
        <transition name="fade">
          <v-btn v-if="expendShow" @click="expendDialog()" large block>
            <v-icon x-large>expand_more</v-icon>
          </v-btn>
        </transition>
        <transition name="fade">
          <v-btn color="primary" v-if="!expendShow&&nextBtnShow" @click="nextPage()" large block>Next Page</v-btn>
        </transition>
      </v-card>
    </v-flex>
  </v-layout>
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
      titleShow: false,
      renderList: new Array(42).fill(false),
      renderIndex: 2,
      hover: false,
      testNumber: 1,
      //playIcon: this.$store.state.playIcon,
      bgm: this.$store.state.bgm,
      egg:[false,false],
      nextBtnShow:true
    };
  },
  mounted() {
    window.setTimeout(() => {
      this.titleShow = true;
      const bgmPro = this.bgm.play();
      console.log(bgmPro);

      if (bgmPro !== undefined) {
        bgmPro
          .then(_ => {
            this.$store.commit("playMusic", "play");
          })
          .catch(error => {
            console.log(error);
          });
      }
    }, 300);
  },
  methods: {
    expendDialog() {
      this.$set(this.renderList, this.renderIndex, true);
      this.renderIndex++;

    },
    nextPage() {
      this.nextBtnShow = false
      window.setTimeout(()=>{
        this.$set(this.egg, 0, true);
      },3000)
      window.setTimeout(()=>{
        this.$set(this.egg, 1, true);
      },6000)
      window.setTimeout(()=>{
this.$router.push("/about");
      },10000)
      
    },
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
    }
  },
  computed: {
    expendShow() {
      return this.renderIndex >= this.renderList.length ? false : true;
    },
    playIcon() {
      return this.$store.state.playIcon;
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
