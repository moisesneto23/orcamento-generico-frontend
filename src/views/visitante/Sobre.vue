<template>
    <div >
 <v-btn @click="muda()">muda</v-btn>
        <h1> Sobre </h1>
    </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({
  components:{

  }
})
export default class Sobre extends Vue {
public muda(){
  localStorage.setItem("ocirenegotnemacro",'kdhfsdhfsh');
  this.$router.push('/')
}
}
</script>
