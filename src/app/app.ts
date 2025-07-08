import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Navigation } from './navigation/navigation';
import { Character } from './character/character';
import {Main} from './main/main';
import {CreateCharacter} from './create-character/create-character';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports:
    [
      RouterOutlet,
      RouterLink,
      Navigation,
      Character,
      Main,
      CreateCharacter,
      MatSlideToggleModule
    ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
