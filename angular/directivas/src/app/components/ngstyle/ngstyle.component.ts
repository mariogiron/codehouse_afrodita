import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  color: string;
  fontSize: string;

  constructor() {

    this.color = 'green';
    this.fontSize = '23px';
  }

  ngOnInit(): void {
  }


}
