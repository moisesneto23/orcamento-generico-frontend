import  { AppHttpAxios }  from '@/axios/AppHttpAxios';
import CategoriaModel from '@/Model/Selecao/CategoriaModel';
import { Inject } from 'typescript-ioc';
import CategoriaRequest from '@/Model/Request/CategoriaRequest';
import {GlobalState} from '@/store/state'
import store from '@/store';
import  InformacoesEmpresa  from '@/Model/InformacoesEmpresa';
export class CategoriaRepository {
    
   
    @Inject
    private $http!: AppHttpAxios;

   
    public async obterCategorias(): Promise<CategoriaModel[]> {
        const Empresa = (store.state.informacoesEmpresa as any);
        const result = await this.$http.get(`CategoriaItem/${Empresa.Id}`);
        return result.data;
    }

    public async salvarCategoria(categoria: CategoriaRequest): Promise<any> {

        const url = 'https://localhost:7115/api/Categoria';
        const result = await this.$http.post('Categoria', categoria);
    }

    public async editarCategoria(categoria: CategoriaRequest): Promise<CategoriaModel> {
        const url = 'Categoria';
        const result = await this.$http.patch(url, categoria);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`https://localhost:7115/api/Categoria/categoria/${id}`;
        await this.$http.delete(url);
    }
}