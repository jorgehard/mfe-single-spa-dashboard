import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
})
export class ExercisesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onClick(event2: any) {
    console.log('teste', event2);
  }
}
