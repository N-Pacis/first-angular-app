import { Component} from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {
  categories = [
    {id:1,category:'Development'},
    {id:2,category:'Art'},
    {id:3,category:'Languages'}
  ];
  submit(f:any){
    console.log(f);
  }
}
