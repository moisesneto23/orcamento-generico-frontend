<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="(item, i) in itens" :key="i">
      <v-expansion-panel-header>Item</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col cols="6"><v-btn text><v-icon x-large>mdi-circle-edit-outline</v-icon> </v-btn>
            <h3 class="text-center">Editar</h3></v-col>
          <v-col cols="6">
            <v-btn text><v-icon x-large>mdi-trash-can-outline</v-icon> </v-btn>
            <h3 class="text-center">Escluir</h3>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts">
import ItemModel from "@/Model/Itens/ItemModel";
import { StoreNamespaces } from "@/store";
import { ItensActionTypes } from "@/store/Item/actions";
import { Vue, Component } from "vue-property-decorator";
import { namespace } from "vuex-class";

const item = namespace(StoreNamespaces.ITEM);
@Component
export default class ListaLinear extends Vue {

  @item.State
  public itens!: ItemModel;

  public async mounted(){

  }
}
</script>