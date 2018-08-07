import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PuzzlessApiService } from './puzzles/puzzle-api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { WordsService } from './anagram-form/words.service';
// Angular Material Imports //
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
  MatToolbarModule,
  MatTabsModule,
  MatDividerModule,
} from '@angular/material';
import { AnagramFormComponent } from './anagram-form/anagram-form.component';
import { AnagramSolutionComponent } from './anagram-solution/anagram-solution.component';

@NgModule({
  declarations: [AppComponent, AnagramFormComponent, AnagramSolutionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  providers: [PuzzlessApiService, WordsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
