import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public validarLogin = true;
  public formGroup: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        usuario: ['', new FormControl()]
      })
   }

  public redirectToRegister() {
    this.router.navigate(['/login/registroUsuario']);
  }

  public login() {
    this.router.navigate(['/home']);
  }

}
