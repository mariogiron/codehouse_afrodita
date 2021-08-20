import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleSeriesComponent } from './components/detalle-series/detalle-series.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "/series" },
  { path: 'series', component: ListaSeriesComponent },
  { path: 'series/:idserie', component: DetalleSeriesComponent },
  { path: '**', redirectTo: "/series" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
