import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {CreateCharacter} from '../create-character/create-character';

@Component({
  selector: 'app-character',
  imports: [RouterLink],
  templateUrl: './character.html',
  styleUrl: './character.scss'
})
export class Character {

}
