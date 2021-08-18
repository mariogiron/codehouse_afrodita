import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() empleadoEnviado: EventEmitter<Empleado>

  constructor() {
    this.empleadoEnviado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  getDataForm(pForm: any) {
    pForm.value.status = true;
    this.empleadoEnviado.emit(pForm.value);
    pForm.resetForm({});
  }
}
