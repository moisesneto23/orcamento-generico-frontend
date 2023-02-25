
import  { AppHttpAxios }  from '@/axios/AppHttpAxios';
import CategoriaModel from '@/Model/Selecao/CategoriaModel';
import { Inject } from 'typescript-ioc';
import store from '@/store';
export class CategoriaRepository {
    
   
    @Inject
    private $http!: AppHttpAxios;
    private informacoesEmpresa = (store.state.informacoesEmpresa as any);
   
    public async obterCategorias(): Promise<CategoriaModel[]> {
        debugger;
        const result = await this.$http.get(`CategoriaItem/${this.informacoesEmpresa.empresaModel.id}`);
        return result.data;
    }

    public async salvarCategoria(categoria: CategoriaModel): Promise<any> {
        categoria.empresaId = this.informacoesEmpresa.empresaModel.id;
        const result = await this.$http.post('CategoriaItem', categoria);
    }

    public async editarCategoria(categoria: CategoriaModel): Promise<CategoriaModel> {
        categoria.empresaId = this.informacoesEmpresa.empresaModel.id;
        const result = await this.$http.patch('CategoriaItem', categoria);
        return result.data;
    }
    public async delete(id: any) : Promise<any>{
        const url =`CategoriaItem/${id}`;
        await this.$http.delete(url);
    }
}