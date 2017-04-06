import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 i18n="meaning|decription@@id">app works!</h1>
  <div i18n>Some text {{ items }}</div>
  <img src="">
  <span i18n>
    You have: {elements.length, plural,
      =0 { no notes }
      =1 { one note }
      other { {{ elements.length }} notes }
    }
  </span>
  <br />
  <span i18n>
    I got it from { gender, select, male {him} female {her} }
  </span>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = 'app works!';
  elements = [
    1, 2, 3
  ];
  gender = 'female';
}
