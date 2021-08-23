import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleSeriesComponent } from './components/detalle-series/detalle-series.component';
import { ListaPersonajesComponent } from './components/detalle-series/lista-personajes/lista-personajes.component';
import { ListaTemporadasComponent } from './components/detalle-series/lista-temporadas/lista-temporadas.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "/series" },
  { path: 'series', component: ListaSeriesComponent },
  {
    path: 'series/:idserie', component: DetalleSeriesComponent, children:
      [
        { path: 'personajes', component: ListaPersonajesComponent },
        { path: 'temporadas', component: ListaTemporadasComponent }
      ]
  },
  { path: '**', redirectTo: "/series" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
