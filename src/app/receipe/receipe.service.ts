import { Injectable } from '@angular/core';
import { ReceipeModel } from './receipe.model';

@Injectable({
  providedIn: 'root'
})
export class ReceipeService {
  private receipes:ReceipeModel[] = [
    {
      id:'r1',
      title:'Pav-Bhaji',
      ingrediants:['butter','pav','bhaji'],
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pav_Bhaji.jpg/220px-Pav_Bhaji.jpg'
    },
    {
      id:'r2',
      title:'Masala Dosa',
      ingrediants:['butter','Dosa','Bhaji'],
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg/220px-Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg'
    },
    {
      id:'r3',
      title:'Idli',
      ingrediants:['Idli','sambar','chatany'],
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Idli_-_A_Traditional_Indian_Food.JPG/220px-Idli_-_A_Traditional_Indian_Food.JPG'
    },
    {
      id:'r4',
      title:'Uttapa',
      ingrediants:['rice','sambar','chatany'],
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Mini_Uttappam.jpg/250px-Mini_Uttappam.jpg'
    }
  ]
  constructor() { }

  getAllReceipe(){
    return [...this.receipes];
  }

  getReceipe(receipeId:string){
    return {...this.receipes.find(receipe=>{
      return receipe.id === receipeId;
    })}
  }

  deleteReceipe(receipeId:string){
    this.receipes = this.receipes.filter(receipe =>{
      return receipe.id != receipeId;
    })
  }
}
