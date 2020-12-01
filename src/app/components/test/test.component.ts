import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<p>{{ message }}</p>`,
  styles: [`p { margin-left: 20px }`],
})
export class TestComponent implements OnInit {

  message: string = 'Qui est le maillon faible ?';

  constructor() { }

  ngOnInit() {}

}
