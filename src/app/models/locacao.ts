import { AbstractEntity } from './abstractentity';
import { Recurso } from './recurso';
import { Usuario } from './usuario';

export class Locacao extends AbstractEntity{
    private recurso:Recurso;
    private idRecurso:number;
    private dataCadastro:Date;
    private dataLocacao:Date;
    private dataDevolucao:Date;
    private usuario:Usuario;
    private idUsuario:number;
    private situacao:string;
}