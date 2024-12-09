import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal1Component } from '../component/modal1/modal1.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController) {}
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: Modal1Component,
    });
    return await modal.present();
  }
}
