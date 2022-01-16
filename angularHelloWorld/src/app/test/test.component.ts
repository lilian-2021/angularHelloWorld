import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2> Welcome {{name}}</h2>
    <h2>{{4-2}}</h2>
    <h2> {{"Welcome " + name}}</h2>
    <h2>{{name.length}}
      <h2>{{name.toUpperCase()}}</h2>
      <h2>{{greetUser()}}</h2>
      <h2>{{ siteUrl}}</h2>
    <div>
    inline template
  </div>`,
  styles: [`
div{
  color:red;
}
  `]
})
export class TestComponent implements OnInit {
public name ="Lilian"
  public  siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
greetUser(){
  return "Hello " + this.name;
}
}
