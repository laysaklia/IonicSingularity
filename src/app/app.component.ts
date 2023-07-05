import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth, authState, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public env = environment;
  private auth: Auth = inject(Auth);
  authState$ = authState(this.auth);
  authStateSubscription: Subscription;

  public appPages = [
    { title: 'Início', url: '/home', icon: 'home' },
    { title: 'Sobre nós', url: '/sobre', icon: 'chatbox-ellipses' },
    { title: 'Contato', url: '/contato', icon: 'information-circle' },
  ]

  public appUser = {
    logged: false,
    title: 'Login / Entrar',
    url: '/login',
    icon: 'log-in',
    avatar: ''
  }

  constructor() {
    this.authStateSubscription = this.authState$.subscribe((aUser: User | null) => {
      if (aUser !== null) {
        this.appUser = {
          logged: true,
          title: aUser.displayName + '',
          url: '/profile',
          icon: 'log-out',
          avatar: aUser.photoURL + ''
        }
      }
    })
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }

  login() {

    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((a) => {
        location.href = '/home';
      })
      .catch((error) => {
        console.error(error.code, error.message, error.customData.email);
        alert("Oooops! Ocorreram erros ao fazer login.");
      })

  }
}