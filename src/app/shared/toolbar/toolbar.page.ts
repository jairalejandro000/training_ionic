import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.page.html',
  styleUrls: ['./toolbar.page.scss'],
})
export class ToolbarPage implements OnInit {
  isMinion: boolean = true;

  constructor(private menu: MenuController,
    private router: Router,
    private alertController: AlertController,
    private userService: UserService) { }

  ngOnInit() {
    if(atob(localStorage.getItem('user')) == 'minion'){
      this.isMinion = true;
    }else{
      this.isMinion = false;
    }
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  navigateTo(w: String){
    this.router.navigateByUrl('/panel/'+w);
  }
  async userMenu() {
    const alert = await this.alertController.create({
      header: '¿Seguro de cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Cerrar sesión',
          role: 'confirm',
          handler: () => { this.userService.logout() }
        }
      ]
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

}
