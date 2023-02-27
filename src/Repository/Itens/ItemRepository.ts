import  {AppHttpAxios}  from '@/axios/AppHttpAxios';
import ItemModel from '@/Model/Itens/ItemModel';
import { Inject } from 'typescript-ioc';
import ItemRequest from '@/Model/Request/ItemRequest'
import store from '@/store';
export class ItemRepository {
    
    @Inject
    private $http!: AppHttpAxios;
    private informacoesEmpresa = (store.state.informacoesEmpresa as any);

    public async obterTodosItens(): Promise<ItemModel[]> {

        const result = await this.$http.get(`TipoItem/${this.informacoesEmpresa.empresaModel.id}`);
        return result.data;
    }

    public async salvarItem(Item: ItemModel): Promise<any> {

        const url = 'TipoItem';
        const result = await this.$http.post(url, Item);
    }

    public async editarItem(Item: ItemModel): Promise<ItemModel> {
        const url = 'Item';
        const result = await this.$http.patch(url, Item);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`Item/${id}`;
        await this.$http.delete(url);
    }
}