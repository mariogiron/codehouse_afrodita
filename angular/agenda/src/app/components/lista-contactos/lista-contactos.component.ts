import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interfaz';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  arrContactos: Contacto[] = [];

  constructor(private contactoService: ContactosService) { }

  async ngOnInit(): Promise<any> {
    //hago la llamada al servicio para traerme todos los contactos. NEcesito una propiedad arrContactos para recibir esos datos
    const result = await this.contactoService.getAll();
    this.arrContactos = result.data;

  }

}
