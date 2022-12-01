<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="tipo in tipos" :key="tipo.id">
      <v-expansion-panel-header> <h2>  {{ tipo.nome }}</h2> </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
           <v-col cols="6">
            <edicao-tipo :tipo="tipo" @tipoAlterada="tipo=$event" ></edicao-tipo>
           
            <h3 class="text-center">Editar</h3></v-col>
            
          <v-col cols="6">
            <v-btn text @click="excluirTipo(tipo.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
            <h3 class="text-center">Escluir</h3>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts">

import { Vue, Component } from "vue-property-decorator";
import TipoModel from "@/Model/Selecao/TipoModel";
import TipoService from "@/Service/Selecao/TipoService";
import { Inject } from "typescript-ioc";
import EdicaoTipo from '@/components/Tipo/EdicaoTipo.vue'

@Component({
  components:{
    EdicaoTipo,
  }
})
export default class ListagemTipo extends Vue {
  @Inject
  public _tipoService!: TipoService;
  public tipos: TipoModel[] = [];
  public async mounted(){
    this.tipos = await this.buscarTodosTipos();
  }
  private async buscarTodosTipos(): Promise<any>{
    return this._tipoService.obterTodasEmpresas();
  }
   public excluirTipo(id:number){
        this._tipoService.delete(id).then(()=>{
                 location. reload();
        });
      }
}
</script>