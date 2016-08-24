import {Component} from '@angular/core';
import {NavController,Nav} from 'ionic-angular';
import {CoursePage} from '../course/course';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController,
              private nav: Nav) {
                
  
  }
  gotoCourse(){
    this.nav.push(CoursePage,{id:1});
    
  }
}
