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
            <v-btn dark  @click="adicionarCategoria" class="mt-8">
              Salvar
            </v-btn>
            <v-btn color="blue" text @click="dialog = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialog=true">
        <v-icon>mdi-format-list-group-plus</v-icon>
        Criar Nova Categoria
      </v-btn>
    </div>
   
  
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CategoriaService from '@/Service/Selecao/CategoriaService';
import CategoriaRequest from '@/Model/Request/CategoriaRequest';
import { Inject } from "typescript-ioc";

@Component({})
export default class CadastroCategoria extends Vue {
  private dialog = false;
  @Inject
  private _categoria!: CategoriaService;
  private categoria = new CategoriaRequest();

  public async adicionarCategoria(){

    this.categoria.empresa_id = 13;
    console.log(this.categoria);
    this._categoria.salvarCategoria(this.categoria).then(()=>{
      location.reload();
    });
    this.dialog = false;
  }

}
</script>