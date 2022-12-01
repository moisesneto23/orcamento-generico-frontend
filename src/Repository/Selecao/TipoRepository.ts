import  HttpAxios  from '@/axios/AppHttpAxios';
import TipoModel from '@/Model/Selecao/TipoModel';
import { Inject } from 'typescript-ioc';

export class TipoRepository {
    
   
    @Inject
    private $http!: HttpAxios;

    public async obterTodosTipos(): Promise<TipoModel[]> {

        const result = await this.$http.get(`https://localhost:7115/api/Tipo/empresa/${13}`);
        return result.data;
    }

    public async salvarTipo(Tipo: TipoModel): Promise<any> {

        const url = 'https://localhost:7115/api/Tipo';
        const result = await this.$http.post(url, Tipo);
    }

    public async editarTipo(Tipo: TipoModel): Promise<TipoModel> {
        const url = 'https://localhost:7115/api/Tipo';
        const result = await this.$http.patch(url, Tipo);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`https://localhost:7115/api/Tipo/${id}`;
        await this.$http.delete(url);
    }
}