import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Attribute Directive</h1>
    <div class="container" [autoScrollY]="scroll">
      <div *ngFor="let i of numbers">
        {{i}}
      </div>
    </div>
    <div>
      <input type="radio" name="scrolls" (click)="makeScrollTrue()">Scroll
      <input type="radio" name="scrolls" (click)="makeScrollFalse()">No Scroll
    </div>
    <h4>Pick a highlight color</h4>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    <p [myHighlight]="color">Highlight me!</p>
    <p [myHighlight]="color" defaultColor="violet">
      Highlight me too!
    </p>
  `,
  styles: [`
    .container {
      display: inline-block;
      height: 150px;
      width: 300px;
      overflow-y: scroll;
    }
  `]
})
export class AppComponent {
  name = 'Angular';
  color: string;
  scroll: boolean = false;
  amt: number = 50;
  numbers: number[] = [];

  constructor() {

  }

  ngOnInit() {
    for (let i = 0; i < this.amt; ++i) {
      this.numbers.push(i);
    }
  }

  makeScrollTrue() {
    this.scroll = true;
  }

  makeScrollFalse() {
    this.scroll = false;
  }

}
