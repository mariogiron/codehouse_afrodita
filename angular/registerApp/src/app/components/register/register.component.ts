import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', []),
      surname: new FormControl('', []),
      username: new FormControl('', []),
      mail: new FormControl('', []),
      address: new FormControl('', []),
      age: new FormControl('', []),
      password: new FormControl('', []),
      repitepassword: new FormControl('', []),
    })

  }

  ngOnInit(): void {


  }


  onSubmit() {
    console.log(this.registerForm.value);
  }
}
