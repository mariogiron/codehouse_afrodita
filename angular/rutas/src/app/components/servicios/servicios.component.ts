import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  misServicios: any[];
  servicio: any;


  constructor(private activatedRoute: ActivatedRoute) {
    this.misServicios = [
      {
        nombre: "Desarrollo Web",
        descripcion: "Hago web chulas chulas y de mucha pasta",
        url: 'desarrollo-web'
      },
      {
        nombre: "Branding",
        descripcion: "Tu marca no tiene secretos para mi",
        url: 'branding'
      },
      {
        nombre: "Seo",
        descripcion: "Posicionar tu marca es mi prioridad",
        url: 'seo-sem'
      },
      {
        nombre: "UX-UI",
        descripcion: "El usuario se sentirá muy como con tus interfaces",
        url: 'ux-ui'
      },
    ]
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const url = params.slug;
      this.servicio = this.misServicios.find(servicio => servicio.url === url)
    })
  }

}
