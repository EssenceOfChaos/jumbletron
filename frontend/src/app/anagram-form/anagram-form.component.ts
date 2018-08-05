import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WordsService } from './words.service';
// import { fromEvent } from 'rxjs';
// import { ajax } from 'rxjs/ajax';
// import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// const searchBox = document.getElementById('search-box');
// const typeahead = fromEvent(searchBox, 'input').pipe(
//   map((e: KeyboardEvent) => e.target.value),
//   filter(text => text.length > 2),
//   debounceTime(10),
//   distinctUntilChanged(),
//   switchMap(() => ajax('/api/endpoint'))
// );

@Component({
  selector: 'app-anagram-form',
  templateUrl: './anagram-form.component.html',
  styleUrls: ['./anagram-form.component.css'],
})
export class AnagramFormComponent implements OnInit {
  userInput = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  unscrambledWords: Observable<any>;

  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.filteredOptions = this.userInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
