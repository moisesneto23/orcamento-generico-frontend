import TipoModel from '@/Model/Selecao/TipoModel'
export default class CategoriaModel {
    public id!: number;
    public nome!: string;
    public Tipos: TipoModel[] = [];
}