import { Component } from '@angular/core';
import {FavoriteChangedProps} from "./favorite/favorite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';
  viewMode = 'Map';
  post = {
    title:"first post",
    isFavorite: true,
    onFavoriteChanged(isFavorite: FavoriteChangedProps){
      console.log(!isFavorite.behavior ? 'Disliked!' : 'Liked');
    }
  };
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked:false,
    likesCount: 0,
    likeButtonChanged(isLiked: boolean){
      isLiked ? this.likesCount=1 : this.likesCount=0;
    }
  };
}
