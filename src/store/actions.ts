import { ActionTree } from 'vuex';
import { RootState } from './index';
//import { AlunoMutationTypes } from './aluno/mutations';
import { StoreNamespaces } from './namespaces';
//import { ResumoMutationTypes } from './resumo/mutations';
import { GlobalMutationTypes } from './mutations';
import { GlobalState } from './state';

export enum GlobalActionTypes {
  LIMPAR_STORE = 'LIMPAR_STORE',
  DEFINIR_LINK_PARA_VOLTAR = 'DEFINIR_LINK_PARA_VOLTAR',
  LIMPAR_LINK_PARA_VOLTAR = 'LIMPAR_LINK_PARA_VOLTAR',
  OBTENDO_INFORMACOES = 'OBTENDO_INFORMACOES',
  INFORMACOES_OBTIDAS = 'INFORMACOES_OBTIDAS',
  HABILITAR_MENU = 'HABILITAR_MENU',
  DESABILITAR_MENU = 'DESABILITAR_MENU',
  ALTERAR_TITULO_SISTEMA = 'ALTERAR_TITULO_SISTEMA',
}

const actions: ActionTree<GlobalState, RootState> = {

 /* async [GlobalActionTypes.LIMPAR_STORE]({ commit }) {
    commit(`${ StoreNamespaces.ALUNO }/${ AlunoMutationTypes.LIMPAR_STORE }`);
    commit(`${ StoreNamespaces.RESUMO }/${ ResumoMutationTypes.LIMPAR_STORE }`);
  },

  async [GlobalActionTypes.DEFINIR_LINK_PARA_VOLTAR]({ commit }, link: string) {
    commit(GlobalMutationTypes.SET_LINK_PARA_VOLTAR, link);
  },

  async [GlobalActionTypes.LIMPAR_LINK_PARA_VOLTAR]({ commit }) {
    commit(GlobalMutationTypes.SET_LINK_PARA_VOLTAR, '');
  },

  async [GlobalActionTypes.OBTENDO_INFORMACOES]({ commit }) {
    commit(GlobalMutationTypes.SET_OBTENDO_INFORMACOES, true);
  },

  async [GlobalActionTypes.INFORMACOES_OBTIDAS]({ commit }) {
    commit(GlobalMutationTypes.SET_OBTENDO_INFORMACOES, false);
  },

  async [GlobalActionTypes.HABILITAR_MENU]({ commit }) {
    commit(GlobalMutationTypes.SET_HABILITAR_MENU, true);
  },

  async [GlobalActionTypes.DESABILITAR_MENU]({ commit }) {
    commit(GlobalMutationTypes.SET_HABILITAR_MENU, false);
  },

  async [GlobalActionTypes.ALTERAR_TITULO_SISTEMA]({ commit }, titulo: string) {
    commit(GlobalMutationTypes.SET_ALTERAR_TITULO_SISTEMA, titulo);
  },*/
};

export default actions;
