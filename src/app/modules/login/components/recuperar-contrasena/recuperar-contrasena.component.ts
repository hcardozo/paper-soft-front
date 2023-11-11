import { Component, ViewChild, inject } from '@angular/core';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.scss']
})
export class RecuperarContrasenaComponent {
  @ViewChild('alertaComponent') public alerta : any;
  public formGroup: FormGroup;
  constructor(private _snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    
    this.formGroup = this.formBuilder.group({
      email: ['', new FormControl()]
    })

  }
  openSnackBar() {
    this._snackBar.openFromComponent( AlertComponent, {
      verticalPosition : 'top'      
    });
  }
}


@Component({
  template:  `<div class="SnackBar row">
    <span >
      Se ha enviado un correo de recuperación
    </span>
    <span>
      <button mat-raised-button color='primary' (click)="redirectLogin()">Aceptar</button>
    </span>
</div>
`
,styleUrls: ['./recuperar-contrasena.component.scss']
})
export class AlertComponent {
  
  snackBarRef = inject(MatSnackBarRef);

  constructor(private router: Router) {  
  }
   
  public redirectLogin(){
    this.snackBarRef.dismissWithAction()
    this.router.navigate(['/login']);
  }
}
