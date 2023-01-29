import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Tesst Recipe','Test','https://upload.wikipedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Tesst Recipe','Test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuzviwT9XwINZaKTCuu7Xnbp2dcjPvPsCn2ZabERau0tWwTWtuOEUHmC7KnV4vceYZBlE&usqp=CAU')
  ];
  constructor() {}
  ngOnInit(): void {}
}
