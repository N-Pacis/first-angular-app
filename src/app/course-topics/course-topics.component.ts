import { Component} from '@angular/core';
import {AbstractControl, Form, FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'course-topics',
  templateUrl: './course-topics.component.html',
  styleUrls: ['./course-topics.component.css']
})
export class CourseTopicsComponent{
  form = new FormGroup({
    topics: new FormArray([])
  });
  addTopic(topic: HTMLInputElement):any{
    if(topic.value === ''){
      return null;
    }
    else{
      (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
      topic.value='';
    }
  }
  getControls(){
    return (this.form.get('topics') as FormArray).controls;
  }

  removeTopic(topic: AbstractControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics(){
     return this.form.get('topics') as FormArray;
  }
}
