import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relacionados',
  templateUrl: './relacionados.component.html',
  styleUrls: ['./relacionados.component.css']
})
export class RelacionadosComponent implements OnInit {
  idproducto: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.idproducto = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      this.idproducto = Number(params.productoId)
    })
  }

}
