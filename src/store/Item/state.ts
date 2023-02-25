import CategoriaModel from '@/Model/Selecao/CategoriaModel';
import  TipoModel  from '@/Model/Selecao/TipoModel';
import ItemModel from '@/Model/ItemModel';


export class ItemState {
  public itens?: ItemModel[];
  public tipos?: TipoModel[] ;
  public categorias?: CategoriaModel[] ;

}

export const state: ItemState = {
  itens: [],
  tipos: [],
  categorias: [],
};
