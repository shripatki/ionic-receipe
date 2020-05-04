import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceipeService } from '../receipe.service';
import { ReceipeModel } from '../receipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.page.html',
  styleUrls: ['./receipe-detail.page.scss'],
})
export class ReceipeDetailPage implements OnInit {
  loadedReceipe:ReceipeModel;
  constructor(private activatedRoutes:ActivatedRoute,
    private receipeService:ReceipeService,
    private router:Router,
    private alertController:AlertController) { }
  

  ngOnInit() {
    this.activatedRoutes.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('receipeId')){
        this.router.navigate(['/receipe'])
        return;
      }
      let receipeId = paramMap.get('receipeId');
      this.loadedReceipe = this.receipeService.getReceipe(receipeId);

      
    })
  }
  onDeleteReceipe(){
    this.alertController.create({
      header:'Are you sure ?',
      message:'You want delete the receipe.',
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          handler:()=>{
            this.receipeService.deleteReceipe(this.loadedReceipe.id);
            this.router.navigate(['/receipe']);
          }
        }
      ]
    }).then(alertElement=>{
      alertElement.present();
    });
   
  }

}
