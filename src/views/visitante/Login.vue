<template>
  <div>
    <h1>login</h1>
    <v-btn @click="muda()">muda</v-btn>

    <v-container>
      <v-col>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            outlined
            v-model="senha"
            :counter="10"
            :rules="nameRules"
            label="Senha"
            required
          ></v-text-field>

          <v-btn  color="secondary" style="background-color: blue"  large class="mr-4" @click="logar()"> Fazer Login </v-btn>
      </v-col>
    </v-container>
  </div>
</template>




<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Rotas from "@/router/Rotas";

@Component({
  components: {},
})
export default class Login extends Vue {
  public drawer = false;
  private group = null;
  public muda() {
    localStorage.setItem("ocirenegotnemacro", "kdhfsdhfsh");
    this.$router.push(Rotas.Inicio);
  }
}
</script>
<style scoped>
 #login{
 
 }
</style>
