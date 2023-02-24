import {  } from '@/Repository/EmpresaRepository';
import InformacoesEmpresa  from '@/Model/InformacoesEmpresa';
import { ActionTree } from 'vuex';
import { RootState } from '.';
//import { AlunoMutationTypes } from './aluno/mutations';
import { StoreNamespaces } from './namespaces';
//import { ResumoMutationTypes } from './resumo/mutations';
import { GlobalMutationTypes } from './mutations';
import { GlobalState } from './state';
// import { Inject } from "typescript-ioc";
import EmpresaService from '@/Service/EmpresaService';
import { Container } from 'typescript-ioc';
import Login from '@/Model/Login';

export enum GlobalActionTypes {
  FAZER_LOGIN = "FAZER_LOGIN",
  algo = 'algo'
}

const actions: ActionTree<GlobalState, RootState> = {


  async [GlobalActionTypes.FAZER_LOGIN]({ commit }, login: Login): Promise<void> {
    debugger;
    const service = (Container.get(EmpresaService) as EmpresaService);
    await service.obterInformacoesEmpresa(login).then((d)=>{
      localStorage.setItem("ocirenegotnemacro", d.token);
      commit(GlobalMutationTypes.SET_FAZER_LOGIN, "d");
      console.log("tudo Ok")
    });
    
    
  },
};

export default actions;
