import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  @Input() nombre: string;
  @Input() telefono: string;
  @Input() email: string;

  constructor() {
    this.nombre = ''
    this.email = '';
    this.telefono = '';
  }

  ngOnInit(): void {
  }

}
