<template>
<div>
 <h1>login</h1>
   <v-btn @click="muda()">muda</v-btn>
</div>
   
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Navegacao from '@/components/visitante/Navegacao.vue'
@Component({
  components:{
    Navegacao,
  }
})
export default class Login extends Vue {
  public drawer = false;
  private group = null;
public muda(){
  localStorage.setItem("ocirenegotnemacro",'kdhfsdhfsh');
  this.$router.push('/')
}
  

}
</script>
