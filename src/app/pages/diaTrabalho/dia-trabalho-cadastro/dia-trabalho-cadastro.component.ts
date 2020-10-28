import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiaTrabalho } from 'src/app/models/diatrabalho';
import { DiaTrabalhoService } from 'src/app/services/diaTrabalho.service';

@Component({
  selector: 'app-dia-trabalho-cadastro',
  templateUrl: './dia-trabalho-cadastro.component.html',
  styleUrls: ['./dia-trabalho-cadastro.component.scss'],
  providers: [
    DiaTrabalhoService,
  ]
})
export class DiaTrabalhoCadastroComponent implements OnInit {

  public diaTrabalho:DiaTrabalho;
  public form:FormGroup;

  constructor(private router: Router, private route:ActivatedRoute, 
    private diaTrabalhoService: DiaTrabalhoService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null),
      dia: new FormControl(null, [Validators.required]),
      horaInicio: new FormControl(null, [Validators.required]),
      horaFim: new FormControl(null, [Validators.required]),
    });

    this.route.params.subscribe(param => {
      if (param) {
        this.diaTrabalho = param as DiaTrabalho;
        this.form.patchValue(this.diaTrabalho);
      }
    });
  }

  
  public salvar() {
    if (this.form.invalid){
      alert('Existem campos inválidos!');
      return;
    }
    this.diaTrabalho = this.form.value;
    this.diaTrabalhoService.salvar(this.diaTrabalho).subscribe((dia)=>{
      alert('Salvo com sucesso!');
      this.router.navigate(['usuario/pesquisa']);
    }, err =>{
      alert('Deu erro, tente novamente');
      console.error(err);
    });
  }
}
