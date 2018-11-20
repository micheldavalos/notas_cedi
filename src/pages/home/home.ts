import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notas = [];
  nota = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  clickAgregar() {
    if (this.nota.length > 0) {
      this.notas.push(this.nota);
      this.nota = "";
    }
    else {
      console.log('la nota tiene 0 letras');
      const alert = this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'La nota tiene 0 letras',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
