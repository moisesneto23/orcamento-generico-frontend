import  {AppHttpAxios}  from '@/axios/AppHttpAxios';
import TipoModel from '@/Model/Itens/TipoModel';
import store from '@/store';
import { Inject } from 'typescript-ioc';

export class TipoRepository {
    @Inject
    private $http!: AppHttpAxios;
    private informacoesEmpresa = (store.state.informacoesEmpresa as any);

    public async obterTodosTipos(): Promise<TipoModel[]> {
        const result = await this.$http.get(`empresa/${this.informacoesEmpresa.empresaModel.id}`);
        return result.data;
    }

    public async salvarTipo(Tipo: TipoModel): Promise<any> {
        const result = await this.$http.post('tipo', Tipo);
    }

    public async editarTipo(Tipo: TipoModel): Promise<TipoModel> {     
        const result = await this.$http.patch('tipo', Tipo);
        return result.data;
    }

    public async delete(id: any) : Promise<any>{
        const url = 'tipo'+`${id}`;
        await this.$http.delete(url);
    }
}