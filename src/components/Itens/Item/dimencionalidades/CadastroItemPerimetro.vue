<template>
  
    <div justify="center">
      <v-dialog v-model="dialogItem" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Criar Item</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Nome do Item*"
                    required
                  ></v-text-field>
                </v-col>

                  <v-col cols="12" sm="6">
                  <v-select
                    :items="dimencoesItem"
                    label="Selecione a dimencionalidade do item*"
                    hint="representa a unidade de medida do item"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Valor de compra"
                    hint="custo de compra do item"
                  ></v-text-field>
                </v-col>

                 <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Valor de venda"
                    hint="pretenção de venda do item"
                  ></v-text-field>
                </v-col>
               
                <v-col cols="12" sm="6">
                  <v-select
                    :items="tipos"
                    label="Selecione o tipo do item*"
                    required
                  ></v-select>
                </v-col>

              
                
              </v-row>
            </v-container>
            <small>*indica campo obrigatorio</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark  @click="dialogItem = false" class="mt-8">
              Salvar
            </v-btn>
            <v-btn color="blue" text @click="dialogItem = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn @click="dialogItem=true">
        <v-icon>mdi-shape-square-plus</v-icon>
        Criar Novo Item de perímetro
      </v-btn>
    </div>
   
  
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import EmpresaModel from "@/Model/Empresa/EmpresaModel";
import EmpresaService from "@/Service/EmpresaService";
import { Inject } from "typescript-ioc";

@Component({})
export default class CadastroItemPerimetro extends Vue {
  public dialogItem = false;
  public tipos = ['grade','porta','portao de enrrolar'];
    public direcaoCalculo = ['altura','largura','profundidade'];
}
</script>