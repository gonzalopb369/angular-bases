import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 53;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero() : void {
    this.name = 'spiderman'
  }

  public changeAge(): void {
    this.age=33;
  }

  resetForm() : void {
    this.name = 'ironman';
    this.age = 53;
  }
}
