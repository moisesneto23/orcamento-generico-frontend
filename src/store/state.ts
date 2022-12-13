export class GlobalState {
    public linkParaVoltar: string;
    public obtendoInformacoes: boolean;
    public exibirMenu: boolean;
    public tituloPeriodoLetivo: string = '';
  
    constructor(linkParaVoltar: string) {
      this.linkParaVoltar = linkParaVoltar;
      this.obtendoInformacoes = false;
      this.exibirMenu = false;
    }
  
  }

export const state: GlobalState = new GlobalState('');