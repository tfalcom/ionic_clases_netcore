import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  errorMessage: string;
  loading = false;

  constructor(
    private router: Router,
    private service: LoginService
    ) { }

  ngOnInit() {
  }

  public login() {
    this.redirectLogin();
    /*
    this.service.getToken(this.usuario).subscribe(
      usuario => {
        // console.log('usuario', usuario);
        sessionStorage.setItem('user', usuario);
        this.redirectLogin();
      },
      error => {
        this.errorMessage = <any> error;
        // console.log('error login', this.errorMessage);
        this.router.navigate(['/mlogin']);
      }
    );
    */
  }

  public redirectLogin() {
    this.router.navigate(['/mestructura/estructura/minicio']); 
  }

}
