import  HttpAxios  from '@/axios/AppHttpAxios';
import EmpresaModel from '@/Model/Empresa/EmpresaModel';
import Login from '@/Model/Login';
import { Inject } from 'typescript-ioc';
import InformacoesEmpresa  from '../Model/InformacoesEmpresa';

export class EmpresaRepository {
    
    
    @Inject
    private $http!: HttpAxios;
    private baseURL = 'https://localhost:7068/api/';
    
    public async obterEmpresas(): Promise<EmpresaModel[]> { 
        const result = await this.$http.get(this.baseURL+'Empresa');
        return result.data;
    }

    public async obterInformacoesEmpresa(login: Login): Promise<InformacoesEmpresa> {
       const result = await  this.$http.post('https://localhost:7068/api/Usuario/Login',login);
       return result.data;
    }
}

/*public async obterAtividadesTCC(): Promise<DisciplinaExtraCurricularModel[]> {

    const result = await this.$http.get(`${this.endpointBase}api/dispensa/trabalhoConclusaoCurso`, {params: { codigoAluno }});
    return result.data;
}*/