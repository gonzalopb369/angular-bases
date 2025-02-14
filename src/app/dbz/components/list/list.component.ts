//import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { 
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  //onDelete Index value. number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el Id del personaje    
    if (!id)
      return;
    this.onDelete.emit(id);
  }
}
