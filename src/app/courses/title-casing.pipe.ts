import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasing'
})
export class TitleCasingPipe implements PipeTransform {

  transform(value: string,): any {
    if(!value)return null;

    const words = value.split(' ');
    for(let i = 0;i<words.length; i++){
      if( this.isPreposition(words[i])&& i !== 0){
        words[i] = words[i].toLowerCase();
      }
      else{
        words[i] = this.toTilteCase(words[i]);
      }
    }
    return words.join(' ');
  }
   private isPreposition(word: string) : boolean{
      const prepositions = [
        'of','the'
      ];
      return prepositions.includes(word.toLowerCase());
  }
  private toTilteCase(word: string): string{
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
