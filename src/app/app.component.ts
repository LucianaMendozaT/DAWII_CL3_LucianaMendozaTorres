
import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  episodes: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit() {
    this.getEpisodesWithOddIds();
  }

  getEpisodesWithOddIds() {
    this.rickAndMortyService.getEpisodes().subscribe((data: any) => {
      this.episodes = data.results.filter((episode: any) => episode.id % 2 !== 0);
    });
   
  }
  title = 'DAWII_CL3_LucianaMendozaTorres';}

