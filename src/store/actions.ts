import {  } from '@/Repository/EmpresaRepository';
import InformacoesEmpresa  from '@/Model/InformacoesEmpresa';
import { ActionTree } from 'vuex';
import { RootState } from './index';
//import { AlunoMutationTypes } from './aluno/mutations';
import { StoreNamespaces } from './namespaces';
//import { ResumoMutationTypes } from './resumo/mutations';
import { GlobalMutationTypes } from './mutations';
import { GlobalState } from './state';
import { Inject } from "typescript-ioc";
import EmpresaService from '@/Service/EmpresaService';
import { Container } from 'typescript-ioc';
import Login from '@/Model/Login';

export enum GlobalActionTypes {
  FAZER_LOGIN = 'FAZER_LOGIN',
}

const actions: ActionTree<GlobalState, RootState> = {


  async [GlobalActionTypes.FAZER_LOGIN]({ commit }, login: Login) {
    const service = (Container.get(EmpresaService) as EmpresaService);
    const informacoesEmpresa = await service.obterInformacoesEmpresa(login);
    localStorage.setItem("ocirenegotnemacro", informacoesEmpresa.token);
    commit(GlobalMutationTypes.SET_FAZER_LOGIN, informacoesEmpresa);
  },
};

export default actions;
