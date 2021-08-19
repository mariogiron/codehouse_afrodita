import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  formulario: FormGroup;

  constructor() {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(15)
      ]),
      edad: new FormControl('', [
        this.edadValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      dni: new FormControl('', [
        this.dniValidator
      ]),
      password: new FormControl('', [
        Validators.minLength(8)
      ]),
      repite_password: new FormControl()
    }, [this.passwordValidator])

  }

  ngOnInit(): void {
  }

  /*
   crear una funcion de validacion de DNI
  */

  dniValidator(control: AbstractControl) {

    const dni = control.value;
    const conjuntoLetras = "TRWAGMYFPDXBNJZSQVHLCKET";
    const expDni = /^\d{8}[a-zA-Z]$/

    if (expDni.test(dni)) {
      const numero = dni.substr(0, dni.length - 1); //50742456
      const letra = dni.substr(dni.length - 1, 1); //V
      const calculo = numero % 23;

      return (letra.toUpperCase() !== conjuntoLetras.split('')[calculo]) ? { dniValidator: 'La letra no corresponde al numero' } : null;

    } else {
      return { dniValidator: 'El formato es incorrecto' }
    }

  }

  passwordValidator(form: AbstractControl) {
    const passValue = form.get('password')?.value;
    const repitePassword = form.get('repite_password')?.value;
    console.log(passValue, repitePassword, passValue === repitePassword)
    if (passValue === repitePassword) {
      return null;
    } else {
      return { passwordValidator: true }
    }
  }

  edadValidator(control: AbstractControl) {
    const value = parseInt(control.value);
    const min = 18;
    const max = 65;

    if (value >= min && value <= max) {
      return null
    } else {
      return { edadValidator: { min, max, value } }
    }
  }

  recogerDatos() {
    console.log(this.formulario.value);
  }

  checkControl(controlName: string, errorName: string): boolean {
    if (this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }
}
