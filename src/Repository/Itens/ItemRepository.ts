import  HttpAxios  from '@/axios/AppHttpAxios';
import ItemModel from '@/Model/Itens/ItemModel';
import { Inject } from 'typescript-ioc';
import ItemRequest from '@/Model/Request/ItemRequest'
// falta alterar o item request
export class ItemRepository {
    
   
    @Inject
    private $http!: HttpAxios;

    public async obterItems(): Promise<ItemModel[]> {

        const result = await this.$http.get(`https://localhost:7115/api/Item/${13}`);
        return result.data;
    }

    public async salvarItem(Item: ItemRequest): Promise<any> {

        const url = 'https://localhost:7115/api/Item';
        const result = await this.$http.post(url, Item);
    }

    public async editarItem(Item: ItemRequest): Promise<ItemModel> {
        const url = 'https://localhost:7115/api/Item';
        const result = await this.$http.patch(url, Item);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`https://localhost:7115/api/Item/Item/${id}`;
        await this.$http.delete(url);
    }
}