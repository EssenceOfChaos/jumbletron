import { Component, OnInit, OnDestroy } from '@angular/core';
import { PuzzlessApiService } from './puzzles/puzzle-api.service';

import { Puzzle } from './puzzles/puzzle.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Jumble';
  puzzleList: Puzzle[];
  puzzles;

  constructor(private puzzlesApi: PuzzlessApiService) {}

  ngOnInit() {
    this.puzzles = this.puzzlesApi.getPuzzles().subscribe(res => {
      this.puzzleList = res;
    }, console.error);
  }

  ngOnDestroy() {
    this.puzzles.unsubscribe();
  }
}
