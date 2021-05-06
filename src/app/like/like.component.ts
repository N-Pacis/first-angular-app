import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('is-liked') isLiked ?: boolean;
  @Output('change') change = new EventEmitter();
  toggleLikeButton(){
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked);
  }
}
