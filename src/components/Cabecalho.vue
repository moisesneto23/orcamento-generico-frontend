<template>
  <div>

    <v-app-bar color="deep-purple accent-4" dark >
      <v-app-bar-nav-icon x-large
        @click.stop="(drawer = !drawer)"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list>
        <v-list-item-group v-model="group">

          <v-list-item :to="Inicio">
            <v-list-item-icon>
              <v-icon >mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title >Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

             <v-list-item :to="RealizaOrcamento">
            <v-list-item-icon>
              <v-icon >mdi-calculator</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Orçamento</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

           <v-list-item :to="cadastroItens">
            <v-list-item-icon>
              <v-icon >mdi-shape-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Cadastro Itens</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="Ajuda">
            <v-list-item-icon>
              <v-icon >mdi-help</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Ajuda</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

<v-btn @click="sair()">sair</v-btn>

  </div>
</template>

<script lang='ts'>
import Rotas from '@/router/Rotas';
import { Vue, Component } from "vue-property-decorator";
import EmpresaModel from "@/Model/Empresa/EmpresaModel";
import EmpresaService from "@/Service/EmpresaService";
import { Inject } from "typescript-ioc";

@Component({
  components:{

  }
})
export default class Cabecalho extends Vue {
  public drawer = false;
  public group = null;
  public cadastroItens = Rotas.Cadastros.CadastroItens;
  public Empresas: EmpresaModel[] = [];
  @Inject
  public empresaService!: EmpresaService;
  public async buscaEmpresas() {
    this.Empresas = await this.empresaService.obterTodasEmpresas();
  }
  
  public Inicio = Rotas.Inicio;
  public CadastroItens = Rotas.Cadastros.CadastroItens;
  public Ajuda = Rotas.Ajuda;
  public RealizaOrcamento = Rotas.Cadastros.RealizaOrcamento;

  public sair(){
    localStorage.removeItem('ocirenegotnemacro');
    this.$router.push(Rotas.Visitante.Login);
  }



}
</script>

<style></style>
