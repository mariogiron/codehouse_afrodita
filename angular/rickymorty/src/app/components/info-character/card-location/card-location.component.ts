import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/interfaces/location.interface';
import { LocationsService } from 'src/app/services/locations.service';


@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss']
})
export class CardLocationComponent implements OnInit {

  @Input() url: string = "";
  localizacion: Location | undefined;
  constructor(
    private locationsService: LocationsService
  ) { }

  ngOnInit(): void {
  }

  async ngOnChanges() {
    if (this.url !== null) {
      try {
        this.localizacion = await this.locationsService.getByUrl(this.url)
      } catch (err: any) {
        console.log(err.message)
      }
    }
  }

}
