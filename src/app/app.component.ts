import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public env = environment;

  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Sobre nós', url: '/sobre', icon: 'chatbox-ellipses' },
    { title: 'Contato', url: '/contato', icon: 'information-circle' },
  ]

  constructor() {}
}
