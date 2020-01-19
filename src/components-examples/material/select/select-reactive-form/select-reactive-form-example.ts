import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export interface Food {
  value: string;
  viewValue: string;
}

export interface Car {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a reactive form
 */
@Component({
  selector: 'select-reactive-form-example',
  templateUrl: 'select-reactive-form-example.html',
  styleUrls: ['select-reactive-form-example.css'],
})
export class SelectReactiveFormExample {
  form: FormGroup;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
  firstCourseControl = new FormControl();
  firstCarControl = new FormControl();
  secondCourseControl = new FormControl(this.foods[2].value);
  secondCarControl = new FormControl(this.cars[1].value);

  constructor() {
    this.form = new FormGroup({
      firstCourse: this.firstCourseControl,
      firstCar: this.firstCarControl,
      secondCourse: this.secondCourseControl,
      secondCars: this.secondCarControl
    });
  }
}
