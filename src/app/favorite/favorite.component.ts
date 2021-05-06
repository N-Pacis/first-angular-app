import {Component, Input, Output, EventEmitter} from '@angular/core';

export interface FavoriteChangedProps {
    behavior: boolean;
}
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite ?: boolean;
  @Output('change') change = new EventEmitter();
  toggleFavorite(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({behavior:this.isFavorite});
  }
}
