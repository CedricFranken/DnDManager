import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {DnDClass} from '../../classes/DnDClass';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-create-character',
  imports: [RouterLink, MatSlideToggleModule, MatFormFieldModule, MatSelectModule, FormsModule, MatInputModule],
  templateUrl: './create-character.html',
  styleUrl: './create-character.scss'
})
export class CreateCharacter {


  protected readonly DnDClass = DnDClass;
}
