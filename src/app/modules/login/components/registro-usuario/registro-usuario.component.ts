import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})

export class RegistroUsuarioComponent {
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.formGroup = this.formBuilder.group({
      email: ['', new FormControl()]
    })
  }
}
