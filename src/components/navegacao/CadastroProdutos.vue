<template>
  <v-card>
    <v-toolbar flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Contact Database</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            href="#mobile-tabs-5-1"
            class="primary--text"
          >
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-2"
            class="primary--text"
          >
            <v-icon>mdi-heart</v-icon>
          </v-tab>

          <v-tab
            href="#mobile-tabs-5-3"
            class="primary--text"
          >
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="'mobile-tabs-5-' + i"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import EmpresaModel from "@/Model/Empresa/EmpresaModel";
import EmpresaService from "@/Service/EmpresaService";
import { Inject } from "typescript-ioc";
@Component
export default class CadastroProdutos extends Vue {
  public drawer = false;
  private group = null;

  public Empresas: EmpresaModel[] = [];
  @Inject
  public empresaService!: EmpresaService;
  public async buscaEmpresas() {
    this.Empresas = await this.empresaService.obterTodasEmpresas();
  }
}
</script>

<style scoped>
#nav{
    background-color: darkseagreen;
}
</style>
