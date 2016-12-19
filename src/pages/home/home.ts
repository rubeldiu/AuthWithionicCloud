import { Component } from '@angular/core';
import { Auth } from '@ionic/cloud-angular';
import { NavController } from 'ionic-angular';
import { LoginPage } from './../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController, public auth: Auth) {
    
  }
   navigateLogin(){
     this.auth.logout();
  this.navCtrl.push(LoginPage);
}
   // Auth Guard
  ionViewCanEnter(){
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }

}
