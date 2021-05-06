import { Component} from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    {id:1,name:'Email'},
    {id:2,name:'Phone'}
  ];
  genders = [
    {id:1,name:'Male'},
    {id:2,name:'Female'}
  ];
  log(x:any){
    console.log(x);
  }
  submit(f:any) {
    console.log(f);
  }
}
