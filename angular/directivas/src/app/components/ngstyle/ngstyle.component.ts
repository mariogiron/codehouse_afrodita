import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  color: string;
  fontSize: string;
  estilosParrafo: any;
  borderWidth: string;
  borderColor: string;
  bgColor: string;

  constructor() {

    this.color = 'green';
    this.fontSize = '23px';
    this.bgColor = "#ff0000";

    this.estilosParrafo = {
      backgroundColor: 'tomato',
      fontSize: '24px',
      color: 'white',
      padding: '20px'
    }

    this.borderWidth = "";
    this.borderColor = "";
  }

  ngOnInit(): void {
    let color = 0;
    const intervalo = setInterval(() => {
      color = color + 80
      this.bgColor = '#ff' + color + color;
    }, 3000)
  }

  cambiarFuente($event: any) {
    this.fontSize = $event.target.value + 'px';
  }

  cambiarEstilo() {
    this.estilosParrafo.border = `${this.borderWidth}px solid ${this.borderColor}`
  }
}
