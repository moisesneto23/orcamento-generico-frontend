import ItemModel from '@/Model/ItemModel';
import CategoriaModel from '@/Model/Selecao/CategoriaModel';
import TipoModel from '@/Model/Selecao/TipoModel';
import { MutationTree } from 'vuex';
import { ItemState } from './state';



export enum ItensMutationTypes {
  SET_CATEGORIAS_ITEM = 'SET_CATEGORIAS_ITEM',
  SET_CATEGORIA_ITEM = 'SET_CATEGORIA_ITEM',
  SET_TIPOS_ITEM = 'SET_TIPOS_ITEM',
  SET_ITEMS = 'SET_ITEMS',
}

const mutations: MutationTree<ItemState> = {
  [ItensMutationTypes.SET_CATEGORIAS_ITEM](state: ItemState, categoria: CategoriaModel[]) {
    state.categorias =categoria;
  },
  [ItensMutationTypes.SET_TIPOS_ITEM](state: ItemState, tipo: TipoModel[]) {
    state.tipos = tipo
  },
  [ItensMutationTypes.SET_ITEMS](state: ItemState, item: ItemModel[]) {
    state.itens =item;
  },
};


export default mutations;
