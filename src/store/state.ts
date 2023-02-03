import InformacoesEmpresa from '@/Model/InformacoesEmpresa'
export class GlobalState {

    public informacoesEmpresa!: InformacoesEmpresa;
  }

export const state: GlobalState = new GlobalState();