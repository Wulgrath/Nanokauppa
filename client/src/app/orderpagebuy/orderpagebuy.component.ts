import { Component, OnInit } from '@angular/core';
import { GetformsService } from '../getforms.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-orderpagebuy',
  templateUrl: './orderpagebuy.component.html',
  styleUrls: ['./orderpagebuy.component.css']
})
export class OrderpagebuyComponent implements OnInit {
  private Buyforms: any[] = [];

  constructor(
    public formsService: GetformsService
  ) {

   }

  ngOnInit() {
    this.getBuyForms();
  }
// haetaan ostoformit sivulle
  getBuyForms(): Promise<any> {
    return this.formsService.getBuyForms().then((result) => {
      this.Buyforms = result;
      console.log(this.Buyforms);
    });
  }

}
