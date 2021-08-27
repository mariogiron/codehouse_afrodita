import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/app/interfaces/contacto.interfaz';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-vista-contacto',
  templateUrl: './vista-contacto.component.html',
  styleUrls: ['./vista-contacto.component.css']
})
export class VistaContactoComponent implements OnInit {

  contacto: Contacto | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactosService: ContactosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      //console.log(params.idcontacto);
      const result = await this.contactosService.getById(Number(params.idcontacto))
      this.contacto = result.data;
    })
  }

}
