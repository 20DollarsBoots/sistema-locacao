import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractService } from './abstract.service';
import { DiaTrabalho } from '../models/diatrabalho';

@Injectable()
export class DiaTrabalhoService extends AbstractService<DiaTrabalho> {

    constructor(protected http:HttpClient){
        super(http);
    }

    public getPath(){
        return "dia-trabalho";
    }
}