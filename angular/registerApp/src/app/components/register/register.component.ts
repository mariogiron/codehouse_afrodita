import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      address: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      repitepassword: new FormControl('', []),
    }, [this.validadorPassword])

  }

  ngOnInit(): void {


  }

  validadorPassword(form: AbstractControl) {
    const valorPassword = form.get('password')?.value;
    const repitePassword = form.get('repitepassword')?.value;
    if (valorPassword === repitePassword) {
      return null
    } else {
      return { validadorPassword: true }
    }
  }


  async onSubmit() {
    const message = await this.usersService.register(this.registerForm.value)
    if (message.success) {
      //redirigimos a login
      this.router.navigate(['/login'])
    } else {
      alert(message.error);
    }
  }

  checkControl(controlName: string, errorName: string): boolean {
    if (this.registerForm.get(controlName)?.hasError(errorName) && this.registerForm.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }
}
