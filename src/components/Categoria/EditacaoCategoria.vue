<template>
  
    <div justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar Categoria</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome da categoria*"
                    required
                    v-model="categoria.nome"
                  ></v-text-field>
                </v-col>
                
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark  @click="processarEdicao(categoria)" class="mt-8">
              Salvar
            </v-btn>
            
            <v-btn color="blue" text @click="dialog = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
       <v-btn text @click="dialog=true">
              <v-icon>mdi-circle-edit-outline</v-icon> 
              </v-btn>
    </div>
   
  
</template>


<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import CategoriaModel from "@/Model/Selecao/CategoriaModel";
import CategoriaService from "@/Service/Selecao/CategoriaService";
import { Inject } from "typescript-ioc";
import CategoriaRequest from '@/Model/Request/CategoriaRequest'


@Component({})
export default class EdicaoCategoria extends Vue {
  public dialog = false;
@Inject
   public _categoriaService!: CategoriaService;
  @Prop()
  private categoria!: CategoriaModel;
  public get exibeCategoria(){
    return this.categoria;
  }
  public processarEdicao(categoria: CategoriaRequest){
        console.log(categoria); 
    this.editarCategoria(categoria);
    this.dialog = false;

    
    this.$emit('categoriaAlterada',this.categoria);
  }
  private async editarCategoria(categoria: CategoriaRequest): Promise<any>{
      this.categoria = await this._categoriaService.editarCategoria(categoria);
  }
}
</script>