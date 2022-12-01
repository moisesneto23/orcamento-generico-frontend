<template>
  <div class='add-remove-lista'>
    <h1>metodo de adicionar e remover objetos</h1>
    <!-- <input type="text" placeholder="digite o nome" v-model="alunosnome" /><br />
    <input
      type="text"
      placeholder="digite a idade"
      v-model="alunosidade"
    /><br /> -->
    <button @click="addAlunos()">acrescentar</button>
    <table border="">
      <thead>
        <th>idade</th>
        <th>nome</th>
        <th>opções</th>
      </thead>
      <tbody>
        <tr v-for="(emp, index) in Empresas" :key="index">
          <td>{{ emp.nome }}</td>
          <td>{{emp.email}}</td>
          <td><button class="btn" @click="remover(aluno)">REMOVER</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import EmpresaModel from '../../Model/Empresa/EmpresaModel';
import EmpresaService from "../../Service/EmpresaService"
import { Inject } from 'typescript-ioc';

@Component({
 //coloca os componentes que for importar
})
export default class Aluno extends Vue { //declara a classe que esta sendo exportada
  /*alunosnome: string ;
  alunosidade: number ;*/
  
  public Empresas: EmpresaModel[] = [];
  @Inject
  public empresaService!: EmpresaService;
  
  /*alunos = [
    { nome: "moises", idade: 25 },
    { nome: "jose", idade: 32 },
    { nome: "maria", idade: 13 },
  ];*/

  public async addAlunos() {
    this.Empresas = await this.empresaService.obterTodasEmpresas();
    /*let aluno = { nome: this.alunosnome, idade: this.alunosidade };
    this.alunos.push(aluno);*/
  }
 /* remover(aluno) {
    let indice = this.alunos.indexOf(aluno);//meto que pega o indice de um objeto
    this.alunos.splice(indice,1);//metodo que retira uma determinada quantidade de objeto a partir de um indice
  }*/
}

</script>
<style scoped>

button {
  background-color: rgb(253, 207, 146);
  padding: 5px;
  margin: 3px;
  border: 1px solid black;
  border-radius: 15px;
  border-bottom: 3px solid black;
}
.add-remove-lista{
  background-color: rgb(193, 225, 253);
  display: grid;
}
table{
  margin: 20px;
}
button:hover{
  margin-top: 6px;
 border-bottom:1px solid black;
}
</style>