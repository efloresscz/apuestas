import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the CoursePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/course/course.html',
})
export class CoursePage {

  constructor(private navCtrl: NavController,private params:NavParams) {
    let id = this.params.get('id');
    console.log(id);

  }

}
