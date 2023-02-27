import TipoModel from '@/Model/Itens/TipoModel';
import { Dimencao } from "../Enum/DimencaoEnum";
import { DirecaoCalculo } from "../Enum/DirecaoCalculoEnum";
export default class ItemModel {
    public  Id! : number;
    public  nome! : string;
    public  dataLog !: Date;
    public  usuarioLog !: string;
    public  tipo_id !: number;
    public  orcamentoCliente_id!: number;
    public valorVenda !: number;
    public valorCompra!: number;
    public Dimencao!: Dimencao;
    public  DirecaoCalculo!: DirecaoCalculo;// 1 é largura, 2 é altura e 3 é profundidade
    public TipoItem!: TipoModel;
}