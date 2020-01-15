import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortDesc'})
export class ShortDescPipe implements PipeTransform {
  transform(value: string, textSize: number): string {
    let formated = value.length > textSize ? value.substring(0, textSize) : value; 
    return formated + '...'; 
  }
}