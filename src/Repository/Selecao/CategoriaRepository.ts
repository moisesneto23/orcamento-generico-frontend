import  HttpAxios  from '@/axios/AppHttpAxios';
import CategoriaModel from '@/Model/Selecao/CategoriaModel';
import { Inject } from 'typescript-ioc';
import CategoriaRequest from '@/Model/Request/CategoriaRequest'

export class CategoriaRepository {
    
   
    @Inject
    private $http!: HttpAxios;

    public async obterCategorias(): Promise<CategoriaModel[]> {

        const result = await this.$http.get(`https://localhost:7115/api/Categoria/${13}`);
        return result.data;
    }

    public async salvarCategoria(categoria: CategoriaRequest): Promise<any> {

        const url = 'https://localhost:7115/api/Categoria';
        const result = await this.$http.post(url, categoria);
    }

    public async editarCategoria(categoria: CategoriaRequest): Promise<CategoriaModel> {
        const url = 'https://localhost:7115/api/Categoria';
        const result = await this.$http.patch(url, categoria);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`https://localhost:7115/api/Categoria/categoria/${id}`;
        await this.$http.delete(url);
    }
}