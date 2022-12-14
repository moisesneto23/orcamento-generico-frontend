import  CategoriaRequest  from '@/Model/Request/CategoriaRequest';
import  CategoriaModel  from '@/Model/Selecao/CategoriaModel';
import {CategoriaRepository} from '@/Repository/Selecao/CategoriaRepository';
import { Inject } from 'typescript-ioc';

export default class CategoriaService {
    
    @Inject
    private categoriaRepository!: CategoriaRepository;

    public async obterTodasEmpresas(): Promise<CategoriaModel[]> {
        return await this.categoriaRepository.obterCategorias();
    }

    public async salvarCategoria(categoria:CategoriaRequest): Promise<any> {
         await this.categoriaRepository.salvarCategoria(categoria);
    }

    public async editarCategoria(categoria:CategoriaRequest): Promise<CategoriaModel> {
       return await this.categoriaRepository.editarCategoria(categoria);
    }
    public async delete(id: number): Promise<any>{
        await this.categoriaRepository.delete(id);
    }
};