import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReceipeModel } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.page.html',
  styleUrls: ['./receipe.page.scss'],
})
export class ReceipePage implements OnInit,OnDestroy {
  receipes:ReceipeModel[];
  constructor(private receipeService:ReceipeService) { }

  ngOnInit() {
    console.log('ngOnDestroy');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.receipes = this.receipeService.getAllReceipe();
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ngOnDestroy');
  }

  ngOnDestroy(): void {
  console.log('ngOnDestroy');
  }

}
