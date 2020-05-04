import { Component, OnInit } from '@angular/core';
import { ReceipeModel } from './receipe.model';
import { ReceipeService } from './receipe.service';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.page.html',
  styleUrls: ['./receipe.page.scss'],
})
export class ReceipePage implements OnInit {
  receipes:ReceipeModel[];
  constructor(private receipeService:ReceipeService) { }

  ngOnInit() {
    this.receipes = this.receipeService.getAllReceipe();
  }

}
