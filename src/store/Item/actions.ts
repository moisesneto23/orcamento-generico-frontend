import  ItemModel  from '@/Model/ItemModel';
import { ActionTree } from 'vuex';
import { ItemState } from './state';
import { RootState } from '@/store';
import { ItemMutationTypes } from './mutations';
import { Container } from 'typescript-ioc';
import  ItemService  from '@/Service/Selecao/ItemService';


export enum ResumoActionTypes {
  OBTER_RESUMO = 'OBTER_RESUMO',
  OBTER_NOME_DISCIPLINAS_SEM_HORARIO = 'OBTER_NOME_DISCIPLINAS_SEM_HORARIO',
  EXISTEM_DISCIPLINAS_PARA_EXIBIR = 'EXISTEM_DISCIPLINAS_PARA_EXIBIR',
  EXISTEM_DISCIPLINAS_NA_FILA_DE_ESPERA = 'EXISTEM_DISCIPLINAS_NA_FILA_DE_ESPERA',
  SETAR_TURMA_SELECIONADA = 'SETAR_TURMA_SELECIONADA',
}

const actions: ActionTree<ItemState, RootState> = {

 /* async [ResumoActionTypes.OBTER_RESUMO]({ commit }, codigoDoAluno: number) {
    const service = (Container.get(ResumoService) as ResumoService);

    const disciplinas = await service.obterResumo(codigoDoAluno);

    commit(ResumoMutationTypes.SET_HORARIOS, disciplinas);
  },

  async [ResumoActionTypes.OBTER_NOME_DISCIPLINAS_SEM_HORARIO]({ commit }, codigoDoAluno: number) {
    const service = (Container.get(ResumoService) as ResumoService);

    const disciplinas = await service.obterDisciplinasSemHorario(codigoDoAluno);
    commit(ResumoMutationTypes.SET_DISCIPLINAS_SEM_HORARIO, disciplinas);
  },

  async [ResumoActionTypes.SETAR_TURMA_SELECIONADA]({ commit }, turmaSelecionada: Turma) {
    commit(ResumoMutationTypes.SET_TURMA_SELECIONADA, turmaSelecionada);
  },*/
};

export default actions;
