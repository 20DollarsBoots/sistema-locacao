import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss'],
  providers: [
    UsuarioService,
  ]
})
export class UsuarioCadastroComponent implements OnInit {

  public usuario:Usuario;
  public form:FormGroup;

  constructor(private router: Router, private route:ActivatedRoute, 
    private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      celular: new FormControl(null, [Validators.required]),
      senha: new FormControl(null, [Validators.required]),
    });

    this.route.params.subscribe(param => {
      if (param) {
        this.usuario = param as Usuario;
        this.form.patchValue(this.usuario);
      }
    });
  }

  
  public salvar() {
    if (this.form.invalid){
      alert('Existem campos inválidos!');
      return;
    }
    this.usuario = this.form.value;
    this.usuarioService.salvar(this.usuario).subscribe((usuario)=>{
      alert('Salvo com sucesso!');
      this.router.navigate(['usuario/pesquisa']);
    }, err =>{
      alert('Deu erro, tente novamente');
      console.error(err);
    });
  }

}
