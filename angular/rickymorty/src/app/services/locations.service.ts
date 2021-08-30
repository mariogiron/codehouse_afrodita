import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getByUrl(url: string): Promise<Location> {
    return this.httpClient.get<Location>(url).toPromise();
  }
}
