<template>
<nav>
    <h1>visitante</h1>
 
     <span> <router-link :to="Login"> Login</router-link> </span>
      <span> <router-link :to="CadastroEmpresa"> cadastro</router-link> </span>
       <span><router-link :to="Sobre"> sobre</router-link></span>

    </nav>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Rotas from '@/router/Rotas';
@Component({
  components: {

  }
})
export default class NavegacaoVisitante extends Vue{
 private Login = Rotas.Visitante.Login;
 private CadastroEmpresa = Rotas.Visitante.CadastroEmpresa;
 private Sobre = Rotas.Visitante.Sobre;
}
</script>

