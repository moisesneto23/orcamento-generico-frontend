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
                   v-model="select"
   
    :items="descricaoCategorias"
    :item-title="descricaoCategorias"
    item-value="id"
    label="selecione"
    persistent-hint
    return-object
    single-line
                  ></v-select>
                </v-col>
               
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark  @click="selecuinaIdSelect(), adicionarTipo()" class="mt-8">
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
import CategoriaModel from '@/Model/Itens/CategoriaModel';
import TipoModel from "@/Model/Itens/TipoModel";
import TipoService from "@/Service/Itens/TipoService";
import { Inject } from "typescript-ioc";
import { StoreNamespaces } from "@/store";
import { namespace } from "vuex-class";
import { ItensActionTypes } from "@/store/Item/actions";

const item = namespace(StoreNamespaces.ITEM);
@Component({})
export default class CadastroTipo extends Vue {
    @Inject
  public _tipoService!: TipoService;
  public tipo= new TipoModel();
  public dialogTipo = false;
public select = '';
private idSelect?: number;
public selecuinaIdSelect(){
  this.idSelect = this.categorias.find(x=>x.descricao == this.select)?.id;
}

@item.State
 private categorias!: CategoriaModel[];
  
 

   @item.Action(ItensActionTypes.SALVAR_TIPO_ITEM)
  public salvarTipoItem!:(tipo: TipoModel) => Promise<any>;
  
  public get descricaoCategorias(){
    return this.categorias.map((c)=>c.descricao);
  }
  public mounted(){
   
  }



  public adicionarTipo(){
    this.dialogTipo = false;
    /*this._tipoService.salvarTipo(this.tipo).then(()=>{
       location. reload();
    });*/
    this.salvarTipoItem(this.tipo);
  }
}
</script>