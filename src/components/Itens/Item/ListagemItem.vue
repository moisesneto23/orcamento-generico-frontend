<template>
  <div id="cadastroOrcamento">
    <v-tabs v-model="tab" grow icons-and-text background-color="#9FA8">
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Unidade
        <v-icon>mdi-checkbox-blank-circle</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Comprimento
        <v-icon>mdi-arrow-right-thin</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Perimetro
        <v-icon>mdi-network-strength-outline</v-icon>
      </v-tab>

      <v-tab href="#tab-4">
        Area
        <v-icon>mdi-square-outline</v-icon>
      </v-tab>

    <v-tab href="#tab-5">
        Volume
        <v-icon>mdi-package-variant-closed</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" data-app>

      <v-tab-item value="tab-1">
        <v-card>
          <v-card-text>
            <lista-unidade></lista-unidade>
          </v-card-text>
          <cadastro-item-unitario></cadastro-item-unitario>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-2">
        <v-card>
          <v-card-text>
            <lista-linear></lista-linear>
          </v-card-text>
          <cadastro-item-linear></cadastro-item-linear>
        </v-card>
      </v-tab-item>

       <v-tab-item value="tab-3">
        <v-card>
          <v-card-text>
            <lista-perimetro></lista-perimetro>
          </v-card-text>
          <cadastro-item-perimetro></cadastro-item-perimetro>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-4">
        <v-card>
          <v-card-text>
            <lista-area></lista-area>
          </v-card-text>
          <cadastro-item-area></cadastro-item-area>
        </v-card>
      </v-tab-item>

      <v-tab-item value="tab-5">
        <v-card>
          <v-card-text>
            <lista-volume></lista-volume>
          </v-card-text>
          <cadastro-item-volume></cadastro-item-volume>
        </v-card>
      </v-tab-item>
    </v-tabs-items>


  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import EmpresaModel from "@/Model/Empresa/EmpresaModel";
import EmpresaService from "@/Service/EmpresaService";
import { Inject } from "typescript-ioc";
import CadastroItemUnitario from '@/components/Itens/Item/dimencionalidades/CadastroItemUnitario.vue' ;
import ListaUnidade from '@/components/Itens/Item/dimencionalidades/ListaUnidade.vue' ;
import CadastroItemLinear from '@/components/Itens/Item/dimencionalidades/CadastroItemLinear.vue' ;
import ListaLinear from '@/components/Itens/Item/dimencionalidades/ListaLinear.vue' ;
import CadastroItemArea from '@/components/Itens/Item/dimencionalidades/CadastroItemArea.vue' ;
import ListaArea from '@/components/Itens/Item/dimencionalidades/ListaArea.vue' ;
import CadastroItemVolume from '@/components/Itens/Item/dimencionalidades/CadastroItemVolume.vue' ;
import ListaVolume from '@/components/Itens/Item/dimencionalidades/ListaVolume.vue' ;
import CadastroItemPerimetro from '@/components/Itens/Item/dimencionalidades/CadastroItemPerimetro.vue' ;
import ListaPerimetro from '@/components/Itens/Item/dimencionalidades/ListaPerimetro.vue' ;
import ItemModel from "@/Model/Itens/ItemModel";
import { StoreNamespaces } from "@/store";
import { ItensActionTypes } from "@/store/Item/actions";
import { namespace } from "vuex-class";

const item = namespace(StoreNamespaces.ITEM);
@Component({
  components: {
    CadastroItemUnitario,
    ListaUnidade,
    CadastroItemLinear,
    ListaLinear,
    CadastroItemArea,
    ListaArea,
    CadastroItemVolume,
    ListaVolume,
    CadastroItemPerimetro,
    ListaPerimetro,
  },
})
export default class ListagemItem extends Vue {
  public tab = null;
  @item.Action(ItensActionTypes.OBTER_ITENS)
  public obterTodosItens!:() => Promise<any>;

  @item.Action(ItensActionTypes.OBTER_TIPOS_ITEM)
  public obterTodostipoItem!:() => Promise<any>;

  public async mounted(){
    await this.obterTodosItens();
    await this.obterTodostipoItem();
  }
}
 


</script>
<style scoped>
#cadastroOrcamento{
  background-color: rgb(186, 186, 186);
}
</style>