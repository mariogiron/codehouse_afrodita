export interface Serie {
  id: number;
  titulo: string;
  creador: string;
  rating: number;
  fechas: string;
  imagen: string;
  canal: string;
  temporadas: Array<string>,
}
