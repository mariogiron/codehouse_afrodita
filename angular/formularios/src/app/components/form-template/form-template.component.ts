import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  arrUsers: User[];

  constructor() {
    this.arrUsers = [];
  }

  ngOnInit(): void {
  }

  recogerDatos(pForm: any) {
    this.arrUsers.push(pForm.value)
    pForm.resetForm({});
  }
}
