import  InformacoesEmpresa from '@/Model/InformacoesEmpresa';
import { MutationTree } from 'vuex';
import { GlobalState } from './state';

export enum GlobalMutationTypes {
  SET_LINK_PARA_VOLTAR = 'SET_LINK_PARA_VOLTAR',
  SET_OBTENDO_INFORMACOES = 'SET_OBTENDO_INFORMACOES',
  SET_HABILITAR_MENU = 'SET_HABILITAR_MENU',
  SET_ALTERAR_TITULO_SISTEMA = 'SET_ALTERAR_TITULO_SISTEMA',

  SET_FAZER_LOGIN = 'SET_FAZER_LOGIN',
}

const mutations: MutationTree<GlobalState> = {

  [GlobalMutationTypes.SET_FAZER_LOGIN](state: GlobalState, informacoesEmpresa: InformacoesEmpresa) {
    state.informacoesEmpresa = informacoesEmpresa;
  },
};

export default mutations;
