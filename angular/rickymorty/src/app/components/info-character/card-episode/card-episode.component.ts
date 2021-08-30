import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.interface';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-card-episode',
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.scss']
})
export class CardEpisodeComponent implements OnInit {

  @Input() url: string = "";
  episodio: Episode | undefined;
  constructor(
    private episodesService: EpisodesService
  ) { }

  ngOnInit(): void {
    this.episodesService.getByUrl(this.url)
      .then(response => {
        this.episodio = response;
      })
      .catch(err => console.log(err))
  }
}
