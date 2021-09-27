import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'sitiOne';

  person = {
    name: `Daniel`,
    age: 25,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  register = {
    name: '',
    email: '',
    password: '',
  }

}
