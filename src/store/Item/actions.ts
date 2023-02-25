import CategoriaModel  from '@/Model/Selecao/CategoriaModel';
import  ItemModel  from '@/Model/ItemModel';
import { ActionTree } from 'vuex';
import { ItemState } from './state';
import { RootState } from '@/store';
import  ItemMutationTypes  from './mutations';
import {ItensMutationTypes} from './mutations';
import { Container, Inject } from 'typescript-ioc';
import  ItemService  from '@/Service/Selecao/ItemService';
import CategoriaService from '@/Service/Selecao/CategoriaService';



export enum ItensActionTypes {
  OBTER_TIPOS_ITEM = 'OBTER_TIPOS_ITEM',
  OBTER_CATEGORIAS_ITEM = 'OBTER_CATEGORIAS_ITEM',
  SALVAR_CATEGORIA_ITEM = 'SALVAR_CATEGORIA_ITEM',
  EDITAR_CATEGORIA_ITEM = 'EDITAR_CATEGORIA_ITEM',
  REMOVER_CATEGORIA_ITEM = 'REMOVER_CATEGORIA_ITEM',
  OBTER_ITEMS = 'OBTER_ITEMS',
 
}


const actions: ActionTree<ItemState, RootState> = {

  async [ItensActionTypes.OBTER_CATEGORIAS_ITEM]({ commit }) {
    const service = (Container.get(CategoriaService) as CategoriaService);
    const categorias = await service.obterTodasCategorias();
    commit(ItensMutationTypes.SET_CATEGORIAS_ITEM, categorias);
  },

  async [ItensActionTypes.SALVAR_CATEGORIA_ITEM]({ commit }, categoria: CategoriaModel ) {
    const service = (Container.get(CategoriaService) as CategoriaService);
    await service.salvarCategoria(categoria);
    const categorias = await service.obterTodasCategorias();
    commit(ItensMutationTypes.SET_CATEGORIAS_ITEM, categorias);
  },
  async [ItensActionTypes.REMOVER_CATEGORIA_ITEM]({ commit }, categoria: number ) {
    const service = (Container.get(CategoriaService) as CategoriaService);
    await service.delete(categoria);
    const categorias = await service.obterTodasCategorias();
    commit(ItensMutationTypes.SET_CATEGORIAS_ITEM, categorias);
  },

  async [ItensActionTypes.OBTER_TIPOS_ITEM]({ commit }) {
    const service = (Container.get(CategoriaService) as CategoriaService);
    const categorias = await service.obterTodasCategorias();
    commit(ItensMutationTypes.SET_CATEGORIAS_ITEM, categorias);
  },

  async [ItensActionTypes.OBTER_ITEMS]({ commit }) {
    const service = (Container.get(CategoriaService) as CategoriaService);
    const categorias = await service.obterTodasCategorias();
    commit(ItensMutationTypes.SET_CATEGORIAS_ITEM, categorias);
  },
};

export default actions;
