import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  public photoURL: any;

  getPhoto() {

    Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    }).then((x) => {
      console.log('Foto escolhida: ', x);
      this.photoURL = x.webPath;
    })

  }

  ngOnInit() { }

  refresh(): void {
    window.location.reload();
  }

}
