import { Component, inject, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // Injeta Firestore
  private firestore: Firestore = inject(Firestore)

  // Identifica a coleção
  private fbCollection = collection(this.firestore, 'things')

  // Armazena coleção para view
  public things: Observable<any>;

  env = environment

  constructor() {

    this.things = collectionData(this.fbCollection, { idField: 'id' }) as Observable<any>;

    console.log(this.things)
  }

  ngOnInit() {
  }

}
