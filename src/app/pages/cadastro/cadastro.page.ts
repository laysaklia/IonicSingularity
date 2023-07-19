import { Component, OnInit, inject } from '@angular/core';
import { Auth, User, authState } from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public env = environment;

  // Modela entidade form.
  public form = {
    name: '',
    description: '',
    location: '',
    date: '',
    status: 'on',
    sended: false
  }

  // Injeta Firestore.
  private firestore: Firestore = inject(Firestore);

  // Referência à coleção "contacts" no Firestore.
  // Se a coleção não existe, será criada.
  contactsCollection = collection(this.firestore, 'things');

  // Prepara a autenticação do usuário.
  authState = authState(this.auth);
  authStateSubscription = new Subscription;

  constructor(
    // Injeta a dependêndia do Firebase Auth.
    private auth: Auth = inject(Auth)
  ) { }

  ngOnInit() {}

  ngOnDestroy() {

    // Remove o observer ao concluir o componente.
    this.authStateSubscription.unsubscribe();
  }

  // Salva contato.
  sendForm() {

    // Valida preenchimento dos campos.
    if (
      this.form.name.trim().length < 3 ||
      this.form.description.trim().length < 3 ||
      this.form.location.trim().length < 5
    ) return false;

    // Gera a data atual no formado ISO.
    const d = new Date();
    this.form.date = d.toISOString().split('.')[0].replace('T', ' ');

    // Salva contato no Firestore.
    addDoc(this.contactsCollection, this.form)
      .then((data) => {
        console.log('Cadastro feito! :' + data.id)
        this.form.sended = true;
      })

    // Encerra sem fazer mais nada.
    return false;
  }

}
