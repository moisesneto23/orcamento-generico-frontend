import  HttpAxios  from '@/axios/AppHttpAxios';
import TipoModel from '@/Model/Selecao/TipoModel';
import { Inject } from 'typescript-ioc';

export class TipoRepository {  
    @Inject
    private $http!: HttpAxios;
    private baseURL = 'https://localhost:7068/api/Tipo/';

    public async obterTodosTipos(id: number): Promise<TipoModel[]> {
        const result = await this.$http.get(this.baseURL+`empresa/${id}`);
        return result.data;
    }

    public async salvarTipo(Tipo: TipoModel): Promise<any> {
        const result = await this.$http.post(this.baseURL, Tipo);
    }

    public async editarTipo(Tipo: TipoModel): Promise<TipoModel> {     
        const result = await this.$http.patch(this.baseURL, Tipo);
        return result.data;
    }

    public async delete(id: any) : Promise<any>{
        const url = this.baseURL+`${id}`;
        await this.$http.delete(url);
    }
}