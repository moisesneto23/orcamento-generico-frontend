<template>
  
    <div justify="center">
      <v-dialog v-model="dialogTipo" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar Tipo</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome do Tipo*"
                    required
                    item-value="nome"
                    v-model="tipo.nome"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    :items="categorias"
                    label="Escolha uma Categoria*"
                    required
                    item-value="id"
                    item-text="nome"
                    v-model="tipo.categoria_id"
                  ></v-select>
                </v-col>
               
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark  @click="adicionarTipo()" class="mt-8">
              Salvar
            </v-btn>
            <v-btn color="blue" text @click="dialogTipo = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialogTipo=true">
        <v-icon>mdi-view-grid-plus-outline</v-icon>
        Criar Novo Tipo
      </v-btn>
    </div>
   
  
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CategoriaService from '@/Service/Selecao/CategoriaService';
import CategoriaModel from '@/Model/Selecao/CategoriaModel';
import TipoModel from "@/Model/Selecao/TipoModel";
import TipoService from "@/Service/Selecao/TipoService";
import { Inject } from "typescript-ioc";

@Component({})
export default class CadastroTipo extends Vue {
    @Inject
  public _tipoService!: TipoService;
  public tipo= new TipoModel();
  public dialogTipo = false;

  public categorias: CategoriaModel[] = [];
  @Inject
  public _categoriaService!: CategoriaService;
  
  public mounted(){
    this.obterCategorias();
  }

  public async obterCategorias() {
    this.categorias = await this._categoriaService.obterTodasCategorias();
  }

  public adicionarTipo(){
    this.dialogTipo = false;
    this._tipoService.salvarTipo(this.tipo).then(()=>{
       location. reload();
    });
   
  }
}
</script>