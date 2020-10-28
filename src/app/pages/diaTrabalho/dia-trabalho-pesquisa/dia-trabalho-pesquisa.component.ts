import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DiaTrabalho } from 'src/app/models/diatrabalho';
import { DiaTrabalhoService } from 'src/app/services/diaTrabalho.service';

@Component({
  selector: 'app-dia-trabalho-pesquisa',
  templateUrl: './dia-trabalho-pesquisa.component.html',
  styleUrls: ['./dia-trabalho-pesquisa.component.scss'],
  providers: [
    DiaTrabalhoService,
  ]
})
export class DiaTrabalhoPesquisaComponent implements OnInit {

  public displayedColumns:any[] = ['id','dia', 'horaInicio', 'horaFim', 'acoes'];
  public dataSource:MatTableDataSource<DiaTrabalho> = new MatTableDataSource();
  public form:FormGroup = new FormGroup({
    pesquisar:new FormControl('')
  })
  constructor(private router:Router,private diaTrabalhoService:DiaTrabalhoService) {
  }

  ngOnInit() {
    this.diaTrabalhoService.buscarTodos().subscribe((lista)=>{
      console.log('lista', lista)
      this.dataSource = new MatTableDataSource(lista);
    })
  }

  public novo(){
    this.router.navigate(['dia-trabalho/cadastro']);
  }

  public alterar(diaTrabalho:DiaTrabalho){
    this.router.navigate(['dia-trabalho/cadastro', diaTrabalho]);
  }

  public excluir(diaTrabalho:DiaTrabalho){
    this.diaTrabalhoService.excluir(diaTrabalho.id).subscribe(()=>{
      alert('Removido!');
      this.diaTrabalhoService.buscarTodos();
      
    }, err =>{
      console.log('Falha ao Excluir', err);
    })
  }
}
