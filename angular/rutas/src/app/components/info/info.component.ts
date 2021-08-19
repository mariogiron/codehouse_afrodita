import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  recogerDatos(pFomValue: any) {
    console.log(pFomValue)
    if (pFomValue.telefono !== "") {
      //para navegar a otro componente despues de haber ejectuado una accion uso router
      this.router.navigate(['/projects']);
    }else{
        alert('necesito para contactar contigo tu telefono')
    }
  }


}
