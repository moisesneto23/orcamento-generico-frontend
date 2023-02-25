
import { ActionTree } from 'vuex';
import { RootState } from '.';
import { GlobalMutationTypes } from './mutations';
import { GlobalState } from './state';
import EmpresaService from '@/Service/EmpresaService';
import { Container } from 'typescript-ioc';
import Login from '@/Model/Login';

export enum GlobalActionTypes {
  FAZER_LOGIN = "FAZER_LOGIN",
}

const actions: ActionTree<GlobalState, RootState> = {


  async [GlobalActionTypes.FAZER_LOGIN]({ commit }, login: Login): Promise<any> {
    const service = (Container.get(EmpresaService) as EmpresaService);
    const data = await service.obterInformacoesEmpresa(login);
    localStorage.setItem("ocirenegotnemacro", data.token);
    commit(GlobalMutationTypes.SET_FAZER_LOGIN, data); 
  },
};

export default actions;
