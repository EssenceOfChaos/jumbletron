import { Component, OnInit, Input, Output } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WordsService } from './words.service';

@Component({
  selector: 'app-anagram-form',
  templateUrl: './anagram-form.component.html',
  styleUrls: ['./anagram-form.component.css'],
})
export class AnagramFormComponent implements OnInit {
  userInput = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  unscrambledWords: Observable<any>;

  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.userInput.valueChanges.subscribe(result => console.log(result));
    this.filteredOptions = this.userInput.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  getWords(userInputValue) {
    this.wordsService.search_word(userInputValue).subscribe(result => console.log(result));
  }

  getAnagrams(letters) {
    this.wordsService.search_anagram(letters).subscribe(anagrams => console.log(anagrams));
  }
}
