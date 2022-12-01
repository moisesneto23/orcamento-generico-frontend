import {EmpresaRepository} from '@/Repository/EmpresaRepository';
import EmpresaModel from '@/Model/Empresa/EmpresaModel';
import { Inject } from 'typescript-ioc';

export default class EmpresaService {
    @Inject
    private alunoDispensaRepository!: EmpresaRepository;

    public async obterTodasEmpresas(): Promise<EmpresaModel[]> {
        return await this.alunoDispensaRepository.obterEmpresas();
    }
};