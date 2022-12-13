import { MutationTree } from 'vuex';
import { GlobalState } from './state';

export enum GlobalMutationTypes {
  SET_LINK_PARA_VOLTAR = 'SET_LINK_PARA_VOLTAR',
  SET_OBTENDO_INFORMACOES = 'SET_OBTENDO_INFORMACOES',
  SET_HABILITAR_MENU = 'SET_HABILITAR_MENU',
  SET_ALTERAR_TITULO_SISTEMA = 'SET_ALTERAR_TITULO_SISTEMA',
}

const mutations: MutationTree<GlobalState> = {

  [GlobalMutationTypes.SET_LINK_PARA_VOLTAR](state: GlobalState, linkParaVoltar: string) {
    state.linkParaVoltar = linkParaVoltar;
  },

  [GlobalMutationTypes.SET_OBTENDO_INFORMACOES](state: GlobalState, status: boolean) {
    state.obtendoInformacoes = status;
  },

  [GlobalMutationTypes.SET_HABILITAR_MENU](state: GlobalState, status: boolean) {
    state.exibirMenu = status;
  },
  [GlobalMutationTypes.SET_ALTERAR_TITULO_SISTEMA](state: GlobalState, titulo: string) {
    state.tituloPeriodoLetivo = titulo;
  },
};

export default mutations;
