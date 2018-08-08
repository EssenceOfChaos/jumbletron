import { Component, OnInit, OnDestroy } from '@angular/core';
import { PuzzlessApiService } from './puzzles/puzzle-api.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
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
  jumbleForm = new FormGroup({
    firstWord: new FormControl(''),
    firstIndices: new FormControl(''),
    secondWord: new FormControl(''),
    secondIndices: new FormControl(''),
    thirdWord: new FormControl(''),
    thirdIndices: new FormControl(''),
    fourthWord: new FormControl(''),
    fourthIndices: new FormControl(''),
  });

  ngOnInit() {
    this.puzzles = this.puzzlesApi.getPuzzles().subscribe(res => {
      this.puzzleList = res;
    }, console.error);
  }

  ngOnDestroy() {
    this.puzzles.unsubscribe();
  }
}
