import { Component} from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
})
export class AuthorsComponent {
  title;
  authors;
  imageUrl = 'https://i.pinimg.com/236x/d7/37/94/d737946d153beb56555ed95ab0af1ee1--key-west-vacations-couple-photography.jpg';
  isActive = false;
  email = "me@example.com";
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.title = this.authors.length;
  }
  addInstructor(){
      this.authors.push({id:5,name:'instructor5'});
  }
  removeInstructor(Instructor: any){
    let index = this.authors.indexOf(Instructor);
    this.authors.splice(index,1);
  }
  onLike($event: { stopPropagation: () => void; }){
    $event.stopPropagation();
    console.log('Liked');
  }
  // tslint:disable-next-line:typedef
  onDivClicked(){
    console.log('Div Clicked');
  }
  onKeyUp(){
    console.log(this.email);
  }
}
