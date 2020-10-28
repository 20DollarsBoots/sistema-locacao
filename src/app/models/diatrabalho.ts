import { AbstractEntity } from './abstractentity';

export class DiaTrabalho extends AbstractEntity{
    public dia: number;
    public horaInicio: Date;
    public horaFim: Date;
}