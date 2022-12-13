import ItemModel from '@/Model/ItemModel';
import { MutationTree } from 'vuex';
import { ItemState } from './state';



export enum ItemMutationTypes {

  SET_ITEM = 'SET_ITEM',
}

const mutations: MutationTree<ItemState> = {
  [ItemMutationTypes.SET_ITEM](state: ItemState, item: ItemModel) {
    state.itens?.push(item);
  },
};

export default mutations;
