import { Component } from '@angular/core';
import { Persona } from './interfaces/persona.interface';
import { PersonasService } from './services/personas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  persona: Persona;
  constructor(private personasServices: PersonasService) {
    this.persona = {
      nombre: "",
      edad: "",
      email: ""
    }
  }

  recogerDatosForm(pForm: any) {
    this.persona = pForm.value;
    this.personasServices.addPerson(this.persona);
  }


}
