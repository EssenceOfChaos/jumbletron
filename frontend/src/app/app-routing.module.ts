import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnagramSolutionComponent } from './anagram-solution/anagram-solution.component';

const routes: Routes = [
 { path: 'anagram-solution/:word', component: AnagramSolutionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
