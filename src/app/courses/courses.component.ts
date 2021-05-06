import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  enteredInputText = "";
  course = {
    title: "The complete Angular Course" as string,
    rating: 4.978,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2020,3,18),
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus justo id molestie auctor. Proin a ipsum rhoncus nulla placerat facilisis. Phasellus eleifend felis sed arcu ultricies, eu tincidunt risus iaculis."
  };
}
