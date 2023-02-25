<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="categoria in categorias" :key="categoria.id">
      <v-expansion-panel-header>  <h1>{{ categoria.descricao }}</h1></v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col cols="6">
            <edicao-categoria :categoria="categoria" @categoriaAlterada="alteracaoCategoria" ></edicao-categoria>
           
            <h3 class="text-center">Editar</h3></v-col>
            
          <v-col cols="6">
            <v-btn text @click="excluirCategoria(categoria.id)"><v-icon>mdi-trash-can-outline</v-icon> </v-btn>
            <h3 class="text-center">Escluir</h3>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script lang="ts">
import { Inject } from 'typescript-ioc';
import { Vue, Component } from "vue-property-decorator";
import CategoriaService from '@/Service/Selecao/CategoriaService';
import CategoriaModel from '@/Model/Selecao/CategoriaModel';
import EdicaoCategoria from '@/components/Categoria/EditacaoCategoria.vue';
import CategoriaRequest from '@/Model/Request/CategoriaRequest'
@Component({
  components: {
    EdicaoCategoria,
  }
})
export default class ListagemCategoria extends Vue {
 
 public categorias: CategoriaModel[] = [];
  @Inject
  public _categoriaService!: CategoriaService;
  
  public mounted(){
    this.obterCategorias();
  }

  public async obterCategorias() {
    this.categorias = await this._categoriaService.obterTodasEmpresas();
  }
  public alteracaoCategoria(categoria: CategoriaModel){
    this.categorias.filter(x=>x.id===categoria.id).map(c=>c =categoria);
  }

      public excluirCategoria(id:number){
        this._categoriaService.delete(id).then(()=>{
          this.obterCategorias();
        });
 
      }
}
</script>