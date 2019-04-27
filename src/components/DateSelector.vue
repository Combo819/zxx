<template>

    <v-dialog v-model="dialog" persistent width="390">
      <template v-slot:activator="{ on }">
        <v-flex v-on='on' xs10 md4 >
          <v-card hover  >
            <img v-if='boy' style="width:100%" :src='"../assets/WechatIMG62.jpeg"'/>
            <img v-else style="width:100%" :src='"../assets/zxx-9.0091fdfc.jpg"'/>
            
            <v-card-title  class="headline text-center" primary-title>我是{{name}}</v-card-title>
          </v-card>
        </v-flex>
      </template>
      <v-card>
        <v-card-title class="headline text-center">表白日期</v-card-title>
        
        <v-layout  align-center justify-center row fill-height wrap>
          <v-flex md9>

<v-alert
      :value="this.alert.success"
      type="success"
      transition="scale-transition"
      outline
    >
      答对啦！
    </v-alert>
    <v-alert
      :value="this.alert.error"
      type="error"
      transition="scale-transition"
      outline
    >
      答错啦！
    </v-alert>
        <v-date-picker v-model="picker" color="blue lighten-3"></v-date-picker>
          </v-flex>
        </v-layout>
         
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  flat @click="toggleDialog()">Disagree</v-btn>
          <v-btn color="blue lighten-1" flat @click="dateConfirm()">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script>
import { clearTimeout } from 'timers';
export default {
  props:['name','image','route','boy'],
  data() {
    return {
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
      alert:{
        success:false,
        error:false
      },
     timer : null,
    };
  },
  methods:{
    toggleDialog(){
      this.dialog = !this.dialog;
      [this.alert.success,this.alert.error]=[false,false]
    },
    dateConfirm(){
      console.log(this.picker);
      if(this.picker === '2019-04-13'){
        this.alert.success=true
        this.alert.error=false
        this.timer = window.setTimeout(()=>{
          this.$router.push(this.route)
        },1200,window.clearTimeout(this.timer))
      }else{
        this.alert.error=true
        this.alert.success = false
      }
    }
  }
};
</script>

<style scoped>
.text-center{
  text-align: center; 
  display: inline-block;
  width:100%
}


</style>
