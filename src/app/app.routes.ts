import {RouterModule, Routes} from '@angular/router';
import {Character} from './character/character';
import {NgModule} from '@angular/core';
import {Main} from './main/main';
import {CreateCharacter} from './create-character/create-character';

export const routes: Routes = [
  {
    path: '',
    redirectTo: "main",
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: Main
  },
  {
    path: 'character',
    component: Character
  },
  {
    path: 'create-character',
    component: CreateCharacter
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {

}
